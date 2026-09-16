"""Normalize static SEO against deployed redirects without reserializing page bodies."""
import json
import re
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://www.tecnotitan.com"
LOCALES = {"en", "es", "pt", "zh", "ja", "ko", "ar"}


class Head(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.offsets = [0]
        self.end = None
        self.language = ""
        for line in text.splitlines(keepends=True):
            self.offsets.append(self.offsets[-1] + len(line))
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.language = attrs.get("lang", "").split("-")[0]
        if self.end is None and tag in {"link", "meta"}:
            line, col = self.getpos()
            start = self.offsets[line - 1] + col
            self.tags.append((tag, attrs, start, start + len(self.get_starttag_text())))

    def handle_endtag(self, tag):
        if tag == "head":
            line, col = self.getpos()
            self.end = self.offsets[line - 1] + col


def main():
    config_path = ROOT / "vercel.json"
    config = json.loads(config_path.read_text(encoding="utf-8"))
    rules = config["redirects"]
    for locale in sorted(LOCALES):
        source = f"/{locale}/index.html"
        if not any(r["source"] == source for r in rules):
            rules.insert(0, {"source": source, "destination": f"/{locale}/", "permanent": True})
    exact = {r["source"]: r["destination"] for r in reversed(rules) if ":" not in r["source"]}

    def resolve(value):
        path = unquote(urlsplit(value).path)
        seen = set()
        while True:
            if path in seen:
                raise ValueError(f"Redirect cycle: {path}")
            seen.add(path)
            dest = exact.get(path)
            if not dest and re.fullmatch(r"/guia-[^/]+\.html", path):
                dest = "/es" + path
            if not dest:
                break
            path = unquote(urlsplit(dest).path)
        return path

    pages = {}
    for file in ROOT.rglob("*.html"):
        relative = file.relative_to(ROOT)
        if relative.parts[0] in {".git", "node_modules", "tmp", "outputs"}:
            continue
        text = file.read_text(encoding="utf-8")
        head = Head(text)
        if head.end is None:
            continue
        route = "/" + relative.as_posix()
        if route.endswith("/index.html"):
            route = route[:-10]
        canonical = next((a.get("href", "") for t, a, _, _ in head.tags if t == "link" and a.get("rel") == "canonical"), "")
        alternates = {a["hreflang"]: resolve(a["href"]) for t, a, _, _ in head.tags
                      if t == "link" and a.get("rel") == "alternate" and a.get("hreflang") and a.get("href")}
        pages[route] = dict(file=file, text=text, head=head, canonical=resolve(canonical) if canonical else resolve(route), alternates=alternates)

    def valid(route):
        page = pages.get(route)
        return page and resolve(route) == route and page["canonical"] == route

    changed = 0
    for route, page in pages.items():
        target = resolve(route)
        source = pages.get(target, page)
        canonical = source["canonical"]
        # Only advertise existing translations that declare the relationship back.
        alternates = {}
        for language, dest in source["alternates"].items():
            if language not in LOCALES or not valid(dest):
                continue
            other = pages[dest]
            if other["head"].language != language:
                continue
            if dest == canonical or canonical in other["alternates"].values():
                alternates[language] = dest
        if valid(canonical):
            alternates[pages[canonical]["head"].language] = canonical
        if not valid(canonical):
            continue
        fallback = alternates.get("en", canonical)
        tags = [f'<link rel="canonical" href="{ORIGIN}{escape(canonical, quote=True)}" />']
        tags.extend(f'<link rel="alternate" hreflang="{lang}" href="{ORIGIN}{escape(dest, quote=True)}" />'
                    for lang, dest in sorted(alternates.items()))
        tags.append(f'<link rel="alternate" hreflang="x-default" href="{ORIGIN}{escape(fallback, quote=True)}" />')
        current_links = [a for t, a, _, _ in page["head"].tags if t == "link" and
                         (a.get("rel") == "canonical" or (a.get("rel") == "alternate" and a.get("hreflang")))]
        expected_links = [{"rel": "canonical", "href": ORIGIN + canonical}]
        expected_links.extend({"rel": "alternate", "hreflang": lang, "href": ORIGIN + dest} for lang, dest in sorted(alternates.items()))
        expected_links.append({"rel": "alternate", "hreflang": "x-default", "href": ORIGIN + fallback})
        og_urls = [a.get("content") for t, a, _, _ in page["head"].tags if t == "meta" and a.get("property") == "og:url"]
        if current_links == expected_links and all(value == ORIGIN + canonical for value in og_urls):
            continue
        edits = []
        for tag, attrs, start, end in page["head"].tags:
            if tag == "link" and (attrs.get("rel") == "canonical" or (attrs.get("rel") == "alternate" and attrs.get("hreflang"))):
                edits.append((start, end, ""))
            elif tag == "meta" and attrs.get("property") == "og:url":
                edits.append((start, end, f'<meta property="og:url" content="{ORIGIN}{escape(canonical, quote=True)}" />'))
        edits.append((page["head"].end, page["head"].end, "\n" + "\n".join(tags) + "\n"))
        text = page["text"]
        for start, end, replacement in sorted(edits, reverse=True):
            text = text[:start] + replacement + text[end:]
        head_end = text.lower().index("</head>")
        text = re.sub(r"[ \t]+$", "", text[:head_end], flags=re.MULTILINE) + text[head_end:]
        if text != page["text"]:
            page["file"].write_text(text, encoding="utf-8", newline="")
            changed += 1

    ns = "http://www.sitemaps.org/schemas/sitemap/0.9"
    ET.register_namespace("", ns)
    sitemap = ET.Element(f"{{{ns}}}urlset")
    urls = []
    for route, page in sorted(pages.items(), key=lambda item: (item[0] != "/en/", item[0])):
        if route.strip("/").split("/")[0] not in LOCALES or not valid(route):
            continue
        if any(t == "meta" and a.get("name") == "robots" and "noindex" in a.get("content", "") for t, a, _, _ in page["head"].tags):
            continue
        item = ET.SubElement(sitemap, f"{{{ns}}}url")
        ET.SubElement(item, f"{{{ns}}}loc").text = ORIGIN + route
        urls.append(route)
    ET.indent(sitemap, space="  ")
    ET.ElementTree(sitemap).write(ROOT / "sitemap.xml", encoding="utf-8", xml_declaration=True)
    config_path.write_text(json.dumps(config, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"html_updated": changed, "sitemap_urls": len(urls), "english_default": "/en/"}))


if __name__ == "__main__":
    main()

"""Check canonical URLs and reciprocal translations for every sitemap entry."""
import json
from pathlib import Path
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET
import importlib.util

spec = importlib.util.spec_from_file_location("seo", Path(__file__).with_name("normalize-seo.py"))
seo = importlib.util.module_from_spec(spec)
spec.loader.exec_module(seo)
root = seo.ROOT
config = json.loads((root / "vercel.json").read_text(encoding="utf-8"))
redirects = {r["source"]: r["destination"] for r in reversed(config["redirects"])}
urls = [el.text for el in ET.parse(root / "sitemap.xml").findall("{*}url/{*}loc")]
assert len(urls) == len(set(urls)), "Duplicate sitemap URLs"
assert urls[0] == seo.ORIGIN + "/en/"
assert redirects["/"] == "/en/"
pages = {}
errors = []
fallbacks = []
for url in urls:
    route = urlsplit(url).path
    file = root / route.lstrip("/")
    if file.is_dir():
        file /= "index.html"
    if not file.is_file():
        errors.append(f"Missing sitemap page: {url}")
        continue
    head = seo.Head(file.read_text(encoding="utf-8"))
    canonicals = [a.get("href") for t, a, _, _ in head.tags if t == "link" and a.get("rel") == "canonical"]
    if canonicals != [url]:
        errors.append(f"Canonical mismatch: {url}: {canonicals}")
    if route in redirects:
        errors.append(f"Redirect in sitemap: {url}")
    alternates = {a["hreflang"]: a["href"] for t, a, _, _ in head.tags if t == "link" and a.get("rel") == "alternate" and "hreflang" in a}
    if alternates.get(head.language) != url:
        errors.append(f"Missing self alternate: {url}")
    if "en" in alternates and alternates.get("x-default") != alternates["en"]:
        errors.append(f"Wrong English fallback: {url}")
    if "en" not in alternates:
        fallbacks.append(route)
    pages[url] = (head.language, alternates)
for url, (language, alternates) in pages.items():
    for lang, target in alternates.items():
        if target not in pages:
            errors.append(f"Alternate not canonical/indexable: {url} -> {target}")
        elif lang != "x-default":
            if pages[target][0] != lang or pages[target][1].get(language) != url:
                errors.append(f"Nonreciprocal alternate: {url} -> {target}")
print(json.dumps({"urls_checked": len(urls), "errors": errors, "without_english_equivalent": fallbacks}, indent=2))
raise SystemExit(bool(errors))

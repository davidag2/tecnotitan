"""Validate the public English pages and the migration's redirect graph."""
import json
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
import xml.etree.ElementTree as ET
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://www.tecnotitan.com'
urls = [el.text for el in ET.parse(ROOT / 'sitemap.xml').findall('{*}url/{*}loc')]
errors = []
assert len(urls) == len(set(urls)) == 15
assert urls[0] == ORIGIN + '/'
config = json.loads((ROOT / 'vercel.json').read_text(encoding='utf-8'))
redirects = {r['source']: r['destination'] for r in config['redirects']}
assert '/' not in redirects
for source in redirects:
    seen = set()
    dest = source
    while dest in redirects:
        assert dest not in seen, f'Redirect cycle: {source}'
        seen.add(dest)
        dest = redirects[dest]
    assert ORIGIN + dest in urls, f'Redirect target not retained: {source} -> {dest}'

for url in urls:
    file = ROOT / urlsplit(url).path.lstrip('/') / 'index.html'
    document = html.parse(str(file))
    assert document.getroot().get('lang') == 'en'
    assert document.xpath('//link[@rel="canonical"]/@href') == [url]
    assert not document.xpath('//link[@hreflang]')
    assert document.xpath('//meta[@property="og:url"]/@content') == [url]
    assert len(document.xpath('//h1')) == 1, url
    for node in document.xpath('//*[@href or @src or @action]'):
        for attr in ('href', 'src', 'action'):
            value = node.get(attr)
            if not value:
                continue
            link = urlsplit(urljoin(url, value))
            if link.netloc != 'www.tecnotitan.com':
                continue
            pathname = unquote(link.path)
            if pathname.startswith(('/api/', '/_vercel/')):
                continue
            target = ROOT / pathname.lstrip('/')
            if pathname.endswith('/'):
                target /= 'index.html'
            if not target.is_file():
                errors.append(f'Missing {attr}: {url} -> {pathname}')
            if pathname in redirects:
                errors.append(f'Internal redirect: {url} -> {pathname}')
            if link.fragment and target.suffix == '.html':
                other = html.parse(str(target)) if target.is_file() else document
                if not other.xpath('//*[@id=$id]', id=link.fragment):
                    errors.append(f'Missing fragment: {url} -> {value}')
    for node in document.xpath('//script[@type="application/ld+json"]'):
        json.loads(node.text)
print(json.dumps({'pages': len(urls), 'redirects': len(redirects), 'errors': sorted(set(errors))}, indent=2))
raise SystemExit(bool(errors))

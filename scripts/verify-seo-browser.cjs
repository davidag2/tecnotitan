const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const redirect = config.redirects.find(rule => rule.source === pathname);
  if (redirect) { res.writeHead(308, { Location: redirect.destination }); return res.end(); }
  let file = path.join(root, pathname);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml' };
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  try {
    const page = await browser.newPage();
    await page.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.hostname === 'www.tecnotitan.com') return route.continue({ url: origin + url.pathname + url.search });
      if (url.origin !== origin) return route.abort();
      return route.continue();
    });
    const routes = ['/', '/en/about/', '/en/products/', '/en/services/', '/es/guia-como-usar-chatgpt-en-el-trabajo.html', '/en/guides/how-to-use-chatgpt-at-work.html', '/en/guides/about-tecnotitan-guides.html', '/pt/produtos/', '/zh/products/', '/ja/products/', '/ko/products/', '/ar/products/'];
    for (const route of routes) {
      const response = await page.goto(origin + route, { waitUntil: 'load' });
      const html = await response.text();
      const originalTitle = html.match(/<title>(.*?)<\/title>/s)[1];
      await page.waitForTimeout(300);
      const state = await page.evaluate(() => ({
        title: document.title,
        canonical: document.querySelector('link[rel="canonical"]').href,
        en: document.querySelector('link[hreflang="en"]')?.href,
        fallback: document.querySelector('link[hreflang="x-default"]')?.href,
        lang: document.documentElement.lang,
      }));
      assert.equal(response.status(), 200, route);
      assert.equal(state.fallback, state.en, route);
      assert.equal(new URL(state.canonical).pathname, route === '/' ? '/en/' : route, route);
      if (route.includes('guia-') || route.includes('/guides/')) assert.equal(state.title, originalTitle, route);
      console.log(JSON.stringify({ route, ...state }));
    }
    await page.goto(origin + '/en/products/', { waitUntil: 'load' });
    const services = page.locator('.nav a').filter({ hasText: /^Services$/ });
    assert.equal(new URL(await services.getAttribute('href'), page.url()).pathname, '/en/services/');
    await services.click();
    await page.waitForLoadState('load');
    assert.equal(new URL(page.url()).pathname, '/en/services/');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    console.log('English navigation preserves the selected language and page.');
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });

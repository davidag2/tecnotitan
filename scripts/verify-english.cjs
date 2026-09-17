const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const sections = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const redirect = config.redirects.find(rule => rule.source === pathname);
  if (redirect) { res.writeHead(308, { Location: redirect.destination }); return res.end(); }
  if (config.rewrites.find(rule => rule.source === pathname)) {
    const handler = require('../api/retired-page');
    res.status = code => { res.statusCode = code; return res; };
    res.send = text => res.end(text);
    return handler(req, res);
  }
  let file = path.join(root, pathname);
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(fs.readFileSync(path.join(root, '404.html')));
  }
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css', '.svg': 'image/svg+xml', '.pdf': 'application/pdf' };
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = process.env.VERIFY_ORIGIN || `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const screenshots = path.join(root, 'output/playwright');
  fs.mkdirSync(screenshots, { recursive: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'es-CO' });
    await context.addInitScript(() => localStorage.setItem('tecnotitan-language', 'es'));
    let lastPayload;
    await context.route('**/*', route => {
      const url = new URL(route.request().url());
      if (url.origin !== origin) return route.abort();
      if (url.pathname.startsWith('/api/')) {
        if (url.pathname === '/api/contact') lastPayload = route.request().postDataJSON();
        return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, reply: 'Tecnotitan builds AI and software.' }) });
      }
      if (url.pathname.startsWith('/_vercel/')) return route.fulfill({ status: 200, body: '' });
      return route.continue();
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const section of sections) {
      const response = await page.goto(origin + section, { waitUntil: 'load' });
      await page.waitForTimeout(180);
      assert.equal(response.status(), 200, section);
      assert.equal(new URL(page.url()).pathname, section);
      const state = await page.evaluate(() => ({ language: document.documentElement.lang,
        canonical: document.querySelector('link[rel="canonical"]').href,
        switchers: document.querySelectorAll('.language-switcher, [hreflang]').length,
        badImages: [...document.images].filter(i => i.loading !== 'lazy' && (!i.complete || !i.naturalWidth)).map(i => i.src),
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
      }));
      assert.equal(state.language, 'en', section);
      assert.equal(state.canonical, 'https://www.tecnotitan.com' + section);
      assert.equal(state.switchers, 0);
      assert.deepEqual(state.badImages, [], section);
      assert.equal(state.overflow, false, section);
      if (section === '/') await page.screenshot({ path: path.join(screenshots, 'home-desktop.png') });
      const form = page.locator('[data-contact-form]');
      if (await form.count()) {
        await form.evaluate(form => {
          for (const input of form.querySelectorAll('input:not([type="hidden"]), textarea, select')) {
            if (input.closest('.form-honeypot')) continue;
            if (input.tagName === 'SELECT') input.selectedIndex = 1;
            else if (input.type === 'checkbox') input.checked = true;
            else if (input.type === 'email') input.value = 'test@example.com';
            else if (input.type === 'tel') input.value = '+12025550123';
            else input.value = 'Website migration test';
          }
        });
        await form.locator('button[type="submit"]').click();
        await page.waitForFunction(() => document.querySelector('[data-form-success]')?.hidden === false);
        assert.equal(lastPayload.language, 'en', section);
        assert.equal(lastPayload.newsletter, true, section);
        assert.match(await page.locator('[data-form-success]').innerText(), /Message received/i);
      }
    }
    await page.goto(origin + '/products/');
    const productLinks = await page.locator('main a[href^="/products/"]').evaluateAll(links => links.map(a => a.getAttribute('href')));
    assert.equal(new Set(productLinks.filter(p => p !== '/products/')).size, 6, 'All six product detail pages linked');
    await page.locator('.nav a').filter({ hasText: /^Investors$/ }).click();
    assert.equal(new URL(page.url()).pathname, '/investors/');
    await page.locator('.chatbot-launcher').click();
    await page.locator('.chatbot-form textarea').fill('Tell me about Tecnotitan');
    await page.locator('.chatbot-form button').click();
    await page.getByText('Tecnotitan builds AI and software.', { exact: true }).waitFor();
    await page.locator('.chatbot-close').click();
    await page.setViewportSize({ width: 390, height: 844 });
    for (const section of ['/', '/products/', '/services/', '/contact/', '/investor-deck/']) {
      await page.goto(origin + section);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true, 'Mobile overflow: ' + section);
    }
    await page.goto(origin + '/');
    await page.screenshot({ path: path.join(screenshots, 'home-mobile.png') });
    await page.locator('[data-menu-button]').click();
    await page.locator('.nav a').filter({ hasText: /^Products$/ }).click();
    assert.equal(new URL(page.url()).pathname, '/products/');
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    const pdf = await context.request.get(origin + '/assets/investor-deck/Tecnotitan-Investor-Deck-EN.pdf');
    assert.equal((await pdf.body()).subarray(0, 4).toString(), '%PDF');
    for (const [old, target] of [['/en/', '/'], ['/es/productos/', '/products/'], ['/en/investors/', '/investors/']]) {
      const response = await context.request.get(origin + old, { maxRedirects: 0 });
      assert.equal(response.status(), 308, old);
      assert.equal(new URL(response.headers().location, origin).pathname, target);
    }
    const gone = await context.request.get(origin + '/en/guides/how-to-use-chatgpt-at-work.html');
    assert.equal(gone.status(), 410);
    assert.deepEqual(errors, []);
    console.log(JSON.stringify({ pages: sections.length, forms: 'mocked success', chat: 'mocked success', desktop: 'passed', mobile: 'passed', pdf: 'passed', redirects: 'passed', retiredGuides: 410 }));
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });

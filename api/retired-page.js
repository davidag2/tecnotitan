module.exports = function handler(request, response) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('X-Robots-Tag', 'noindex');
  response.setHeader('Cache-Control', 'public, max-age=3600');
  return response.status(410).send(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Page retired | Tecnotitan</title>
<link rel="icon" href="/assets/favicon.svg"><link rel="stylesheet" href="/styles.css"></head>
<body><main class="section-inner" style="padding-block:96px;min-height:80vh">
<a href="/" aria-label="Tecnotitan home"><img src="/assets/logo-tecnotitan.svg" alt="Tecnotitan" width="220" height="35"></a>
<p class="section-kicker" style="margin-block-start:64px">Page retired</p><h1 style="font-size:40px">This page is no longer available.</h1>
<p>Tecnotitan now brings its products, services and investor information together in one English website.</p>
<div class="actions"><a class="button button-primary" href="/">Visit Tecnotitan</a><a class="button button-secondary" href="/contact/">Contact us</a></div>
</main></body></html>`);
};

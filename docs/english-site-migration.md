# English website migration

The public website now uses English at https://www.tecnotitan.com/ with no locale prefix.

Retained sections: Home, About, Products, Services, Divisions, Investors, Investor Deck, Contact and Legal. The six product detail pages remain under `/products/`.

The sitemap contains 15 canonical pages. Localized and legacy URLs with an equivalent redirect permanently to these pages. Retired editorial content returns HTTP 410. Unknown paths return HTTP 404.

The former multilingual site is recoverable from GitHub branch `codex/backup-multilingual-2026-09-17`, commit `e933c10eafc946774a41fca36788f892d172e7c5`. No customer records, email subscriptions, API credentials or analytics history were removed.

## Verification

- `python scripts/check-english.py` validates sitemap, canonical URLs, redirect targets, local links, assets and fragments (requires lxml).
- `node scripts/verify-english.cjs` checks the pages in desktop/mobile Edge through Playwright, English persistence with an old Spanish preference, product navigation, PDF, redirects and retired content. Contact and chat requests are mocked.
- Set `PLAYWRIGHT_MODULE` to a local Playwright module path when it is not installed in the repository. `VERIFY_ORIGIN` optionally checks a deployed origin.

Website copy and metadata live directly in the HTML. `script.js` handles forms, navigation, widgets and analytics; it does not translate pages or rewrite navigation URLs.

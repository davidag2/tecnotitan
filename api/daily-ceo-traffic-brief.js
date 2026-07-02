const CONTACT_TO_EMAIL = process.env.CEO_BRIEF_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "info@tecnotitan.com";
const MAIL_FROM = process.env.MAIL_FROM || "Tecnotitan <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";
const CRON_SECRET = process.env.CRON_SECRET || "";

const LANGUAGES = ["es", "en", "pt", "zh", "ja", "ko", "ar"];
const DECK_EVENTS = ["view_pdf", "open_pdf", "download_pdf", "download_pptx", "switch_language"];
const SERVICE_EVENTS = ["cta_click"];
const SERVICE_INTENTS = ["ai", "software", "advisory", "robotics", "games", "transformation", "general"];

function getBogotaDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function getBogotaTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date());
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function asNumber(value) {
  return Number(value || 0);
}

async function redis(command) {
  if (!KV_URL || !KV_TOKEN) {
    return null;
  }

  const response = await fetch(KV_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(command)
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`KV error ${response.status}: ${detail}`);
  }

  const body = await response.json();
  return body.result;
}

async function getCount(key) {
  return asNumber(await redis(["GET", key]));
}

async function getSetCount(key) {
  return asNumber(await redis(["SCARD", key]));
}

async function getSetMembers(key) {
  const result = await redis(["SMEMBERS", key]);
  return Array.isArray(result) ? result : [];
}

async function getTopFromSet(setKey, countPrefix, limit = 8) {
  const members = await getSetMembers(setKey);
  const rows = await Promise.all(
    members.map(async (member) => ({
      label: member,
      count: await getCount(`${countPrefix}:${member}`)
    }))
  );

  return rows
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

function sentKey(date) {
  return `brief:ceo-traffic:${date}:sent`;
}

async function wasSentToday(date) {
  return Boolean(await redis(["GET", sentKey(date)]));
}

async function markSentToday(date) {
  await redis(["SET", sentKey(date), "1", "EX", 172800]);
}

async function getLanguageCounts(prefix, eventName = "") {
  const rows = {};

  for (const language of LANGUAGES) {
    const key = eventName ? `${prefix}:language:${language}:event:${eventName}` : `${prefix}:language:${language}`;
    rows[language] = await getCount(key);
  }

  return rows;
}

async function getTrafficStats(scope) {
  const prefix = scope === "total" ? "traffic:total" : `traffic:${scope}`;

  return {
    pageviews: await getCount(`${prefix}:pageviews`),
    visitors: await getSetCount(`${prefix}:visitors`),
    languages: await getLanguageCounts(prefix),
    topPaths: await getTopFromSet(`${prefix}:paths`, `${prefix}:path`),
    topCountries: await getTopFromSet(`${prefix}:countries`, `${prefix}:country`),
    topReferrers: await getTopFromSet(`${prefix}:referrers`, `${prefix}:referrer`)
  };
}

async function getDeckStats(scope) {
  const prefix = scope === "total" ? "deck:total" : `deck:${scope}`;
  const events = {};

  for (const event of DECK_EVENTS) {
    events[event] = await getCount(`${prefix}:event:${event}`);
  }

  return {
    events,
    visitors: await getSetCount(`${prefix}:visitors`),
    languages: await getLanguageCounts(prefix, "view_pdf")
  };
}

async function getServiceStats(scope) {
  const prefix = scope === "total" ? "services:total" : `services:${scope}`;
  const events = {};
  const intents = {};

  for (const event of SERVICE_EVENTS) {
    events[event] = await getCount(`${prefix}:event:${event}`);
  }

  for (const intent of SERVICE_INTENTS) {
    intents[intent] = await getCount(`${prefix}:intent:${intent}`);
  }

  return {
    events,
    intents,
    visitors: await getSetCount(`${prefix}:visitors`),
    languages: await getLanguageCounts(prefix, "cta_click")
  };
}

function renderKeyValues(items) {
  return Object.entries(items)
    .map(([key, value]) => `<tr><td>${escapeHtml(key)}</td><td style="text-align:right">${asNumber(value)}</td></tr>`)
    .join("");
}

function renderTopRows(rows, emptyLabel = "No data yet") {
  if (!rows.length) {
    return `<tr><td>${escapeHtml(emptyLabel)}</td><td style="text-align:right">0</td></tr>`;
  }

  return rows
    .map((row) => `<tr><td>${escapeHtml(row.label)}</td><td style="text-align:right">${asNumber(row.count)}</td></tr>`)
    .join("");
}

function metricCard(label, value) {
  return `
    <td style="padding:14px;border:1px solid #dbeafe;border-radius:10px;background:#f8fafc">
      <div style="font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#0369a1;font-weight:700">${escapeHtml(label)}</div>
      <div style="font-size:26px;font-weight:800;color:#0f172a;margin-top:6px">${asNumber(value)}</div>
    </td>
  `;
}

function renderTable(title, rows) {
  return `
    <h2 style="font-size:18px;margin:26px 0 10px;color:#0f172a">${escapeHtml(title)}</h2>
    <table width="100%" cellspacing="0" cellpadding="8" style="border-collapse:collapse;border:1px solid #e2e8f0;font-size:14px">
      <tbody>${rows}</tbody>
    </table>
  `;
}

function buildEmailHtml(report) {
  const daily = report.daily;
  const total = report.total;
  const hasTraffic = daily.traffic.pageviews > 0 || daily.traffic.visitors > 0;

  return `
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.55;max-width:760px;margin:0 auto;padding:28px">
      <p style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#0891b2;font-weight:800;margin:0 0 14px">Tecnotitan Daily CEO Traffic Brief</p>
      <h1 style="font-size:28px;line-height:1.15;margin:0 0 8px">Daily traffic and investor interest</h1>
      <p style="margin:0 0 20px;color:#475569">Date: ${escapeHtml(report.date)} | Time: ${escapeHtml(report.time)} Colombia | Source: Tecnotitan KV aggregate tracker</p>
      <table width="100%" cellspacing="8" cellpadding="0" style="margin:0 0 18px">
        <tr>
          ${metricCard("Pageviews today", daily.traffic.pageviews)}
          ${metricCard("Visitors today", daily.traffic.visitors)}
          ${metricCard("Deck views today", daily.deck.events.view_pdf)}
        </tr>
        <tr>
          ${metricCard("Deck downloads today", daily.deck.events.download_pdf + daily.deck.events.download_pptx)}
          ${metricCard("Service CTA clicks today", daily.services.events.cta_click)}
          ${metricCard("Total site pageviews", total.traffic.pageviews)}
        </tr>
      </table>
      ${hasTraffic ? "" : `<p style="padding:12px 14px;background:#fff7ed;border:1px solid #fed7aa;border-radius:10px;color:#9a3412"><strong>No traffic recorded yet today.</strong> The new site tracker starts collecting data after this deployment. Vercel Analytics can still be checked in the Vercel dashboard for previous visits.</p>`}
      ${renderTable("Top pages today", renderTopRows(daily.traffic.topPaths))}
      ${renderTable("Traffic by language today", renderKeyValues(daily.traffic.languages))}
      ${renderTable("Traffic by country today", renderTopRows(daily.traffic.topCountries))}
      ${renderTable("Top referrers today", renderTopRows(daily.traffic.topReferrers))}
      ${renderTable("Investor deck events today", renderKeyValues(daily.deck.events))}
      ${renderTable("Investor deck views by language today", renderKeyValues(daily.deck.languages))}
      ${renderTable("Service interest by intent today", renderKeyValues(daily.services.intents))}
      ${renderTable("Service CTA clicks by language today", renderKeyValues(daily.services.languages))}
      <hr style="border:0;border-top:1px solid #e2e8f0;margin:28px 0" />
      <p style="font-size:13px;color:#64748b;margin:0">Privacy: aggregate metrics only. No raw IP, name, email or fingerprint is stored for traffic analytics.</p>
    </div>
  `;
}

async function buildReport() {
  const date = getBogotaDate();

  return {
    date,
    time: getBogotaTime(),
    persistent: Boolean(KV_URL && KV_TOKEN),
    daily: {
      traffic: await getTrafficStats(date),
      deck: await getDeckStats(date),
      services: await getServiceStats(date)
    },
    total: {
      traffic: await getTrafficStats("total"),
      deck: await getDeckStats("total"),
      services: await getServiceStats("total")
    }
  };
}

async function sendEmail(report) {
  if (!RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [CONTACT_TO_EMAIL],
      subject: `Tecnotitan Daily CEO Traffic Brief - ${report.date}`,
      html: buildEmailHtml(report)
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend error ${response.status}: ${detail}`);
  }
}

function isAuthorized(request) {
  if (!CRON_SECRET) {
    return true;
  }

  return request.headers.authorization === `Bearer ${CRON_SECRET}`;
}

module.exports = async function handler(request, response) {
  if (!["GET", "POST"].includes(request.method)) {
    response.setHeader("Allow", "GET, POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!isAuthorized(request)) {
    return response.status(401).json({ ok: false, error: "Unauthorized" });
  }

  if (!KV_URL || !KV_TOKEN) {
    return response.status(500).json({ ok: false, error: "Missing KV_REST_API_URL or KV_REST_API_TOKEN" });
  }

  try {
    const report = await buildReport();
    const preview = request.query?.preview === "1";
    const force = request.query?.force === "1";
    const markSent = request.query?.markSent === "1";

    if (markSent) {
      await markSentToday(report.date);
      return response.status(200).json({ ok: true, markedSent: true, date: report.date });
    }

    if (!preview && !force && await wasSentToday(report.date)) {
      return response.status(200).json({
        ok: true,
        emailed: false,
        skipped: "already_sent_today",
        date: report.date,
        time: report.time
      });
    }

    if (!preview) {
      await sendEmail(report);
      await markSentToday(report.date);
    }

    return response.status(200).json({
      ok: true,
      emailed: !preview,
      to: preview ? undefined : CONTACT_TO_EMAIL,
      date: report.date,
      time: report.time,
      daily: report.daily,
      total: report.total,
      privacy: "Aggregate metrics only. No raw IP, name, email or fingerprint is stored for traffic analytics."
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ ok: false, error: error.message });
  }
};

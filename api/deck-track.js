const EVENTS = new Set(["view_pdf", "open_pdf", "download_pdf", "download_pptx", "switch_language"]);
const LANGUAGES = new Set(["es", "en", "pt", "zh", "ja", "ko"]);
const FORMATS = new Set(["pdf", "pptx", "viewer"]);
const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";

function safeValue(value, allowed, fallback) {
  const normalized = String(value || "").toLowerCase();
  return allowed.has(normalized) ? normalized : fallback;
}

function getToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function normalizePayload(payload) {
  const event = safeValue(payload.event, EVENTS, "");
  const language = safeValue(payload.language, LANGUAGES, "es");
  const format = safeValue(payload.format, FORMATS, "viewer");
  const visitorId = String(payload.visitorId || "")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 80);

  return {
    event,
    language,
    format,
    visitorId: visitorId || "anonymous",
    path: String(payload.path || "").slice(0, 160),
    day: getToday()
  };
}

function getPayload(body) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch (error) {
      return {};
    }
  }

  return body || {};
}

function memoryStore() {
  globalThis.__tecnotitanDeckStats ||= {
    events: {},
    languages: {},
    formats: {},
    visitors: new Set(),
    days: {}
  };
  return globalThis.__tecnotitanDeckStats;
}

function incrementMemory(data) {
  const store = memoryStore();
  store.events[data.event] = (store.events[data.event] || 0) + 1;
  store.languages[data.language] ||= {};
  store.languages[data.language][data.event] = (store.languages[data.language][data.event] || 0) + 1;
  store.formats[data.format] ||= {};
  store.formats[data.format][data.event] = (store.formats[data.format][data.event] || 0) + 1;
  store.visitors.add(data.visitorId);
  store.days[data.day] ||= { events: {}, languages: {}, formats: {}, visitors: new Set() };
  store.days[data.day].events[data.event] = (store.days[data.day].events[data.event] || 0) + 1;
  store.days[data.day].languages[data.language] ||= {};
  store.days[data.day].languages[data.language][data.event] = (store.days[data.day].languages[data.language][data.event] || 0) + 1;
  store.days[data.day].formats[data.format] ||= {};
  store.days[data.day].formats[data.format][data.event] = (store.days[data.day].formats[data.format][data.event] || 0) + 1;
  store.days[data.day].visitors.add(data.visitorId);
}

async function redis(command) {
  if (!KV_URL || !KV_TOKEN) {
    return;
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
}

async function incrementPersistent(data) {
  if (!KV_URL || !KV_TOKEN) {
    return false;
  }

  const commands = [
    ["INCR", `deck:total:event:${data.event}`],
    ["INCR", `deck:total:language:${data.language}:event:${data.event}`],
    ["INCR", `deck:total:format:${data.format}:event:${data.event}`],
    ["SADD", "deck:total:visitors", data.visitorId],
    ["INCR", `deck:${data.day}:event:${data.event}`],
    ["INCR", `deck:${data.day}:language:${data.language}:event:${data.event}`],
    ["INCR", `deck:${data.day}:format:${data.format}:event:${data.event}`],
    ["SADD", `deck:${data.day}:visitors`, data.visitorId]
  ];

  await Promise.all(commands.map(redis));
  return true;
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const data = normalizePayload(getPayload(request.body));

  if (!data.event) {
    return response.status(400).json({ ok: false, error: "Invalid event" });
  }

  try {
    incrementMemory(data);
    const persistent = await incrementPersistent(data);
    console.info("tecnotitan_deck_event", JSON.stringify({
      event: data.event,
      language: data.language,
      format: data.format,
      day: data.day,
      path: data.path,
      persistent
    }));
    return response.status(200).json({ ok: true, persistent });
  } catch (error) {
    console.error(error);
    return response.status(202).json({ ok: true, persistent: false });
  }
};

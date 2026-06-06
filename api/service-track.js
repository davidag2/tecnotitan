const EVENTS = new Set(["cta_click"]);
const LANGUAGES = new Set(["es", "en", "pt", "zh", "ja", "ko"]);
const INTENTS = new Set(["ai", "software", "advisory", "robotics", "games", "transformation", "general"]);
const CTAS = new Set(["ai-diagnosis", "software-quote", "advisory-call", "robotics-discovery", "games-experience", "transformation-roadmap"]);
const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";

function safeValue(value, allowed, fallback) {
  const normalized = String(value || "").toLowerCase();
  return allowed.has(normalized) ? normalized : fallback;
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
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

function normalizePayload(payload) {
  const event = safeValue(payload.event, EVENTS, "");
  const language = safeValue(payload.language, LANGUAGES, "es");
  const intent = safeValue(payload.intent, INTENTS, "general");
  const cta = safeValue(payload.cta, CTAS, "ai-diagnosis");
  const visitorId = String(payload.visitorId || "")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 80);

  return {
    event,
    language,
    intent,
    cta,
    visitorId: visitorId || "anonymous",
    path: String(payload.path || "").slice(0, 160),
    day: getToday()
  };
}

function memoryStore() {
  globalThis.__tecnotitanServiceStats ||= {
    events: {},
    languages: {},
    intents: {},
    ctas: {},
    visitors: new Set(),
    days: {}
  };
  return globalThis.__tecnotitanServiceStats;
}

function incrementMemory(data) {
  const store = memoryStore();
  store.events[data.event] = (store.events[data.event] || 0) + 1;
  store.languages[data.language] ||= {};
  store.languages[data.language][data.event] = (store.languages[data.language][data.event] || 0) + 1;
  store.intents[data.intent] = (store.intents[data.intent] || 0) + 1;
  store.ctas[data.cta] = (store.ctas[data.cta] || 0) + 1;
  store.visitors.add(data.visitorId);
  store.days[data.day] ||= { events: {}, languages: {}, intents: {}, ctas: {}, visitors: new Set() };
  store.days[data.day].events[data.event] = (store.days[data.day].events[data.event] || 0) + 1;
  store.days[data.day].languages[data.language] ||= {};
  store.days[data.day].languages[data.language][data.event] = (store.days[data.day].languages[data.language][data.event] || 0) + 1;
  store.days[data.day].intents[data.intent] = (store.days[data.day].intents[data.intent] || 0) + 1;
  store.days[data.day].ctas[data.cta] = (store.days[data.day].ctas[data.cta] || 0) + 1;
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
    ["INCR", `services:total:event:${data.event}`],
    ["INCR", `services:total:language:${data.language}:event:${data.event}`],
    ["INCR", `services:total:intent:${data.intent}`],
    ["INCR", `services:total:cta:${data.cta}`],
    ["SADD", "services:total:visitors", data.visitorId],
    ["INCR", `services:${data.day}:event:${data.event}`],
    ["INCR", `services:${data.day}:language:${data.language}:event:${data.event}`],
    ["INCR", `services:${data.day}:intent:${data.intent}`],
    ["INCR", `services:${data.day}:cta:${data.cta}`],
    ["SADD", `services:${data.day}:visitors`, data.visitorId]
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
    console.info("tecnotitan_service_event", JSON.stringify({
      event: data.event,
      language: data.language,
      intent: data.intent,
      cta: data.cta,
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

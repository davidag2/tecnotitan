const EVENTS = ["cta_click"];
const LANGUAGES = ["es", "en", "pt", "zh", "ja", "ko"];
const INTENTS = ["ai", "software", "advisory", "robotics", "games", "transformation", "general"];
const CTAS = ["ai-diagnosis", "software-quote", "advisory-call", "robotics-discovery", "games-experience", "transformation-roadmap"];
const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";

function getToday() {
  return new Date().toISOString().slice(0, 10);
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

function emptyLanguageMap() {
  return Object.fromEntries(LANGUAGES.map((language) => [language, Object.fromEntries(EVENTS.map((event) => [event, 0]))]));
}

function emptyCountMap(items) {
  return Object.fromEntries(items.map((item) => [item, 0]));
}

function normalizeMemoryStats(source) {
  const events = emptyCountMap(EVENTS);
  const languages = emptyLanguageMap();
  const intents = emptyCountMap(INTENTS);
  const ctas = emptyCountMap(CTAS);

  for (const event of EVENTS) {
    events[event] = Number(source.events?.[event] || 0);
  }

  for (const language of LANGUAGES) {
    for (const event of EVENTS) {
      languages[language][event] = Number(source.languages?.[language]?.[event] || 0);
    }
  }

  for (const intent of INTENTS) {
    intents[intent] = Number(source.intents?.[intent] || 0);
  }

  for (const cta of CTAS) {
    ctas[cta] = Number(source.ctas?.[cta] || 0);
  }

  return {
    events,
    languages,
    intents,
    ctas,
    visitors: Number(source.visitors?.size || 0)
  };
}

async function redis(command) {
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
  return Number(body.result || 0);
}

async function persistentStats(scope) {
  const prefix = scope === "total" ? "services:total" : `services:${scope}`;
  const events = {};
  const languages = emptyLanguageMap();
  const intents = {};
  const ctas = {};

  for (const event of EVENTS) {
    events[event] = await redis(["GET", `${prefix}:event:${event}`]);
  }

  for (const language of LANGUAGES) {
    for (const event of EVENTS) {
      languages[language][event] = await redis(["GET", `${prefix}:language:${language}:event:${event}`]);
    }
  }

  for (const intent of INTENTS) {
    intents[intent] = await redis(["GET", `${prefix}:intent:${intent}`]);
  }

  for (const cta of CTAS) {
    ctas[cta] = await redis(["GET", `${prefix}:cta:${cta}`]);
  }

  return {
    events,
    languages,
    intents,
    ctas,
    visitors: await redis(["SCARD", `${prefix}:visitors`])
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const today = getToday();

  try {
    if (KV_URL && KV_TOKEN) {
      return response.status(200).json({
        ok: true,
        persistent: true,
        today,
        total: await persistentStats("total"),
        daily: await persistentStats(today),
        privacy: "Anonymous aggregate service CTA events. No IP, email, name or fingerprint is stored."
      });
    }
  } catch (error) {
    console.error(error);
  }

  const store = memoryStore();
  return response.status(200).json({
    ok: true,
    persistent: false,
    today,
    total: normalizeMemoryStats(store),
    daily: normalizeMemoryStats(store.days[today] || {}),
    privacy: "Anonymous aggregate service CTA events. No IP, email, name or fingerprint is stored."
  });
};

const EVENTS = ["view_pdf", "open_pdf", "download_pdf", "download_pptx", "switch_language"];
const LANGUAGES = ["es", "en", "pt", "zh", "ja", "ko"];
const FORMATS = ["pdf", "pptx", "viewer"];
const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";

function getToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
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

function emptyLanguageMap() {
  return Object.fromEntries(LANGUAGES.map((language) => [language, Object.fromEntries(EVENTS.map((event) => [event, 0]))]));
}

function emptyFormatMap() {
  return Object.fromEntries(FORMATS.map((format) => [format, Object.fromEntries(EVENTS.map((event) => [event, 0]))]));
}

function normalizeMemoryStats(source) {
  const events = Object.fromEntries(EVENTS.map((event) => [event, Number(source.events?.[event] || 0)]));
  const languages = emptyLanguageMap();
  const formats = emptyFormatMap();

  for (const language of LANGUAGES) {
    for (const event of EVENTS) {
      languages[language][event] = Number(source.languages?.[language]?.[event] || 0);
    }
  }

  for (const format of FORMATS) {
    for (const event of EVENTS) {
      formats[format][event] = Number(source.formats?.[format]?.[event] || 0);
    }
  }

  return {
    events,
    languages,
    formats,
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
  const prefix = scope === "total" ? "deck:total" : `deck:${scope}`;
  const events = {};
  const languages = emptyLanguageMap();
  const formats = emptyFormatMap();

  for (const event of EVENTS) {
    events[event] = await redis(["GET", `${prefix}:event:${event}`]);
  }

  for (const language of LANGUAGES) {
    for (const event of EVENTS) {
      languages[language][event] = await redis(["GET", `${prefix}:language:${language}:event:${event}`]);
    }
  }

  for (const format of FORMATS) {
    for (const event of EVENTS) {
      formats[format][event] = await redis(["GET", `${prefix}:format:${format}:event:${event}`]);
    }
  }

  return {
    events,
    languages,
    formats,
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
        privacy: "Anonymous aggregate deck events. No IP, email, name or fingerprint is stored."
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
    privacy: "Anonymous aggregate deck events. No IP, email, name or fingerprint is stored."
  });
};

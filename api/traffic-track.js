const LANGUAGES = new Set(["es", "en", "pt", "zh", "ja", "ko"]);
const KV_URL = process.env.KV_REST_API_URL || "";
const KV_TOKEN = process.env.KV_REST_API_TOKEN || "";

function getBogotaDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Bogota",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
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

function cleanToken(value, fallback, maxLength = 80) {
  const token = String(value || "")
    .replace(/[^a-zA-Z0-9_./:-]/g, "")
    .slice(0, maxLength);

  return token || fallback;
}

function normalizePayload(payload, request) {
  const language = String(payload.language || "").toLowerCase();
  const countryHeader =
    request.headers["x-vercel-ip-country"] ||
    request.headers["x-country-code"] ||
    "";

  return {
    language: LANGUAGES.has(language) ? language : "es",
    path: cleanToken(payload.path || "/", "/", 160),
    referrer: cleanToken(payload.referrer || "direct", "direct", 160),
    country: cleanToken(payload.country || countryHeader || "unknown", "unknown", 24).toUpperCase(),
    visitorId: cleanToken(payload.visitorId || "anonymous", "anonymous", 80),
    day: getBogotaDate()
  };
}

function memoryStore() {
  globalThis.__tecnotitanTrafficStats ||= {
    pageviews: 0,
    visitors: new Set(),
    languages: {},
    countries: {},
    paths: {},
    referrers: {},
    days: {}
  };
  return globalThis.__tecnotitanTrafficStats;
}

function incrementMap(map, key) {
  map[key] = (map[key] || 0) + 1;
}

function incrementMemory(data) {
  const store = memoryStore();
  store.pageviews += 1;
  store.visitors.add(data.visitorId);
  incrementMap(store.languages, data.language);
  incrementMap(store.countries, data.country);
  incrementMap(store.paths, data.path);
  incrementMap(store.referrers, data.referrer);

  store.days[data.day] ||= {
    pageviews: 0,
    visitors: new Set(),
    languages: {},
    countries: {},
    paths: {},
    referrers: {}
  };

  const day = store.days[data.day];
  day.pageviews += 1;
  day.visitors.add(data.visitorId);
  incrementMap(day.languages, data.language);
  incrementMap(day.countries, data.country);
  incrementMap(day.paths, data.path);
  incrementMap(day.referrers, data.referrer);
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
    ["INCR", "traffic:total:pageviews"],
    ["SADD", "traffic:total:visitors", data.visitorId],
    ["INCR", `traffic:total:language:${data.language}`],
    ["INCR", `traffic:total:country:${data.country}`],
    ["INCR", `traffic:total:path:${data.path}`],
    ["INCR", `traffic:total:referrer:${data.referrer}`],
    ["SADD", "traffic:total:paths", data.path],
    ["SADD", "traffic:total:countries", data.country],
    ["SADD", "traffic:total:referrers", data.referrer],
    ["INCR", `traffic:${data.day}:pageviews`],
    ["SADD", `traffic:${data.day}:visitors`, data.visitorId],
    ["INCR", `traffic:${data.day}:language:${data.language}`],
    ["INCR", `traffic:${data.day}:country:${data.country}`],
    ["INCR", `traffic:${data.day}:path:${data.path}`],
    ["INCR", `traffic:${data.day}:referrer:${data.referrer}`],
    ["SADD", `traffic:${data.day}:paths`, data.path],
    ["SADD", `traffic:${data.day}:countries`, data.country],
    ["SADD", `traffic:${data.day}:referrers`, data.referrer]
  ];

  await Promise.all(commands.map(redis));
  return true;
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const data = normalizePayload(getPayload(request.body), request);

  try {
    incrementMemory(data);
    const persistent = await incrementPersistent(data);
    console.info("tecnotitan_traffic_event", JSON.stringify({
      language: data.language,
      path: data.path,
      country: data.country,
      day: data.day,
      persistent
    }));
    return response.status(200).json({ ok: true, persistent });
  } catch (error) {
    console.error(error);
    return response.status(202).json({ ok: true, persistent: false });
  }
};

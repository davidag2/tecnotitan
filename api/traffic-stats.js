const LANGUAGES = ["es", "en", "pt", "zh", "ja", "ko"];
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
  return body.result;
}

async function getCount(key) {
  return Number((await redis(["GET", key])) || 0);
}

async function getSetCount(key) {
  return Number((await redis(["SCARD", key])) || 0);
}

async function getSetMembers(key) {
  const result = await redis(["SMEMBERS", key]);
  return Array.isArray(result) ? result : [];
}

async function getTopFromSet(setKey, countPrefix, limit = 10) {
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

async function getLanguageCounts(prefix) {
  const languages = {};

  for (const language of LANGUAGES) {
    languages[language] = await getCount(`${prefix}:language:${language}`);
  }

  return languages;
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

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!KV_URL || !KV_TOKEN) {
    return response.status(500).json({ ok: false, error: "Missing KV_REST_API_URL or KV_REST_API_TOKEN" });
  }

  const today = getBogotaDate();

  try {
    return response.status(200).json({
      ok: true,
      persistent: true,
      today,
      total: await getTrafficStats("total"),
      daily: await getTrafficStats(today),
      privacy: "Anonymous aggregate pageview events. No raw IP, email, name or fingerprint is stored."
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ ok: false, error: error.message });
  }
};

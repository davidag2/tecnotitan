const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@tecnotitan.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAIL_FROM = process.env.MAIL_FROM || "Tecnotitan <onboarding@resend.dev>";

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizePayload(payload) {
  return {
    name: payload.Nombre || payload.Name || payload.name || "",
    email: payload.Email || payload.email || "",
    company: payload.Empresa || payload["Firma o fondo"] || payload.Company || payload.company || "",
    country: payload.Pais || payload.País || payload.Country || payload.country || "",
    interest: payload["Tipo de interes"] || payload["Tipo de interés"] || payload.interest || "",
    message: payload.Mensaje || payload.Message || payload.message || "",
    subject: payload._subject || payload.subject || "Nuevo contacto - Tecnotitan",
    formType: payload.formType || "general",
    language: payload.language || "es",
    newsletter: payload.Newsletter === "yes" || payload.newsletter === true || payload.newsletter === "true",
    website: payload.Website || payload.website || ""
  };
}

function buildEmailHtml(data) {
  const newsletterText = data.newsletter ? "Sí, desea suscribirse al newsletter oficial." : "No solicitó suscripción.";
  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#111827;line-height:1.55">
      <h1 style="font-size:22px;margin:0 0 16px">Nuevo mensaje desde Tecnotitan</h1>
      <p><strong>Tipo de formulario:</strong> ${escapeHtml(data.formType)}</p>
      <p><strong>Idioma:</strong> ${escapeHtml(data.language)}</p>
      <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Empresa / firma:</strong> ${escapeHtml(data.company || "No indicado")}</p>
      <p><strong>País:</strong> ${escapeHtml(data.country || "No indicado")}</p>
      <p><strong>Tipo de interés:</strong> ${escapeHtml(data.interest || "No indicado")}</p>
      <p><strong>Newsletter:</strong> ${escapeHtml(newsletterText)}</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:20px 0" />
      <p><strong>Mensaje</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    </div>
  `;
}

async function sendEmail(data) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [CONTACT_TO_EMAIL],
      reply_to: data.email,
      subject: data.newsletter ? `${data.subject} + Newsletter` : data.subject,
      html: buildEmailHtml(data)
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend error ${response.status}: ${detail}`);
  }
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!RESEND_API_KEY) {
    return response.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
  }

  const data = normalizePayload(request.body || {});

  if (data.website) {
    return response.status(200).json({ ok: true });
  }

  if (!data.name || !data.email || !data.message) {
    return response.status(400).json({ ok: false, error: "Missing required fields" });
  }

  try {
    await sendEmail(data);
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return response.status(502).json({ ok: false, error: "Email delivery failed" });
  }
};

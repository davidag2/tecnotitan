const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@tecnotitan.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_CONTACTS_API_KEY = process.env.RESEND_CONTACTS_API_KEY || RESEND_API_KEY;
const MAIL_FROM = process.env.MAIL_FROM || "Tecnotitan <onboarding@resend.dev>";
const NEWSLETTER_SEGMENT_ID = process.env.RESEND_NEWSLETTER_SEGMENT_ID || "";

function splitName(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);

  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" ")
  };
}

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

async function resendRequest(path, options = {}) {
  const response = await fetch(`https://api.resend.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${RESEND_CONTACTS_API_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  let body = {};

  if (text) {
    try {
      body = JSON.parse(text);
    } catch (error) {
      body = { message: text };
    }
  }

  return { response, body };
}

async function upsertNewsletterContact(data) {
  if (!data.newsletter) {
    return { subscribed: false };
  }

  const { firstName, lastName } = splitName(data.name);
  const contactPayload = {
    email: data.email,
    firstName,
    lastName,
    unsubscribed: false,
    properties: {
      source: "tecnotitan.com",
      form_type: data.formType,
      language: data.language,
      country: data.country || "",
      company: data.company || "",
      interest: data.interest || "",
      newsletter_opt_in: "true"
    }
  };

  if (NEWSLETTER_SEGMENT_ID) {
    contactPayload.segments = [{ id: NEWSLETTER_SEGMENT_ID }];
  }

  const createResult = await resendRequest("/contacts", {
    method: "POST",
    body: JSON.stringify(contactPayload)
  });

  if (createResult.response.ok) {
    return { subscribed: true, contactId: createResult.body.id || "" };
  }

  const status = createResult.response.status;
  const message = JSON.stringify(createResult.body).toLowerCase();

  if (status !== 409 && !message.includes("already") && !message.includes("exist")) {
    throw new Error(`Newsletter contact create failed ${status}: ${JSON.stringify(createResult.body)}`);
  }

  const updateResult = await resendRequest(`/contacts/${encodeURIComponent(data.email)}`, {
    method: "PATCH",
    body: JSON.stringify({
      unsubscribed: false,
      properties: contactPayload.properties
    })
  });

  if (!updateResult.response.ok) {
    throw new Error(`Newsletter contact update failed ${updateResult.response.status}: ${JSON.stringify(updateResult.body)}`);
  }

  if (NEWSLETTER_SEGMENT_ID) {
    const segmentResult = await resendRequest(`/contacts/${encodeURIComponent(data.email)}/segments/${NEWSLETTER_SEGMENT_ID}`, {
      method: "POST"
    });

    if (!segmentResult.response.ok && segmentResult.response.status !== 409) {
      throw new Error(`Newsletter segment add failed ${segmentResult.response.status}: ${JSON.stringify(segmentResult.body)}`);
    }
  }

  return { subscribed: true, contactId: updateResult.body.id || "" };
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
    let newsletterResult = { subscribed: false };
    try {
      newsletterResult = await upsertNewsletterContact(data);
    } catch (error) {
      console.error(error);
    }

    await sendEmail(data);
    return response.status(200).json({ ok: true, newsletter: newsletterResult.subscribed });
  } catch (error) {
    console.error(error);
    return response.status(502).json({ ok: false, error: "Email delivery failed" });
  }
};

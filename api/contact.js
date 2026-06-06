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
    service: payload.Servicio || payload.service || "",
    budget: payload.Presupuesto || payload.budget || "",
    urgency: payload.Urgencia || payload.urgency || "",
    companySize: payload["Tamaño de empresa"] || payload["Tamano de empresa"] || payload.companySize || "",
    area: payload.Area || payload.area || "",
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
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <div style="font-family:Inter,Arial,sans-serif;color:#111827;line-height:1.55">
      <h1 style="font-size:22px;margin:0 0 16px">Nuevo mensaje desde Tecnotitan</h1>
      <p><strong>Tipo de formulario:</strong> ${escapeHtml(data.formType)}</p>
      <p><strong>Idioma:</strong> ${escapeHtml(data.language)}</p>
      <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Empresa / firma:</strong> ${escapeHtml(data.company || "No indicado")}</p>
      <p><strong>País:</strong> ${escapeHtml(data.country || "No indicado")}</p>
      <p><strong>Tipo de interés:</strong> ${escapeHtml(data.interest || "No indicado")}</p>
      ${data.service ? `<p><strong>Servicio:</strong> ${escapeHtml(data.service)}</p>` : ""}
      ${data.companySize ? `<p><strong>Tamaño de empresa:</strong> ${escapeHtml(data.companySize)}</p>` : ""}
      ${data.area ? `<p><strong>Área / perfil:</strong> ${escapeHtml(data.area)}</p>` : ""}
      ${data.budget ? `<p><strong>Presupuesto aproximado:</strong> ${escapeHtml(data.budget)}</p>` : ""}
      ${data.urgency ? `<p><strong>Urgencia:</strong> ${escapeHtml(data.urgency)}</p>` : ""}
      <p><strong>Newsletter:</strong> ${escapeHtml(newsletterText)}</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:20px 0" />
      <p><strong>Mensaje</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    </div>
  `;
}

const welcomeEmails = {
  es: {
    subject: "Bienvenido al newsletter oficial de Tecnotitan",
    preview: "Tecnología aplicada, IA, software, videojuegos y robótica desde Tecnotitan.",
    greeting: "Hola,",
    thanks: "Gracias por suscribirte al newsletter oficial de Tecnotitan.",
    body:
      "Desde aquí compartiremos avances sobre nuestros productos, servicios, divisiones tecnológicas, inteligencia artificial, software empresarial, videojuegos, robótica y visión corporativa para mercados globales.",
    company:
      "Tecnotitan está construyendo una compañía de tecnología aplicada desde Latinoamérica para empresas, aliados e inversionistas en todo el mundo.",
    noteTitle: "Nota de David Arias Giraldo, CEO",
    note:
      "Gracias por acompañarnos desde esta etapa inicial. Tecnotitan nace con una ambición clara: crear tecnología útil, escalable y global. Este newsletter será una ventana directa a lo que estamos construyendo, aprendiendo y preparando para el futuro.",
    signoff: "Con aprecio,",
    website: "Sitio web",
    contact: "Contacto"
  },
  en: {
    subject: "Welcome to the official Tecnotitan newsletter",
    preview: "Applied technology, AI, software, gaming and robotics from Tecnotitan.",
    greeting: "Hello,",
    thanks: "Thank you for subscribing to the official Tecnotitan newsletter.",
    body:
      "Here we will share updates about our products, services, technology divisions, artificial intelligence, enterprise software, video games, robotics and corporate vision for global markets.",
    company:
      "Tecnotitan is building an applied technology company from Latin America for companies, partners and investors around the world.",
    noteTitle: "Note from David Arias Giraldo, CEO",
    note:
      "Thank you for joining us at this early stage. Tecnotitan was born with a clear ambition: to create useful, scalable and global technology. This newsletter will be a direct window into what we are building, learning and preparing for the future.",
    signoff: "Warm regards,",
    website: "Website",
    contact: "Contact"
  },
  pt: {
    subject: "Bem-vindo ao newsletter oficial da Tecnotitan",
    preview: "Tecnologia aplicada, IA, software, games e robótica da Tecnotitan.",
    greeting: "Olá,",
    thanks: "Obrigado por assinar o newsletter oficial da Tecnotitan.",
    body:
      "Aqui compartilharemos novidades sobre nossos produtos, serviços, divisões tecnológicas, inteligência artificial, software empresarial, videogames, robótica e visão corporativa para mercados globais.",
    company:
      "A Tecnotitan está construindo uma empresa de tecnologia aplicada a partir da América Latina para empresas, parceiros e investidores no mundo todo.",
    noteTitle: "Nota de David Arias Giraldo, CEO",
    note:
      "Obrigado por nos acompanhar desde esta etapa inicial. A Tecnotitan nasce com uma ambição clara: criar tecnologia útil, escalável e global. Este newsletter será uma janela direta para o que estamos construindo, aprendendo e preparando para o futuro.",
    signoff: "Com apreço,",
    website: "Site",
    contact: "Contato"
  },
  zh: {
    subject: "欢迎订阅 Tecnotitan 官方 Newsletter",
    preview: "来自 Tecnotitan 的应用技术、AI、软件、游戏与机器人动态。",
    greeting: "你好，",
    thanks: "感谢你订阅 Tecnotitan 官方 newsletter。",
    body:
      "我们将在这里分享关于产品、服务、技术事业部、人工智能、企业软件、电子游戏、机器人技术以及面向全球市场的公司愿景的更新。",
    company: "Tecnotitan 正在从拉丁美洲出发，为全球企业、合作伙伴和投资者打造一家应用技术公司。",
    noteTitle: "来自 CEO David Arias Giraldo 的说明",
    note:
      "感谢你在 Tecnotitan 的早期阶段加入我们。Tecnotitan 带着清晰的雄心诞生：创造有用、可扩展、面向全球的技术。这个 newsletter 将成为你了解我们正在建设、学习和准备未来内容的直接窗口。",
    signoff: "诚挚问候，",
    website: "网站",
    contact: "联系"
  },
  ja: {
    subject: "Tecnotitan 公式 newsletter へようこそ",
    preview: "Tecnotitan から応用技術、AI、ソフトウェア、ゲーム、ロボティクスの最新情報をお届けします。",
    greeting: "こんにちは。",
    thanks: "Tecnotitan 公式 newsletter にご登録いただき、ありがとうございます。",
    body:
      "ここでは、製品、サービス、技術部門、人工知能、企業向けソフトウェア、ゲーム、ロボティクス、そしてグローバル市場に向けた企業ビジョンについての更新をお届けします。",
    company:
      "Tecnotitan は、ラテンアメリカから世界の企業、パートナー、投資家に向けて応用テクノロジー企業を構築しています。",
    noteTitle: "David Arias Giraldo, CEO からのメッセージ",
    note:
      "この初期段階から私たちに参加してくださり、ありがとうございます。Tecnotitan は、有用で、拡張可能で、グローバルな技術をつくるという明確な ambition から生まれました。この newsletter は、私たちが構築し、学び、未来に向けて準備していることを直接お届けする窓口になります。",
    signoff: "敬具,",
    website: "ウェブサイト",
    contact: "連絡先"
  },
  ko: {
    subject: "Tecnotitan 공식 newsletter에 오신 것을 환영합니다",
    preview: "Tecnotitan의 응용 기술, AI, 소프트웨어, 게임, 로보틱스 소식을 전합니다.",
    greeting: "안녕하세요.",
    thanks: "Tecnotitan 공식 newsletter를 구독해 주셔서 감사합니다.",
    body:
      "이곳에서는 제품, 서비스, 기술 부문, 인공지능, 기업 소프트웨어, 비디오게임, 로보틱스, 그리고 글로벌 시장을 향한 기업 비전에 대한 소식을 공유합니다.",
    company:
      "Tecnotitan은 라틴아메리카에서 출발해 전 세계 기업, 파트너, 투자자를 위한 응용 기술 회사를 만들어가고 있습니다.",
    noteTitle: "David Arias Giraldo, CEO의 메시지",
    note:
      "이 초기 단계부터 함께해 주셔서 감사합니다. Tecnotitan은 유용하고, 확장 가능하며, 글로벌한 기술을 만들겠다는 분명한 야망에서 시작되었습니다. 이 newsletter는 우리가 무엇을 만들고, 배우고, 미래를 위해 준비하고 있는지 직접 보여주는 창이 될 것입니다.",
    signoff: "감사합니다,",
    website: "웹사이트",
    contact: "문의"
  }
};

function buildWelcomeEmailHtml(data) {
  const template = welcomeEmails[data.language] || welcomeEmails.en;
  return `
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <div style="display:none;max-height:0;overflow:hidden;color:transparent">${escapeHtml(template.preview)}</div>
    <div style="font-family:Inter,Arial,sans-serif;color:#111827;line-height:1.6;max-width:640px;margin:0 auto;padding:28px">
      <p style="font-size:14px;letter-spacing:.14em;text-transform:uppercase;color:#0891b2;font-weight:800;margin:0 0 20px">Tecnotitan</p>
      <h1 style="font-size:26px;line-height:1.15;margin:0 0 22px;color:#050607">${escapeHtml(template.subject)}</h1>
      <p>${escapeHtml(template.greeting)}</p>
      <p>${escapeHtml(template.thanks)}</p>
      <p>${escapeHtml(template.body)}</p>
      <p>${escapeHtml(template.company)}</p>
      <div style="border-left:3px solid #06b6d4;background:#f8fafc;padding:18px 20px;margin:28px 0">
        <p style="font-weight:800;margin:0 0 8px;color:#050607">${escapeHtml(template.noteTitle)}</p>
        <p style="margin:0">${escapeHtml(template.note)}</p>
      </div>
      <p>${escapeHtml(template.signoff)}</p>
      <p style="margin:0"><strong>David Arias Giraldo</strong><br />CEO / Founder, Tecnotitan</p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:28px 0" />
      <p style="font-size:14px;color:#475569;margin:0">${escapeHtml(template.website)}: <a href="https://www.tecnotitan.com" style="color:#0891b2">https://www.tecnotitan.com</a></p>
      <p style="font-size:14px;color:#475569;margin:6px 0 0">${escapeHtml(template.contact)}: <a href="mailto:info@tecnotitan.com" style="color:#0891b2">info@tecnotitan.com</a></p>
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

async function sendWelcomeEmail(data) {
  const template = welcomeEmails[data.language] || welcomeEmails.en;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: MAIL_FROM,
      to: [data.email],
      reply_to: CONTACT_TO_EMAIL,
      subject: template.subject,
      html: buildWelcomeEmailHtml(data)
    })
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Welcome email error ${response.status}: ${detail}`);
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
    first_name: firstName,
    last_name: lastName,
    unsubscribed: false,
    properties: {
      source: "tecnotitan.com",
      form_type: data.formType,
      language: data.language,
      country: data.country || "",
      company: data.company || "",
      interest: data.interest || "",
      service: data.service || "",
      budget: data.budget || "",
      urgency: data.urgency || "",
      company_size: data.companySize || "",
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
    let welcomeSent = false;
    try {
      newsletterResult = await upsertNewsletterContact(data);
      if (newsletterResult.subscribed) {
        await sendWelcomeEmail(data);
        welcomeSent = true;
      }
    } catch (error) {
      console.error(error);
    }

    await sendEmail(data);
    return response.status(200).json({ ok: true, newsletter: newsletterResult.subscribed, welcome: welcomeSent });
  } catch (error) {
    console.error(error);
    return response.status(502).json({ ok: false, error: "Email delivery failed" });
  }
};

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const activeLanguage = 'en';
const activeDeckLanguage = 'en';
const localizedCleanUrlsByPage = { en: { 'aviso-legal.html': '/legal/' } };
const chatbotTranslations = { en: {"title":"Tecnotitan AI","eyebrow":"Official assistant","button":"Open chat","close":"Close chat","clear":"Clear","placeholder":"Ask about Tecnotitan, products, services or investors...","send":"Send","welcome":"Hello. I am Tecnotitan's official assistant. I can help with products, services, the investor deck and contacting our team.","thinking":"Thinking...","error":"I could not reply right now. Try again or email info@tecnotitan.com.","limit":"You reached the temporary chat limit. For a direct conversation, email info@tecnotitan.com.","quick":["Investor deck","AI services","Products","Contact"],"footer":"AI-generated answers. Do not share sensitive data."} };
const privacyConsentContent = { en: {"ariaLabel":"Privacy consent","title":"Privacy","message":"We use aggregate metrics and approximate country data to improve Tecnotitan. We do not sell data or store raw IP addresses.","legal":"Legal notice","accept":"Accept"} };
const callCenterTranslations = { en: {"eyebrow":"USA Call Center","title":"Call us for more info","note":"English line for investors and partners.","aria":"Call Tecnotitan USA"} };
function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value) {
    element.textContent = value;
  }
}

function getDeckVisitorId() {
  const storageKey = "tecnotitan-deck-visitor";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function trackDeckEvent(event, details = {}) {
  const payload = JSON.stringify({
    event,
    language: details.language || activeDeckLanguage,
    format: details.format || "viewer",
    visitorId: getDeckVisitorId(),
    path: window.location.pathname
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/deck-track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/deck-track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  }).catch(() => {});
}

function getServiceVisitorId() {
  const storageKey = "tecnotitan-service-visitor";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function trackServiceEvent(event, details = {}) {
  const payloadData = {
    event,
    language: activeLanguage,
    intent: details.intent || "general",
    cta: details.cta || "ai-diagnosis",
    visitorId: getServiceVisitorId(),
    path: window.location.pathname
  };
  const payload = JSON.stringify(payloadData);

  if (typeof window.va === "function") {
    try {
      window.va("event", "service_cta_click", {
        language: payloadData.language,
        intent: payloadData.intent,
        cta: payloadData.cta
      });
    } catch (error) {
      // Vercel custom events require supported analytics setup; KV tracking remains the source of record.
    }
  }

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/service-track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/service-track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  }).catch(() => {});
}

function getTrafficVisitorId() {
  const storageKey = "tecnotitan-traffic-visitor";
  let visitorId = localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

function trackSitePageView() {
  const payload = JSON.stringify({
    language: activeLanguage,
    path: window.location.pathname || "/",
    referrer: document.referrer || "direct",
    visitorId: getTrafficVisitorId()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/traffic-track", new Blob([payload], { type: "application/json" }));
    return;
  }

  fetch("/api/traffic-track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: payload,
    keepalive: true
  }).catch(() => {});
}

function showFormMessage(form, title, text, isError = false) {
  const section = form.closest("section");
  const message = section?.querySelector("[data-form-success]");

  if (!message) {
    return;
  }

  setText("strong", title, message);
  setText("p", text, message);
  message.classList.toggle("is-error", isError);
  message.hidden = false;
}

function enhanceContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    if (form.dataset.enhanced === "true") {
      return;
    }

    form.dataset.enhanced = "true";
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const content = getCurrentFormContent(form);
      const button = form.querySelector('button[type="submit"]');
      const originalText = button?.textContent || content.formButton;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.language = activeLanguage;
      payload.newsletter = formData.get("Newsletter") === "yes";

      if (button) {
        button.disabled = true;
        button.textContent = content.formSending || originalText;
      }

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Contact request failed");
        }

        form.reset();
        showFormMessage(form, content.formSuccessTitle, content.formSuccessText, false);
      } catch (error) {
        showFormMessage(form, content.formErrorTitle, content.formErrorText, true);
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = originalText;
        }
      }
    });
  });
}

function prefillServiceRequestForm() {
  const serviceSelect = document.querySelector("[data-service-select]");

  if (!serviceSelect) {
    return;
  }

  const serviceMap = {
    ai: 1,
    software: 2,
    consultoria: 3,
    robotica: 4,
    videojuegos: 5,
    transformacion: 6,
    transformation: 6
  };
  const requestedInterest = new URLSearchParams(window.location.search).get("interest");
  const selectedIndex = serviceMap[requestedInterest];

  if (!selectedIndex) {
    return;
  }

  Array.from(serviceSelect.options).forEach((option) => {
    option.selected = option.index === selectedIndex;
  });
}

function syncPrivacyConsent(language = activeLanguage) {
  const banner = document.querySelector(".privacy-consent");
  if (!banner) {
    return;
  }

  const content = privacyConsentContent[language] || privacyConsentContent.en;
  const legalUrl = "/legal/";

  banner.setAttribute("aria-label", content.ariaLabel);
  banner.setAttribute("dir", "ltr");
  setText("[data-privacy-title]", content.title, banner);
  setText("[data-privacy-message]", content.message, banner);
  setText("[data-privacy-legal]", content.legal, banner);
  setText("[data-privacy-accept]", content.accept, banner);
  banner.querySelector("[data-privacy-legal]")?.setAttribute("href", legalUrl);
}

function buildPrivacyConsent() {
  const storageKey = "tecnotitan-privacy-consent";

  if (localStorage.getItem(storageKey) === "accepted") {
    return;
  }

  const banner = document.createElement("aside");
  banner.className = "privacy-consent";
  banner.innerHTML = `
    <p><strong data-privacy-title></strong><span data-privacy-message></span></p>
    <div class="privacy-consent-actions">
      <a href="/legal/" data-privacy-legal></a>
      <button type="button" data-privacy-accept></button>
    </div>
  `;

  banner.querySelector("button")?.addEventListener("click", () => {
    localStorage.setItem(storageKey, "accepted");
    banner.hidden = true;
  });

  document.body.appendChild(banner);
  syncPrivacyConsent(activeLanguage);
}

function initUsaCallWidget() {
  if (document.querySelector("[data-usa-call-widget]")) {
    return;
  }

  const link = document.createElement("a");
  link.className = "usa-call-widget";
  link.href = "tel:+19147320344";
  link.setAttribute("data-usa-call-widget", "");
  link.innerHTML = `
    <span class="usa-call-pulse" aria-hidden="true"></span>
    <span class="usa-call-copy">
      <span class="usa-call-eyebrow"></span>
      <strong></strong>
      <span class="usa-call-phone">+1 (914) 732-0344</span>
      <span class="usa-call-note"></span>
    </span>
  `;
  document.body.appendChild(link);
}

function syncUsaCallWidget(language = activeLanguage) {
  const widget = document.querySelector("[data-usa-call-widget]");
  if (!widget) {
    return;
  }

  const copy = callCenterTranslations[language] || callCenterTranslations.en;
  widget.setAttribute("aria-label", `${copy.aria}: +1 914 732 0344`);
  setText(".usa-call-eyebrow", copy.eyebrow, widget);
  setText(".usa-call-copy strong", copy.title, widget);
  setText(".usa-call-note", copy.note, widget);
}

function initMadreGuidePositioning() {
  let resizeFrame = 0;
  let observer;

  const ensurePositioningStyles = (shadowRoot) => {
    if (shadowRoot.querySelector("style[data-tecnotitan-positioning]")) {
      return;
    }

    const style = document.createElement("style");
    style.setAttribute("data-tecnotitan-positioning", "");
    style.textContent = `
      @media (min-width: 761px) {
        .wrap[data-tecnotitan-positioned] {
          --madre-guide-left: var(--tecnotitan-guide-left) !important;
          --madre-guide-right: auto !important;
          --madre-guide-bottom: var(--tecnotitan-guide-bottom) !important;
        }

        .wrap[data-tecnotitan-anchor="right"] .panel {
          margin-left: auto;
          margin-right: 0;
        }

        .wrap[data-tecnotitan-anchor="left"] .panel {
          margin-left: 0;
          margin-right: auto;
        }
      }
    `;
    shadowRoot.appendChild(style);
  };

  const positionWidget = () => {
    const host = document.querySelector("#madre-web-guide-widget");
    const shadowRoot = host?.shadowRoot;
    const wrap = shadowRoot?.querySelector(".wrap");
    if (!wrap) {
      return false;
    }

    ensurePositioningStyles(shadowRoot);

    if (window.innerWidth <= 760) {
      wrap.removeAttribute("data-tecnotitan-positioned");
      wrap.removeAttribute("data-tecnotitan-anchor");
      wrap.style.removeProperty("--tecnotitan-guide-left");
      wrap.style.removeProperty("--tecnotitan-guide-bottom");
      return true;
    }

    const anchor = document.querySelector("[data-usa-call-widget]");
    if (!anchor) {
      return false;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const wrapRect = wrap.getBoundingClientRect();
    const anchorIsOnRight = anchorRect.left >= window.innerWidth / 2;
    const desiredLeft = anchorIsOnRight
      ? anchorRect.left - wrapRect.width - 48
      : anchorRect.right + 48;
    const maximumLeft = window.innerWidth - 16 - wrapRect.width;
    const left = Math.round(Math.min(maximumLeft, Math.max(16, desiredLeft)));
    const bottom = Math.max(24, Math.round(window.innerHeight - anchorRect.bottom + 10));

    wrap.setAttribute("data-tecnotitan-positioned", "");
    wrap.setAttribute("data-tecnotitan-anchor", anchorIsOnRight ? "right" : "left");
    wrap.style.setProperty("--tecnotitan-guide-left", `${left}px`);
    wrap.style.setProperty("--tecnotitan-guide-bottom", `${bottom}px`);
    return true;
  };

  const schedulePosition = () => {
    window.cancelAnimationFrame(resizeFrame);
    resizeFrame = window.requestAnimationFrame(positionWidget);
  };

  observer = new MutationObserver(() => {
    if (positionWidget()) {
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("resize", schedulePosition, { passive: true });

  let attempts = 0;
  const readinessTimer = window.setInterval(() => {
    attempts += 1;
    if (positionWidget() || attempts >= 40) {
      window.clearInterval(readinessTimer);
      observer.disconnect();
    }
  }, 250);

  schedulePosition();
}

function initTecnotitanChatbot() {
  if (document.querySelector("[data-tecnotitan-chatbot]")) {
    return;
  }

  const state = {
    isOpen: false,
    isBusy: false,
    messages: []
  };

  const root = document.createElement("section");
  root.className = "tecnotitan-chatbot";
  root.setAttribute("data-tecnotitan-chatbot", "");
  root.innerHTML = `
    <button class="chatbot-launcher" type="button" aria-expanded="false">
      <span class="chatbot-launcher-icon" aria-hidden="true"></span>
      <span class="chatbot-launcher-label"></span>
    </button>
    <div class="chatbot-panel" hidden>
      <div class="chatbot-head">
        <div>
          <p class="chatbot-eyebrow"></p>
          <h2></h2>
        </div>
        <div class="chatbot-head-actions">
          <button class="chatbot-clear" type="button"></button>
          <button class="chatbot-close" type="button" aria-label=""></button>
        </div>
      </div>
      <div class="chatbot-messages" role="log" aria-live="polite"></div>
      <div class="chatbot-quick"></div>
      <form class="chatbot-form">
        <textarea rows="2" maxlength="1200"></textarea>
        <button type="submit"></button>
      </form>
      <p class="chatbot-footnote"></p>
    </div>
  `;
  document.body.appendChild(root);

  const launcher = root.querySelector(".chatbot-launcher");
  const panel = root.querySelector(".chatbot-panel");
  const messagesEl = root.querySelector(".chatbot-messages");
  const quickEl = root.querySelector(".chatbot-quick");
  const form = root.querySelector(".chatbot-form");
  const textarea = root.querySelector("textarea");
  const submitButton = root.querySelector('.chatbot-form button[type="submit"]');

  function currentCopy() {
    return chatbotTranslations[activeLanguage] || chatbotTranslations.en;
  }

  function addMessage(role, content) {
    state.messages.push({ role, content });
    state.messages = state.messages.slice(-8);
    renderMessages();
  }

  function renderMessages() {
    messagesEl.innerHTML = "";
    state.messages.forEach((message) => {
      const bubble = document.createElement("article");
      bubble.className = `chatbot-message is-${message.role}`;
      bubble.textContent = message.content;
      messagesEl.appendChild(bubble);
    });
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function setBusy(isBusy) {
    state.isBusy = isBusy;
    textarea.disabled = isBusy;
    submitButton.disabled = isBusy;
    submitButton.textContent = isBusy ? currentCopy().thinking : currentCopy().send;
  }

  function syncLanguage() {
    const copy = currentCopy();
    root.querySelector(".chatbot-launcher-label").textContent = copy.title;
    launcher.setAttribute("aria-label", state.isOpen ? copy.close : copy.button);
    root.querySelector(".chatbot-eyebrow").textContent = copy.eyebrow;
    root.querySelector(".chatbot-head h2").textContent = copy.title;
    root.querySelector(".chatbot-clear").textContent = copy.clear;
    root.querySelector(".chatbot-close").textContent = "x";
    root.querySelector(".chatbot-close").setAttribute("aria-label", copy.close);
    textarea.placeholder = copy.placeholder;
    submitButton.textContent = state.isBusy ? copy.thinking : copy.send;
    root.querySelector(".chatbot-footnote").textContent = copy.footer;
    quickEl.innerHTML = "";
    copy.quick.forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => {
        textarea.value = label;
        textarea.focus();
      });
      quickEl.appendChild(button);
    });
    if (!state.messages.length) {
      addMessage("assistant", copy.welcome);
    }
  }

  async function sendMessage(content) {
    addMessage("user", content);
    setBusy(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: activeLanguage,
          path: window.location.pathname,
          messages: state.messages
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        addMessage("assistant", data.reply || (response.status === 429 ? currentCopy().limit : currentCopy().error));
        return;
      }
      addMessage("assistant", data.reply || currentCopy().error);
    } catch {
      addMessage("assistant", currentCopy().error);
    } finally {
      setBusy(false);
    }
  }

  function setOpen(isOpen) {
    state.isOpen = isOpen;
    panel.hidden = !isOpen;
    root.classList.toggle("is-open", isOpen);
    launcher.setAttribute("aria-expanded", String(isOpen));
    launcher.setAttribute("aria-label", isOpen ? currentCopy().close : currentCopy().button);
    if (isOpen) {
      setTimeout(() => textarea.focus(), 80);
    }
  }

  launcher.addEventListener("click", () => setOpen(!state.isOpen));
  root.querySelector(".chatbot-close").addEventListener("click", () => setOpen(false));
  root.querySelector(".chatbot-clear").addEventListener("click", () => {
    state.messages = [];
    addMessage("assistant", currentCopy().welcome);
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = textarea.value.trim();
    if (!content || state.isBusy) {
      return;
    }
    textarea.value = "";
    sendMessage(content);
  });

  window.syncTecnotitanChatbotLanguage = syncLanguage;
  syncLanguage();
}

function getCurrentFormContent() {
  return {
    formButton: 'Send message',
    formSending: 'Sending...',
    formSuccessTitle: 'Message received',
    formSuccessText: 'Thank you. Our team will reply to the email address you provided.',
    formErrorTitle: 'Could not send',
    formErrorText: 'Please try again or email info@tecnotitan.com.'
  };
}

// The site has one language; a saved preference must not restore retired routes.
try { localStorage.setItem('tecnotitan-language', 'en'); } catch {}
buildPrivacyConsent();
initUsaCallWidget();
syncUsaCallWidget();
initTecnotitanChatbot();
initMadreGuidePositioning();
trackSitePageView();
prefillServiceRequestForm();
enhanceContactForms();

const interest = new URLSearchParams(location.search).get('interest');
const investorSelect = document.querySelector('select[name="Tipo de interes"]');
if (investorSelect && interest) {
  const labels = { deck: /deck/i, team: /team/i, call: /call|conversation/i };
  const option = Array.from(investorSelect.options).find(item => labels[interest]?.test(item.textContent));
  if (option) option.selected = true;
}
for (const [selector, event, format] of [
  ['.deck-view-link', 'open_pdf', 'pdf'],
  ['.deck-download-link', 'download_pdf', 'pdf'],
  ['.deck-pptx-link', 'download_pptx', 'pptx']
]) document.querySelectorAll(selector).forEach(link => link.addEventListener('click', () => trackDeckEvent(event, { format })));
document.querySelectorAll('[data-service-cta]').forEach(link => link.addEventListener('click', () => trackServiceEvent('cta_click', {
  cta: link.dataset.cta, intent: link.dataset.intent
})));

function closeMenu() {
  document.body.classList.remove('menu-open');
  header?.classList.remove('is-open');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  menuButton?.setAttribute('aria-expanded', 'false');
}
menuButton?.addEventListener('click', () => {
  const open = header.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const revealObserver = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  }
}, { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));
const syncHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

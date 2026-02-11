(() => {
  "use strict";

  // WhatsApp (número padrão do escritório)
  const WA_DEFAULT = "5598981811226";

  const byId = (id) => document.getElementById(id);

  const isMobile = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent || ""
    );

  const getTracking = () => {
    try {
      const p = new URLSearchParams(window.location.search);
      const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];
      const out = {};
      keys.forEach((k) => {
        const v = p.get(k);
        if (v) out[k] = v;
      });
      return out;
    } catch {
      return {};
    }
  };

  const buildText = (tag, msg) => {
    const parts = [];
    if (tag) parts.push(tag);
    if (msg) parts.push(msg);

    let text = parts.join(" — ") || "Olá, gostaria de atendimento.";
    const tr = getTracking();
    if (Object.keys(tr).length) text += "\n\nOrigem: " + JSON.stringify(tr);
    return text;
  };

  const buildWaUrl = (phone, text) => {
    const digits = String(phone || WA_DEFAULT).replace(/\D/g, "") || WA_DEFAULT;
    return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
  };

  const openWa = (url) => {
    // Desktop: abre em nova aba. Mobile: navega direto (mais confiável para abrir o app).
    if (!isMobile()) {
      const w = window.open(url, "_blank", "noopener,noreferrer");
      if (w) return;
    }
    window.location.href = url;
  };

  // ---------- Menu mobile ----------
  const menuBtn = byId("menuBtn");
  const mobileMenu = byId("mobileMenu");
  if (menuBtn && mobileMenu) {
    const setOpen = (open) => {
      mobileMenu.style.display = open ? "block" : "none";
      menuBtn.setAttribute("aria-expanded", String(open));
    };

    setOpen(false);

    menuBtn.addEventListener("click", () => {
      const open = mobileMenu.style.display === "block";
      setOpen(!open);
    });

    // Fecha o menu ao clicar em um link
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setOpen(false));
    });
  }

  // ---------- Botões/links WhatsApp ----------
  document.querySelectorAll("[data-wa]").forEach((el) => {
    try {
      const phone = el.getAttribute("data-wa") || WA_DEFAULT;
      const tag = el.getAttribute("data-wa-tag") || "";
      const msg = el.getAttribute("data-wa-message") || "";
      const url = buildWaUrl(phone, buildText(tag, msg));

      // Define href como fallback
      if (el.tagName && el.tagName.toLowerI want
::contentReference[oaicite:0]{index=0}


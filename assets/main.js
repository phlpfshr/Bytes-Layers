const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

function initGridRain() {
  const rainRoot = document.getElementById("grid-rain");
  if (!(rainRoot instanceof HTMLElement)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const GRID_SIZE = 10;
  const DOT_COUNT = 240;
  const WORD = "Bytes & Layers";
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const FALL_MS = 5200;
  const FORM_MS = 1900;
  const HOLD_MS = 1400;
  const DISPERSE_MS = 900;
  let cycleTimer = null;
  let rafId = 0;
  let lastTs = 0;
  let isFalling = false;

  function alignToGrid(value) {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  }

  function randomPoint() {
    return {
      x: alignToGrid(Math.random() * window.innerWidth),
      y: alignToGrid(Math.random() * window.innerHeight),
    };
  }

  function getWordPoints() {
    const isMobile = window.innerWidth < 700;
    const lines = isMobile ? ["B & L"] : [WORD];
    const fontSize = isMobile
      ? Math.max(24, Math.min(46, window.innerWidth * 0.105))
      : Math.max(28, Math.min(72, window.innerWidth * 0.08));

    ctx.font = `700 ${fontSize}px "IBM Plex Sans", sans-serif`;
    const lineWidths = lines.map((line) => Math.ceil(ctx.measureText(line).width));
    const textWidth = Math.max(...lineWidths);
    const lineHeight = Math.ceil(fontSize * 1.15);
    const textHeight = lineHeight * lines.length;

    canvas.width = textWidth + GRID_SIZE * 4;
    canvas.height = textHeight + GRID_SIZE * 4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff5c00";
    ctx.font = `700 ${fontSize}px "IBM Plex Sans", sans-serif`;
    ctx.textBaseline = "top";

    lines.forEach((line, idx) => {
      const w = Math.ceil(ctx.measureText(line).width);
      const x = GRID_SIZE * 2 + Math.floor((textWidth - w) / 2);
      const y = GRID_SIZE * 2 + idx * lineHeight;
      ctx.fillText(line, x, y);
    });

    const image = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const points = [];
    for (let y = 0; y < canvas.height; y += GRID_SIZE) {
      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        const idx = (y * canvas.width + x) * 4 + 3;
        if (image[idx] > 45) points.push({ x, y });
      }
    }

    const horizontalMargin = isMobile ? GRID_SIZE * 2 : GRID_SIZE;
    const verticalMargin = isMobile ? GRID_SIZE * 5 : GRID_SIZE;
    const maxX = Math.max(
      window.innerWidth - canvas.width - horizontalMargin,
      horizontalMargin
    );
    const maxY = Math.max(
      window.innerHeight - canvas.height - verticalMargin,
      verticalMargin
    );
    const offsetX = alignToGrid(horizontalMargin + Math.random() * maxX);
    const offsetY = alignToGrid(verticalMargin + Math.random() * maxY);

    return points.map((p) => ({
      x: alignToGrid(p.x + offsetX),
      y: alignToGrid(p.y + offsetY),
    }));
  }

  function moveDot(dot, point, opacity) {
    dot.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
    dot.style.opacity = String(opacity);
  }

  const dots = [];
  for (let i = 0; i < DOT_COUNT; i += 1) {
    const dot = document.createElement("span");
    dot.className = "rain-dot";
    const p = randomPoint();
    dot.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
    dot.style.opacity = "0.15";
    rainRoot.appendChild(dot);
    dots.push({
      el: dot,
      x: p.x,
      y: p.y,
      speed: 18 + Math.random() * 42,
    });
  }

  function stopFalling() {
    isFalling = false;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  function fallStep(ts) {
    if (!isFalling) return;
    if (!lastTs) lastTs = ts;
    const dt = Math.min(0.05, (ts - lastTs) / 1000);
    lastTs = ts;

    const maxY = window.innerHeight + GRID_SIZE;
    for (const dot of dots) {
      dot.y += dot.speed * dt * 8;
      if (dot.y > maxY) {
        dot.y = -GRID_SIZE;
        dot.x = alignToGrid(Math.random() * window.innerWidth);
      }
      dot.el.style.transition = "none";
      dot.el.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0)`;
      dot.el.style.opacity = String(0.18 + Math.random() * 0.22);
    }
    rafId = requestAnimationFrame(fallStep);
  }

  function startFalling() {
    stopFalling();
    isFalling = true;
    lastTs = 0;
    rafId = requestAnimationFrame(fallStep);
  }

  function scatterDots() {
    for (const dot of dots) {
      const p = randomPoint();
      dot.x = p.x;
      dot.y = p.y;
      dot.el.style.transition =
        `transform ${DISPERSE_MS}ms ease, opacity ${Math.max(300, DISPERSE_MS - 150)}ms ease`;
      moveDot(dot.el, p, 0.12 + Math.random() * 0.28);
    }
  }

  function formWordLayered() {
    const targets = getWordPoints().sort((a, b) => a.y - b.y || a.x - b.x);
    const rowBase = Math.max(1, Math.floor(window.innerHeight / GRID_SIZE));

    for (let idx = 0; idx < dots.length; idx += 1) {
      const dot = dots[idx];
      if (idx < targets.length) {
        const t = targets[idx];
        const startY = -GRID_SIZE * (2 + Math.floor(Math.random() * 14));
        const startX =
          t.x +
          (Math.random() < 0.35
            ? (Math.random() < 0.5 ? -GRID_SIZE : GRID_SIZE)
            : 0);

        dot.x = alignToGrid(startX);
        dot.y = startY;
        dot.el.style.transition = "none";
        moveDot(dot.el, { x: dot.x, y: startY }, 0.28);
      } else {
        const p = randomPoint();
        dot.x = p.x;
        dot.y = p.y;
        dot.el.style.transition = "none";
        moveDot(dot.el, p, 0.06);
      }
    }

    requestAnimationFrame(() => {
      for (let idx = 0; idx < dots.length; idx += 1) {
        const dot = dots[idx];
        if (idx < targets.length) {
          const t = targets[idx];
          const row = Math.max(0, Math.floor(t.y / GRID_SIZE));
          const delay = Math.min(900, Math.floor((row / rowBase) * 760));

          dot.x = t.x;
          dot.y = t.y;
          dot.el.style.transition =
            `transform ${FORM_MS}ms cubic-bezier(0.16, 0.78, 0.2, 1) ${delay}ms, opacity ${Math.max(450, FORM_MS - 250)}ms ease ${Math.floor(delay * 0.65)}ms`;
          moveDot(dot.el, t, 0.98);
        } else {
          const p = randomPoint();
          dot.x = p.x;
          dot.y = p.y;
          dot.el.style.transition =
            `transform ${FORM_MS}ms ease 0ms, opacity ${Math.max(280, FORM_MS - 320)}ms ease 0ms`;
          moveDot(dot.el, p, 0.05);
        }
      }
    });
  }

  function clearTimers() {
    if (cycleTimer) {
      clearTimeout(cycleTimer);
      cycleTimer = null;
    }
  }

  function isMobileView() {
    return window.innerWidth < 700;
  }

  function runCycle() {
    clearTimers();
    if (isMobileView()) {
      // Mobile: nur kontinuierlicher Punkt-Regen, keine Textbildung.
      startFalling();
      return;
    }
    startFalling();
    cycleTimer = window.setTimeout(() => {
      stopFalling();
      formWordLayered();
      cycleTimer = window.setTimeout(() => {
        scatterDots();
        cycleTimer = window.setTimeout(runCycle, DISPERSE_MS + 350);
      }, FORM_MS + HOLD_MS);
    }, FALL_MS);
  }

  scatterDots();
  cycleTimer = window.setTimeout(runCycle, 350);

  window.addEventListener("resize", () => {
    scatterDots();
    if (isFalling) {
      // Falls beim Resize gerade die Fall-Phase laeuft, Positionen neu einrasten.
      for (const dot of dots) {
        dot.x = alignToGrid(Math.random() * window.innerWidth);
      }
    }
    clearTimers();
    stopFalling();
    runCycle();
  });

  window.addEventListener("beforeunload", () => {
    stopFalling();
    clearTimers();
  });
}

initGridRain();

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

function setNavOpen(open) {
  if (!(navToggle instanceof HTMLButtonElement) || !(siteNav instanceof HTMLElement)) return;
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  siteNav.classList.toggle("is-open", open);
}

if (navToggle instanceof HTMLButtonElement && siteNav instanceof HTMLElement) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (navToggle.contains(target) || siteNav.contains(target)) return;
    setNavOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  siteNav.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a[href]");
    if (!(link instanceof HTMLAnchorElement)) return;

    // Keep native link behavior intact and close menu right after.
    if (link.target === "_blank") {
      setNavOpen(false);
      return;
    }
    window.setTimeout(() => setNavOpen(false), 0);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setNavOpen(false);
  });
}

const requestForm = document.getElementById("request-form");

if (requestForm instanceof HTMLFormElement) {
  const requestInput = document.getElementById("request");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const requestText =
      requestInput instanceof HTMLTextAreaElement ? requestInput.value.trim() : "";
    const name =
      nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const email =
      emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
    const phone =
      phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "";

    if (!requestText || !name || !email) {
      requestForm.reportValidity();
      return;
    }

    const to = "hello@example.com";
    const subject = "Projektanfrage";
    const bodyLines = [
      "Hallo Bytes & Layers,",
      "",
      "ich moechte folgendes anfragen:",
      "- Bezug: Allgemeine Projektanfrage",
      "",
      "Anfrage:",
      requestText,
      "",
      "Kontaktdaten:",
      `- Name: ${name}`,
      `- E-Mail: ${email}`,
      phone ? `- Telefon: ${phone}` : null,
      "",
      "Viele Gruesse",
      name,
    ].filter(Boolean);

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  });
}

const contactForm = document.getElementById("contact-form");

if (contactForm instanceof HTMLFormElement) {
  const topicInput = document.getElementById("contact-topic");
  const messageInput = document.getElementById("contact-message");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const phoneInput = document.getElementById("contact-phone");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const topic = topicInput instanceof HTMLSelectElement ? topicInput.value.trim() : "";
    const message =
      messageInput instanceof HTMLTextAreaElement ? messageInput.value.trim() : "";
    const name = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const email = emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
    const phone = phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "";

    if (!topic || !message || !name || !email) {
      contactForm.reportValidity();
      return;
    }

    const to = "hello@example.com";
    const subject = `Kontaktanfrage: ${topic}`;
    const bodyLines = [
      "Hallo Bytes & Layers,",
      "",
      `Thema: ${topic}`,
      "",
      "Nachricht:",
      message,
      "",
      "Kontaktdaten:",
      `- Name: ${name}`,
      `- E-Mail: ${email}`,
      phone ? `- Telefon: ${phone}` : null,
      "",
      "Viele Gruesse",
      name,
    ].filter(Boolean);

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
  });
}

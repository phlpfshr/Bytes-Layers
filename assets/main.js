const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const languageButtons = Array.from(document.querySelectorAll(".lang-btn[data-lang]"));

if (languageButtons.length > 0) {
  const supportedLanguages = new Set(["de", "en", "fr"]);
  let currentLanguage = "de";

  function setText(selector, value) {
    if (!value) return;
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function setAttr(selector, attr, value) {
    if (!value) return;
    const node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  }

  function setMetaDescription(value) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta && value) meta.setAttribute("content", value);
  }

  function applyCommonTranslations(t) {
    setAttr(".lang-switch", "aria-label", t.langLabel);
    setAttr(".logo", "aria-label", t.homeLabel);
    setAttr(".home-icon", "aria-label", t.homeLabel);
    setAttr(".header-ig", "aria-label", t.instagramLabel);
    setAttr(".site-nav .icon-btn", "aria-label", t.instagramLabel);
    setAttr(".nav-toggle", "aria-label", t.menuLabel);
    setAttr("#site-nav", "aria-label", t.mainNavigationLabel);
    setText('#site-nav a[href="products.html"]', t.navProducts);
    setText('#site-nav a[href="projektanfrage.html"]', t.navProjectRequest);
    setAttr(".site-footer nav", "aria-label", t.legalLabel);
    setText('.site-footer nav a[href="legal/impressum.html"]', t.legalImprint);
    setText('.site-footer nav a[href="legal/datenschutz.html"]', t.legalPrivacy);
    setText('.site-footer nav a[href="legal/agb.html"]', t.legalTerms);
    setText('.site-footer nav a[href="legal/widerruf.html"]', t.legalWithdrawal);
  }

  function applyPageTranslations(lang) {
    const common = {
      de: {
        langLabel: "Sprache",
        homeLabel: "Startseite",
        instagramLabel: "Instagram Profil",
        menuLabel: "Menü",
        mainNavigationLabel: "Hauptnavigation",
        navProducts: "Produkte",
        navProjectRequest: "Projektanfrage",
        legalLabel: "Rechtliches",
        legalImprint: "Impressum",
        legalPrivacy: "Datenschutz",
        legalTerms: "AGB",
        legalWithdrawal: "Widerruf",
      },
      en: {
        langLabel: "Language",
        homeLabel: "Home",
        instagramLabel: "Instagram profile",
        menuLabel: "Menu",
        mainNavigationLabel: "Main navigation",
        navProducts: "Products",
        navProjectRequest: "Project request",
        legalLabel: "Legal",
        legalImprint: "Imprint",
        legalPrivacy: "Privacy",
        legalTerms: "Terms",
        legalWithdrawal: "Withdrawal",
      },
      fr: {
        langLabel: "Langue",
        homeLabel: "Accueil",
        instagramLabel: "Profil Instagram",
        menuLabel: "Menu",
        mainNavigationLabel: "Navigation principale",
        navProducts: "Produits",
        navProjectRequest: "Demande de projet",
        legalLabel: "Mentions légales",
        legalImprint: "Mentions légales",
        legalPrivacy: "Confidentialité",
        legalTerms: "CGV",
        legalWithdrawal: "Rétractation",
      },
    };

    applyCommonTranslations(common[lang]);
    const page = window.location.pathname.split("/").pop() || "index.html";

    if (page === "index.html") {
      const map = {
        de: { title: "Bytes & Layers", description: "Bytes & Layers - Produktanfragen und Informationen." },
        en: { title: "Bytes & Layers", description: "Bytes & Layers - product requests and information." },
        fr: { title: "Bytes & Layers", description: "Bytes & Layers - demandes produit et informations." },
      };
      document.title = map[lang].title;
      setMetaDescription(map[lang].description);
    }


    if (page === "projektanfrage.html") {
      const map = {
        de: {
          title: "Projektanfrage - Bytes & Layers",
          h1: "Projektanfrage",
          request: "Anfrage",
          requestPlaceholder: "Beschreibe kurz dein Projekt oder deine Anfrage",
          contact: "Kontakt",
          name: "Name",
          email: "E-Mail",
          phone: "Telefon (optional)",
          send: "Jetzt anfragen",
          contactPage: "Kontaktseite",
          help: "Beim Absenden wird deine Anfrage als E-Mail vorbereitet.",
        },
        en: {
          title: "Project Request - Bytes & Layers",
          h1: "Project request",
          request: "Request",
          requestPlaceholder: "Briefly describe your project or request",
          contact: "Contact",
          name: "Name",
          email: "Email",
          phone: "Phone (optional)",
          send: "Send request",
          contactPage: "Contact page",
          help: "On submit, your request is prepared as an email.",
        },
        fr: {
          title: "Demande de projet - Bytes & Layers",
          h1: "Demande de projet",
          request: "Demande",
          requestPlaceholder: "Décris brièvement ton projet ou ta demande",
          contact: "Contact",
          name: "Nom",
          email: "E-mail",
          phone: "Téléphone (optionnel)",
          send: "Envoyer la demande",
          contactPage: "Page contact",
          help: "À l'envoi, ta demande est préparée en e-mail.",
        },
      };
      const t = map[lang];
      document.title = t.title;
      setText("main h1", t.h1);
      setText('label[for="request"]', t.request);
      setAttr("#request", "placeholder", t.requestPlaceholder);
      setText(".form-section .section-title-center", t.contact);
      setText('label[for="name"]', t.name);
      setText('label[for="email"]', t.email);
      setText('label[for="phone"]', t.phone);
      setText("#request-form button[type='submit']", t.send);
      setText("#request-help", t.help);
    }

    if (page === "produktanfrage.html") {
      const map = {
        de: {
          title: "Produktanfrage - Bytes & Layers",
          h1: "Produktanfrage",
          product: "Produkt",
          quantity: "Benötigte Menge",
          contact: "Kontaktdaten",
          name: "Name",
          email: "E-Mail",
          phone: "Telefon (optional)",
          notes: "Anmerkungen (optional)",
          notesPlaceholder: "Weitere Hinweise zur Anfrage",
          send: "Produkt anfragen",
          back: "Zurück zur Startseite",
          help: "Beim Absenden wird deine Produktanfrage als E-Mail vorbereitet.",
        },
        en: {
          title: "Product Request - Bytes & Layers",
          h1: "Product request",
          product: "Product",
          quantity: "Required quantity",
          contact: "Contact details",
          name: "Name",
          email: "Email",
          phone: "Phone (optional)",
          notes: "Notes (optional)",
          notesPlaceholder: "Additional request notes",
          send: "Request product",
          back: "Back to home",
          help: "On submit, your product request is prepared as an email.",
        },
        fr: {
          title: "Demande produit - Bytes & Layers",
          h1: "Demande produit",
          product: "Produit",
          quantity: "Quantité nécessaire",
          contact: "Coordonnées",
          name: "Nom",
          email: "E-mail",
          phone: "Téléphone (optionnel)",
          notes: "Remarques (optionnel)",
          notesPlaceholder: "Informations complémentaires",
          send: "Demander ce produit",
          back: "Retour à l'accueil",
          help: "À l'envoi, ta demande produit est préparée en e-mail.",
        },
      };
      const t = map[lang];
      document.title = t.title;
      setText("main h1", t.h1);
      setText('label[for="product-request-product"]', t.product);
      setText(".form-row:nth-of-type(2) .label", t.quantity);
      setAttr(".quantity-options", "aria-label", t.quantity);
      setText(".form-section .section-title-center", t.contact);
      setText('label[for="product-request-name"]', t.name);
      setText('label[for="product-request-email"]', t.email);
      setText('label[for="product-request-phone"]', t.phone);
      setText('label[for="product-request-notes"]', t.notes);
      setAttr("#product-request-notes", "placeholder", t.notesPlaceholder);
      setText("#product-request-form button[type='submit']", t.send);
      setText("#product-request-form .btn[href='index.html']", t.back);
      setText("#product-request-form .form-help", t.help);
    }

    if (page === "products.html") {
      const map = {
        de: {
          title: "Produkte - Bytes & Layers",
          h1: "Produkte",
          cards: [
            {
              name: "Fusion",
              price: "Preis auf Anfrage",
              summary: "Fusion ist eine smarte Cocktail-Maschine für Events, Bars und Aktivierungen. Sie automatisiert die Zubereitung und sorgt für konstant reproduzierbare Drinks.",
              features: [
                "Steuerung und Rezeptverwaltung bequem über App",
                "Mixverhältnisse je Drink individuell einstellbar",
                "Schnelle Ausgabe auch bei hoher Nachfrage",
              ],
              specs: [
                "Flaschenanschlüsse: bis zu 5",
                "Steuerung: App-basiert (iOS/Android)",
                "Rezeptlogik: frei konfigurierbare Mixprofile",
              ],
              request: "Anfrage für Fusion stellen",
            },
            {
              name: "Racer",
              price: "Preis auf Anfrage",
              summary: "Racer ist ein interaktives Timing-Gerät: Man stellt ein Bier auf die Fläche, startet den Run und misst die Zeit präzise. So entstehen kurze, kompetitive Challenges mit hohem Unterhaltungswert.",
              features: [
                "Mehrere Spielmodi für Solo, Battle und Turnier-Format",
                "Companion-App mit Session-Daten und Nutzerprofilen",
                "Live-Highscore für Wettbewerb und wiederholte Teilnahme",
              ],
              specs: [
                "Messprinzip: kontaktbasierte Start-/Stop-Erkennung",
                "Konnektivität: App-Anbindung für Scores und Rankings",
                "Betrieb: Event-ready Setup mit schneller Inbetriebnahme",
              ],
              request: "Anfrage für Racer stellen",
            },
            {
              name: "Sizzler",
              price: "Preis auf Anfrage",
              summary: "Sizzler ist eine modulare Kochbox als robuste Alu-Box mit integriertem Stauraum. Primär ist sie für Camping konzipiert, eignet sich aber ebenso für weitere mobile Einsatzbereiche.",
              features: [
                "Montierbare Ablageflächen, auch als Schneidebretter nutzbar",
                "Magnet-Halterung für Messer und strukturierter Arbeitsbereich",
                "Innenbeleuchtung und integriertes Gewürzregal",
              ],
              specs: [
                "Gehäuse: Alu-Box mit Stauraum",
                "Kochstelle: eingebauter Gaskocher",
                "Ausstattung: integrierte Ablagen und Messer-Magnetschiene",
              ],
              request: "Anfrage für Sizzler stellen",
            },
          ],
          details: "Details",
          close: "Details schließen",
          blockDescription: "Beschreibung",
          blockFeatures: "Main features",
          blockSpecs: "Technische Daten",
        },
        en: {
          title: "Products - Bytes & Layers",
          h1: "Products",
          cards: [
            {
              name: "Fusion",
              price: "Price on request",
              summary: "Fusion is an automated cocktail station for consistent drinks at high throughput. The system handles dosing and flow with repeatable quality.",
              features: [
                "Automated recipe control for consistent taste",
                "Fast output under high event demand",
                "Brand-ready surfaces and modular integration",
              ],
              specs: [
                "Power supply: 230 V",
                "Control: touch display + preset recipes",
                "Output: up to 120 drinks per hour",
              ],
              request: "Request Fusion",
            },
            {
              name: "Racer",
              price: "Price on request",
              summary: "Racer is an interactive timing device: place a beer on the surface, start the run, and track the time precisely. It creates short, competitive challenges with strong engagement.",
              features: [
                "Multiple game modes for solo, battle and tournament",
                "Companion app with session data and user profiles",
                "Live highscore for competition and repeated participation",
              ],
              specs: [
                "Measurement: contact-based start/stop detection",
                "Connectivity: app integration for scores and rankings",
                "Operation: event-ready setup with quick start",
              ],
              request: "Request Racer",
            },
            {
              name: "Sizzler",
              price: "Price on request",
              summary: "Sizzler is a modular cooking box for live cooking, sampling and branded product experiences. The setup adapts flexibly to venue and visitor flow.",
              features: [
                "Modular stations for different food concepts",
                "Efficient setup and teardown for roadshows",
                "Suitable for pop-ups, festivals and retail activations",
              ],
              specs: [
                "Modules: 3 to 6 stations",
                "Connection: 230 V, water connection optional",
                "Mobility: rollable and transport-optimized",
              ],
              request: "Request Sizzler",
            },
          ],
          details: "Details",
          close: "Close details",
          blockDescription: "Description",
          blockFeatures: "Main features",
          blockSpecs: "Technical data",
        },
        fr: {
          title: "Produits - Bytes & Layers",
          h1: "Produits",
          cards: [
            {
              name: "Fusion",
              price: "Prix sur demande",
              summary: "Fusion est une station de cocktails automatisée pour des boissons constantes à haut débit. Le système gère le dosage et le flux avec une qualité reproductible.",
              features: [
                "Contrôle automatisé des recettes pour un goût constant",
                "Distribution rapide en forte affluence",
                "Surfaces brandables et intégration modulaire",
              ],
              specs: [
                "Alimentation: 230 V",
                "Commande: écran tactile + recettes prédéfinies",
                "Capacité: jusqu'à 120 boissons par heure",
              ],
              request: "Demander Fusion",
            },
            {
              name: "Racer",
              price: "Prix sur demande",
              summary: "Racer est un dispositif de chronométrage interactif: posez une bière sur la surface, lancez la manche et mesurez le temps avec précision. Cela crée des défis courts et compétitifs.",
              features: [
                "Plusieurs modes de jeu: solo, battle et tournoi",
                "Application compagnon avec données de session et profils",
                "Highscore en direct pour stimuler la compétition",
              ],
              specs: [
                "Mesure: détection départ/arrêt par contact",
                "Connectivité: application pour scores et classements",
                "Exploitation: setup événementiel prêt à l'emploi",
              ],
              request: "Demander Racer",
            },
            {
              name: "Sizzler",
              price: "Prix sur demande",
              summary: "Sizzler est une box de cuisine modulaire pour live cooking, sampling et expériences produits de marque. Le setup s'adapte au lieu et au flux de visiteurs.",
              features: [
                "Stations modulaires pour différents concepts food",
                "Montage et démontage efficaces pour roadshows",
                "Adapté aux pop-ups, festivals et activations retail",
              ],
              specs: [
                "Modules: 3 à 6 stations",
                "Connexion: 230 V, arrivée d'eau optionnelle",
                "Mobilité: sur roulettes et optimisé pour le transport",
              ],
              request: "Demander Sizzler",
            },
          ],
          details: "Détails",
          close: "Fermer les détails",
          blockDescription: "Description",
          blockFeatures: "Main features",
          blockSpecs: "Données techniques",
        },
      };
      const t = map[lang];
      document.title = t.title;
      setText("main h1", t.h1);

      const cards = Array.from(document.querySelectorAll("[data-product-card]"));
      cards.forEach((card, idx) => {
        const entry = t.cards[idx];
        if (!entry || !(card instanceof HTMLElement)) return;
        const heading = card.querySelector("h2");
        if (heading) heading.textContent = entry.name;
        const price = card.querySelector("p strong");
        if (price) price.textContent = entry.price;
        const blockTitles = card.querySelectorAll(".product-detail-block h3");
        if (blockTitles[0]) blockTitles[0].textContent = t.blockDescription;
        if (blockTitles[1]) blockTitles[1].textContent = t.blockFeatures;
        if (blockTitles[2]) blockTitles[2].textContent = t.blockSpecs;
        const summary = card.querySelector(".product-detail-block:nth-of-type(1) p");
        if (summary) summary.textContent = entry.summary;
        const featureItems = card.querySelectorAll(".product-detail-block:nth-of-type(2) li");
        featureItems.forEach((li, i) => {
          if (entry.features[i]) li.textContent = entry.features[i];
        });
        const specItems = card.querySelectorAll(".product-detail-block:nth-of-type(3) li");
        specItems.forEach((li, i) => {
          if (entry.specs[i]) li.textContent = entry.specs[i];
        });
        const requestBtn = card.querySelector(".product-request-btn");
        if (requestBtn) requestBtn.textContent = entry.request;
      });

      for (const button of document.querySelectorAll("[data-details-toggle]")) {
        if (button instanceof HTMLButtonElement) button.textContent = t.details;
      }
      for (const button of document.querySelectorAll("[data-close-toggle]")) {
        if (button instanceof HTMLButtonElement) button.setAttribute("aria-label", t.close);
      }
    }

    if (page === "product-racer.html") {
      const map = {
        de: {
          title: "Racer - Bytes & Layers",
          description: "Racer: Gerät zum Messen der Zeit beim Bierexen, mit Modi für Solo und Teams, Highscore-Liste und App.",
          h1: "Racer",
          paragraph: "Racer misst präzise die Zeit beim Bierexen und macht daraus ein Spiel: verschiedene Modi, alleine oder im Team, plus Highscore-Liste. Die App begleitet Setup, Spielmodi und Auswertung.",
          list: [
            "Modi: Solo und Team (mehrere Runden / Challenges)",
            "Highscore-Liste (lokal oder über App, je nach Setup)",
            "App für Konfiguration, Spielsteuerung und Ergebnisse",
          ],
          price: "Preis auf Anfrage",
          cta: "Jetzt anfragen",
        },
        en: {
          title: "Racer - Bytes & Layers",
          description: "Racer: timing device for beer-chug challenges, including solo/team modes, highscore and app.",
          h1: "Racer",
          paragraph: "Racer measures beer-chug times with precision and turns it into a game: multiple modes, solo or team, plus live highscores. The app supports setup, game modes and evaluation.",
          list: [
            "Modes: solo and team (multiple rounds / challenges)",
            "Highscore ranking (local or via app, depending on setup)",
            "App for configuration, game control and results",
          ],
          price: "Price on request",
          cta: "Request now",
        },
        fr: {
          title: "Racer - Bytes & Layers",
          description: "Racer: appareil de chronométrage pour défis de bière, avec modes solo/équipe, highscore et application.",
          h1: "Racer",
          paragraph: "Racer mesure avec précision le temps de bière et en fait un jeu: plusieurs modes, en solo ou en équipe, avec highscore en direct. L'application accompagne le setup et les résultats.",
          list: [
            "Modes: solo et équipe (plusieurs manches / défis)",
            "Classement highscore (local ou via l'application)",
            "Application pour configuration, pilotage et résultats",
          ],
          price: "Prix sur demande",
          cta: "Demander maintenant",
        },
      };
      const t = map[lang];
      document.title = t.title;
      setMetaDescription(t.description);
      setText("main h1", t.h1);
      setText("main p:nth-of-type(1)", t.paragraph);
      const items = document.querySelectorAll("main ul li");
      items.forEach((li, idx) => {
        if (t.list[idx]) li.textContent = t.list[idx];
      });
      setText("main p strong", t.price);
      setText(".btn.btn-primary", t.cta);
    }

    if (page === "product-cocktail-maschine.html") {
      const map = {
        de: {
          title: "Cocktail Maschine - Bytes & Layers",
          description: "Cocktail Maschine: automatisierte Mixgetränke für Zuhause.",
          h1: "Cocktail Maschine",
          paragraph: "Kompakte Maschine zur Zubereitung klassischer und eigener Rezepte. Lieferumfang und Konfiguration werden im Checkout oder per Anfrage abgestimmt.",
          list: [
            "Versand innerhalb DE nach Absprache",
            "Gewährleistung nach gesetzlichen Vorgaben",
            "Details zu Zutatenbehältern und Reinigung in der Produktinfo",
          ],
          price: "Preis auf Anfrage",
          cta: "Jetzt anfragen",
        },
        en: {
          title: "Cocktail Machine - Bytes & Layers",
          description: "Cocktail Machine: automated mixed drinks for home and events.",
          h1: "Cocktail Machine",
          paragraph: "Compact machine for classic and custom recipes. Scope and configuration are aligned during checkout or by request.",
          list: [
            "Shipping within DE by arrangement",
            "Warranty according to legal requirements",
            "Details on ingredient containers and cleaning in product info",
          ],
          price: "Price on request",
          cta: "Request now",
        },
        fr: {
          title: "Machine à cocktails - Bytes & Layers",
          description: "Machine à cocktails: préparation automatisée de boissons mixées.",
          h1: "Machine à cocktails",
          paragraph: "Machine compacte pour préparer des recettes classiques et personnalisées. Le contenu et la configuration sont définis au checkout ou sur demande.",
          list: [
            "Livraison en DE sur accord",
            "Garantie selon les exigences légales",
            "Détails sur les réservoirs et le nettoyage dans la fiche produit",
          ],
          price: "Prix sur demande",
          cta: "Demander maintenant",
        },
      };
      const t = map[lang];
      document.title = t.title;
      setMetaDescription(t.description);
      setText("main h1", t.h1);
      setText("main p:nth-of-type(1)", t.paragraph);
      const items = document.querySelectorAll("main ul li");
      items.forEach((li, idx) => {
        if (t.list[idx]) li.textContent = t.list[idx];
      });
      setText("main p strong", t.price);
      setText(".btn.btn-primary", t.cta);
    }
  }

  function applyLanguage(lang) {
    const normalized = supportedLanguages.has(lang) ? lang : "de";
    currentLanguage = normalized;
    document.documentElement.lang = normalized;

    for (const button of languageButtons) {
      if (!(button instanceof HTMLButtonElement)) continue;
      const buttonLang = button.dataset.lang || "";
      const isActive = buttonLang === normalized;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    localStorage.setItem("site-language", normalized);
    applyPageTranslations(normalized);
  }

  const storedLanguage = localStorage.getItem("site-language") || "de";
  applyLanguage(storedLanguage);

  for (const button of languageButtons) {
    if (!(button instanceof HTMLButtonElement)) continue;
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang || "de";
      applyLanguage(nextLanguage);
    });
  }
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
    dot.style.opacity = "0.32";
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
      dot.el.style.opacity = String(0.28 + Math.random() * 0.3);
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

    if (link.target === "_blank") {
      setNavOpen(false);
      return;
    }

    // Navigate explicitly to avoid missed taps in the mobile menu.
    e.preventDefault();
    const destination = link.href;
    setNavOpen(false);
    window.location.href = destination;
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

const productRequestForm = document.getElementById("product-request-form");

if (productRequestForm instanceof HTMLFormElement) {
  const allowedProducts = new Set(["Fusion", "Racer", "Sizzler"]);
  const productInput = document.getElementById("product-request-product");
  const notesInput = document.getElementById("product-request-notes");
  const nameInput = document.getElementById("product-request-name");
  const emailInput = document.getElementById("product-request-email");
  const phoneInput = document.getElementById("product-request-phone");

  const params = new URLSearchParams(window.location.search);
  const requestedProduct = (params.get("product") || "").trim();
  const selectedProduct = allowedProducts.has(requestedProduct) ? requestedProduct : "Fusion";

  if (productInput instanceof HTMLInputElement) {
    productInput.value = selectedProduct;
  }

  productRequestForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const product = productInput instanceof HTMLInputElement ? productInput.value.trim() : "";
    const quantityChoice = productRequestForm.querySelector('input[name="quantity"]:checked');
    const quantityRaw =
      quantityChoice instanceof HTMLInputElement ? quantityChoice.value.trim() : "";
    const notes = notesInput instanceof HTMLTextAreaElement ? notesInput.value.trim() : "";
    const name = nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const email = emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
    const phone = phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "";
    const quantity = Number.parseInt(quantityRaw, 10);

    if (!product || !quantityRaw || Number.isNaN(quantity) || quantity < 1 || !name || !email) {
      productRequestForm.reportValidity();
      return;
    }

    const to = "hello@example.com";
    const subject = `Produktanfrage: ${product}`;
    const bodyLines = [
      "Hallo Bytes & Layers,",
      "",
      "ich moechte folgendes Produkt anfragen:",
      `- Produkt: ${product}`,
      `- Benoetigte Menge: ${quantity}`,
      notes ? `- Anmerkungen: ${notes}` : null,
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

const productGrid = document.getElementById("product-grid");

if (productGrid instanceof HTMLElement) {
  const cards = Array.from(productGrid.querySelectorAll("[data-product-card]"));
  let activeCard = null;
  const lightbox = document.getElementById("photo-lightbox");
  const lightboxContent = document.getElementById("photo-lightbox-content");
  let lastPhotoTrigger = null;

  function closeLightbox() {
    if (!(lightbox instanceof HTMLElement)) return;
    lightbox.hidden = true;
    if (lastPhotoTrigger instanceof HTMLButtonElement) {
      lastPhotoTrigger.focus();
    }
  }

  function setActiveCard(nextCard) {
    activeCard = nextCard;
    for (const card of cards) {
      if (!(card instanceof HTMLElement)) continue;
      const details = card.querySelector("[data-product-details]");
      const toggle = card.querySelector("[data-details-toggle]");
      const closeToggle = card.querySelector("[data-close-toggle]");
      const isActive = card === nextCard;
      const isCondensed = nextCard !== null && !isActive;

      card.classList.toggle("is-active", isActive);
      card.classList.toggle("is-condensed", isCondensed);

      if (details instanceof HTMLElement) {
        details.hidden = !isActive;
      }

      if (toggle instanceof HTMLButtonElement) {
        toggle.setAttribute("aria-expanded", isActive ? "true" : "false");
        toggle.hidden = isActive;
        toggle.textContent = document.documentElement.lang === "fr"
          ? "Détails"
          : document.documentElement.lang === "en"
            ? "Details"
            : "Details";
      }

      if (closeToggle instanceof HTMLButtonElement) {
        closeToggle.hidden = !isActive;
      }
    }
  }

  setActiveCard(null);

  productGrid.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    const photoTrigger = target.closest(".product-photo-trigger");
    if (photoTrigger instanceof HTMLButtonElement) {
      const label = photoTrigger.dataset.photoLabel || "Foto";
      if (lightbox instanceof HTMLElement && lightboxContent instanceof HTMLElement) {
        lastPhotoTrigger = photoTrigger;
        lightboxContent.textContent = label;
        lightbox.hidden = false;
      }
      return;
    }

    const toggle = target.closest("[data-details-toggle], [data-close-toggle]");
    if (!(toggle instanceof HTMLButtonElement)) return;
    const card = toggle.closest("[data-product-card]");
    if (!(card instanceof HTMLElement)) return;

    const shouldClose =
      toggle.hasAttribute("data-close-toggle") || card.classList.contains("is-active");
    setActiveCard(shouldClose ? null : card);
  });

  document.addEventListener("click", (e) => {
    if (!(activeCard instanceof HTMLElement)) return;
    if (lightbox instanceof HTMLElement && !lightbox.hidden) {
      const maybeTarget = e.target;
      if (maybeTarget instanceof Node && lightbox.contains(maybeTarget)) return;
    }
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (activeCard.contains(target)) return;
    setActiveCard(null);
  });

  if (lightbox instanceof HTMLElement) {
    lightbox.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target;
      if (!(target instanceof Element)) return;
      const closeTrigger = target.closest("[data-lightbox-close]");
      if (!closeTrigger) return;
      closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (lightbox.hidden) return;
      closeLightbox();
    });
  }
}

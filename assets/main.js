const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");

function setNavOpen(open) {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  siteNav.classList.toggle("is-open", open);
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (navToggle.contains(target) || siteNav.contains(target)) return;
    setNavOpen(false);
  });

  siteNav.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.tagName.toLowerCase() === "a") setNavOpen(false);
  });
}

const requestForm = document.getElementById("request-form");

if (requestForm instanceof HTMLFormElement) {
  const productInput = document.getElementById("product");
  const qtyInput = document.getElementById("qty");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const notesInput = document.getElementById("notes");

  const params = new URLSearchParams(window.location.search);
  const productFromQuery = params.get("product");
  if (productInput instanceof HTMLInputElement) {
    if (productFromQuery) productInput.value = productFromQuery;
    productInput.readOnly = true;
  }

  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const product =
      productInput instanceof HTMLInputElement ? productInput.value.trim() : "";
    const qty =
      qtyInput instanceof HTMLInputElement ? qtyInput.value.trim() : "";
    const name =
      nameInput instanceof HTMLInputElement ? nameInput.value.trim() : "";
    const email =
      emailInput instanceof HTMLInputElement ? emailInput.value.trim() : "";
    const phone =
      phoneInput instanceof HTMLInputElement ? phoneInput.value.trim() : "";
    const notes =
      notesInput instanceof HTMLTextAreaElement ? notesInput.value.trim() : "";

    if (!product || !qty || !name || !email) {
      requestForm.reportValidity();
      return;
    }

    const to = "hello@example.com";
    const subject = `Anfrage: ${product} (Menge: ${qty})`;
    const bodyLines = [
      "Hallo Bytes & Layers,",
      "",
      "ich moechte folgendes anfragen:",
      `- Produkt: ${product}`,
      `- Menge: ${qty}`,
      "",
      "Kontaktdaten:",
      `- Name: ${name}`,
      `- E-Mail: ${email}`,
      phone ? `- Telefon: ${phone}` : null,
      "",
      notes ? `Anmerkungen:\n${notes}` : null,
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

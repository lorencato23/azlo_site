const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const contactForm = document.querySelector("[data-contact-form]");

const syncHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

const setMenuState = (isOpen, { restoreFocus = false } = {}) => {
  if (!header || !menuButton) return;

  header.classList.toggle("nav-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");

  if (restoreFocus) menuButton.focus();
};

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    setMenuState(!header.classList.contains("nav-open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      setMenuState(false, { restoreFocus: true });
    }
  });

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("nav-open") || header.contains(event.target)) return;
    setMenuState(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1050) setMenuState(false);
  });
}

const observedSections = ["sobre", "frentes", "metodo", "contato"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const revealElements = [...document.querySelectorAll(".reveal")];

document.documentElement.classList.add("reveal-ready");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    {
      rootMargin: "-30% 0px -54% 0px",
      threshold: [0.08, 0.2, 0.35],
    },
  );

  observedSections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.1,
    },
  );

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) element.classList.add("is-visible");
    else revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

if (contactForm) {
  contactForm.setAttribute("aria-describedby", "nota-formulario");

  contactForm.addEventListener(
    "invalid",
    () => contactForm.classList.add("was-validated"),
    true,
  );

  contactForm.addEventListener("submit", (event) => {
    contactForm.classList.add("was-validated");

    if (!contactForm.checkValidity()) {
      event.preventDefault();
      contactForm.querySelector(":invalid")?.focus();
    }
  });
}

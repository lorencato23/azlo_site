"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#movimento", label: "Em movimento" },
  { href: "#frentes", label: "Frentes" },
  { href: "#metodo", label: "Método" },
  { href: "#contato", label: "Contato" },
];

export function ExperienceNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const total = root.scrollHeight - root.clientHeight;
      setScrolled(window.scrollY > 20);
      setProgress(total > 0 ? root.scrollTop / total : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (open) firstLink.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        requestAnimationFrame(() => toggle.current?.focus());
      }
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`experience-nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="experience-nav__inner">
        <a className="experience-brand" href="#inicio" aria-label="AZLO — início">
          <img src="/logos/azlo-symbol-real-white.png" alt="" width="350" height="355" />
          <span>AZLO</span>
        </a>

        <nav className="experience-nav__links" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a
          className="experience-nav__cta"
          href="mailto:contato@azlo.com.br?subject=Apresentar%20um%20problema"
        >
          Apresentar um problema
        </a>

        <button
          ref={toggle}
          className="experience-nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="experience-mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <span className="experience-nav__progress" style={{ transform: `scaleX(${progress})` }} />

      {open && (
        <div id="experience-mobile-menu" className="experience-mobile-menu is-open" aria-hidden="false">
          <nav aria-label="Navegação móvel">
            {links.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLink : undefined}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#divisoes", label: "Divisões" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setScrolled(window.scrollY > 24);
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(1, el.scrollTop / total) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-azlo-navy/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-container items-center justify-between px-6">
        <a href="#inicio" aria-label="AZLO — início" className="flex items-center">
          <Logo variant="negative" className="h-9 w-auto object-contain object-left" />
        </a>

        {/* Navegação desktop */}
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative px-3.5 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              {label}
              <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-azlo-teal transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden min-h-[44px] items-center justify-center rounded-md bg-azlo-teal px-5 text-sm font-semibold text-azlo-navy transition-all hover:-translate-y-0.5 hover:bg-azlo-cyan sm:inline-flex"
          >
            Começar pelo diagnóstico
          </a>

          {/* Botão do menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-md border border-white/20 text-white lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Progresso de leitura — sinal ciano fino, à la "sistema" */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] bg-azlo-teal"
        style={{ width: `${progress * 100}%` }}
      />

      {/* Painel mobile */}
      {open && (
        <nav
          aria-label="Navegação principal"
          className="border-t border-white/10 bg-azlo-navy px-6 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center text-base font-medium text-white/85 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-azlo-teal px-5 text-sm font-semibold text-azlo-navy hover:bg-azlo-cyan"
              >
                Começar pelo diagnóstico
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

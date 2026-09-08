"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  /** Elemento a renderizar (ex.: "li" para manter semântica de listas). */
  as?: ElementType;
  /** Atraso em ms — usado para escalonar itens de grids/listas. */
  delay?: number;
  className?: string;
}

/**
 * Revela o conteúdo ao entrar no viewport (fade + rise sutil).
 * Respeita prefers-reduced-motion: nesse caso o conteúdo aparece direto.
 * O estilo vive em globals.css ([data-reveal] / .is-visible).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      show();
      return;
    }

    // O que já está no viewport revela imediatamente, sem depender do IO —
    // garante que conteúdo above-the-fold nunca fica preso invisível.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (vh <= 0) {
      // Ambiente sem viewport mensurável (prerender, webview oculta):
      // não há reveal significativo a fazer — mostra tudo.
      show();
      return;
    }
    const rect = el.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            io.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal
      className={className}
      style={
        delay ? ({ transitionDelay: `${delay}ms` } as CSSProperties) : undefined
      }
    >
      {children}
    </Tag>
  );
}

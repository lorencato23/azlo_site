"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation, site } from "@/data/site";
import { MailIcon } from "./Icons";

export function MobileNav() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;
    const onToggle = () => {
      if (details.open) requestAnimationFrame(() => firstLinkRef.current?.focus());
    };
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) {
      event.preventDefault();
      event.stopPropagation();
      details.open = false;
      requestAnimationFrame(() => summaryRef.current?.focus());
      }
    };
    details.addEventListener("toggle", onToggle);
    details.addEventListener("keydown", closeWithEscape);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      details.removeEventListener("toggle", onToggle);
      details.removeEventListener("keydown", closeWithEscape);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <details className="mobile-nav" ref={detailsRef}>
      <summary ref={summaryRef}><span>Menu</span><i aria-hidden="true" /></summary>
      <nav aria-label="Navegação móvel">
        {navigation.map((item, index) => {
          const base = item.href.split("#")[0];
          const active = base === "/" ? pathname === "/" : pathname.startsWith(base);
          return <Link key={item.href} href={item.href} ref={index === 0 ? firstLinkRef : undefined} onClick={closeMenu} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined}><span>0{index + 1}</span>{item.label}</Link>;
        })}
        <Link className="mobile-nav__cta" href="/contato" onClick={closeMenu}>Descrever um problema</Link>
        <a href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /> {site.email}</a>
      </nav>
    </details>
  );
}

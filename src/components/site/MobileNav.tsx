"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navigation, site } from "@/data/site";
import { MailIcon } from "./Icons";

export function MobileNav() {
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
      if (event.key !== "Escape" || !details.open) return;
      event.preventDefault();
      event.stopPropagation();
      details.open = false;
      requestAnimationFrame(() => summaryRef.current?.focus());
    };
    const onDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && details.open) closeWithEscape(event);
    };
    details.addEventListener("toggle", onToggle);
    details.addEventListener("keydown", closeWithEscape);
    document.addEventListener("keydown", onDocumentKeyDown);
    return () => {
      details.removeEventListener("toggle", onToggle);
      details.removeEventListener("keydown", closeWithEscape);
      document.removeEventListener("keydown", onDocumentKeyDown);
    };
  }, []);

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  return (
    <details className="mobile-nav" ref={detailsRef}>
      <summary ref={summaryRef}><span>Menu</span><i aria-hidden="true" /></summary>
      <nav aria-label="Navegação móvel">
        {navigation.map((item, index) => (
          <Link key={item.href} href={item.href} ref={index === 0 ? firstLinkRef : undefined} onClick={closeMenu}>
            <span>0{index + 1}</span>{item.label}
          </Link>
        ))}
        <a href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /> {site.email}</a>
      </nav>
    </details>
  );
}

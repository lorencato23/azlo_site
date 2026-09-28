"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="site-frame site-header__inner">
        <Link className="brand-lockup" href="/" aria-label="AZLO — início">
          <img src="/logos/azlo-symbol-real-white.png" width="350" height="355" alt="" />
          <span>AZLO</span>
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => {
            const base = item.href.split("#")[0];
            const active = base === "/" ? pathname === "/" : pathname.startsWith(base);
            return <Link key={item.href} href={item.href} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>
        <Link className="header-contact" href="/contato">
          Descrever um problema <ArrowUpRightIcon />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

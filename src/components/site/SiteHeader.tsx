import Link from "next/link";
import { navigation } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-frame site-header__inner">
        <Link className="brand-lockup" href="/" aria-label="AZLO — início">
          <img src="/logos/azlo-symbol-real-white.png" width="350" height="355" alt="" />
          <span>AZLO</span>
        </Link>
        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-contact" href="/contato">
          Descrever um problema <ArrowUpRightIcon />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}

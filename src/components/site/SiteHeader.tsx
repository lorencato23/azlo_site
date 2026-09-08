import Link from "next/link";
import { navigation, site } from "@/data/site";
import { ArrowUpRightIcon, MailIcon } from "./Icons";

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
          Conversar <ArrowUpRightIcon />
        </Link>
        <details className="mobile-nav">
          <summary><span>Menu</span><i aria-hidden="true" /></summary>
          <nav aria-label="Navegação móvel">
            {navigation.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <span>0{index + 1}</span>{item.label}
              </Link>
            ))}
            <a href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}>
              <MailIcon /> {site.email}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}

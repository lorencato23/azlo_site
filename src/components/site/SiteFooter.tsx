import Link from "next/link";
import { navigation, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-frame site-footer__main">
        <div>
          <Link className="brand-lockup" href="/" aria-label="AZLO — início">
            <img src="/logos/azlo-symbol-real-white.png" width="350" height="355" alt="" />
            <span>AZLO</span>
          </Link>
          <p>Engenharia de IA, infraestrutura e software para fluxos reais.</p>
        </div>
        <nav aria-label="Links do rodapé">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="site-footer__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}>
          {site.email}
        </a>
      </div>
      <div className="site-frame site-footer__base">
        <span>© {new Date().getFullYear()} AZLO</span>
        <span>Technology applied with method.</span>
        <span>Não envie dados clínicos ou pessoais sensíveis por e-mail.</span>
      </div>
    </footer>
  );
}

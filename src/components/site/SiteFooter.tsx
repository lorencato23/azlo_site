import Link from "next/link";
import { navigation, products, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-frame site-footer__main">
        <div className="site-footer__brand">
          <Link className="brand-lockup" href="/" aria-label="AZLO — início">
            <img src="/logos/azlo-symbol-real-white.png" width="350" height="355" alt="" />
            <span>AZLO</span>
          </Link>
          <p>ENGENHARIA PARA SISTEMAS QUE PRECISAM OPERAR.</p>
          <strong>Inteligência exige infraestrutura.</strong>
        </div>
        <div className="site-footer__column">
          <p className="mono-label">ENGENHARIA</p>
          <Link href="/servicos">Sistemas & saúde</Link>
          <Link href="/servicos">IA & conhecimento</Link>
          <Link href="/servicos">Infraestrutura & dados</Link>
          <Link href="/servicos">Automação</Link>
        </div>
        <div className="site-footer__column">
          <p className="mono-label">LABS</p>
          {products.map((product) => <Link key={product.slug} href={`/labs/${product.slug}`}>AZLO / {product.name}</Link>)}
        </div>
        <div className="site-footer__column">
          <p className="mono-label">AZLO</p>
          {navigation.slice(2).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/sobre#team">Equipe</Link>
          <a className="site-footer__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}>{site.email}</a>
        </div>
      </div>
      <div className="site-frame site-footer__base">
        <span>São Paulo · Brasil</span>
        <span>© {new Date().getFullYear()} AZLO</span>
        <span>Não envie dados clínicos identificáveis ou credenciais por e-mail.</span>
      </div>
    </footer>
  );
}

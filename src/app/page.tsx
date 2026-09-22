import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, MailIcon } from "@/components/site/Icons";
import { ProductCard } from "@/components/site/ProductCard";
import { products, services, featuredProjects, currentTeam, method, site } from "@/data/site";

export default function Home() {
  return (
    <main id="main">
      <section className="hero hero--system">
        <div className="hero__grid" aria-hidden="true" />
        <div className="site-frame hero__layout">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light"><span />AZLO · SYSTEMS ENGINEERING</p>
            <h1>Engenharia para sistemas que precisam <em>funcionar no mundo real.</em></h1>
            <p className="hero__lead">Entramos onde processo, dados e ambiente técnico precisam voltar a trabalhar juntos.</p>
            <div className="hero__actions"><Link className="button button--primary" href="/servicos">Explorar Engineering <ArrowRightIcon /></Link><Link className="button button--secondary" href="/labs">Explorar Labs <ArrowRightIcon /></Link></div>
            <p className="hero__proof">SYSTEMS · AI · INFRASTRUCTURE · AUTOMATION</p>
          </div>
          <SystemTopology />
        </div>
      </section>

      <section className="section topology-section">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow"><span />OPERATION TOPOLOGY</p><h2>Contexto antes de <em>ferramenta.</em></h2></div><p>Uma operação deixa sinais. A engenharia organiza contexto antes de escolher a intervenção.</p></div>
          <ol className="topology-rail"><li><span>01</span><strong>OPERAÇÃO</strong><small>Pessoas, rotinas, restrições</small></li><li><span>02</span><strong>SINAIS</strong><small>Dados, falhas, atrito</small></li><li className="is-active"><span>03</span><strong>CONTEXTO</strong><small>Fluxo, acesso, prioridade</small></li><li><span>04</span><strong>INTERVENÇÃO</strong><small>IA, software, infraestrutura</small></li><li><span>05</span><strong>FEEDBACK</strong><small>Operação mais clara</small></li></ol>
        </div>
      </section>

      <section className="section engineering-section" id="engineering">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow eyebrow--light"><span />AZLO / ENGINEERING</p><h2>Confiança na <em>execução.</em></h2></div><p>Capacidade organizada por tipo de intervenção. A tecnologia entra depois do problema e permanece ligada à operação.</p></div>
          <div className="engineering-grid">{services.map((service) => <article className="engineering-module" key={service.index}><span className="engineering-module__number">{service.index}</span><p className="mono-label">{service.module}</p><h3>{service.title}</h3><p>{service.intervention}</p><ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul><Link href="/servicos">Ver módulo <ArrowRightIcon /></Link></article>)}</div>
        </div>
      </section>

      <section className="section labs-section" id="labs">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow"><span />AZLO / LABS</p><h2>Sistemas experimentais para conhecimento, agentes e <em>infraestrutura.</em></h2></div><p>Produtos próprios, sistemas experimentais, R&amp;D e ferramentas que amadurecem dentro da mesma organização de engenharia.</p></div>
          <div className="labs-grid">{products.map((product) => <ProductCard key={product.slug} product={product} featured={product.slug === "mnemusa"} />)}</div>
          <Link className="section-link" href="/labs">Abrir matriz de produtos <ArrowRightIcon /></Link>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow eyebrow--light"><span />WORK / SELECTED</p><h2>Prova técnica em <em>estágios visíveis.</em></h2></div><Link className="text-link text-link--light" href="/projetos">Ver todo o trabalho <ArrowRightIcon /></Link></div>
          <div className="selected-work">{featuredProjects.map((project) => <article key={project.slug}><div><span className="mono-label">{project.workType}</span><h3>{project.title}</h3><p>{project.summary}</p></div><Link className="icon-link" href={`/projetos/${project.slug}`} aria-label={`Abrir ${project.title}`}><ArrowRightIcon /></Link></article>)}</div>
        </div>
      </section>

      <section className="section method-section">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow"><span />METHOD</p><h2>Entender. Desenhar. Construir. <em>Operar.</em></h2></div><p>A sequência reduz incerteza sem separar arquitetura, manutenção e responsabilidade.</p></div>
          <ol className="method-rail">{method.map((item) => <li key={item.number}><span>{item.number} / {item.label}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
          <Link className="section-link" href="/sobre">Conhecer método e equipe <ArrowRightIcon /></Link>
        </div>
      </section>

      <section className="people-strip" id="company"><div className="site-frame people-strip__layout"><div><p className="eyebrow"><span />COMPANY</p><h2>Pessoas próximas do <em>problema.</em></h2></div><div><p>Quem projeta participa da responsabilidade por manter o sistema compreensível, operável e rastreável.</p><ul>{currentTeam.map((member) => <li key={member.name}><b>{member.name}</b><span>{member.role}</span></li>)}</ul><Link className="text-link" href="/sobre#team">Conhecer equipe <ArrowRightIcon /></Link></div></div></section>

      <section className="contact-band"><div className="site-frame contact-band__layout"><div><p className="eyebrow eyebrow--light"><span />CONTACT / START WITH CONTEXT</p><h2>Tem uma operação que precisa voltar a fluir?</h2></div><div><p>Descreva o sistema, a fricção e o resultado que precisa acontecer.</p><a className="contact-band__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /><span>Descrever um problema</span><ArrowUpRightIcon /></a><small>Abre seu cliente de e-mail. Não envie dados clínicos identificáveis, credenciais ou tokens.</small></div></div></section>
    </main>
  );
}

function SystemTopology() {
  return <div className="system-topology" role="img" aria-label="Topologia de sistema ligando operação, dados, conhecimento, infraestrutura e agentes"><div className="system-topology__header"><span className="mono-label">SYSTEM TOPOLOGY</span><span className="system-topology__status"><i /> ONLINE</span></div><svg viewBox="0 0 520 390" aria-hidden="true"><path d="M65 80 235 195 65 310M235 195 445 80M235 195 445 310M65 80 445 80M65 310 445 310" /><circle cx="65" cy="80" r="5" /><circle cx="235" cy="195" r="7" /><circle cx="445" cy="80" r="5" /><circle cx="445" cy="310" r="5" /><circle cx="65" cy="310" r="5" /></svg><div className="system-topology__labels"><span style={{ top: "15%", left: "4%" }}>OPERATIONS</span><span style={{ top: "45%", left: "39%" }}>CONTEXT</span><span style={{ top: "15%", right: "0" }}>KNOWLEDGE</span><span style={{ bottom: "15%", right: "0" }}>AGENTS</span><span style={{ bottom: "15%", left: "4%" }}>INFRASTRUCTURE</span></div><div className="system-topology__footer"><span>ROUTES 05</span><span>SIGNAL / CONTEXT / ACTION</span></div></div>;
}

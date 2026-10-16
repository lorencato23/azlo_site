import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, MailIcon } from "@/components/site/Icons";
import { ProductCard } from "@/components/site/ProductCard";
import { products, services, featuredProjects, currentTeam, founder, method, site, workTypeLabel } from "@/data/site";

export default function Home() {
  return (
    <main id="main">
      <section className="hero hero--system">
        <div className="hero__grid" aria-hidden="true" />
        <div className="site-frame hero__layout">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light"><span />AZLO · LABORATÓRIO INDEPENDENTE</p>
            <h1>Laboratório independente de sistemas, IA e <em>infraestrutura.</em></h1>
            <p className="hero__lead">Produtos próprios para conhecimento, agentes, aprendizagem e operação, projetados por um médico que constrói sistemas. Também disponível para consultoria sob demanda.</p>
            <div className="hero__actions"><Link className="button button--primary" href="/labs">Explorar Labs <ArrowRightIcon /></Link><Link className="button button--secondary" href="/contato">Conversar sobre um projeto <ArrowRightIcon /></Link></div>
            <p className="hero__proof">LABS · PROJETOS · CONSULTORIA SOB DEMANDA</p>
          </div>
          <SystemTopology />
        </div>
      </section>

      <section className="section labs-section" id="labs">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow"><span />AZLO / LABS</p><h2>O que está sendo <em>construído.</em></h2></div><p>Sistemas próprios em estágios diferentes, do conceito à beta fechada. Cada um indica o que você pode fazer com ele hoje.</p></div>
          <div className="labs-grid">{products.map((product) => <ProductCard key={product.slug} product={product} featured={product.slug === "mnemusa"} />)}</div>
          <p className="labs-grid__hint mono-label">Use a faixa horizontal para explorar os sistemas <span aria-hidden="true">→</span></p>
          <Link className="section-link" href="/labs">Abrir matriz de produtos <ArrowRightIcon /></Link>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow eyebrow--light"><span />PROJETOS / EM DESTAQUE</p><h2>Prova técnica em <em>estágios visíveis.</em></h2></div><Link className="text-link text-link--light" href="/projetos">Ver todos os projetos <ArrowRightIcon /></Link></div>
          <div className="selected-work">{featuredProjects.map((project) => <article key={project.slug}><div><span className="mono-label">{workTypeLabel(project.workType)}</span><h3>{project.title}</h3><p>{project.summary}</p></div><Link className="icon-link" href={`/projetos/${project.slug}`} aria-label={`Abrir ${project.title}`}><ArrowRightIcon /></Link></article>)}</div>
        </div>
      </section>

      <section className="people-strip" id="company"><div className="site-frame people-strip__layout"><div><p className="eyebrow"><span />QUEM ESTÁ POR TRÁS</p><h2>Um fundador, <em>colaboradores próximos.</em></h2></div><div>{founder ? <p><b>{founder.name}</b> — {founder.bio}</p> : null}<ul>{currentTeam.map((member) => <li key={member.name}><b>{member.name}</b><span>{member.group === "founder" ? "Fundador" : `Colaborador · ${member.role}`}</span></li>)}</ul><Link className="text-link" href="/sobre#team">Conhecer a equipe <ArrowRightIcon /></Link></div></div></section>

      <section className="section topology-section">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow"><span />MAPA DA OPERAÇÃO</p><h2>Contexto antes de <em>ferramenta.</em></h2></div><p>Nos produtos e na consultoria, o ponto de partida é o mesmo: entender a operação antes de escolher a tecnologia.</p></div>
          <div className="topology-diagram"><p className="topology-diagram__flow mono-label">OPERAÇÃO → SINAL → CONTEXTO → INTERVENÇÃO → RETORNO</p><ol className="topology-rail"><li><span>01</span><strong>OPERAÇÃO</strong><small>Pessoas, rotinas, restrições</small></li><li><span>02</span><strong>SINAIS</strong><small>Dados, falhas, atrito</small></li><li className="is-active"><span>03</span><strong>CONTEXTO</strong><small>Fluxo, acesso, prioridade</small></li><li><span>04</span><strong>INTERVENÇÃO</strong><small>IA, software, infraestrutura</small></li><li><span>05</span><strong>RETORNO</strong><small>Operação mais clara</small></li></ol></div>
        </div>
      </section>

      <section className="section engineering-section" id="consultoria">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow eyebrow--light"><span />AZLO / CONSULTORIA</p><h2>Consultoria sob <em>demanda.</em></h2></div><p>Além dos Labs, a AZLO aceita projetos pontuais nas mesmas áreas em que constrói: sistemas de saúde, IA, infraestrutura e automação.</p></div>
          <div className="engineering-grid">{services.map((service) => <article className="engineering-module" key={service.index}><span className="engineering-module__number">{service.index}</span><p className="mono-label">{service.module}</p><h3>{service.title}</h3><p>{service.intervention}</p><ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul><Link href="/servicos">Ver área <ArrowRightIcon /></Link></article>)}</div>
        </div>
      </section>

      <section className="section method-section">
        <div className="site-frame">
          <div className="section-heading section-heading--split"><div><p className="eyebrow"><span />MÉTODO</p><h2>Entender. Desenhar. Construir. <em>Operar.</em></h2></div><p>A sequência reduz incerteza sem separar arquitetura, manutenção e responsabilidade.</p></div>
          <ol className="method-rail">{method.map((item) => <li key={item.number}><span>{item.number} / {item.label}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
          <Link className="section-link" href="/sobre">Conhecer método e equipe <ArrowRightIcon /></Link>
        </div>
      </section>

      <section className="contact-band"><div className="site-frame contact-band__layout"><div><p className="eyebrow eyebrow--light"><span />CONTATO</p><h2>Gostou de um projeto ou tem um problema parecido?</h2></div><div><p>Conte o contexto: interesse em um produto dos Labs, uma colaboração ou uma consultoria pontual.</p><a className="contact-band__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /><span>Escrever para a AZLO</span><ArrowUpRightIcon /></a><small>Abre seu cliente de e-mail. Não envie dados clínicos identificáveis, credenciais ou tokens.</small></div></div></section>
    </main>
  );
}

function SystemTopology() {
  return <div className="system-topology" role="img" aria-label="Esquema conceitual ligando operação, contexto, conhecimento, agentes e infraestrutura; não representa telemetria"><div className="system-topology__header"><span className="mono-label">ESQUEMA CONCEITUAL</span></div><svg viewBox="0 0 520 390" aria-hidden="true"><path d="M65 80 235 195 65 310M235 195 445 80M235 195 445 310M65 80 445 80M65 310 445 310" /><circle cx="65" cy="80" r="5" /><circle cx="235" cy="195" r="7" /><circle cx="445" cy="80" r="5" /><circle cx="445" cy="310" r="5" /><circle cx="65" cy="310" r="5" /></svg><div className="system-topology__labels"><span style={{ top: "15%", left: "4%" }}>OPERAÇÃO</span><span style={{ top: "45%", left: "39%" }}>CONTEXTO</span><span style={{ top: "15%", right: "0" }}>CONHECIMENTO</span><span style={{ bottom: "15%", right: "0" }}>AGENTES</span><span style={{ bottom: "15%", left: "4%" }}>INFRAESTRUTURA</span></div><div className="system-topology__footer"><span>MAPA CONCEITUAL · SEM TELEMETRIA</span><span>SINAL / CONTEXTO / AÇÃO</span></div></div>;
}

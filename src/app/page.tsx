import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon, LayerIcon, MailIcon } from "@/components/site/Icons";
import { currentTeam, featuredProjects, method, projects, site } from "@/data/site";

const logosmed = projects.find((project) => project.slug === "logosmed");
const supportingWork = featuredProjects.filter((project) => project.slug !== "logosmed");

export default function Home() {
  return (
    <main id="main">
      <section className="hero hero--refined">
        <div className="hero__grid" aria-hidden="true" />
        <div className="site-frame hero__layout">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light"><span />AZLO · engenharia de sistemas</p>
            <h1>IA, software e infraestrutura <em>para a operação real.</em></h1>
            <p className="hero__lead">Entramos onde processo, dados e ambiente técnico precisam voltar a trabalhar juntos.</p>
            <div className="hero__actions">
              <Link className="button button--primary" href="#problemas">Ver problemas que abordamos <ArrowRightIcon /></Link>
              <Link className="button button--secondary" href="#trabalho">Ver trabalho selecionado</Link>
            </div>
            <p className="hero__proof">Sistemas clínicos · IA aplicada · infraestrutura privada · automação</p>
          </div>

          <div className="topology" role="img" aria-label="Topologia AZLO: operação gera sinais; sinais ganham contexto; contexto orienta engenharia, ação e feedback.">
            <div className="topology__header"><span>AZLO / OPERATION TOPOLOGY</span><i>01</i></div>
            <div className="topology__canvas">
              <div className="topology__node topology__node--operation"><b>01</b><strong>Operação</strong><small>pessoas, rotinas, restrições</small></div>
              <div className="topology__node topology__node--signals"><b>02</b><strong>Sinais</strong><small>dados, falhas, atrito</small></div>
              <div className="topology__node topology__node--context"><LayerIcon /><strong>Contexto</strong><small>fluxo, acesso, prioridade</small></div>
              <div className="topology__node topology__node--action"><b>03</b><strong>Intervenção</strong><small>IA, software, infraestrutura</small></div>
              <div className="topology__node topology__node--feedback"><b>04</b><strong>Feedback</strong><small>operação mais clara</small></div>
              <svg className="topology__paths" viewBox="0 0 640 430" preserveAspectRatio="none" aria-hidden="true">
                <path d="M110 100 C190 100 190 145 285 165" />
                <path d="M120 305 C205 305 210 250 285 225" />
                <path d="M365 195 C430 195 438 150 520 128" />
                <path d="M365 220 C445 240 440 300 525 310" />
                <path className="topology__feedback-path" d="M520 330 C425 415 205 408 108 335" />
                <circle cx="325" cy="195" r="5" />
              </svg>
            </div>
            <div className="topology__footer"><span><i /> Contexto antes de ferramenta</span><span>ROUTING / DECISION / FEEDBACK</span></div>
          </div>
        </div>
      </section>

      <section className="section home-problems" id="problemas">
        <div className="site-frame">
          <div className="home-problems__intro"><p className="eyebrow"><span />Onde entramos</p><h2>Quando a operação perde <em>continuidade.</em></h2><p>O ponto de partida é a fricção observável, não uma tecnologia escolhida antes do problema.</p></div>
          <ol className="problem-list">
            <li><span>01</span><div><h3>Sistemas difíceis de operar</h3><p>HIS, integrações e rotinas internas com retrabalho, dependências ou manutenção opaca.</p></div><Link href="/servicos">Sistemas & saúde <ArrowRightIcon /></Link></li>
            <li><span>02</span><div><h3>Informação que não chega à decisão</h3><p>Conhecimento disperso, permissões frágeis e fluxos que precisam de contexto para usar IA.</p></div><Link href="/servicos">IA integrada <ArrowRightIcon /></Link></li>
            <li><span>03</span><div><h3>Infraestrutura sem trilha clara</h3><p>Dados, serviços e automações que precisam ser observáveis e sustentáveis no ambiente real.</p></div><Link href="/servicos">Infraestrutura & dados <ArrowRightIcon /></Link></li>
          </ol>
        </div>
      </section>

      <section className="section section--navy home-work" id="trabalho">
        <div className="site-frame">
          <div className="home-work__intro"><p className="eyebrow eyebrow--light"><span />Trabalho selecionado</p><h2>Prova técnica em <em>estágios visíveis.</em></h2><Link href="/projetos">Ver todos os projetos <ArrowRightIcon /></Link></div>
          {logosmed ? <article className="logos-feature">
            <div><p className="project-status project-status--light">{logosmed.status}</p><span className="logos-feature__meta">PRODUTO EDUCACIONAL · SAÚDE</span><h3>LogosMed</h3><p>{logosmed.summary}</p><a className="button button--primary" href={logosmed.externalUrl} target="_blank" rel="noreferrer">Conhecer LogosMed <ArrowUpRightIcon /></a></div>
            <ol className="logos-feature__cycle"><li><b>01</b><span>Sessão</span></li><li><b>02</b><span>Feedback</span></li><li><b>03</b><span>Rating</span></li><li><b>04</b><span>Próxima questão</span></li></ol>
          </article> : null}
          <div className="work-index">
            {supportingWork.map((project, index) => <article key={project.slug}><span>0{index + 2}</span><div><p className="project-status">{project.status}</p><h3>{project.title}</h3><p>{project.summary}</p></div><Link href={`/projetos/${project.slug}`} aria-label={`Ler caso ${project.title}`}><ArrowRightIcon /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section home-method">
        <div className="site-frame">
          <div className="home-method__intro"><p className="eyebrow"><span />Método</p><h2>Contexto antes de <em>ferramenta.</em></h2><p>Disciplina de engenharia para sair de uma hipótese e chegar a uma operação que pode ser mantida.</p></div>
          <ol className="method-rail">{method.map((item) => <li key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
          <Link className="section-link" href="/sobre">Conhecer método e time <ArrowRightIcon /></Link>
        </div>
      </section>

      <section className="home-people">
        <div className="site-frame home-people__layout"><p className="eyebrow"><span />Quem responde</p><div><h2>Engenharia conduzida por <em>pessoas próximas do problema.</em></h2><ul>{currentTeam.map((person) => <li key={person.name}><strong>{person.name}</strong><span>{person.role}</span></li>)}</ul></div><Link href="/sobre">Método & time <ArrowRightIcon /></Link></div>
      </section>

      <section className="contact-band" id="contato">
        <div className="site-frame contact-band__layout">
          <div><p className="eyebrow eyebrow--light"><span />Contato</p><h2>Tem uma operação que precisa voltar a fluir?</h2></div>
          <div><p>Descreva o sistema, a fricção e o resultado que precisa acontecer. A conversa começa pelo contexto técnico.</p><a className="contact-band__email" href={`mailto:${site.email}?subject=Conversa%20com%20a%20AZLO`}><MailIcon /><span>Conversar sobre um projeto</span><ArrowUpRightIcon /></a><small>Abre seu cliente de e-mail. Não envie dados clínicos identificáveis, credenciais ou tokens.</small></div>
        </div>
      </section>
    </main>
  );
}

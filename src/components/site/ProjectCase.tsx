import Link from "next/link";
import type { Project } from "@/data/site";
import { ArrowRightIcon, ArrowUpRightIcon, LayerIcon } from "./Icons";
import { site } from "@/data/site";

export function ProjectCase({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;

  const isAna = project.slug === "ana";
  const isLogos = project.slug === "logosmed";

  return (
    <main id="main">
      <section className="case-hero">
        <div className="site-frame case-hero__layout">
          <div>
            <p className="eyebrow eyebrow--light"><span />{project.category}</p>
            <p className={`project-status project-status--light project-status--${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            {project.externalUrl ? (
              <a className="button button--primary" href={project.externalUrl} target="_blank" rel="noreferrer">
                Conhecer LogosMed <ArrowUpRightIcon />
              </a>
            ) : null}
          </div>
          <aside className="case-hero__signal" aria-label={`Sinal técnico de ${project.title}`}>
            <div><LayerIcon /><span>AZLO / {project.slug.toUpperCase()}</span></div>
            <ul>{project.tags.map((tag, index) => <li key={tag}><b>0{index + 1}</b>{tag}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="section case-context">
        <div className="site-frame case-context__grid">
          <div><p className="eyebrow"><span />Contexto</p><h2>O que estava em jogo.</h2></div>
          <p>{caseStudy.problem}</p>
        </div>
      </section>

      <section className="section section--paper case-intervention">
        <div className="site-frame case-intervention__grid">
          <div><p className="eyebrow"><span />Intervenção</p><h2>Uma arquitetura orientada pela <em>operação.</em></h2></div>
          <div>
            <p className="case-intervention__lead">{caseStudy.intervention}</p>
            <ul className="architecture-list" aria-label={`Arquitetura e áreas de ${project.title}`}>
              {caseStudy.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {isLogos ? <LogosFlow /> : null}
      {isAna ? <AnaFlow /> : null}

      <section className="section case-status">
        <div className="site-frame case-status__grid">
          <div><p className="eyebrow"><span />Estágio</p><h2>O status é parte da <em>informação.</em></h2></div>
          <div>
            <p className="case-status__label">{project.status}</p>
            <p>{caseStudy.statusDetail}</p>
            {caseStudy.boundary ? <p className="case-status__boundary">{caseStudy.boundary}</p> : null}
            <Link className="section-link" href={`/contato?subject=${encodeURIComponent(`Conversa sobre ${project.title}`)}`}>
              Conversar sobre este contexto <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="case-contact">
        <div className="site-frame"><p>Tem um problema parecido?</p><a href={`mailto:${site.email}?subject=${encodeURIComponent(`Conversa sobre ${project.title}`)}`}>Descrever o contexto para a AZLO <ArrowUpRightIcon /></a></div>
      </section>
    </main>
  );
}

function LogosFlow() {
  const stages = ["Sessão de questões", "Feedback", "Rating atualizado", "Próxima seleção"];
  return (
    <section className="section project-flow project-flow--logos">
      <div className="site-frame">
        <p className="eyebrow eyebrow--light"><span />Ciclo adaptativo</p>
        <div className="project-flow__head"><h2>Uma sessão deixa <em>rastro.</em></h2><p>O produto organiza prática, retorno e próxima escolha em uma sequência que acompanha o desempenho individual.</p></div>
        <ol>{stages.map((stage, index) => <li key={stage}><span>0{index + 1}</span><strong>{stage}</strong></li>)}</ol>
      </div>
    </section>
  );
}

function AnaFlow() {
  const stages = ["Sinais do servidor", "Fatos e contexto", "Hipóteses", "Plano aprovado", "Ação limitada", "Auditoria"];
  return (
    <section className="section project-flow project-flow--ana">
      <div className="site-frame">
        <p className="eyebrow eyebrow--light"><span />Modelo operacional</p>
        <div className="project-flow__head"><h2>Troubleshooting é uma cadeia de <em>evidências.</em></h2><p>ANA estrutura a investigação antes de qualquer ação e mantém a execução dentro de limites aprovados.</p></div>
        <ol>{stages.map((stage, index) => <li key={stage}><span>0{index + 1}</span><strong>{stage}</strong></li>)}</ol>
      </div>
    </section>
  );
}

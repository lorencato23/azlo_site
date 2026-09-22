import Link from "next/link";
import type { Project } from "@/data/site";
import { ArrowRightIcon, ArrowUpRightIcon } from "./Icons";
import { site } from "@/data/site";

export function ProjectCase({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;
  if (!caseStudy) return null;
  return (
    <main id="main" className="case-page">
      <section className="case-hero">
        <div className="case-hero__grid" aria-hidden="true" />
        <div className="site-frame case-hero__layout">
          <div>
            <p className="breadcrumb mono-label">AZLO / WORK / {project.title}</p>
            <p className="eyebrow eyebrow--light"><span />{project.workType} / {project.category}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <span className="status-chip status-chip--light">{project.status}</span>
            {project.externalUrl ? <a className="button button--primary" href={project.externalUrl} target="_blank" rel="noreferrer">Abrir sistema <ArrowUpRightIcon /></a> : null}
          </div>
          <aside className="case-signal"><span className="mono-label">TRACE / {project.slug.toUpperCase()}</span>{project.tags.map((tag, index) => <span key={tag}><b>0{index + 1}</b>{tag}</span>)}</aside>
        </div>
      </section>
      <section className="product-section product-section--light">
        <div className="site-frame product-section__grid"><div><p className="eyebrow"><span />01 / CONTEXT</p><h2>O que estava em <em>jogo.</em></h2></div><p>{caseStudy.problem}</p></div>
      </section>
      <section className="product-section product-section--surface">
        <div className="site-frame product-section__grid"><div><p className="eyebrow"><span />02 / INTERVENTION</p><h2>Uma arquitetura orientada pela <em>operação.</em></h2></div><div><p>{caseStudy.intervention}</p><ol className="architecture-rail architecture-rail--light">{caseStudy.architecture.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong></li>)}</ol></div></div>
      </section>
      <section className="product-section case-status-section">
        <div className="site-frame product-section__grid"><div><p className="eyebrow eyebrow--light"><span />03 / CURRENT STATE</p><h2>Estado é parte da <em>informação.</em></h2></div><div><span className="status-chip status-chip--light">{project.status}</span><p>{caseStudy.statusDetail}</p>{caseStudy.boundary ? <p className="boundary-note">{caseStudy.boundary}</p> : null}<Link className="text-link text-link--light" href={`/contato?subject=${encodeURIComponent(`Conversa sobre ${project.title}`)}`}>Discutir contexto <ArrowRightIcon /></Link></div></div>
      </section>
      <section className="case-contact"><div className="site-frame"><p>Tem um problema parecido?</p><a href={`mailto:${site.email}?subject=${encodeURIComponent(`Conversa sobre ${project.title}`)}`}>Descrever o contexto para a AZLO <ArrowUpRightIcon /></a></div></section>
    </main>
  );
}

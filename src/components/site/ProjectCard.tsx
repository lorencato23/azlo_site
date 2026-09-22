import Link from "next/link";
import type { Project } from "@/data/site";
import { ArrowRightIcon, ArrowUpRightIcon } from "./Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="work-card" id={project.slug}>
      <div className="work-card__topline"><span className="mono-label">{project.workType}</span><span className="status-chip">{project.status}</span></div>
      <p className="work-card__signature">AZLO / {project.title}</p>
      <h3>{project.title}</h3>
      <p className="work-card__summary">{project.summary}</p>
      <ul className="tag-list" aria-label={`Áreas de ${project.title}`}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      <div className="work-card__actions">
        {project.caseStudy ? <Link className="text-link" href={`/projetos/${project.slug}`}>Ler caso <ArrowRightIcon /></Link> : null}
        {project.externalUrl ? <a className="text-link" href={project.externalUrl} target="_blank" rel="noreferrer">Open system <ArrowUpRightIcon /></a> : null}
      </div>
    </article>
  );
}

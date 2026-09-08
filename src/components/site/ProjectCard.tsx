import Link from "next/link";
import type { Project } from "@/data/site";
import { ArrowRightIcon, ArrowUpRightIcon, LayerIcon } from "./Icons";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const destination = project.href ?? `/projetos#${project.slug}`;
  const externalProps = project.external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <article className={`project-card ${compact ? "project-card--compact" : ""}`} id={project.slug}>
      <div className="project-card__topline">
        <p>{project.category}</p>
        <span>{project.status}</span>
      </div>
      <div className="project-card__signal" aria-hidden="true">
        <LayerIcon />
        <span className="project-card__line" />
        <span>AZLO / {project.slug.toUpperCase()}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__summary">{project.summary}</p>
      {!compact ? <p className="project-card__detail">{project.detail}</p> : null}
      <ul className="tag-list" aria-label={`Temas de ${project.title}`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      {project.note ? <p className="project-card__note">{project.note}</p> : null}
      {project.external ? (
        <a className="text-link" href={destination} {...externalProps}>
          Conhecer LogosMed <ArrowUpRightIcon />
        </a>
      ) : (
        <Link className="text-link" href={destination}>
          Ver contexto <ArrowRightIcon />
        </Link>
      )}
    </article>
  );
}

import Link from "next/link";
import type { Project } from "@/data/site";
import { ArrowRightIcon, LayerIcon } from "./Icons";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? "project-card--compact" : ""}`} id={project.slug}>
      <div className="project-card__topline">
        <p>{project.category}</p>
        <span className={`project-status project-status--${project.status.toLowerCase().replaceAll(" ", "-")}`}>{project.status}</span>
      </div>
      <div className="project-card__signal" aria-hidden="true">
        <LayerIcon />
        <span className="project-card__line" />
        <span>AZLO / {project.slug.toUpperCase()}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-card__summary">{project.summary}</p>
      <ul className="tag-list" aria-label={`Áreas de ${project.title}`}>
        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      {project.caseStudy ? (
        <Link className="text-link" href={`/projetos/${project.slug}`}>
          Ler caso <ArrowRightIcon />
        </Link>
      ) : null}
    </article>
  );
}

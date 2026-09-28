"use client";

import { useMemo, useState } from "react";
import type { Project, WorkType } from "@/data/site";
import { ProjectCard } from "./ProjectCard";

const filters: { value: "ALL" | WorkType; label: string }[] = [
  { value: "ALL", label: "TODOS" },
  { value: "PRODUCT", label: "PRODUTO" },
  { value: "ENGINEERING", label: "ENGENHARIA" },
  { value: "R&D", label: "P&D" },
  { value: "OPEN SOURCE", label: "CÓDIGO ABERTO" },
];

export function ProjectsBrowser({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<"ALL" | WorkType>("ALL");
  const visible = useMemo(() => filter === "ALL" ? projects : projects.filter((project) => project.workType === filter), [filter, projects]);
  return (
    <div className="projects-browser">
      <div className="project-filters" role="group" aria-label="Filtrar projetos">
        {filters.map((item) => <button key={item.value} type="button" className={filter === item.value ? "is-active" : ""} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>)}
      </div>
      <p className="project-filter-status" aria-live="polite">{visible.length} {visible.length === 1 ? "item" : "itens"} em exibição</p>
      <div className="project-list">
        {visible.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </div>
  );
}

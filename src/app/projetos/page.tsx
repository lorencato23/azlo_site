import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Produtos, contribuições técnicas e sistemas em evolução, com estágio e escopo visíveis.",
  alternates: { canonical: "/projetos" },
  openGraph: { title: "Projetos | AZLO", description: "Produtos, contribuições técnicas e sistemas em evolução, com estágio e escopo visíveis.", url: "/projetos" },
  twitter: { card: "summary_large_image", title: "Projetos | AZLO", description: "Produtos, contribuições técnicas e sistemas em evolução, com estágio e escopo visíveis." },
};

export default function ProjectsPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--ice page-hero--compact">
        <div className="site-frame">
          <p className="eyebrow"><span />Projetos</p>
          <h1>Trabalho em estágios visíveis.</h1>
          <p>Produtos, contribuições técnicas e R&D. Cada caso mostra o que é, como foi construído e onde está.</p>
        </div>
      </section>
      <section className="section section--paper projects-page">
        <div className="site-frame">
          <div className="project-index-intro"><p className="eyebrow"><span />Seleção AZLO</p><p>Capacidade real aparece em decisões de arquitetura, limites claros e sistemas que podem ser examinados.</p></div>
          <div className="project-grid project-grid--all">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

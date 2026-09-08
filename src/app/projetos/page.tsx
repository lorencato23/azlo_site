import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionIntro } from "@/components/site/SectionIntro";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Produtos, sistemas internos e contribuições técnicas selecionadas da AZLO.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <main id="main">
      <section className="page-hero page-hero--ice">
        <div className="site-frame">
          <p className="eyebrow"><span />Projetos</p>
          <h1>Portfólio com estágio, escopo e limites visíveis.</h1>
          <p>O catálogo mistura produto, engenharia e pesquisa técnica. Cada card deixa claro se fala de uma entrega ativa, um MVP, uma contribuição em fork ou um conceito operacional.</p>
        </div>
      </section>
      <section className="section section--paper projects-page">
        <div className="site-frame">
          <SectionIntro eyebrow="Seleção AZLO" title={<>Projetos que sustentam uma conversa sobre <em>capacidade real.</em></>} align="start" />
          <div className="project-grid project-grid--all">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

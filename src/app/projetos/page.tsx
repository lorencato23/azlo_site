import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/site/ProjectsBrowser";
import { projects } from "@/data/site";

export const metadata: Metadata = { title: "Work", description: "Produtos, engineering, R&D e open source da AZLO, com estágio e escopo visíveis.", alternates: { canonical: "/projetos" }, openGraph: { title: "Work | AZLO", description: "Produtos, engineering, R&D e open source da AZLO, com estágio e escopo visíveis.", url: "/projetos" } };

export default function ProjectsPage() {
  return <main id="main" className="work-page"><section className="page-hero page-hero--light"><div className="site-frame"><p className="breadcrumb mono-label">AZLO / WORK</p><p className="eyebrow"><span />SELECTED SYSTEMS</p><h1>Trabalho em estágios <em>visíveis.</em></h1><p>Produtos próprios, engagements, experimentos e contribuições open source não têm o mesmo peso — por isso aparecem separados.</p></div></section><section className="section section--light"><div className="site-frame"><ProjectsBrowser projects={projects} /></div></section></main>;
}

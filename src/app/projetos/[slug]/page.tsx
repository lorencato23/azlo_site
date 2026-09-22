import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCase } from "@/components/site/ProjectCase";
import { caseStudyProjects, getProject } from "@/data/site";

type ProjectPageProps = { params: { slug: string } };
export function generateStaticParams() { return caseStudyProjects.map((project) => ({ slug: project.slug })); }
export function generateMetadata({ params }: ProjectPageProps): Metadata { const project = getProject(params.slug); if (!project?.caseStudy) return {}; return { title: `${project.title} | Work`, description: project.summary, alternates: { canonical: `/projetos/${project.slug}` }, openGraph: { title: `${project.title} | AZLO`, description: project.summary, url: `/projetos/${project.slug}`, type: "article" } }; }
export default function ProjectPage({ params }: ProjectPageProps) { const project = getProject(params.slug); if (!project?.caseStudy) notFound(); return <ProjectCase project={project} />; }

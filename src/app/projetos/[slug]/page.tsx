import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCase } from "@/components/site/ProjectCase";
import { caseStudyProjects, getProject } from "@/data/site";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudyProjects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); if (!project?.caseStudy) return {}; return { title: `${project.title} | Projetos`, description: project.summary, alternates: { canonical: `/projetos/${project.slug}` }, openGraph: { title: `${project.title} | AZLO`, description: project.summary, url: `/projetos/${project.slug}`, type: "article" } }; }
export default async function ProjectPage({ params }: ProjectPageProps) { const { slug } = await params; const project = getProject(slug); if (!project?.caseStudy) notFound(); return <ProjectCase project={project} />; }

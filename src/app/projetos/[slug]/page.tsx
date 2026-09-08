import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCase } from "@/components/site/ProjectCase";
import { caseStudyProjects, getProject, site } from "@/data/site";

type ProjectPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project?.caseStudy) return {};
  const title = `${project.title} | Projeto`;
  const description = project.summary;
  const url = `/projetos/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AZLO — engenharia para operações reais." }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);
  if (!project?.caseStudy) notFound();
  return <ProjectCase project={project} />;
}

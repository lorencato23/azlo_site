import type { MetadataRoute } from "next";
import { caseStudyProjects, products, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-22T00:00:00-03:00");
  const routes = ["", "/servicos", "/labs", "/projetos", "/sobre", "/contato"];
  return [
    ...routes.map((path, index) => ({ url: `${site.url}${path}`, lastModified: updated, changeFrequency: index === 0 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${site.url}/labs/${product.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...caseStudyProjects.map((project) => ({ url: `${site.url}/projetos/${project.slug}`, lastModified: updated, changeFrequency: "monthly" as const, priority: project.featured ? 0.8 : 0.7 })),
  ];
}

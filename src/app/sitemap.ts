import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { PROJECTS } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE.domain,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE.domain}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.filter(
    (project) => project.caseStudy
  ).map((project) => ({
    url: `${SITE.domain}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}

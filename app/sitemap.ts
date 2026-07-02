import type { MetadataRoute } from "next";
import { projects } from "@/content";
import { siteUrl } from "@/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/skills",
    "/education",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticEntries, ...projectEntries];
}

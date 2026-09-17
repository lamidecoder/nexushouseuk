import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data/projects";
import { INSIGHTS } from "@/lib/data/insights";

const SITE_URL = "https://nexushouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/services", "/studio", "/contact", "/insights", "/legal"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE_URL}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = INSIGHTS.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}

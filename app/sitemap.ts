import type { MetadataRoute } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteSEO.baseUrl;

  // Turn each pageSEO entry into a sitemap entry
  const routes: MetadataRoute.Sitemap = Object.values(pageSEO).map((seo) => ({
    url: `${baseUrl}${seo.canonical}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: seo.canonical === "/" ? 1 : 0.7,
  }));

  return routes;
}

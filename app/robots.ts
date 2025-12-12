// app/robots.ts
import type { MetadataRoute } from "next";
import { siteSEO } from "@/utils/seoConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSEO.baseUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

// app/robots.ts
import type { MetadataRoute } from "next";
import { siteSEO } from "@/utils/seoConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteSEO.baseUrl;

  // In development, return minimal config
  if (process.env.NODE_ENV === "development") {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/dashboard/"],
      },
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  }

  // In production, minimal config (static file will be used)
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

export const dynamic = "force-static";
export const revalidate = false;

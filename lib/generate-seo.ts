// lib/generate-seo.ts
import fs from "fs";
import path from "path";
import { siteSEO, pageSEO, PageSeo } from "@/utils/seoConfig";

// Define TypeScript interfaces
interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

interface SiteSEOConfig {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  baseUrl: string;
  email: string;
  phone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours: {
    mondayToSaturday: {
      opens: string;
      closes: string;
    };
    sunday: {
      opens: string;
      closes: string;
    };
  };
  ogImage: string;
  twitterImage: string;
}

export async function generateSEOFiles(): Promise<void> {
  console.log("🔧 Starting SEO file generation for Rich System Solutions...");

  try {
    // Type assertion for siteSEO
    const siteConfig = siteSEO as SiteSEOConfig;

    // Get the base URL
    const baseUrl = siteConfig.baseUrl || "https://richsol.com";
    console.log(`🌐 Using base URL: ${baseUrl}`);
    console.log(`🏢 Site Name: ${siteConfig.siteName}`);

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
      console.log("📁 Created public directory");
    }

    // ============ GENERATE SITEMAP.XML ============
    console.log("📝 Generating sitemap.xml...");

    // Get all pages from your config
    const pages = Object.values(pageSEO);

    if (pages.length === 0) {
      throw new Error("No pages found in pageSEO configuration");
    }

    console.log(`📄 Found ${pages.length} pages in configuration`);

    // Generate sitemap entries
    const sitemapUrls: SitemapEntry[] = pages.map((page: PageSeo) => {
      // Determine priority based on page type
      let priority = 0.7;
      let changeFrequency: "weekly" | "monthly" | "daily" = "weekly";

      if (page.canonical === "/") {
        priority = 1.0; // Homepage highest priority
        changeFrequency = "daily";
      } else if (page.canonical.includes("/blog")) {
        priority = 0.8; // Blog pages higher priority
        changeFrequency = "daily";
      } else if (
        page.canonical.includes("/services") ||
        page.canonical.includes("/software-it-services") ||
        page.canonical.includes("/digital-marketing-services")
      ) {
        priority = 0.9; // Service pages high priority
        changeFrequency = "weekly";
      } else if (
        page.canonical.includes("/about") ||
        page.canonical.includes("/contact") ||
        page.canonical.includes("/careers")
      ) {
        priority = 0.8; // Important info pages
        changeFrequency = "monthly";
      }

      return {
        url: `${baseUrl}${page.canonical}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority,
      };
    });

    // Sort URLs: homepage first, then by priority
    sitemapUrls.sort((a, b) => {
      if (a.priority > b.priority) return -1;
      if (a.priority < b.priority) return 1;
      return 0;
    });

    // Generate XML content
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapContent);
    console.log(`✅ Generated sitemap.xml with ${sitemapUrls.length} URLs`);

    // ============ GENERATE ROBOTS.TXT ============
    console.log("🤖 Generating robots.txt...");

    const robotsContent = `# Robots.txt for ${baseUrl}
# Rich System Solutions Pvt Ltd
# Generated: ${new Date().toISOString()}

# Primary Crawlers
User-agent: *
Allow: /

# SEO Crawlers - Special rules
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /dashboard/
Disallow: /api/
Crawl-delay: 2

User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /dashboard/
Crawl-delay: 3

User-agent: Applebot
Allow: /
Disallow: /admin/

# Social Media Crawlers
User-agent: FacebookExternalHit
Allow: /
Disallow: /admin/
Crawl-delay: 5

User-agent: Twitterbot
Allow: /
Disallow: /admin/

# Aggressive Crawlers - Rate limit
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Crawl-delay: 15

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Host
Host: ${baseUrl}

# ============ DISALLOWED PATHS ============
# Administrative areas
Disallow: /admin/
Disallow: /dashboard/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php
Disallow: /wp-content/plugins/
Disallow: /wp-content/themes/

# API & Backend
Disallow: /api/
Disallow: /graphql/
Disallow: /_next/
Disallow: /node_modules/

# Search & Filters
Disallow: /search/
Disallow: /*?s=
Disallow: /*&s=
Disallow: /*?filter=
Disallow: /*&filter=

# Session & User data
Disallow: /login/
Disallow: /logout/
Disallow: /register/
Disallow: /reset-password/
Disallow: /account/
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/

# File types to allow
Allow: /*.css$
Allow: /*.js$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.ico$
Allow: /*.woff$
Allow: /*.woff2$
Allow: /*.ttf$
Allow: /*.eot$

# ============ COMPANY INFO ============
# Company: ${siteConfig.siteName}
# Email: ${siteConfig.email}
# Phone: ${siteConfig.phone}
# Address: ${siteConfig.address.streetAddress}, ${
      siteConfig.address.addressLocality
    }, ${siteConfig.address.addressRegion} ${siteConfig.address.postalCode}`;

    fs.writeFileSync(path.join(publicDir, "robots.txt"), robotsContent);
    console.log("✅ Generated robots.txt");

    // ============ GENERATE MANIFEST.JSON ============
    console.log("📱 Generating manifest.json...");

    const manifestContent = {
      name: siteConfig.siteName,
      short_name: "RSS",
      description: siteConfig.defaultDescription,
      start_url: "/",
      display: "standalone",
      background_color: "#1a1a1a",
      theme_color: "#3B82F6",
      orientation: "portrait-primary",
      scope: "/",
      lang: "en-US",
      dir: "ltr",
      categories: ["business", "technology", "education"],
      icons: [
        {
          src: "/favicon.ico",
          sizes: "64x64 32x32 24x24 16x16",
          type: "image/x-icon",
        },
        {
          src: "/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
      screenshots: [
        {
          src: "/screenshot-desktop.png",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide",
          label: "Rich System Solutions Desktop Website",
        },
        {
          src: "/screenshot-mobile.png",
          sizes: "750x1334",
          type: "image/png",
          form_factor: "narrow",
          label: "Rich System Solutions Mobile Website",
        },
      ],
      shortcuts: [
        {
          name: "Services",
          short_name: "Services",
          description: "View our services",
          url: "/services",
          icons: [
            {
              src: "/icon-services.png",
              sizes: "96x96",
              type: "image/png",
            },
          ],
        },
        {
          name: "Contact",
          short_name: "Contact",
          description: "Contact us",
          url: "/contact",
          icons: [
            {
              src: "/icon-contact.png",
              sizes: "96x96",
              type: "image/png",
            },
          ],
        },
      ],
      prefer_related_applications: false,
      related_applications: [],
    };

    fs.writeFileSync(
      path.join(publicDir, "manifest.json"),
      JSON.stringify(manifestContent, null, 2)
    );
    console.log("✅ Generated manifest.json");

    // ============ GENERATE BROWSERCONFIG.XML (For Windows Tile) ============
    console.log("🪟 Generating browserconfig.xml...");

    const browserConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/mstile-70x70.png"/>
      <square150x150logo src="/mstile-150x150.png"/>
      <square310x310logo src="/mstile-310x310.png"/>
      <wide310x150logo src="/mstile-310x150.png"/>
      <TileColor>#3B82F6</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

    fs.writeFileSync(
      path.join(publicDir, "browserconfig.xml"),
      browserConfigContent
    );
    console.log("✅ Generated browserconfig.xml");

    console.log(
      "🎉 All SEO files generated successfully for Rich System Solutions!"
    );
    console.log("📊 Summary:");
    console.log(`   • Sitemap: ${sitemapUrls.length} pages`);
    console.log(`   • Base URL: ${baseUrl}`);
    console.log(`   • Site: ${siteConfig.siteName}`);
  } catch (error) {
    console.error("❌ Error generating SEO files:", error);
    if (error instanceof Error) {
      console.error("   Message:", error.message);
      console.error("   Stack:", error.stack);
    }
    throw error;
  }
}

// Run if this script is executed directly
if (require.main === module) {
  generateSEOFiles().catch((error) => {
    console.error("Failed to generate SEO files:", error);
    process.exit(1);
  });
}

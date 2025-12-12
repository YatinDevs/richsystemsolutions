// app/digital-marketing-services/content-marketing/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_content;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function ContentMarketingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Marketing Services",
    serviceType: "Content strategy and copywriting services",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
      address: { "@type": "PostalAddress", ...siteSEO.address },
      telephone: siteSEO.phone,
    },
    areaServed: "IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <nav className="mb-4 text-sm text-slate-600">
          <a
            href="/digital-marketing-services"
            className="text-blue-600 hover:underline"
          >
            Digital Marketing Services
          </a>{" "}
          / <span>Content Marketing</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Content Marketing Services</h1>
        <p className="text-slate-700 mb-6">
          Use consistent, SEO-friendly content to educate your audience, build
          trust and support all your digital channels.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Strategy and creation</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Content strategy based on keyword and audience research.</li>
            <li>Blog and article writing for SEO and thought leadership.</li>
            <li>Landing page and website copywriting.</li>
            <li>Copy for ads, emails and social media posts.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Optimization and measurement
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>On-page optimization of existing content.</li>
            <li>Tracking performance for traffic and engagement.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Plan a content strategy
        </a>
      </main>
    </>
  );
}

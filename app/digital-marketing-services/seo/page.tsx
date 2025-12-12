// app/digital-marketing-services/seo/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function SeoServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services",
    serviceType: "Search engine optimization services",
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
          / <span>SEO Services</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">SEO Services in Nashik</h1>
        <p className="text-slate-700 mb-6">
          Improve your search rankings, organic traffic and leads with
          structured SEO covering technical, on-page and off-page optimization.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What is included</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Keyword research and SEO strategy planning.</li>
            <li>On-page optimization for core landing pages and blogs.</li>
            <li>Technical SEO fixes and performance improvements.</li>
            <li>Local SEO for Google Business Profile and local citations.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Reporting and tracking</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Monthly ranking, traffic and conversion reports.</li>
            <li>Search Console and Analytics integration and monitoring.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Request an SEO audit
        </a>
      </main>
    </>
  );
}

// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.software_apiIntegration;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function ApiIntegrationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "API Integration Services",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
    },
    serviceType: "API Integration Services",
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
            href="/software-it-services"
            className="text-blue-600 hover:underline"
          >
            Software & IT Services
          </a>{" "}
          / <span>API Integration Services</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          API Integration Services Services
        </h1>
        <p className="text-slate-700 mb-6">
          Build scalable custom software that matches your exact business
          processes, integrates with existing tools and grows with your company.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What we deliver</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Web and desktop applications tailored to your workflows</li>
            <li>Architecture, database design and API development</li>
            <li>Integration with ERP, CRM and third‑party platforms</li>
            <li>Secure, scalable and performance‑optimized solutions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Process we follow</h2>
          <ol className="list-decimal list-inside text-slate-700 space-y-1 text-sm">
            <li>Requirement discovery and technical consulting</li>
            <li>UI/UX design, architecture and planning</li>
            <li>Agile development with regular demos</li>
            <li>Testing, deployment and ongoing support</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Use cases</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Internal tools for operations and reporting</li>
            <li>Customer portals and self‑service platforms</li>
            <li>Workflow automation and approval systems</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Discuss a custom software project
        </a>
      </main>
    </>
  );
}

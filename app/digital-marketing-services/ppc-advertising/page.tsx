// app/digital-marketing-services/ppc-advertising/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_ppc;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function PpcAdvertisingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PPC Advertising Services",
    serviceType: "Pay-per-click advertising campaigns",
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
          / <span>PPC Advertising</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">PPC Advertising Services</h1>
        <p className="text-slate-700 mb-6">
          Run high-intent Google Ads and social ads that focus on measurable
          leads and sales instead of just clicks.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What we manage</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Google Search and Display campaign setup and management.</li>
            <li>
              Facebook and Instagram ad campaigns for awareness and leads.
            </li>
            <li>Keyword research, bidding strategy and ad copy creation.</li>
            <li>Landing page recommendations to improve Quality Score.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Optimization and reporting
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Regular performance reviews and bid optimization.</li>
            <li>Conversion tracking and ROI-focused reporting.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Launch a PPC campaign
        </a>
      </main>
    </>
  );
}

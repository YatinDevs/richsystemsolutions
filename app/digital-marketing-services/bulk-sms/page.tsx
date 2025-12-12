// app/digital-marketing-services/bulk-sms/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_bulkSms;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function BulkSmsMarketingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bulk SMS Marketing Services",
    serviceType: "Bulk SMS and text message campaigns",
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
          / <span>Bulk SMS Marketing</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Bulk SMS Marketing Services</h1>
        <p className="text-slate-700 mb-6">
          Send promotional and transactional SMS campaigns at scale with high
          deliverability and real-time reporting.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Campaign setup & sending
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Promotional and transactional SMS campaign setup.</li>
            <li>Targeted list uploads and audience segmentation.</li>
            <li>SMS content creation following best practices.</li>
            <li>Sender ID and route configuration support.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Delivery and scheduling
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Delivery and response reporting for each campaign.</li>
            <li>Scheduling and automation for recurring messages.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Run a bulk SMS campaign
        </a>
      </main>
    </>
  );
}

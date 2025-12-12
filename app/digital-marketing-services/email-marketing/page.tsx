// app/digital-marketing-services/email-marketing/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_email;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function EmailMarketingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Email Marketing Services",
    serviceType: "Email marketing campaigns and automation",
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
          / <span>Email Marketing</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Email Marketing Services</h1>
        <p className="text-slate-700 mb-6">
          Run targeted email campaigns and automation flows to nurture leads and
          stay connected with your customers.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Campaign planning & setup
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Email campaign planning and list segmentation.</li>
            <li>Template design and copywriting for newsletters.</li>
            <li>Setup of automation flows and drip campaigns.</li>
            <li>Integration with website forms and CRM where needed.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Performance and optimization
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Open rate, click-through and conversion reporting.</li>
            <li>Testing of subject lines and content for better results.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Improve your email campaigns
        </a>
      </main>
    </>
  );
}

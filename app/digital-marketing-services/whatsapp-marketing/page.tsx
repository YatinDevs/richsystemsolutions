// app/digital-marketing-services/whatsapp-marketing/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_whatsapp;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function WhatsappMarketingPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WhatsApp Marketing Services",
    serviceType: "WhatsApp Business API marketing and messaging",
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
          / <span>WhatsApp Marketing</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">WhatsApp Marketing Services</h1>
        <p className="text-slate-700 mb-6">
          Use the WhatsApp Business API to send campaigns, notifications and
          transactional messages directly to your customers.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">What we help you with</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>WhatsApp Business API setup and configuration.</li>
            <li>Broadcast campaigns for offers, updates and reminders.</li>
            <li>Template message creation and approval support.</li>
            <li>Integration of WhatsApp with CRM or website forms.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Automation and reporting
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Delivery, read and response rate reporting.</li>
            <li>Automation workflows and chatbot flows for FAQs.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Start a WhatsApp campaign
        </a>
      </main>
    </>
  );
}

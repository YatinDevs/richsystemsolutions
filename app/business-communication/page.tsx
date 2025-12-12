// app/business-communication/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.businessCommunication;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function BusinessCommunicationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo.title,
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
      address: {
        "@type": "PostalAddress",
        ...siteSEO.address,
      },
      telephone: siteSEO.phone,
    },
    serviceType: "Business communication (WhatsApp, SMS, voice, email, IVR)",
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
        <h1 className="text-3xl font-bold mb-4">
          Business Communication & Messaging Solutions
        </h1>
        <p className="text-slate-700 mb-6">
          Streamline your communication with WhatsApp Business API, bulk SMS,
          voice calls, email campaigns, IVR, and automation tools.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            WhatsApp Business Solutions
          </h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>WhatsApp Business API Integration</li>
            <li>WhatsApp Marketing Suite & promotions</li>
            <li>Meta Verified WhatsApp Services</li>
            <li>WhatsApp Chatbot Solutions</li>
            <li>Personal Number WhatsApp Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            SMS, Voice & IVR Services
          </h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>Bulk SMS & transactional SMS</li>
            <li>Bulk voice calls & recorded message campaigns</li>
            <li>IVR system setup and voice menus</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Email & Automation</h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>Email marketing campaigns</li>
            <li>Automation and lead flows via Masteraix.io</li>
            <li>RICH Connect application for follow‑ups</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Start a communication campaign
        </a>
      </main>
    </>
  );
}

// app/software-it-services/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.softwareItServices;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function SoftwareItServicesPage() {
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
    serviceType: "Software development and IT services",
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
        <h1 className="text-3xl font-bold mb-4">Software & IT Services</h1>
        <p className="text-slate-700 mb-6">
          Custom software development, modern responsive websites, mobile apps,
          and IT automation tailored for growing businesses in Nashik.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Core Services</h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>Custom Software Development</li>
            <li>Modern Responsive Website Development</li>
            <li>Mobile App Development</li>
            <li>Dynamic QR Code & Smart Link Generation</li>
            <li>WhatsApp API Integration into your systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Design & Development</h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>Custom Web Development</li>
            <li>UI/UX Design</li>
            <li>E‑Commerce Development</li>
            <li>Enterprise Solutions</li>
            <li>High‑performance Website Design</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            IT Training & Internships
          </h2>
          <p className="text-slate-700 text-sm">
            Practical IT courses and internship programs to build in‑house
            talent aligned with real projects.
          </p>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Discuss your IT project
        </a>
      </main>
    </>
  );
}

// app/digital-marketing-services/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.digitalMarketingServices;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function DigitalMarketingServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
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
    serviceType:
      "Digital marketing, SEO, social media marketing, PPC and content marketing",
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
          <a href="/" className="text-blue-600 hover:underline">
            Home
          </a>{" "}
          / <span>Digital Marketing Services</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">
          Digital Marketing Services in Nashik
        </h1>
        <p className="text-slate-700 mb-6">
          Grow your brand visibility, traffic and leads with SEO, social media,
          PPC advertising, content and email marketing tailored to your
          business.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Core services</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>SEO Services (on-page, technical, local and off-page)</li>
            <li>Social Media Marketing and account management</li>
            <li>PPC Advertising on Google, Meta and other platforms</li>
            <li>Content Marketing for blogs, landing pages and creatives</li>
            <li>Email and WhatsApp Marketing campaigns</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Channels we work on</h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Google Search, Google Display and YouTube Ads</li>
            <li>Facebook, Instagram and LinkedIn campaigns</li>
            <li>Organic SEO for high-intent keywords</li>
            <li>Bulk SMS and WhatsApp for remarketing and retention</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Outcomes you can expect
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Increased qualified traffic and brand visibility</li>
            <li>More leads and enquiries from digital channels</li>
            <li>Better tracking, reporting and ROI measurement</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Plan your digital marketing strategy
        </a>
      </main>
    </>
  );
}

// app/digital-marketing-services/graphic-design/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.dm_graphic;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
};

export default function GraphicDesignPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Graphic Design Services",
    serviceType: "Graphic design and brand identity services",
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
          / <span>Graphic Design</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Graphic Design Services</h1>
        <p className="text-slate-700 mb-6">
          Create consistent, modern visuals for your brand across digital and
          print channels.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Brand and marketing assets
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Logo design and brand identity systems.</li>
            <li>Social media creatives and ad banner design.</li>
            <li>Brochures, flyers and marketing collateral.</li>
            <li>Basic style guides and brand asset kits.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Optimization and revisions
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-1 text-sm">
            <li>Optimizing creatives for different platforms and sizes.</li>
            <li>Iterative revisions based on feedback and results.</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Design brand creatives
        </a>
      </main>
    </>
  );
}

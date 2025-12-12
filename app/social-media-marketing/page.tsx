// app/social-media-marketing/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.socialMediaMarketing;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function SocialMediaMarketingPage() {
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
    serviceType:
      "Social media marketing, content marketing, and performance marketing",
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
          Social Media & Performance Marketing
        </h1>
        <p className="text-slate-700 mb-6">
          Grow your brand with social media marketing, content creation, reels
          and podcasts, and performance campaigns across Google, Meta, Amazon,
          and YouTube.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            Social Media & WhatsApp Marketing
          </h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>WhatsApp Marketing Suite & promotions</li>
            <li>Meta Verified WhatsApp Services</li>
            <li>Personal Number WhatsApp Service</li>
            <li>Bulk SMS & Voice Call Services</li>
            <li>RICH Connect Application for lead follow‑up</li>
            <li>Lead Management & Automation via Masteraix.io</li>
            <li>Podcast, Reel Shoot & Product Photography</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Content Marketing</h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>Strategy & Consulting</li>
            <li>Content Creation (posts, blogs, reels)</li>
            <li>Content Optimization</li>
            <li>Content Promotion across channels</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Performance Marketing</h2>
          <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
            <li>PPC Advertising & Social Media Advertising</li>
            <li>Conversion Rate Optimization & Lead Generation</li>
            <li>Amazon Advertising</li>
            <li>YouTube Advertising</li>
          </ul>
        </section>

        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Plan your marketing campaign
        </a>
      </main>
    </>
  );
}

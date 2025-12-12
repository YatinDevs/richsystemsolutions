// app/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import HeroSection from "@/components/HeroSection";
import ServicesWeOffer from "@/components/ServicesWeOffer";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";

const seo = pageSEO.home;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@id": `${siteSEO.baseUrl}/`,
    "@type": "LocalBusiness",
    name: siteSEO.siteName,
    url: `${siteSEO.baseUrl}/`,
    telephone: siteSEO.phone,
    email: siteSEO.email,
    description: seo.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteSEO.address.addressCountry,
      addressLocality: siteSEO.address.addressLocality,
      addressRegion: siteSEO.address.addressRegion,
      postalCode: siteSEO.address.postalCode,
      streetAddress: siteSEO.address.streetAddress,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: `${siteSEO.openingHours.mondayToSaturday.opens}:00`,
        closes: `${siteSEO.openingHours.mondayToSaturday.closes}:00`,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      bestRating: "5",
      ratingCount: "52",
      ratingValue: "4.8",
    },
    makesOffer: [
      { "@type": "Offer", name: "Internet marketing service" },
      { "@type": "Offer", name: "Marketing agency" },
      { "@type": "Offer", name: "Software company" },
      { "@type": "Offer", name: "Web Designer" },
      { "@type": "Offer", name: "Advertising agency" },
      { "@type": "Offer", name: "Marketing consultant" },
    ],
    sameAs: [
      "https://www.richsol.com/",
      "https://in.linkedin.com/company/rich-system-solutions-pvt-ltd-2024",
      "https://www.facebook.com/richsystemsolutionspvtltd/",
      // keep only profiles you control
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesWeOffer />
        <Testimonials />
        <Faq />
      </main>
    </>
  );
}

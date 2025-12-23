// app/contact/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import ContactPageContent from "./ContactPageContent";

const seo = pageSEO.contact;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    type: "website",
  },
};

const contactInfo = {
  companyName: "RichSol IT Solutions",
  address: "4th Floor, Akravi Disha, Nashik, Maharashtra 422002",
  phone: "+91 95959 02006",
  whatsapp: "+919595902006",
  email: "support@richsol.com",
  hours: "Monday to Saturday: 9:30 AM - 6:30 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928550.8041038124!2d72.50173937500001!3d19.25186767267612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb084d22ff73%3A0xe3e70a169bf7cb1b!2sRICH%20System%20Solutions%20Pvt.%20Ltd.%20%7C%20Website%20%7C%20design%20-%20Nashik!5e0!3m2!1sen!2sin!4v1766492169122!5m2!1sen!2sin",
  social: {
    facebook: "https://www.facebook.com/richsystemsolutionspvtltd",
    instagram: "https://www.instagram.com/richsol_nsk",
    linkedin:
      "https://www.linkedin.com/company/rich-system-solutions-pvt-ltd-2024",
    youtube: "https://www.youtube.com/@RICHSystemSolutions/videos",
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    mainEntity: {
      "@type": "Organization",
      name: contactInfo.companyName,
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, Akravi Disha",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        postalCode: "422002",
        addressCountry: "IN",
      },
      telephone: contactInfo.phone,
      email: contactInfo.email,
      openingHours: contactInfo.hours,
      sameAs: Object.values(contactInfo.social),
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contactInfo.companyName,
    description: seo.description,
    url: siteSEO.baseUrl,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, Akravi Disha",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422002",
      addressCountry: "IN",
    },
    openingHours: contactInfo.hours,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.9970592",
      longitude: "73.7892588",
    },
    sameAs: Object.values(contactInfo.social),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ContactPageContent contactInfo={contactInfo} />
    </>
  );
}

// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import HeroSection from "@/components/HeroSection";

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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteSEO.siteName,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    description: seo.description,
    email: siteSEO.email,
    telephone: siteSEO.phone,
    address: {
      "@type": "PostalAddress",
      ...siteSEO.address,
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
        opens: siteSEO.openingHours.mondayToSaturday.opens,
        closes: siteSEO.openingHours.mondayToSaturday.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: siteSEO.openingHours.sunday.opens,
        closes: siteSEO.openingHours.sunday.closes,
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteSEO.phone,
      email: siteSEO.email,
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["en"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section - Now just displays services with navigation */}
        <HeroSection />

        {/* Service Cards Section - Simplified version */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Our Core Services
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Software Development Card */}
            <article className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-3">💻</div>
              <h2 className="text-xl font-semibold mb-2">
                Software & IT Services
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                Custom software, modern websites, mobile apps, QR & smart link
                automation, and IT training.
              </p>
              <ul className="text-sm text-slate-600 mb-3 list-disc list-inside">
                <li>Custom Software Development</li>
                <li>Modern Responsive Website Development</li>
                <li>Mobile Apps & IT Automation</li>
              </ul>
              <Link
                href="/software-it-services"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View Software & IT Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </article>

            {/* Digital Marketing Card */}
            <article className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-3">📈</div>
              <h2 className="text-xl font-semibold mb-2">
                Social Media & Marketing
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                Social media, content, WhatsApp promotions, and performance
                marketing campaigns.
              </p>
              <ul className="text-sm text-slate-600 mb-3 list-disc list-inside">
                <li>Social media & WhatsApp marketing</li>
                <li>Content creation, reels & podcasts</li>
                <li>PPC & performance marketing</li>
              </ul>
              <Link
                href="/social-media-marketing"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View Marketing Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </article>

            {/* Business Communication Card */}
            <article className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-3">📞</div>
              <h2 className="text-xl font-semibold mb-2">
                Business Communication
              </h2>
              <p className="text-sm text-slate-700 mb-3">
                WhatsApp API, bulk SMS & voice, email campaigns, IVR, and
                automation tools.
              </p>
              <ul className="text-sm text-slate-600 mb-3 list-disc list-inside">
                <li>WhatsApp Business API & chatbots</li>
                <li>Bulk SMS & voice call services</li>
                <li>Email campaigns & IVR systems</li>
              </ul>
              <Link
                href="/business-communication"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View Communication Solutions
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </article>
          </div>
        </section>

        {/* Add a CTA section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-700 mb-6">
              Get in touch with our experts to discuss how we can help you
              achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Contact Us Today
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

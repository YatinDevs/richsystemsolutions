// app/software-it-services/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
//import { Link } from "lucide-react";
import Link from "next/link";

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

  const coreServices = [
    {
      title: "Custom Software Development",
      description:
        "Tailor-made software solutions built to match your business needs, improve productivity, and support scalable growth using modern technologies.",
      link: "/software-it-services/custom-software-development/",
    },
    {
      title: "Modern Responsive Website Development",
      description:
        "High-performance, mobile-friendly websites designed for speed, usability, and SEO, ensuring a consistent experience across all devices.",
      link: "/software-it-services/web-development/",
    },
    {
      title: "Mobile App Development",
      description:
        "Robust Android and iOS applications with intuitive interfaces, optimized performance, and secure backend integrations.",
      link: "/software-it-services/mobile-app-development/",
    },
    {
      title: "Dynamic QR Code & Smart Link Generation",
      description:
        "Smart, trackable QR codes and links that provide instant access to digital resources, payment pages, forms, and analytics.",
      link: "/services/qr-smart-links",
    },
    {
      title: "WhatsApp API Integration",
      description:
        "Seamless WhatsApp Business API integration to automate messaging, customer notifications, order updates, and support workflows directly from your system.",
      link: "/software-it-services/api-integration/",
      fullWidth: true,
    },
  ];

  const designServices = [
    {
      title: "Custom Web Development",
      description:
        "Custom-built websites and web applications tailored to business requirements, ensuring scalability, security, and long-term performance.",
      link: "/services/custom-web",
    },
    {
      title: "UI / UX Design",
      description:
        "User-focused interface and experience design aimed at improving usability, accessibility, and engagement across digital platforms.",
      link: "/software-it-services/ui-ux-design/",
    },
    {
      title: "E-Commerce Development",
      description:
        "Secure and scalable e-commerce solutions with product management, payment gateway integration, and conversion-driven user journeys.",
      link: "/software-it-services/ecommerce-solutions/",
    },
    {
      title: "Enterprise Solutions",
      description:
        "Enterprise-grade applications designed to manage complex workflows, multi-user environments, and system integrations efficiently.",
      link: "/services/enterprise",
    },
    {
      title: "High-performance Website Design",
      description:
        "Performance-optimized website designs focused on fast loading times, SEO best practices, security, and seamless experiences across all devices.",
      link: "/services/high-performance-web",
      fullWidth: true,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto max-w-6xl px-4 py-40">
        <h1 className="text-3xl font-bold mb-4">Software & IT Services</h1>

        <p className="text-slate-700 mb-6">
          Custom software development, modern responsive websites, mobile apps,
          and IT automation tailored for growing businesses in Nashik.
        </p>

        {/* Core Services */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Core Services</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {coreServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`block rounded-lg p-5 hover:shadow-md transition cursor-pointer ${
                  service.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-sm text-blue-600 font-semibold">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Design & Development */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Design & Development</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {designServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`block rounded-lg p-5 hover:shadow-md transition cursor-pointer ${
                  service.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-sm text-blue-600 font-semibold">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* IT Training */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">
            IT Training & Internships
          </h2>
          <p className="text-slate-700 text-sm">
            Practical IT courses and internship programs to build in-house
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

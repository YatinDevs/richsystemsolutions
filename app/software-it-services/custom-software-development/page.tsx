/* eslint-disable @next/next/no-html-link-for-pages */
// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";

const seo = pageSEO.software_customSoftware;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function CustomSoftwarePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Software Development",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
    },
    serviceType: "Custom software development",
    areaServed: "IN",
  };

  // Detailed content constants
  const serviceDetails = {
    hero: {
      title: "Custom Software Development Services",
      description:
        "Build scalable, enterprise-grade custom software solutions that perfectly match your business processes, integrate seamlessly with existing tools, and grow with your company's evolving needs. We transform your unique requirements into powerful digital solutions.",
      features: [
        "Complete ownership and intellectual property rights",
        "Built specifically for your business workflows",
        "Scalable architecture that grows with your needs",
        "Enhanced security tailored to your industry standards",
        "Competitive advantage through unique features",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive Custom Software Development Solutions",
      description:
        "From concept to deployment and beyond, we provide end-to-end custom software development services that address your specific business challenges.",
      solutions: [
        {
          title: "Custom Web Applications",
          description:
            "Responsive, cross-platform web applications built with modern frameworks like React, Angular, Vue.js, Node.js, and .NET Core. Includes progressive web apps (PWAs) for mobile-like experiences.",
          features: [
            "Single Page Applications (SPAs)",
            "Server-side rendered applications",
            "Real-time collaboration features",
            "Multi-tenant architecture",
            "Role-based access control",
          ],
        },
        {
          title: "Desktop & Enterprise Applications",
          description:
            "Robust desktop solutions for Windows, macOS, and Linux environments with offline capabilities and deep system integration.",
          features: [
            "Cross-platform desktop apps using Electron, .NET MAUI",
            "Database-driven enterprise solutions",
            "Legacy system modernization",
            "High-performance computing applications",
            "Automated reporting and analytics",
          ],
        },
        {
          title: "API & Integration Development",
          description:
            "Seamless integration with existing systems through custom API development and middleware solutions.",
          features: [
            "RESTful API and GraphQL development",
            "Microservices architecture",
            "Third-party API integration (payment gateways, maps, etc.)",
            "ERP/CRM system integration (SAP, Salesforce, Dynamics)",
            "Data migration and synchronization",
          ],
        },
        {
          title: "Database Design & Management",
          description:
            "Optimized database architecture for performance, scalability, and data integrity.",
          features: [
            "SQL (PostgreSQL, MySQL, SQL Server) and NoSQL (MongoDB) solutions",
            "Database normalization and optimization",
            "Data warehousing and business intelligence",
            "Real-time data processing",
            "Backup and disaster recovery planning",
          ],
        },
        {
          title: "Security & Compliance",
          description:
            "Enterprise-grade security features and compliance with industry standards.",
          features: [
            "GDPR, HIPAA, PCI DSS compliant solutions",
            "End-to-end encryption",
            "Two-factor authentication",
            "Audit trails and activity logging",
            "Regular security audits and penetration testing",
          ],
        },
      ],
    },

    benefits: {
      title: "Key Benefits of Custom Software",
      description:
        "Why investing in custom software development gives your business a competitive edge.",
      points: [
        {
          title: "Tailored to Your Exact Needs",
          description:
            "Unlike off-the-shelf solutions, custom software is built specifically for your business processes, eliminating unnecessary features while including everything you need.",
        },
        {
          title: "Scalability and Flexibility",
          description:
            "Designed to grow with your business. Easily add new features, integrate with other systems, and handle increased user loads as your company expands.",
        },
        {
          title: "Cost Efficiency in the Long Run",
          description:
            "Avoid recurring subscription fees of SaaS products. While initial investment is higher, custom software pays for itself over time with no ongoing licensing costs.",
        },
        {
          title: "Complete Ownership and Control",
          description:
            "You own the intellectual property. No vendor lock-in, no sudden price increases, and full control over updates, security, and feature development.",
        },
        {
          title: "Enhanced Security",
          description:
            "Custom-built security protocols specific to your industry requirements. Unlike widely-used commercial software, custom solutions are less vulnerable to mass attacks.",
        },
        {
          title: "Competitive Advantage",
          description:
            "Unique features and workflows that competitors using off-the-shelf software cannot replicate, giving you a distinct market advantage.",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto max-w-6xl px-4 py-50">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-600">
          <a
            href="/"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Home
          </a>{" "}
          /{" "}
          <a
            href="/software-it-services"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Software & IT Services
          </a>{" "}
          /{" "}
          <span className="text-slate-800 font-medium">
            Custom Software Development
          </span>
        </nav>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl  font-bold text-gray-900 mb-6 leading-tight">
            {serviceDetails.hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-4xl leading-relaxed">
            {serviceDetails.hero.description}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-8">
            <h2 className="font-semibold text-blue-900 mb-2">
              Why Choose Custom Software?
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceDetails.hero.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.whatWeDeliver.title}
            </h2>
            <p className="text-slate-700 mb-8 max-w-3xl">
              {serviceDetails.whatWeDeliver.description}
            </p>
          </div>

          <div className="space-y-4">
            {serviceDetails.whatWeDeliver.solutions.map((solution, index) => (
              <div
                key={index}
                className=" border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  {/* <span className="inline-block w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                    {index + 1}
                  </span> */}
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-4">{solution.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {solution.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.benefits.title}
            </h2>
            <p className="text-slate-700 mb-8 max-w-3xl">
              {serviceDetails.benefits.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceDetails.benefits.points.map((benefit, index) => (
              <div key={index} className="rounded-xl p-6  group">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-600 pl-14">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

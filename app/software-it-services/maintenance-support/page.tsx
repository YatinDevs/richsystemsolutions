// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Link from "next/link";

const seo = pageSEO.software_maintenance;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function MaintenanceSupportPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Maintenance & Support Services",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
    },
    serviceType: "Software Maintenance & Support Services",
    areaServed: "IN",
  };

  // Maintenance & Support detailed content
  const serviceDetails = {
    hero: {
      title: "Software Maintenance & Support Services",
      description:
        "Ensure your software applications run smoothly, securely, and efficiently with our comprehensive maintenance and support services. We provide proactive monitoring, timely updates, and expert technical support to keep your business operations uninterrupted and your technology investments protected.",
      features: [
        "24/7 application monitoring & support",
        "Proactive maintenance & performance optimization",
        "Security updates & vulnerability patching",
        "Bug fixes & issue resolution",
        "Database maintenance & optimization",
        "Regular health checks & reporting",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive Maintenance & Support Solutions",
      description:
        "We provide end-to-end software maintenance and support services that ensure your applications remain secure, performant, and aligned with evolving business needs.",
      solutions: [
        {
          title: "Application Maintenance & Support",
          description:
            "Regular maintenance, bug fixes, and performance optimization to keep your applications running smoothly and efficiently.",
          features: [
            "Bug identification, analysis, and resolution",
            "Performance monitoring and optimization",
            "Code refactoring and technical debt reduction",
            "Database optimization and query tuning",
            "Third-party library and dependency updates",
            "Incident management and resolution tracking",
          ],
        },
        {
          title: "Security & Compliance Management",
          description:
            "Proactive security updates, vulnerability patching, and compliance monitoring to protect your applications from threats.",
          features: [
            "Security vulnerability assessment and patching",
            "SSL certificate management and renewal",
            "Security audit and penetration testing",
            "GDPR, HIPAA, PCI-DSS compliance monitoring",
            "Access control and permission management",
            "Security incident response and recovery",
          ],
        },
        {
          title: "Infrastructure & Server Management",
          description:
            "Comprehensive server and infrastructure management to ensure optimal performance and availability.",
          features: [
            "Server monitoring and performance management",
            "Backup and disaster recovery management",
            "Load balancing and scaling configuration",
            "Cloud infrastructure management (AWS, Azure, GCP)",
            "Database server maintenance and optimization",
            "Network and firewall configuration management",
          ],
        },
        {
          title: "Database Maintenance & Optimization",
          description:
            "Regular database maintenance, optimization, and monitoring to ensure data integrity and performance.",
          features: [
            "Database performance monitoring and tuning",
            "Backup verification and recovery testing",
            "Index optimization and query performance tuning",
            "Data archiving and cleanup strategies",
            "Database migration and version upgrades",
            "Replication and high availability management",
          ],
        },
        {
          title: "Technical Support & Help Desk",
          description:
            "24/7 technical support and help desk services to resolve user issues and minimize downtime.",
          features: [
            "24/7 help desk and technical support",
            "User issue tracking and resolution",
            "Phone, email, and chat support channels",
            "Knowledge base and documentation updates",
            "User training and support materials",
            "Service Level Agreement (SLA) management",
          ],
        },
        {
          title: "Monitoring & Reporting",
          description:
            "Proactive monitoring, alerting, and detailed reporting to provide visibility into application health and performance.",
          features: [
            "24/7 application performance monitoring",
            "Real-time alerting and notification systems",
            "Performance dashboards and reporting",
            "Uptime monitoring and SLA reporting",
            "User behavior and usage analytics",
            "Custom reporting and insights delivery",
          ],
        },
      ],
    },

    supportPlans: {
      title: "Support Plans & SLAs",
      description:
        "We offer flexible support plans with clear Service Level Agreements (SLAs) tailored to your business needs.",
      plans: [
        {
          level: "Basic Support",
          response: "8x5 Business Hours",
          features: [
            "Email support",
            "Bug fixes",
            "Security updates",
            "Monthly reports",
            "Basic monitoring",
          ],
          recommended: "For non-critical applications",
        },
        {
          level: "Standard Support",
          response: "12x5 Support",
          features: [
            "Phone & email support",
            "Priority bug fixes",
            "Proactive monitoring",
            "Weekly reports",
            "Performance optimization",
          ],
          recommended: "For business-critical applications",
        },
        {
          level: "Premium Support",
          response: "24x7 Support",
          features: [
            "24/7 support",
            "Emergency response",
            "Dedicated support team",
            "Real-time monitoring",
            "Quarterly reviews",
          ],
          recommended: "For mission-critical enterprise applications",
        },
        {
          level: "Enterprise Support",
          response: "24x7 with On-call",
          features: [
            "Dedicated account manager",
            "Custom SLA",
            "On-site support available",
            "Strategic planning",
            "Quarterly business reviews",
          ],
          recommended: "For large-scale enterprise systems",
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
      <main className="mx-auto max-w-6xl px-4 py-30 sm:py-50">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-600">
          <Link
            href="/"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/software-it-services"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Software & IT Services
          </Link>{" "}
          /{" "}
          <span className="text-slate-800 font-medium">
            Maintenance & Support Services
          </span>
        </nav>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {serviceDetails.hero.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 mb-8 max-w-4xl leading-relaxed">
            {serviceDetails.hero.description}
          </p>
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-4 sm:p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-orange-900 mb-4 text-base sm:text-lg">
              Our Maintenance & Support Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceDetails.hero.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 hover:bg-white rounded transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-800 text-xs sm:text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.whatWeDeliver.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg mb-8 max-w-3xl">
              {serviceDetails.whatWeDeliver.description}
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {serviceDetails.whatWeDeliver.solutions.map((solution, index) => (
              <div
                key={index}
                className=" border-slate-200 rounded-xl p-4 md:p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Header with responsive icon */}
                <div className="flex items-start mb-4">
                  <div className="hidden sm:flex w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full items-center justify-center mr-3 text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 md:mb-6 text-sm sm:text-base leading-relaxed sm:pl-11 text-justify sm:text-left">
                  {solution.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 sm:pl-11">
                  {solution.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start p-2 md:p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Plans Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.supportPlans.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg mb-8 max-w-3xl">
              {serviceDetails.supportPlans.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceDetails.supportPlans.plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-xl p-4 sm:p-6 transition-all duration-300 ${
                  index === 2
                    ? "border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-lg"
                    : "border-slate-200 bg-white hover:shadow-lg"
                }`}
              >
                <div className="text-center mb-4">
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      index === 2 ? "text-orange-700" : "text-gray-900"
                    }`}
                  >
                    {plan.level}
                  </h3>
                  <div className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full inline-block">
                    {plan.response}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center text-xs sm:text-sm text-slate-700"
                    >
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-600 italic">
                    {plan.recommended}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

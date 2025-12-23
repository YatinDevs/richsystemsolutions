// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Link from "next/link";

const seo = pageSEO.software_apiIntegration;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function ApiIntegrationPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "API Integration Services",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
    },
    serviceType: "API Integration Services",
    areaServed: "IN",
  };

  // API Integration detailed content
  const serviceDetails = {
    hero: {
      title: "Professional API Integration Services",
      description:
        "We specialize in seamless API integration solutions that connect your business systems, applications, and third-party services. Our API integration services ensure data flows smoothly between disparate systems, enabling automation, real-time synchronization, and enhanced business intelligence.",
      features: [
        "RESTful API and GraphQL integration",
        "Third-party platform integration",
        "Legacy system integration",
        "Real-time data synchronization",
        "API security and authentication",
        "Webhook and event-driven integration",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive API Integration Solutions",
      description:
        "We provide end-to-end API integration services that connect your business applications, automate workflows, and enable data exchange across platforms.",
      solutions: [
        {
          title: "Third-Party API Integration",
          description:
            "We integrate your applications with popular third-party services and platforms to extend functionality and automate business processes.",
          features: [
            "Payment gateway integration (Razorpay, Stripe, PayPal, CCAvenue)",
            "CRM integration (Salesforce, HubSpot, Zoho CRM, Freshworks)",
            "ERP integration (SAP, Oracle, Microsoft Dynamics, Tally)",
            "Communication APIs (Twilio, SendGrid, MessageBird, AWS SES)",
            "Social media integration (Facebook, Twitter, LinkedIn, Instagram)",
            "Mapping and location services (Google Maps, Mapbox, HERE)",
          ],
        },
        {
          title: "Custom API Development",
          description:
            "We design and develop custom RESTful APIs and GraphQL endpoints that enable seamless communication between your internal systems.",
          features: [
            "RESTful API design and development with OpenAPI/Swagger",
            "GraphQL API development with Apollo/Relay",
            "Microservices API architecture implementation",
            "API documentation and developer portal creation",
            "API versioning and backward compatibility",
            "API testing and performance optimization",
          ],
        },
        {
          title: "Legacy System Integration",
          description:
            "We modernize and integrate legacy systems with modern applications using APIs, middleware, and data transformation services.",
          features: [
            "Mainframe and legacy application integration",
            "Database integration and data synchronization",
            "File-based integration (CSV, XML, EDI)",
            "SOAP to REST API conversion",
            "Middleware and ESB implementation",
            "Data transformation and mapping services",
          ],
        },
        {
          title: "Real-Time Integration & Webhooks",
          description:
            "We implement real-time data synchronization and event-driven integration using webhooks, WebSockets, and message queues.",
          features: [
            "Webhook implementation and management",
            "Real-time data streaming with WebSockets",
            "Message queue integration (RabbitMQ, Kafka, SQS)",
            "Event-driven architecture implementation",
            "Change data capture (CDC) solutions",
            "Real-time dashboard and notification systems",
          ],
        },
        {
          title: "API Security & Management",
          description:
            "We implement enterprise-grade API security, authentication, and management solutions to protect your data and ensure reliability.",
          features: [
            "API authentication (OAuth 2.0, JWT, API keys)",
            "API gateway implementation (Kong, Apigee, AWS API Gateway)",
            "Rate limiting and throttling configuration",
            "API monitoring and analytics",
            "Security testing and vulnerability assessment",
            "Compliance with security standards (OWASP, GDPR)",
          ],
        },
        {
          title: "Data Integration & ETL Services",
          description:
            "We create data integration pipelines that transform, cleanse, and synchronize data between different systems and formats.",
          features: [
            "ETL (Extract, Transform, Load) pipeline development",
            "Data warehouse and data lake integration",
            "Business intelligence and reporting integration",
            "Data synchronization and conflict resolution",
            "Batch processing and scheduled data transfers",
            "Data quality and validation services",
          ],
        },
      ],
    },

    technologies: {
      title: "API Integration Technologies & Platforms",
      description:
        "We work with a wide range of technologies and platforms to deliver robust API integration solutions.",
      categories: [
        {
          category: "API Protocols & Standards",
          technologies: [
            "RESTful APIs",
            "GraphQL",
            "SOAP/XML",
            "gRPC",
            "WebSockets",
            "Webhooks",
            "JSON-RPC",
          ],
        },
        {
          category: "Integration Platforms",
          technologies: [
            "Zapier",
            "Make (Integromat)",
            "Workato",
            "MuleSoft",
            "Dell Boomi",
            "Azure Logic Apps",
            "AWS Step Functions",
          ],
        },
        {
          category: "API Gateways",
          technologies: [
            "Kong",
            "Apigee",
            "AWS API Gateway",
            "Azure API Management",
            "Tyk",
            "Gravitee",
            "WSO2",
          ],
        },
        {
          category: "Authentication & Security",
          technologies: [
            "OAuth 2.0",
            "JWT",
            "OpenID Connect",
            "API keys",
            "LDAP/AD",
            "SAML",
            "SSL/TLS",
          ],
        },
        {
          category: "Message Queues & Streaming",
          technologies: [
            "Apache Kafka",
            "RabbitMQ",
            "AWS SQS",
            "Azure Service Bus",
            "Redis Pub/Sub",
            "NATS",
            "Google Pub/Sub",
          ],
        },
      ],
    },

    industries: {
      title: "Industry-Specific API Integration Solutions",
      description:
        "We provide tailored API integration solutions for various industries with specific requirements and compliance needs.",
      categories: [
        {
          industry: "E-commerce & Retail",
          integrations: [
            "Payment gateway integration",
            "Shipping carrier APIs",
            "Inventory management",
            "Marketplace APIs",
            "POS system integration",
            "Loyalty program APIs",
          ],
        },
        {
          industry: "Finance & Banking",
          integrations: [
            "Payment processing APIs",
            "Core banking integration",
            "Fraud detection services",
            "Credit scoring APIs",
            "Regulatory reporting",
            "Accounting software",
          ],
        },
        {
          industry: "Healthcare",
          integrations: [
            "EHR/EMR system integration",
            "Telemedicine platforms",
            "Lab information systems",
            "Insurance claim processing",
            "Patient portal APIs",
            "Medical device integration",
          ],
        },
        {
          industry: "Manufacturing & Logistics",
          integrations: [
            "ERP system integration",
            "Supply chain APIs",
            "IoT device integration",
            "Inventory tracking",
            "Shipping and tracking APIs",
            "Quality control systems",
          ],
        },
        {
          industry: "Travel & Hospitality",
          integrations: [
            "Booking engine APIs",
            "OTA (Online Travel Agency) integration",
            "Flight/hotel APIs",
            "Payment processing",
            "CRM integration",
            "Loyalty program APIs",
          ],
        },
        {
          industry: "Education",
          integrations: [
            "Learning Management Systems",
            "Student information systems",
            "Payment gateway integration",
            "Video conferencing APIs",
            "Assessment platforms",
            "Library management systems",
          ],
        },
      ],
    },

    process: {
      title: "Our API Integration Process",
      description:
        "We follow a structured methodology to ensure successful API integration with minimal disruption to your business.",
      steps: [
        {
          title: "Discovery & Analysis",
          description:
            "Understand your integration requirements and existing systems.",
          activities: [
            "Requirement gathering",
            "API documentation review",
            "System analysis",
            "Integration strategy",
            "Technical feasibility",
          ],
        },
        {
          title: "Design & Planning",
          description: "Design the integration architecture and data flow.",
          activities: [
            "API specification",
            "Data mapping",
            "Security design",
            "Error handling",
            "Testing strategy",
          ],
        },
        {
          title: "Development",
          description: "Build and implement the integration solution.",
          activities: [
            "API development",
            "Middleware implementation",
            "Authentication setup",
            "Error logging",
            "Performance optimization",
          ],
        },
        {
          title: "Testing",
          description:
            "Thoroughly test the integration for reliability and performance.",
          activities: [
            "Unit testing",
            "Integration testing",
            "Performance testing",
            "Security testing",
            "User acceptance testing",
          ],
        },
        {
          title: "Deployment",
          description: "Deploy the integration to production environment.",
          activities: [
            "Environment setup",
            "Data migration",
            "Go-live support",
            "Monitoring setup",
            "Documentation",
          ],
        },
        {
          title: "Maintenance",
          description: "Provide ongoing support and optimization.",
          activities: [
            "Monitoring",
            "Performance tuning",
            "Security updates",
            "Feature enhancements",
            "Technical support",
          ],
        },
      ],
    },

    benefits: {
      title: "Benefits of Professional API Integration",
      description:
        "Investing in professional API integration delivers significant advantages for your business operations.",
      points: [
        {
          title: "Improved Operational Efficiency",
          description:
            "Automate manual processes and eliminate data silos by connecting disparate systems, reducing errors and saving time.",
        },
        {
          title: "Enhanced Data Accuracy & Consistency",
          description:
            "Ensure data consistency across all systems with real-time synchronization and automated data validation.",
        },
        {
          title: "Scalability & Flexibility",
          description:
            "Easily add new systems and features as your business grows with modular API architecture.",
        },
        {
          title: "Cost Reduction",
          description:
            "Reduce manual labor, minimize errors, and optimize resource utilization through automation.",
        },
        {
          title: "Better Decision Making",
          description:
            "Access consolidated, real-time data from multiple sources for informed business decisions.",
        },
        {
          title: "Competitive Advantage",
          description:
            "Stay ahead of competitors with faster time-to-market and seamless customer experiences.",
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
            API Integration Services
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
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-4 sm:p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-green-900 mb-4 text-base sm:text-lg">
              Our API Integration Capabilities
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceDetails.hero.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 hover:bg-white rounded transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
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
                className=" border-slate-200 rounded-xl p-4 md:p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Header with responsive icon */}
                <div className="flex items-start mb-4">
                  {/* <div className="hidden sm:flex w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full items-center justify-center mr-3 text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div> */}
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
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
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
      </main>
    </>
  );
}

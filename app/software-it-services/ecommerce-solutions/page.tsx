/* eslint-disable @next/next/no-html-link-for-pages */
// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import { Link } from "lucide-react";

const seo = pageSEO.software_ecommerce;

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
    name: "E‑Commerce Development Services",
    description: seo.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      url: `${siteSEO.baseUrl}${pageSEO.home.canonical}`,
    },
    serviceType: "E‑Commerce Development Services",
    areaServed: "IN",
  };

  // Detailed content constants - SAME STRUCTURE, MORE DETAILED CONTENT
  const serviceDetails = {
    hero: {
      title:
        "E‑Commerce Development Services: Build Scalable Online Stores for Your Business",
      description:
        "We specialize in creating custom e‑commerce platforms that perfectly align with your brand identity, integrate seamlessly with your existing business systems, and scale effortlessly as your sales grow. Unlike template-based solutions, our custom e‑commerce development is designed specifically for your unique business model, eliminating limitations while including all features required for optimal conversion rates.",
      features: [
        "Complete ownership and intellectual property rights - You own your online store",
        "Built specifically for your unique product catalog and customer journey",
        "Scalable architecture designed to handle traffic spikes and sales growth",
        "PCI‑DSS compliant secure payment processing and data protection",
        "Competitive advantage through custom features that competitors cannot replicate",
        "No platform transaction fees or vendor lock‑in - Complete control over your store",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive E‑Commerce Solutions We Deliver",
      description:
        "We provide end‑to‑end e‑commerce development services that transform your online business challenges into powerful sales-generating platforms. Our team handles everything from platform selection to deployment and ongoing optimization.",
      solutions: [
        {
          title: "Custom E‑Commerce Platform Development",
          description:
            "We build responsive, high‑conversion online stores using modern platforms like Shopify Plus, Magento, WooCommerce, and custom headless solutions. Our e‑commerce platforms include mobile‑first design, progressive web apps (PWAs), and server‑side rendered applications that work seamlessly across all devices and browsers.",
          features: [
            "Custom theme development with brand‑consistent design and user experience",
            "Advanced product catalog management with variants, bundles, and subscriptions",
            "Multi‑vendor marketplace architecture for platform businesses",
            "B2B wholesale portals with custom pricing and order workflows",
            "Third‑party API integration (payment gateways, shipping carriers, ERP systems)",
            "Automated inventory management and real‑time stock synchronization",
          ],
        },
        {
          title: "Headless & API‑First Commerce Solutions",
          description:
            "We develop decoupled e‑commerce architectures that provide maximum flexibility, speed, and omnichannel experiences. Our headless solutions separate frontend presentation from backend commerce logic, enabling faster updates and better performance.",
          features: [
            "React/Next.js storefronts with server‑side rendering for SEO optimization",
            "Mobile app commerce integration with native iOS and Android experiences",
            "CMS integration (Contentful, Sanity) for content‑rich shopping experiences",
            "Progressive Web App (PWA) stores with offline capabilities",
            "Instant page load performance with static generation and edge caching",
            "API‑first architecture for easy third‑party integrations and future expansion",
          ],
        },
        {
          title: "Payment & Checkout Optimization",
          description:
            "We implement streamlined, secure payment processing with optimized checkout flows that reduce cart abandonment and increase conversion rates. Our payment solutions support multiple gateways and local payment methods.",
          features: [
            "One‑page checkout optimization with guest checkout options",
            "Multiple payment gateway integration (Razorpay, Stripe, PayPal, CCAvenue)",
            "Digital wallet support (Apple Pay, Google Pay, PhonePe, Paytm)",
            "Subscription billing and recurring payment management",
            "Fraud detection, prevention, and chargeback management systems",
            "Local payment method integration for regional customer preferences",
          ],
        },
        {
          title: "Inventory & Order Management Systems",
          description:
            "We architect comprehensive backend systems for efficient inventory control, order processing, and fulfillment automation. Our solutions ensure accurate stock tracking and smooth order fulfillment.",
          features: [
            "Real‑time inventory synchronization across multiple sales channels",
            "Automated order processing workflows with status tracking",
            "Multi‑location inventory management with warehouse transfers",
            "Drop‑shipping integration and vendor management",
            "Shipping carrier integration with rate calculation and label printing",
            "Returns management and refund processing automation",
          ],
        },
        {
          title: "E‑Commerce Analytics & Marketing Automation",
          description:
            "We implement advanced analytics, personalization, and marketing automation tools to boost conversions, increase average order value, and improve customer retention rates.",
          features: [
            "Customer behavior analytics and purchase pattern analysis",
            "AI‑powered product recommendations and personalized shopping",
            "Abandoned cart recovery systems with automated email sequences",
            "Email marketing automation and customer segmentation",
            "Customer loyalty programs and referral system implementation",
            "A/B testing frameworks for continuous conversion rate optimization",
          ],
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
      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-50">
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
            E‑Commerce Development Service
          </span>
        </nav>

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-xl  sm:text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {serviceDetails.hero.title}
          </h1>
          <p className="text-sm md:text-lg text-justify sm:text-xl text-slate-700 mb-8 max-w-4xl leading-relaxed">
            {serviceDetails.hero.description}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-blue-900 mb-4 text-lg">
              Key Advantages of Custom Software Development
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceDetails.hero.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 hover:bg-blue-100 rounded transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-800 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl md:text-3xl sm:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.whatWeDeliver.title}
            </h2>
            <p className="text-slate-700 text-sm md:text-lg mb-8 max-w-3xl">
              {serviceDetails.whatWeDeliver.description}
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {serviceDetails.whatWeDeliver.solutions.map((solution, index) => (
              <div
                key={index}
                className=" border-slate-200 rounded-xl p-4 md:p-6 hover:border-blue-300 transition-all duration-300 bg-white"
              >
                {/* Header with responsive icon */}
                <div className="flex items-start mb-4">
                  {/* <div className="hidden md:flex w-8 h-8 bg-blue-100 text-blue-700 rounded-full items-center justify-center mr-3 text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div> */}
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>

                {/* Description with responsive padding */}
                <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-lg md:text-base leading-relaxed md:pl-11 text-justify md:text-left">
                  {solution.description}
                </p>

                {/* Features grid with responsive layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 pl-0 md:pl-11">
                  {solution.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-start p-2 md:p-3 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 text-xs md:text-sm leading-relaxed">
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

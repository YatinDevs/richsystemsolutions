// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Link from "next/link";

const seo = pageSEO.software_mobileApps;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function MobileDevelopmentPage() {
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

  // Mobile Development detailed content
  const serviceDetails = {
    hero: {
      title: "Professional Mobile App Development Services",
      description:
        "We specialize in creating innovative, high-performance mobile applications for iOS and Android platforms. Our mobile development services help businesses engage customers, streamline operations, and drive growth through intuitive, feature-rich mobile solutions.",
      features: [
        "Native iOS & Android app development",
        "Cross-platform solutions with React Native & Flutter",
        "User-centered UI/UX design for mobile",
        "App Store & Play Store deployment",
        "API integration & backend development",
        "Ongoing maintenance & updates",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive Mobile Development Solutions",
      description:
        "We provide end-to-end mobile app development services from concept to deployment and ongoing support across all major platforms.",
      solutions: [
        {
          title: "Native iOS App Development",
          description:
            "We build high-performance iOS applications using Swift and SwiftUI that leverage the full potential of Apple's ecosystem and deliver seamless user experiences.",
          features: [
            "iOS app development with Swift & SwiftUI",
            "iPhone, iPad, and Apple Watch applications",
            "iOS SDK integration and framework implementation",
            "Apple Pay and Wallet integration",
            "App Store submission and optimization",
            "ARKit for augmented reality experiences",
          ],
        },
        {
          title: "Native Android App Development",
          description:
            "We develop robust Android applications using Kotlin and Jetpack Compose that work flawlessly across thousands of Android devices with optimal performance.",
          features: [
            "Android app development with Kotlin & Java",
            "Material Design implementation for consistent UI",
            "Android SDK and API integration",
            "Google Play Store deployment and optimization",
            "Google Pay and in-app purchase integration",
            "Wear OS and Android Auto compatibility",
          ],
        },
        {
          title: "Cross-Platform App Development",
          description:
            "We create cost-effective cross-platform applications using React Native and Flutter that deliver native-like performance with single codebase efficiency.",
          features: [
            "React Native development with TypeScript",
            "Flutter development with Dart programming",
            "Single codebase for iOS and Android",
            "Native module integration for platform-specific features",
            "Hot reload for faster development cycles",
            "Consistent UI across multiple platforms",
          ],
        },
        {
          title: "Mobile App UI/UX Design",
          description:
            "We design intuitive, engaging mobile interfaces that enhance user experience and drive app adoption and retention.",
          features: [
            "Mobile-first UI/UX design principles",
            "Interactive prototypes and wireframing",
            "User journey mapping and flow optimization",
            "Design system creation for consistency",
            "Accessibility and inclusive design",
            "Animation and micro-interaction design",
          ],
        },
        {
          title: "App Backend & API Development",
          description:
            "We develop scalable backend systems and APIs that power your mobile applications with real-time data and business logic.",
          features: [
            "RESTful API and GraphQL development",
            "Real-time features with WebSocket and Firebase",
            "User authentication and authorization systems",
            "Push notification services implementation",
            "Cloud storage and database management",
            "Analytics and user behavior tracking",
          ],
        },
        {
          title: "App Testing & Deployment",
          description:
            "We ensure your mobile applications are thoroughly tested, optimized, and successfully deployed to app stores.",
          features: [
            "Comprehensive testing (unit, integration, UI)",
            "Device and platform compatibility testing",
            "Performance optimization and memory management",
            "App Store Connect and Google Play Console setup",
            "App store optimization (ASO) services",
            "Post-launch monitoring and crash reporting",
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
            Mobile App Development
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-blue-900 mb-4 text-base sm:text-lg">
              Our Mobile Development Expertise
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {serviceDetails.hero.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 hover:bg-white rounded transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0"
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
                className=" border-slate-200 rounded-xl p-4 md:p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Header with responsive icon */}
                <div className="flex items-start mb-4">
                  {/* <div className="hidden sm:flex w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full items-center justify-center mr-3 text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
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
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
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

// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Link from "next/link";

const seo = pageSEO.software_uiux;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function UiUxPage() {
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

  // UI/UX Design detailed content
  const serviceDetails = {
    hero: {
      title: "Professional UI/UX Design Services",
      description:
        "We specialize in creating intuitive, engaging, and user-centered digital experiences that drive business growth. Our UI/UX design services combine aesthetic excellence with functional precision to deliver interfaces that users love and businesses benefit from.",
      features: [
        "User-centered design approach",
        "Mobile-first responsive design",
        "Interactive prototypes & wireframes",
        "Usability testing & research",
        "Design systems & style guides",
        "Conversion rate optimization",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive UI/UX Design Solutions",
      description:
        "We provide end-to-end UI/UX design services that transform complex requirements into simple, beautiful, and functional digital experiences.",
      solutions: [
        {
          title: "User Experience (UX) Design",
          description:
            "We conduct thorough user research and create information architecture that ensures your digital product is intuitive, accessible, and meets user needs effectively.",
          features: [
            "User research & persona development",
            "Competitive analysis & market research",
            "User journey mapping & flow optimization",
            "Information architecture & site mapping",
            "Wireframing & low-fidelity prototyping",
            "Usability testing & user feedback analysis",
          ],
        },
        {
          title: "User Interface (UI) Design",
          description:
            "We create visually stunning interfaces that align with your brand identity while ensuring optimal usability and engagement across all devices.",
          features: [
            "Visual design & interface styling",
            "Typography & color scheme selection",
            "Iconography & illustration design",
            "Component library & design system creation",
            "Micro-interactions & animation design",
            "Mobile-first responsive design implementation",
          ],
        },
        {
          title: "Interactive Prototyping",
          description:
            "We build high-fidelity interactive prototypes that allow stakeholders to experience and test the user flow before development begins.",
          features: [
            "High-fidelity interactive prototypes",
            "Click-through simulations & user flow testing",
            "Animation & transition prototyping",
            "User testing with realistic interactions",
            "Design handoff with developer specifications",
            "Responsive prototyping for all screen sizes",
          ],
        },
        {
          title: "Design Systems & Style Guides",
          description:
            "We create comprehensive design systems and style guides that ensure consistency, scalability, and efficiency across all digital touchpoints.",
          features: [
            "Component library development",
            "Design token & variable creation",
            "Typography & spacing guidelines",
            "Color palette & accessibility standards",
            "Documentation & usage guidelines",
            "Design system maintenance & evolution",
          ],
        },
        {
          title: "Usability Testing & Research",
          description:
            "We conduct systematic usability testing and user research to validate design decisions and continuously improve the user experience.",
          features: [
            "A/B testing & multivariate testing",
            "User interviews & focus groups",
            "Heatmap & click tracking analysis",
            "Accessibility testing & WCAG compliance",
            "User feedback collection & analysis",
            "Analytics integration & performance tracking",
          ],
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          description:
            "We optimize user interfaces to maximize conversions, reduce bounce rates, and improve key performance metrics.",
          features: [
            "Conversion funnel analysis & optimization",
            "Landing page design optimization",
            "Checkout & form optimization",
            "Call-to-action (CTA) optimization",
            "User behavior analysis & heat mapping",
            "Continuous testing & improvement cycles",
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
            UI/UX Design Services
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-4 sm:p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-purple-900 mb-4 text-base sm:text-lg">
              Our UI/UX Design Expertise
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
                  <div className="hidden sm:flex w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full items-center justify-center mr-3 text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
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

/* eslint-disable @next/next/no-html-link-for-pages */
// app/software-it-services/custom-software-development/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import { Link } from "lucide-react";

const seo = pageSEO.software_webDevelopment;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: {
    canonical: seo.canonical,
  },
};

export default function WebDevelopmentPage() {
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

  const serviceDetails = {
    hero: {
      title:
        "Professional Web Development Services: Build Scalable, High-Performance Websites",
      description:
        "We specialize in creating custom web applications and websites that perfectly align with your business goals, engage your audience, and drive measurable results. Our full-stack web development services combine cutting-edge technologies with user-centered design to deliver exceptional digital experiences.",
      features: [
        "Responsive, mobile-first design that works flawlessly across all devices",
        "SEO-optimized architecture for better search engine visibility",
        "Fast loading times and superior performance optimization",
        "Secure, scalable architecture with enterprise-grade security",
        "Custom features tailored to your specific business requirements",
        "Ongoing maintenance, support, and performance monitoring",
      ],
    },

    whatWeDeliver: {
      title: "Comprehensive Web Development Solutions",
      description:
        "We provide end-to-end web development services that transform your ideas into powerful, functional web applications. Our team handles everything from initial concept to deployment and ongoing optimization.",
      solutions: [
        {
          title: "Custom Web Application Development",
          description:
            "We build responsive, scalable web applications using modern frameworks like React.js, Next.js, Angular, Vue.js, and .NET Core. Our solutions include Single Page Applications (SPAs), Progressive Web Apps (PWAs), and server-side rendered applications that deliver exceptional user experiences.",
          features: [
            "React/Next.js applications with server-side rendering for optimal SEO",
            "Angular/Vue.js applications with component-based architecture",
            "Progressive Web Apps (PWAs) with offline capabilities and push notifications",
            "Real-time applications with WebSocket integration",
            "RESTful API and GraphQL development with comprehensive documentation",
            "Database integration with PostgreSQL, MySQL, MongoDB, or Firebase",
          ],
        },
        {
          title: "Corporate Website Development",
          description:
            "We create professional corporate websites that effectively communicate your brand story, showcase your products/services, and convert visitors into customers. Our corporate sites are designed for both aesthetics and functionality.",
          features: [
            "CMS integration (WordPress, Contentful, Sanity, Strapi) for easy content management",
            "Custom theme development with brand-consistent design",
            "Multi-language and localization support for global businesses",
            "Blog/news integration with SEO-friendly structure",
            "Contact forms, lead capture, and CRM integration",
            "Performance optimization for fast loading and smooth navigation",
          ],
        },
        {
          title: "E-commerce Website Development",
          description:
            "We build high-conversion e-commerce platforms using Shopify, Magento, WooCommerce, or custom solutions. Our e-commerce sites are optimized for sales, security, and scalability.",
          features: [
            "Custom theme development with mobile-first responsive design",
            "Product catalog management with variants, bundles, and subscriptions",
            "Secure payment gateway integration (Razorpay, Stripe, PayPal)",
            "Shopping cart, checkout optimization, and order management",
            "Inventory management and real-time stock synchronization",
            "SEO optimization and marketing tool integration",
          ],
        },
        {
          title: "API Development & Integration",
          description:
            "We create robust APIs and integrate third-party services to extend your web application's functionality and connect with other business systems.",
          features: [
            "RESTful API and GraphQL API development with documentation",
            "Third-party API integration (payment gateways, maps, SMS, email)",
            "Microservices architecture for scalable applications",
            "Legacy system integration and data migration services",
            "Webhook implementation for real-time data synchronization",
            "API security, rate limiting, and monitoring",
          ],
        },
        {
          title: "Performance Optimization & SEO",
          description:
            "We optimize your website for speed, performance, and search engine visibility to ensure maximum reach and user engagement.",
          features: [
            "Core Web Vitals optimization for better Google rankings",
            "Image optimization and lazy loading implementation",
            "Code splitting and bundle optimization",
            "SEO-friendly URL structure and meta tags implementation",
            "Schema markup and structured data implementation",
            "Performance monitoring and continuous optimization",
          ],
        },
      ],
    },

    technologies: {
      title: "Our Technology Stack",
      description:
        "We leverage modern technologies and frameworks to build robust, scalable, and maintainable web solutions.",
      categories: [
        {
          category: "Frontend Technologies",
          technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Angular",
            "Vue.js",
            "Tailwind CSS",
            "Material-UI",
          ],
        },
        {
          category: "Backend Technologies",
          technologies: [
            "Node.js",
            "Python/Django",
            "PHP/Laravel",
            "Java/Spring Boot",
            ".NET Core",
            "Ruby on Rails",
            "Go",
          ],
        },
        {
          category: "Databases",
          technologies: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Redis",
            "Firebase",
            "Elasticsearch",
            "Supabase",
          ],
        },
        {
          category: "CMS & Headless",
          technologies: [
            "WordPress",
            "Contentful",
            "Sanity",
            "Strapi",
            "Shopify",
            "Magento",
            "WooCommerce",
          ],
        },
        {
          category: "DevOps & Cloud",
          technologies: [
            "AWS",
            "Azure",
            "Google Cloud",
            "Docker",
            "Kubernetes",
            "CI/CD Pipelines",
            "Vercel/Netlify",
          ],
        },
      ],
    },

    process: {
      title: "Our Web Development Process",
      description:
        "We follow a proven, collaborative development methodology that ensures quality, transparency, and timely delivery.",
      steps: [
        {
          title: "Discovery & Planning",
          description:
            "Understanding your requirements, goals, and target audience.",
          activities: [
            "Requirement analysis",
            "Technical consultation",
            "Project scope definition",
            "Technology stack selection",
            "Timeline estimation",
          ],
        },
        {
          title: "Design & Prototyping",
          description:
            "Creating user-centered designs and interactive prototypes.",
          activities: [
            "UI/UX design",
            "Wireframing",
            "Prototype development",
            "User feedback collection",
            "Design approval",
          ],
        },
        {
          title: "Development",
          description:
            "Building your web application with clean, maintainable code.",
          activities: [
            "Frontend development",
            "Backend development",
            "API integration",
            "Third-party integration",
            "Version control",
          ],
        },
        {
          title: "Testing & Quality Assurance",
          description:
            "Ensuring your application is bug-free and performs optimally.",
          activities: [
            "Unit testing",
            "Integration testing",
            "Performance testing",
            "Cross-browser testing",
            "Security testing",
          ],
        },
        {
          title: "Deployment & Launch",
          description: "Deploying your application and ensuring smooth launch.",
          activities: [
            "Server setup",
            "Domain configuration",
            "SSL implementation",
            "Performance optimization",
            "Go-live support",
          ],
        },
        {
          title: "Maintenance & Support",
          description: "Providing ongoing support and continuous improvement.",
          activities: [
            "Bug fixes",
            "Security updates",
            "Performance monitoring",
            "Feature enhancements",
            "Technical support",
          ],
        },
      ],
    },

    benefits: {
      title: "Benefits of Professional Web Development",
      description:
        "Investing in professional web development delivers significant advantages for your business.",
      points: [
        {
          title: "Custom Solutions for Unique Needs",
          description:
            "Unlike template-based solutions, custom web development addresses your specific business requirements, workflows, and goals.",
        },
        {
          title: "Better Performance & User Experience",
          description:
            "Optimized code and architecture ensure faster loading times, smoother navigation, and higher user engagement.",
        },
        {
          title: "SEO-Friendly Architecture",
          description:
            "Properly structured code and semantic markup improve search engine rankings and organic traffic.",
        },
        {
          title: "Scalability for Growth",
          description:
            "Built with future growth in mind, our web applications can easily accommodate increased traffic and features.",
        },
        {
          title: "Enhanced Security",
          description:
            "Enterprise-grade security measures protect your data, users, and business reputation.",
        },
        {
          title: "Competitive Advantage",
          description:
            "Unique features and superior user experiences set you apart from competitors using generic solutions.",
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
      <main className="mx-auto max-w-6xl px-4 py-15 md:py-50">
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
            Web Development Service
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg mb-8">
            <h2 className="font-semibold text-blue-900 mb-4 text-base sm:text-lg">
              Why Choose Our Web Development Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceDetails.hero.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start p-2 hover:bg-blue-100 rounded transition-colors"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
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
                className=" border-slate-200 rounded-xl p-4 md:p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                {/* Header with responsive icon */}
                <div className="flex items-start mb-4">
                  {/* <div className="hidden sm:flex w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 text-blue-700 rounded-full items-center justify-center mr-3 text-xs sm:text-sm font-bold flex-shrink-0 mt-1">
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
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
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

        {/* Process Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {serviceDetails.process.title}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base md:text-lg mb-8 max-w-3xl">
              {serviceDetails.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {serviceDetails.process.steps.map((step, index) => (
              <div
                key={index}
                className=" border-slate-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-white to-blue-50"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">
                  {step.description}
                </p>
                <div className="space-y-1.5 sm:space-y-2">
                  {step.activities.map((activity, aIndex) => (
                    <div
                      key={aIndex}
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
                      <span>{activity}</span>
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

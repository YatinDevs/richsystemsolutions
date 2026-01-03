// app/about-us/page.tsx
import type { Metadata } from "next";
import { siteSEO, pageSEO } from "@/utils/seoConfig";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award, Clock, Target, Globe } from "lucide-react";

const seo = pageSEO.about;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords?.split(",").map((k) => k.trim()),
  alternates: { canonical: seo.canonical },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    siteName: siteSEO.siteName,
    images: [
      {
        url: `${siteSEO.baseUrl}/about-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "About Rich System Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: seo.title,
    description: seo.description,
    url: `${siteSEO.baseUrl}${seo.canonical}`,
    publisher: {
      "@type": "Organization",
      name: siteSEO.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteSEO.baseUrl}/logo.png`,
      },
      address: {
        "@type": "PostalAddress",
        ...siteSEO.address,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteSEO.phone,
        email: siteSEO.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "English",
      },
    },
  };

  const companyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSEO.siteName,
    description: siteSEO.defaultDescription,
    url: siteSEO.baseUrl,
    logo: `${siteSEO.baseUrl}/logo.png`,
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Founder Name",
      },
    ],
    address: {
      "@type": "PostalAddress",
      ...siteSEO.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteSEO.phone,
      email: siteSEO.email,
      contactType: "customer service",
    },
    sameAs: [
      "https://facebook.com/richsystemsolutions",
      "https://twitter.com/richsol",
      "https://linkedin.com/company/rich-system-solutions",
      "https://instagram.com/richsystemsolutions",
    ],
  };

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with vision to provide comprehensive IT solutions",
    },
    {
      year: "2021",
      title: "Expanded Services",
      description: "Added digital marketing and bulk SMS services",
    },
    {
      year: "2022",
      title: "Team Growth",
      description: "Expanded to 15+ expert team members",
    },
    {
      year: "2023",
      title: "100+ Projects",
      description: "Successfully delivered 100+ projects to satisfied clients",
    },
    {
      year: "2024",
      title: "IT Training Launch",
      description: "Started IT training with internship programs",
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Customer Focus",
      description:
        "We prioritize understanding client needs and delivering solutions that drive their business forward.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "Committed to delivering high-quality solutions with attention to detail and best practices.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "We believe in working closely with clients as partners to achieve mutual success.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and methodologies to provide cutting-edge solutions.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Impact",
      description:
        "Creating solutions that make a real difference in our clients' businesses and communities.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(companyJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen mt-30">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About{" "}
                  <span className="text-yellow-400">Rich System Solutions</span>
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  A leading software development and digital marketing company
                  based in Nashik, empowering businesses with innovative
                  technology solutions since 2020.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="bg-blue-800 px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">4+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div className="bg-blue-800 px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm opacity-80">Projects Delivered</div>
                  </div>
                  <div className="bg-blue-800 px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-80">Happy Clients</div>
                  </div>
                  <div className="bg-blue-800 px-6 py-3 rounded-lg">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-80">Expert Team</div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Call Us</div>
                        <div className="font-semibold">{siteSEO.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Email Us</div>
                        <div className="font-semibold">{siteSEO.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story & Mission
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Founded in 2020, Rich System Solutions began with a simple
                mission: to help businesses leverage technology for growth.
                Today, we&apos;re a full-service technology partner offering
                software development, digital marketing, and IT training
                solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">What Drives Us</h3>
                <p className="text-gray-700 mb-6">
                  We believe technology should be an enabler, not a barrier. Our
                  team of passionate developers, marketers, and trainers work
                  together to create solutions that are not just technically
                  sound but also strategically aligned with your business goals.
                </p>
                <p className="text-gray-700 mb-6">
                  Based in Nashik, Maharashtra, we&apos;ve had the privilege of
                  working with businesses across various industries, from
                  startups to established enterprises, helping them navigate the
                  digital landscape successfully.
                </p>

                <div className="space-y-4">
                  {[
                    "Custom software development tailored to your business needs",
                    "Digital marketing strategies that deliver measurable results",
                    "Bulk SMS & WhatsApp automation for effective communication",
                    "IT training with hands-on internship programs",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Our Milestones</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg mr-4">
                        {milestone.year}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Rich System Solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Leadership Team
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals driving innovation at Rich
                System Solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Founder & CEO",
                  role: "Technology Strategy",
                  bio: "10+ years in software development and business strategy. Passionate about helping businesses grow through technology.",
                  imageColor: "bg-blue-100",
                },
                {
                  name: "Head of Development",
                  role: "Software Engineering",
                  bio: "Expert in full-stack development with extensive experience in building scalable enterprise applications.",
                  imageColor: "bg-green-100",
                },
                {
                  name: "Marketing Director",
                  role: "Digital Strategy",
                  bio: "Specializes in creating data-driven marketing campaigns that deliver ROI and business growth.",
                  imageColor: "bg-purple-100",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                >
                  <div
                    className={`h-48 ${member.imageColor} flex items-center justify-center`}
                  >
                    <div className="text-5xl font-bold text-gray-700 opacity-30">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </div>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Partner with Rich System Solutions and experience the difference
              of working with a dedicated technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Headquarters</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">
                        Address
                      </div>
                      <div className="text-gray-600">
                        {siteSEO.address.streetAddress}
                        <br />
                        {siteSEO.address.addressLocality},{" "}
                        {siteSEO.address.addressRegion}
                        <br />
                        {siteSEO.address.postalCode},{" "}
                        {siteSEO.address.addressCountry}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">
                        Contact
                      </div>
                      <div className="text-gray-600">
                        Phone: {siteSEO.phone}
                        <br />
                        Email: {siteSEO.email}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-1">
                        Business Hours
                      </div>
                      <div className="text-gray-600">
                        Monday - Saturday:{" "}
                        {siteSEO.openingHours.mondayToSaturday.opens} -{" "}
                        {siteSEO.openingHours.mondayToSaturday.closes}
                        <br />
                        Sunday:{" "}
                        {siteSEO.openingHours.sunday.opens === "00:00"
                          ? "Closed"
                          : "Open"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-100 p-8">
                  {/* Map Placeholder - Replace with actual map integration */}
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-12 h-12 mx-auto mb-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="font-bold">Rich System Solutions</div>
                      <div className="text-sm opacity-90">
                        {siteSEO.address.addressLocality},{" "}
                        {siteSEO.address.addressRegion}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    *Map integration can be added with Google Maps or similar
                    service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

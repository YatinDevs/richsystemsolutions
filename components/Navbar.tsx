"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin } from "lucide-react";
import RichLogo from "./RichLogo";
import Image, { StaticImageData } from "next/image";
import {
  bulksms,
  bulkvoice,
  whatsappservice,
  digitalmarketing,
  whatsappchatbot,
  digitalautomation,
  designdevelopment,
  graphicdesign,
  alertsystem,
  ivrsystem,
  bulkemail,
  outdoormarketing,
  career,
  blog,
  howtoguide,
  faq,
} from "../assets";
import TopBar from "./navbar/Topbar";

type ServiceItem = {
  label: string;
  path: string;
  description: string;
  image: StaticImageData;
  keywords: string[]; // SEO keywords for each service
};

type DepartmentItem = {
  label: string;
  path: string;
  title: string; // SEO title
  metaDescription: string; // SEO meta description
  services: ServiceItem[];
};

const brandColor = "#07337a";

// SEO Optimized Departments Structure
const departments: DepartmentItem[] = [
  {
    label: "Software & IT",
    path: "/software-it-services",
    title: "Software & IT Services Company | Custom Software Development",
    metaDescription:
      "Complete software & IT solutions including custom software development, web development, mobile apps, UI/UX design, and enterprise solutions for businesses.",
    services: [
      {
        label: "Custom Software Development",
        path: "/software-it-services/custom-software-development",
        description:
          "Tailored software solutions for your business needs with modern technologies.",
        image: designdevelopment,
        keywords: [
          "custom software",
          "enterprise software",
          "business software",
          "software solutions",
        ],
      },
      {
        label: "Web Development",
        path: "/software-it-services/web-development",
        description:
          "Responsive websites with React, Next.js, and modern frameworks.",
        image: designdevelopment,
        keywords: [
          "web development",
          "website design",
          "responsive websites",
          "frontend development",
        ],
      },
      {
        label: "Mobile App Development",
        path: "/software-it-services/mobile-app-development",
        description:
          "Native and cross-platform iOS & Android mobile applications.",
        image: digitalautomation,
        keywords: [
          "mobile apps",
          "ios development",
          "android apps",
          "react native",
        ],
      },
      {
        label: "UI/UX Design",
        path: "/software-it-services/ui-ux-design",
        description:
          "User-centered interface design and experience optimization.",
        image: graphicdesign,
        keywords: [
          "ui design",
          "ux design",
          "user experience",
          "interface design",
        ],
      },
      {
        label: "E-Commerce Solutions",
        path: "/software-it-services/ecommerce-solutions",
        description: "Complete e-commerce platforms with payment integration.",
        image: designdevelopment,
        keywords: [
          "ecommerce development",
          "online store",
          "shopping cart",
          "payment gateway",
        ],
      },
      {
        label: "Cloud Solutions",
        path: "/software-it-services/cloud-solutions",
        description: "Cloud migration, deployment, and management services.",
        image: digitalautomation,
        keywords: [
          "cloud computing",
          "aws",
          "azure",
          "google cloud",
          "cloud migration",
        ],
      },
      {
        label: "API Integration",
        path: "/software-it-services/api-integration",
        description: "Third-party API integrations and custom API development.",
        image: whatsappservice,
        keywords: [
          "api integration",
          "rest api",
          "web services",
          "api development",
        ],
      },
      {
        label: "Maintenance & Support",
        path: "/software-it-services/maintenance-support",
        description: "Ongoing software maintenance and technical support.",
        image: alertsystem,
        keywords: [
          "software maintenance",
          "technical support",
          "updates",
          "bug fixes",
        ],
      },
    ],
  },
  {
    label: "Digital Marketing",
    path: "/digital-marketing-services",
    title: "Digital Marketing Agency | SEO & Social Media Marketing Services",
    metaDescription:
      "Full-service digital marketing agency offering SEO, social media marketing, PPC, content marketing, and email marketing services to grow your business.",
    services: [
      {
        label: "SEO Services",
        path: "/digital-marketing-services/seo",
        description:
          "Search engine optimization to improve rankings and visibility.",
        image: digitalmarketing,
        keywords: [
          "seo services",
          "search engine optimization",
          "organic traffic",
          "keyword ranking",
        ],
      },
      {
        label: "Social Media Marketing",
        path: "/digital-marketing-services/social-media-marketing",
        description: "Complete social media strategy and management.",
        image: digitalmarketing,
        keywords: [
          "social media marketing",
          "smm",
          "facebook marketing",
          "instagram marketing",
        ],
      },
      {
        label: "PPC Advertising",
        path: "/digital-marketing-services/ppc-advertising",
        description:
          "Pay-per-click campaigns on Google, Facebook, and other platforms.",
        image: digitalmarketing,
        keywords: [
          "ppc",
          "google ads",
          "facebook ads",
          "paid advertising",
          "pay per click",
        ],
      },
      {
        label: "Content Marketing",
        path: "/digital-marketing-services/content-marketing",
        description: "Strategic content creation and distribution.",
        image: digitalmarketing,
        keywords: [
          "content marketing",
          "blog writing",
          "content strategy",
          "copywriting",
        ],
      },
      {
        label: "Email Marketing",
        path: "/digital-marketing-services/email-marketing",
        description: "Targeted email campaigns and automation.",
        image: bulkemail,
        keywords: [
          "email marketing",
          "email campaigns",
          "newsletter",
          "mailchimp",
        ],
      },
      {
        label: "WhatsApp Marketing",
        path: "/digital-marketing-services/whatsapp-marketing",
        description: "WhatsApp Business API and marketing campaigns.",
        image: whatsappservice,
        keywords: [
          "whatsapp marketing",
          "whatsapp business",
          "bulk whatsapp",
          "whatsapp api",
        ],
      },
      {
        label: "Bulk SMS Marketing",
        path: "/digital-marketing-services/bulk-sms",
        description: "Transactional and promotional SMS campaigns.",
        image: bulksms,
        keywords: [
          "bulk sms",
          "sms marketing",
          "text marketing",
          "promotional sms",
        ],
      },
      {
        label: "Graphic Design",
        path: "/digital-marketing-services/graphic-design",
        description: "Brand identity, logos, and marketing materials.",
        image: graphicdesign,
        keywords: [
          "graphic design",
          "logo design",
          "brand identity",
          "marketing materials",
        ],
      },
      {
        label: "Video Marketing",
        path: "/digital-marketing-services/video-marketing",
        description: "Promotional videos, reels, and animated content.",
        image: outdoormarketing,
        keywords: [
          "video marketing",
          "promotional videos",
          "animated videos",
          "reels",
        ],
      },
    ],
  },
];

// Essential Navigation Items (SEO Focused)
const essentialNavItems = [
  {
    label: "Home",
    path: "/",
    title: "IT Services & Digital Marketing Company",
    description:
      "Leading IT services and digital marketing company offering software development, web development, and complete digital marketing solutions.",
  },
  {
    label: "About Us",
    path: "/about-us",
    title: "About Our Company | Our Story & Mission",
    description:
      "Learn about our journey, mission, values, and the team behind our successful IT and digital marketing projects.",
  },
  // {
  //   label: "Case Studies",
  //   path: "/case-studies",
  //   title: "Our Work & Case Studies | Project Portfolio",
  //   description:
  //     "Browse our portfolio of successful software development and digital marketing projects with detailed case studies.",
  // },
  {
    label: "Blog",
    path: "/blog",
    title: "IT & Digital Marketing Blog | Latest Insights",
    description:
      "Read our latest articles on software development, digital marketing trends, SEO tips, and technology insights.",
  },
  {
    label: "Contact",
    path: "/contact",
    title: "Contact Us | Get in Touch for IT Services",
    description:
      "Contact our team for software development, digital marketing services, or any inquiries about our IT solutions.",
  },
  // {
  //   label: "Careers",
  //   path: "/careers",
  //   title: "Join Our Team | Careers in IT & Digital Marketing",
  //   description:
  //     "Explore career opportunities in software development, digital marketing, and join our growing team of experts.",
  // },
];

// Important Pages for SEO (hidden from main nav but should exist)
const importantPages = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms-of-service", label: "Terms of Service" },
  { path: "/sitemap", label: "Sitemap" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side
  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isClient && typeof document !== "undefined") {
      document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    }
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    if (isClient && typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  const handleDepartmentToggle =
    (departmentLabel: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenDropdown((prev) =>
        prev === departmentLabel ? null : departmentLabel
      );
    };

  const handleCTAClick = () => {
    closeAllMenus();
    if (isClient) {
      window.location.href = "/contact";
    }
  };

  const handleMobileCTAClick = () => {
    closeAllMenus();
    if (isClient) {
      window.location.href = "/contact";
    }
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed w-full z-50 font-sans">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Navigation */}
      <motion.nav
        className={`${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        } transition-all duration-300 md:pt-20 pt-4`}
        initial={{ padding: "12px 0" }}
        animate={{
          padding: isClient && scrolled ? "8px 0" : "8px 0",

          backgroundColor: "rgba(255,255,255,0.98)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6  flex justify-between items-center">
          {/* Logo with optimized alt text */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <Link
              href="/"
              className="cursor-pointer"
              aria-label="RichSol IT Services & Digital Marketing Company"
            >
              <RichLogo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Essential Pages */}
            {essentialNavItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.path}
                  className={`px-4 py-2 font-medium uppercase tracking-wider text-sm relative transition-colors ${
                    isActive(item.path)
                      ? "text-[#07337a]"
                      : "text-gray-800 hover:text-[#07337a]"
                  }`}
                  onClick={closeAllMenus}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: brandColor }}
                      layoutId="navUnderline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </Link>
              </div>
            ))}

            {/* Departments with Mega Menu */}
            {departments.map((department) => (
              <div
                key={department.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(department.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center text-gray-800 transition-colors px-4 py-2 font-medium uppercase tracking-wider text-sm relative hover:text-[#07337a] group"
                  style={{
                    color:
                      openDropdown === department.label ||
                      isActive(department.path)
                        ? brandColor
                        : "inherit",
                  }}
                >
                  <span className="whitespace-nowrap">{department.label}</span>
                  <ChevronDown
                    className={`h-3 w-3 ml-1 transition-transform ${
                      openDropdown === department.label ? "rotate-180" : ""
                    }`}
                  />
                  {(openDropdown === department.label ||
                    isActive(department.path)) && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{ backgroundColor: brandColor }}
                      layoutId="navUnderline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </button>

                {/* Department Mega Menu */}
                {openDropdown === department.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 transform -translate-x-1/2 top-full w-[800px] bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                    onMouseEnter={() => setOpenDropdown(department.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-6">
                      <div className="mb-6">
                        <Link
                          href={department.path}
                          onClick={closeAllMenus}
                          className="inline-block"
                        >
                          <h3 className="text-2xl font-bold text-gray-900 hover:text-[#07337a] transition-colors">
                            {department.label} Services
                          </h3>
                        </Link>
                        <p className="text-gray-600 mt-2">
                          {department.metaDescription}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        {/* Services Grid */}
                        <div className="space-y-3">
                          {department.services
                            .slice(0, Math.ceil(department.services.length / 2))
                            .map((service) => (
                              <Link
                                key={service.label}
                                href={service.path}
                                onClick={closeAllMenus}
                                className="group block p-4 rounded-lg hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                                    <Image
                                      src={service.image}
                                      alt={service.label}
                                      width={24}
                                      height={24}
                                      className="object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 group-hover:text-[#07337a] transition-colors">
                                      {service.label}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>

                        <div className="space-y-3">
                          {department.services
                            .slice(Math.ceil(department.services.length / 2))
                            .map((service) => (
                              <Link
                                key={service.label}
                                href={service.path}
                                onClick={closeAllMenus}
                                className="group block p-4 rounded-lg hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                                    <Image
                                      src={service.image}
                                      alt={service.label}
                                      width={24}
                                      height={24}
                                      className="object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 group-hover:text-[#07337a] transition-colors">
                                      {service.label}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>

                      {/* Department CTA */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                          href={department.path}
                          onClick={closeAllMenus}
                          className="inline-flex items-center text-[#07337a] font-semibold hover:text-blue-800 transition-colors"
                        >
                          View All {department.label} Services
                          <ChevronDown className="h-4 w-4 ml-1 rotate-270" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <motion.button
              onClick={handleCTAClick}
              className="ml-4 text-white px-6 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: brandColor }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 5px 15px ${brandColor}40`,
                backgroundColor: "#062a5e",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Consultation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
              <button
                onClick={closeAllMenus}
                className="text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="space-y-1">
                {/* Essential Pages */}
                {essentialNavItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100">
                    <Link
                      href={item.path}
                      onClick={closeAllMenus}
                      className="flex items-center py-4 text-lg text-gray-800 font-semibold w-full text-left hover:text-[#07337a] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}

                {/* Departments */}
                {departments.map((department) => (
                  <div
                    key={department.label}
                    className="border-b border-gray-100"
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === department.label ? null : department.label
                          )
                        }
                        className="flex-1 flex items-center py-4 text-lg text-gray-800 font-semibold hover:text-[#07337a] transition-colors text-left"
                      >
                        {department.label}
                      </button>
                      <button
                        onClick={() =>
                          setOpenDropdown((prev) =>
                            prev === department.label ? null : department.label
                          )
                        }
                        className="p-2"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === department.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {openDropdown === department.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 overflow-hidden"
                        >
                          {department.services.map((service) => (
                            <div
                              key={service.label}
                              className="border-t border-gray-100"
                            >
                              <Link
                                href={service.path}
                                onClick={closeAllMenus}
                                className="block py-3 text-gray-600 hover:text-[#07337a] transition-colors font-medium pl-4"
                              >
                                {service.label}
                              </Link>
                            </div>
                          ))}
                          <div className="border-t border-gray-100">
                            <Link
                              href={department.path}
                              onClick={closeAllMenus}
                              className="block py-3 text-[#07337a] font-semibold pl-4"
                            >
                              View All {department.label} Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <button
                  onClick={handleMobileCTAClick}
                  className="block w-full text-white px-6 py-4 rounded-lg font-semibold uppercase tracking-wider text-center text-lg shadow-lg transition-all"
                  style={{ backgroundColor: brandColor }}
                >
                  Get Free Consultation
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919595902006"
                    className="text-gray-700 hover:text-[#07337a] flex items-center transition-colors text-base"
                  >
                    <Phone size={18} className="mr-3" />
                    +91 95959 02006
                  </a>
                  <a
                    href="mailto:support@richsol.com"
                    className="text-gray-700 hover:text-[#07337a] flex items-center transition-colors text-base"
                  >
                    <Mail size={18} className="mr-3" />
                    support@richsol.com
                  </a>
                  <div className="text-gray-700 flex items-start">
                    <MapPin size={18} className="mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base">
                      4th Floor, Akravi Disha, Nashik, Maharashtra 422002
                    </span>
                  </div>
                  <div className="text-gray-700 flex items-center text-base">
                    <Clock size={18} className="mr-3" />
                    Mon–Sat: 9:30 AM – 6:30 PM
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

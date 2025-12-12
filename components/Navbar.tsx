"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Clock, MapPin } from "lucide-react";
import RichLogo from "./RichLogo";
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

type SubItem = {
  label: string;
  path: string;
  description: string;
  image: string;
};

type NavItem =
  | {
      label: string;
      path: string;
      submenu?: never;
    }
  | {
      label: string;
      path?: never;
      submenu: SubItem[];
    };

const brandColor = "#07337a";

const navItems: NavItem[] = [
  { label: "Home", path: "/" },

  // 3 department tabs
  { label: "Software & IT", path: "/software-it-services" },
  { label: "Social & Marketing", path: "/social-media-marketing" },
  { label: "Business Communication", path: "/business-communication" },

  // Product mega-menu as “Solutions”
  {
    label: "Solutions",
    submenu: [
      {
        label: "Bulk SMS",
        path: "/products/bulk-sms",
        description:
          "Secure, timely delivery of Transactional, Promotional, OTP messages.",
        image: bulksms,
      },
      {
        label: "Bulk Voice",
        path: "/products/bulk-voice",
        description:
          "Send your message instantly with reliable bulk voice solutions.",
        image: bulkvoice,
      },
      {
        label: "Whatsapp Service",
        path: "/products/whatsapp-service",
        description:
          "Power your business with the official WhatsApp Business API.",
        image: whatsappservice,
      },
      {
        label: "Digital Marketing",
        path: "/products/digital-marketing",
        description:
          "Boost your brand presence with full-funnel digital marketing.",
        image: digitalmarketing,
      },
      {
        label: "Whatsapp Chatbot",
        path: "/products/whats-chatbot",
        description:
          "Automate customer conversations with WhatsApp chatbot flows.",
        image: whatsappchatbot,
      },
      {
        label: "Digital Automation",
        path: "/products/digital-auto",
        description:
          "Streamline operations with custom digital automation solutions.",
        image: digitalautomation,
      },
      {
        label: "Design Development",
        path: "/products/design-develop",
        description: "Transform ideas into powerful web and app experiences.",
        image: designdevelopment,
      },
      {
        label: "Graphic Design",
        path: "/products/graphic-design",
        description:
          "Creative brand identities, marketing assets, and visuals.",
        image: graphicdesign,
      },
      {
        label: "Alert System",
        path: "/products/alert-system",
        description:
          "Stay informed instantly with missed-call and alert systems.",
        image: alertsystem,
      },
      {
        label: "IVR System",
        path: "/products/ivr-system",
        description: "Automate customer calls with flexible IVR call flows.",
        image: ivrsystem,
      },
      {
        label: "Bulk Email",
        path: "/products/bulk-email",
        description: "Run high-deliverability email campaigns at scale.",
        image: bulkemail,
      },
      {
        label: "Outdoor Marketing",
        path: "/products/outdoor-marketing",
        description:
          "Strategic outdoor campaigns with hoardings and billboards.",
        image: outdoormarketing,
      },
    ],
  },

  // Resources mega-menu
  {
    label: "Resources",
    submenu: [
      {
        label: "Career",
        path: "/resources/career",
        description:
          "Explore career opportunities and grow with our digital team.",
        image: career,
      },
      {
        label: "Blog",
        path: "/resources/blog",
        description:
          "Insights on software, digital marketing, and communication.",
        image: blog,
      },
      {
        label: "How To Guide",
        path: "/resources/how-to-guide",
        description: "Step-by-step guides to use our platforms and services.",
        image: howtoguide,
      },
      {
        label: "FAQ",
        path: "/resources/faq",
        description:
          "Answers to frequently asked questions about our services.",
        image: faq,
      },
    ],
  },

  { label: "Contact", path: "/contact" },
  { label: "Career", path: "/career" },
  { label: "Login", path: "/login" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    document.body.style.overflow = "auto";
  };

  const handleDropdownToggle = (index: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const handleNavItemClick = (item: NavItem, index: number) => {
    if ("submenu" in item) {
      setOpenDropdown((prev) => (prev === index ? null : index));
    } else {
      closeAllMenus();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed w-full z-50 font-sans">
      <motion.nav
        className={`${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        } transition-all duration-300 rounded-br-full`}
        initial={{ padding: "16px 0" }}
        animate={{
          padding: scrolled ? "8px 0" : "16px 0",
          backgroundColor: "rgba(255,255,255,0.98)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.03 }}
          >
            <Link href="/" className="cursor-pointer">
              <RichLogo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.label);
                  if ("submenu" in item) setOpenDropdown(index);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setOpenDropdown(null);
                }}
              >
                <motion.div className="relative">
                  {"path" in item && item.path ? (
                    <Link
                      href={item.path}
                      className={`flex items-center px-4 py-2 font-medium uppercase tracking-wider text-sm relative transition-colors ${
                        isActive(item.path)
                          ? "text-[#07337a]"
                          : "text-gray-800 hover:text-[#07337a]"
                      }`}
                      onClick={() => handleNavItemClick(item, index)}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item, index)}
                      className="flex items-center text-gray-800 transition-colors px-4 py-2 font-medium uppercase tracking-wider text-sm relative hover:text-[#07337a]"
                      style={{
                        color:
                          hoveredItem === item.label ? brandColor : "inherit",
                      }}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      {"submenu" in item && (
                        <span
                          className="ml-1"
                          onClick={handleDropdownToggle(index)}
                        >
                          <ChevronDown
                            className={`h-3 w-3 transition-transform ${
                              openDropdown === index ? "rotate-180" : ""
                            }`}
                            style={{
                              color:
                                hoveredItem === item.label
                                  ? brandColor
                                  : "inherit",
                            }}
                          />
                        </span>
                      )}
                      {hoveredItem === item.label && (
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
                  )}
                </motion.div>

                {"submenu" in item && openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full w-[700px] bg-white rounded-lg shadow-xl z-50 border border-gray-100"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.label} className="relative">
                            <Link
                              href={subItem.path}
                              onClick={closeAllMenus}
                              className="block p-3 text-gray-700 cursor-pointer transition-all hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 group"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                  <img
                                    src={subItem.image}
                                    alt={subItem.label}
                                    className="w-8 h-8 object-contain"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-gray-900 text-sm mb-1 leading-tight group-hover:text-[#07337a] transition-colors duration-300">
                                    {subItem.label}
                                  </h3>
                                  <p className="text-xs text-gray-600 leading-tight">
                                    {subItem.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <motion.button
              onClick={() => (window.location.href = "/contact")}
              className="ml-4 text-white px-6 py-2 rounded-lg font-semibold uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: brandColor }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 5px 15px ${brandColor}40`,
                backgroundColor: "#062a5e",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid gap-1">
                {navItems.map((item, index) => (
                  <div key={item.label} className="border-b border-gray-100">
                    {"submenu" in item ? (
                      <>
                        <div className="flex items-center">
                          <button
                            onClick={() => handleNavItemClick(item, index)}
                            className="flex-1 flex items-center py-4 text-lg text-gray-800 font-semibold hover:text-[#07337a] transition-colors"
                          >
                            <span className="ml-3">{item.label}</span>
                          </button>
                          <button
                            onClick={handleDropdownToggle(index)}
                            className="p-2"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                openDropdown === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {openDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-8 overflow-hidden"
                            >
                              {item.submenu.map((subItem) => (
                                <div
                                  key={subItem.label}
                                  className="border-t border-gray-100"
                                >
                                  <Link
                                    href={subItem.path}
                                    onClick={closeAllMenus}
                                    className="block py-3 text-sm text-gray-600 hover:text-[#07337a] transition-colors font-medium"
                                  >
                                    {subItem.label}
                                  </Link>
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={closeAllMenus}
                        className="flex items-center py-4 text-lg text-gray-800 font-semibold w-full text-left hover:text-[#07337a] transition-colors"
                      >
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    window.location.href = "/contact";
                    closeAllMenus();
                  }}
                  className="block w-full text-white px-6 py-4 rounded-lg font-semibold uppercase tracking-wider text-center text-lg shadow-lg transition-all"
                  style={{ backgroundColor: brandColor }}
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:support@richsol.com"
                    className="text-gray-700 hover:text-[#07337a] flex items-center transition-colors"
                  >
                    <Mail size={16} className="mr-2" />
                    support@richsol.com
                  </a>
                  <a
                    href="tel:+919595902006"
                    className="text-gray-700 hover:text-[#07337a] flex items-center transition-colors"
                  >
                    <Phone size={16} className="mr-2" />
                    +91 95959 02006
                  </a>
                  <div className="text-gray-700 flex items-start">
                    <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      4th Floor, Akravi Disha, Nashik, Maharashtra 422002
                    </span>
                  </div>
                  <div className="text-gray-700 flex items-center">
                    <Clock size={16} className="mr-2" />
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

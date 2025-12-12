import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import RichLogo from "./RichLogo";
import { footerLogo } from "../assets/index";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Career", path: "/resources/career" },
    { label: "Blogs", path: "/resources/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    { label: "Customer Support", path: "/customer-support" },
    { label: "How to guide", path: "/resources/how-to-guide" },
    { label: "Terms & Conditions", path: "/terms-conditions" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      label: "Facebook",
      url: "https://www.facebook.com/richsystemsolutionspvtltd",
    },
    {
      icon: <Instagram size={18} />,
      label: "Instagram",
      url: "https://www.instagram.com/richsol_nsk",
    },
    {
      icon: <Linkedin size={18} />,
      label: "Linkedin",
      url: "https://www.linkedin.com/company/rich-system-solutions-pvt-ltd-2024",
    },
    {
      icon: <Youtube size={18} />,
      label: "YouTube",
      url: "https://www.youtube.com/@RICHSystemSolutions/videos",
    },
  ];

  return (
    <footer className="rounded-tl-4xl bg-gradient-to-b from-[#021b44] to-[#085692] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="mb-6 flex items-center">
            <div className="relative w-12 h-12 md:w-40 md:h-30">
              <Image
                src={footerLogo}
                alt="Rich System Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white mb-6 leading-relaxed">
            Rich System Solutions is a leading provider of Bulk SMS services &
            Marketing SMS services in India. Rich system solutions has been
            providing SMS based services for over 16 years.
          </p>
          <div className="flex gap-3 mb-6">
            {socialLinks.map(({ icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3676a3] hover:bg-[#83c5f5] p-2 rounded-full text-white transition-colors"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white border-b border-teal-600 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-white hover:text-[#0bc0df] transition-colors text-left flex items-center group"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-[#0bc0df] transition-colors"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white border-b border-teal-600 pb-2">
            Help
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.path}
                  className="text-white hover:text-[#0bc0df] transition-colors text-left flex items-center group"
                >
                  <span className="w-2 h-2 bg-white rounded-full mr-3 group-hover:bg-[#0bc0df] transition-colors"></span>
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-white border-b border-teal-600 pb-2">
            Contact Info
          </h3>
          <ul className="space-y-4 text-white pt-4">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-white mt-1 flex-shrink-0" />
              <span>
                4th Floor, Akravi Disha, 401, opposite Hotel City Pride,
                Tilakwadi, Nashik, Maharashtra 422002
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-white" />
              <a
                href="tel:+919595902006"
                className="hover:text-white transition-colors font-medium"
              >
                +91 95959 02006
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-white" />
              <a
                href="tel:+919595902003"
                className="hover:text-white transition-colors font-medium"
              >
                +91 95959 02003
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-white" />
              <a
                href="mailto:support@richsol.com"
                className="hover:text-white transition-colors"
              >
                support@richsol.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={20} className="text-white" />
              <div>
                <p>Mon-Sat: 09:30 AM - 6:30 PM</p>
                <p className="text-teal-300">Sunday: Closed</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-12 text-center text-sm text-teal-300 border-t border-teal-700 pt-6">
        <p className="mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Rich System Solutions Pvt Ltd
          </span>
          . All Rights Reserved.
        </p>

        <p className="flex flex-wrap justify-center items-center gap-3">
          <Link
            href="/privacy-policy"
            className="hover:text-amber-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-teal-600">•</span>
          <Link
            href="/terms-and-service"
            className="hover:text-amber-400 transition-colors"
          >
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

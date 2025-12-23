"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

const TopBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const contactInfo = [
    {
      icon: <Phone size={14} />,
      text: "+91 95959 02006",
      href: "tel:+919595902006",
    },
    {
      icon: <Mail size={14} />,
      text: "support@richsol.com",
      href: "mailto:support@richsol.com",
    },
    {
      icon: <Clock size={14} />,
      text: "Mon-Sat: 9:30 AM - 6:30 PM",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={16} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/rich-system-solutions-pvt-ltd-2024",
      hoverColor: "hover:text-[#0077B5]",
      bgHoverColor: "hover:bg-[#0077B5]/5",
      color: "text-[#0077B5]",
      // Optional: Background on hover
    },
    {
      icon: <FaFacebookF size={14} />,
      name: "Facebook",
      url: "https://www.facebook.com/richsystemsolutionspvtltd",
      hoverColor: "hover:text-[#4267B2]",
      bgHoverColor: "hover:bg-[#4267B2]/5",
      color: "text-[#4267B2]",
    },
    {
      icon: <FaInstagram size={16} />,
      name: "Instagram",
      url: "https://www.instagram.com/richsol_nsk",
      hoverColor: "hover:text-[#E1306C]",
      bgHoverColor: "hover:bg-[#E1306C]/5",
      color: "text-[#E1306C]",
    },
    {
      icon: <FaYoutube size={16} />,
      name: "YouTube",
      url: "https://www.youtube.com/@RICHSystemSolutions/videos",
      hoverColor: "hover:text-[#FF0000]",
      bgHoverColor: "hover:bg-[#FF0000]/5",
      color: "text-[#FF0000]",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top
      if (currentScrollY <= 50) {
        setIsAtTop(true);
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Check if we're at top
      setIsAtTop(currentScrollY <= 50);

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -40,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.2,
      }}
      className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isAtTop ? "bg-[#07337a]" : "bg-[#07337a]/95 backdrop-blur-sm"
      }`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="mr-2 text-blue-300">{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-blue-200 transition-colors font-medium text-white"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span className="font-medium text-white">{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-xs text-blue-200">Follow us:</span>
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={`Visit our ${social.name} page`}
                  title={`Follow us on ${social.name}`}
                  className={`
                    p-2 
                    rounded-full 
                    transition-all 
                    duration-300
                    bg-white/90
                    ${social.color}
                    ${social.hoverColor}
                    ${social.bgHoverColor}
                    hover:bg-white/10
                  `}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;

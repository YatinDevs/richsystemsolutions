"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "../assets";
import Image, { StaticImageData } from "next/image";

type ServiceItem = {
  number: string;
  title: string;
  services: string[][];
  icons: StaticImageData[];
  image: string;
  gradient: string;
};

const ServicesWeOffer = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      number: "01",
      title: "SOFTWARE & IT SERVICES",
      services: [
        [
          "Custom Software Development",
          "Modern Responsive Website Development",
        ],
        ["Mobile Apps", "Courses and Internships"],
        ["WhatsApp API Integration", "Dynamic QR Code & Smart Link Generation"],
      ],
      icons: [designdevelopment, digitalautomation, whatsappservice],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      gradient: "from-blue-600 to-purple-700",
    },
    {
      number: "02",
      title: "SOCIAL MEDIA MARKETING",
      services: [
        ["Bulk SMS & Voice Call Services", "WhatsApp Marketing Suite"],
        ["WhatsApp Promotions", "Meta Verified WhatsApp Services"],
        ["WhatsApp Chatbot Solutions", "Personal Number WhatsApp Service"],
        [
          "RICH Connect Application",
          "Lead Management & Automation via Masteraix.io",
        ],
        ["Podcast, Reel Shoot & Product Photography", ""],
      ],
      icons: [bulksms, bulkvoice, whatsappchatbot, digitalmarketing],
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&h=300&fit=crop",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      number: "03",
      title: "SEO SERVICES",
      services: [
        ["Local SEO", "Link Building"],
        ["E-Commerce SEO", "SEO Audit"],
        ["International SEO", "Managed SEO Services"],
      ],
      icons: [digitalmarketing, alertsystem],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      number: "04",
      title: "DESIGN & DEVELOPMENT",
      services: [
        ["Custom Web Development", "UI/UX Design"],
        ["E-Commerce Development", "Product Design"],
        ["Enterprise Solutions", "Website Design"],
      ],
      icons: [designdevelopment, graphicdesign, outdoormarketing],
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=300&fit=crop",
      gradient: "from-orange-500 to-red-600",
    },
    {
      number: "05",
      title: "CONTENT MARKETING",
      services: [
        ["Strategy & Consulting", "Content Creation"],
        ["Content Optimization", "Content Promotion"],
      ],
      icons: [digitalmarketing, bulkemail],
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      number: "06",
      title: "PERFORMANCE MARKETING",
      services: [
        ["PPC Advertising", "Social Media Advertising"],
        ["Conversion Rate Optimization", "Lead Generation"],
        ["Amazon Advertising", "YouTube Advertising"],
      ],
      icons: [digitalmarketing, ivrsystem],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  const brandColor = "#07337a";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  const hoverCardVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Services List */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-blue-700">
                  Our Services
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 font-[Poppins] tracking-tight leading-tight">
                SERVICES
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  WE OFFER
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => setActiveService(index)}
                  className={`flex items-start space-x-4 group cursor-pointer p-4 rounded-2xl transition-all duration-500 ${
                    activeService === index
                      ? "bg-white shadow-2xl border border-blue-200 transform scale-105"
                      : hoveredService === index
                      ? "bg-white shadow-lg  border-gray-200"
                      : "bg-transparent"
                  }`}
                >
                  <motion.span
                    className={`text-2xl font-bold transition-all duration-500 font-[Inter] ${
                      activeService === index
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center"
                        : ""
                    }`}
                    style={{
                      color: activeService === index ? "white" : brandColor,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.number}
                  </motion.span>
                  <motion.span
                    className={`text-xl font-semibold transition-all duration-500 font-[Inter] tracking-wide ${
                      activeService === index
                        ? "text-gray-900"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  >
                    {service.title}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Active Service Showcase */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${services[activeService].gradient} opacity-20`}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white font-[Inter]">
                    {services[activeService].title}
                  </h3>
                  <p className="text-blue-200 text-sm mt-2">
                    {services[activeService].services.length} service categories
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Service Icons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-4 font-[Inter] flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Core Service Technologies
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {services.slice(0, 4).map((service, index) => (
                  <motion.div
                    key={service.number}
                    variants={hoverCardVariants}
                    initial="initial"
                    whileHover="hover"
                    className="flex flex-col items-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
                  >
                    {service.icons && service.icons[0] && (
                      <Image
                        src={service.icons[0]}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain mb-2"
                      />
                    )}
                    <span className="text-xs font-medium text-gray-600 text-center font-[Inter] leading-tight">
                      {service.title.split(" ")[0]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white"
            >
              <h4 className="text-lg font-semibold mb-4 font-[Inter]">
                Get In Touch
              </h4>
              <div className="space-y-3 text-sm">
                {[
                  {
                    icon: "📍",
                    text: "4th Floor, Akravi Disha, Nashik, Maharashtra 422002",
                  },
                  { icon: "📞", text: "+91 95959 02006" },
                  { icon: "📧", text: "support@richsol.com" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center group"
                  >
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="group-hover:text-blue-100 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Details Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-gray-200 pb-16 last:border-b-0 group"
            >
              {/* Service Header with Enhanced Visuals */}
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <span
                    className="text-6xl font-bold font-[Inter] block"
                    style={{ color: brandColor }}
                  >
                    {service.number}
                  </span>
                  <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </motion.div>
                <div>
                  <motion.h3
                    className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 font-[Inter] tracking-tight mb-6"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Animated Service Icons */}
                  <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.icons.map((icon, iconIndex) => (
                      <motion.div
                        key={iconIndex}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: iconIndex * 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.3,
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                        className="w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-200 flex items-center justify-center p-2 hover:shadow-xl transition-all duration-300"
                      >
                        <Image
                          src={icon}
                          alt={`${service.title} icon ${iconIndex + 1}`}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Service Items Grid with Enhanced Animations */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {service.services.map((column, colIndex) => (
                  <div key={colIndex} className="space-y-4">
                    {column.map(
                      (item, itemIndex) =>
                        item && (
                          <motion.div
                            key={`${colIndex}-${itemIndex}`}
                            custom={itemIndex}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{
                              x: 10,
                              backgroundColor: "rgba(59, 130, 246, 0.05)",
                            }}
                            className="flex items-center group cursor-pointer p-3 rounded-xl hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-200"
                          >
                            <motion.div
                              className="w-3 h-3 rounded-full mr-4 flex-shrink-0"
                              style={{ backgroundColor: brandColor }}
                              whileHover={{
                                scale: 1.5,
                                boxShadow: "0 0 10px rgba(7, 51, 122, 0.5)",
                              }}
                              transition={{ type: "spring", stiffness: 300 }}
                            ></motion.div>
                            <motion.span
                              className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-[Inter] font-medium"
                              whileHover={{ color: brandColor }}
                            >
                              {item}
                            </motion.span>
                          </motion.div>
                        )
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-[Inter]">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let's discuss how our comprehensive MarTech and IT services can
              drive your digital transformation and business growth.
            </p>
          </motion.div>

          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 40px rgba(7, 51, 122, 0.3)",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-white px-6 py-2.5 rounded-2xl font-bold text-lg transition-all duration-300 font-[Inter] relative overflow-hidden group"
            style={{ backgroundColor: brandColor }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Start Your Project Today</span>
            <motion.svg
              className="w-5 h-5 ml-3 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.a>

          {/* Enhanced Opening Hours */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 md:ml-10 text-sm text-gray-500 font-[Inter] inline-flex items-center bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Opening Hours: Monday - Saturday: 9:30 AM - 6:30 PM
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;

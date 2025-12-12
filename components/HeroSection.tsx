// components/HeroSection.tsx
"use client";

import React, { useRef } from "react";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Service data with navigation
const servicesData = {
  "Software Development": {
    description: "Custom software solutions tailored to your business needs",
    popular: true,
    url: "/software-it-services",
    features: [
      {
        name: "Custom Software Development",
        icon: "💻",
      },
      {
        name: "Modern Website Development",
        icon: "⚡",
      },
      {
        name: "Mobile App Development",
        icon: "📱",
      },
    ],
  },
  "Digital Marketing": {
    description: "Data-driven marketing strategies to grow your business",
    popular: true,
    url: "/social-media-marketing",
    features: [
      {
        name: "Social Media Marketing",
        icon: "📱",
      },
      {
        name: "SEO & Content Marketing",
        icon: "🔍",
      },
      {
        name: "PPC Campaign Management",
        icon: "🎯",
      },
    ],
  },
  "Business Communication": {
    description: "Streamline your business communications and operations",
    popular: false,
    url: "/business-communication",
    features: [
      {
        name: "WhatsApp Business API",
        icon: "📞",
      },
      {
        name: "Bulk SMS & Voice Services",
        icon: "📢",
      },
      {
        name: "IVR & Automation Tools",
        icon: "🤖",
      },
    ],
  },
};

// Memoize service entries to prevent re-creation on every render
const serviceEntries = Object.entries(servicesData);

const HeroSection = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Animation variants - defined outside component to prevent re-creation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -4,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 py-18 sm:py-42 bg-gradient-to-br from-white via-blue-50/20 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-500" />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10 w-full"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 border border-blue-200/50 mb-6 backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-blue-700">
            Transform Your Digital Presence
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight"
        >
          From Strategy to Software
          <br />
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ backgroundSize: "200% 100%" }}
          >
            We Build, Market & Scale
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          Comprehensive solutions for software development, digital marketing,
          and business communication
        </motion.p>

        {/* Services Selection */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {serviceEntries.map(([serviceName, serviceData]) => (
            <Link key={serviceName} href={serviceData.url} className="block">
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:border-blue-300/50 cursor-pointer transition-all duration-300 group relative overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    {serviceData.popular && (
                      <motion.span
                        className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Popular
                      </motion.span>
                    )}
                  </div>

                  <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center flex-shrink-0">
                    <div className="text-4xl">
                      {serviceName === "Software Development"
                        ? "💻"
                        : serviceName === "Digital Marketing"
                        ? "📈"
                        : "📞"}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {serviceName}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">
                    {serviceData.description}
                  </p>

                  {/* Service Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {serviceData.features.map((feature, idx) => (
                        <div
                          key={`${serviceName}-feature-${idx}`}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <span className="mr-2">{feature.icon}</span>
                          <span>{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors flex items-center">
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          Explore Services →
                        </motion.span>
                      </span>
                      <motion.div
                        className="text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                        initial={{ rotate: 0, scale: 0 }}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                      >
                        {serviceData.popular ? "🔥" : "✨"}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get Free Consultation
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-300"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Video Section */}
      <div ref={videoContainerRef} className="w-full flex justify-center mt-16">
        <motion.div
          style={{ scale, opacity }}
          className="w-full max-w-4xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-2xl pointer-events-none" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl border border-gray-200/50"
          >
            <source src="/videos/global.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

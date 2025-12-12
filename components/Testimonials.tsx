"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { quoteImg } from "../assets";
import Image, { StaticImageData } from "next/image";

type TestimonialReview = {
  id: number;
  quotes: string;
  username: string;
  designation: string;
};

type TestimonialsData = {
  sectionTitle: string;
  quotes: {
    image: string | StaticImageData;
    alt: string;
  };
  reviews: TestimonialReview[];
};

const testimonialsData: TestimonialsData = {
  sectionTitle: "What Our Customers Are Saying",
  quotes: {
    image: "/qutoe.png",
    alt: "testimonials",
  },
  reviews: [
    {
      id: 1,
      quotes:
        "Excellent service! The Bulk SMS platform is very user-friendly and the delivery rates are impressive. Great support team!",
      username: "John Doe",
      designation: "Marketing Manager",
    },
    {
      id: 2,
      quotes:
        "Rich System Solution has transformed our customer communication. The API integration was seamless and the results are outstanding.",
      username: "Sarah Wilson",
      designation: "CTO",
    },
    {
      id: 3,
      quotes:
        "Best SMS service provider in India. Affordable pricing with excellent features. Highly recommended for businesses of all sizes.",
      username: "Mike Johnson",
      designation: "Business Owner",
    },
  ],
};

const Testimonials = () => {
  const [reviews, setReviews] = useState<TestimonialReview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentReview, setCurrentReview] = useState<number>(0);
  const brandColor = "#07337a";

  useEffect(() => {
    // Simulate API call
    setReviews(testimonialsData.reviews);
    setLoading(false);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonialsData.reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section - Updated to match ServicesWeOffer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 font-[Poppins] tracking-tight">
              CLIENT
              <br />
              TESTIMONIALS
            </h2>

            <div className="space-y-6">
              {testimonialsData.reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <span
                    className="text-2xl font-bold transition-colors duration-300 font-[Inter]"
                    style={{ color: brandColor }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-semibold text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-[Inter] tracking-wide">
                    {review.username}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-[Inter]">
              Discover what our valued clients have to say about their
              experience working with us. Their success stories reflect our
              commitment to delivering exceptional results and building lasting
              partnerships.
            </p>

            {/* Stats */}
            <div className="space-y-3 text-sm text-gray-500 font-[Inter]">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span>98% Client Satisfaction Rate</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span>200+ Happy Clients Worldwide</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span>4.9/5 Average Customer Rating</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rest of the Testimonials Card remains the same */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row min-h-96">
            {/* Left Side - Brand Section */}
            <div
              className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden"
              style={{ backgroundColor: brandColor }}
            >
              <div className="relative z-10">
                <motion.h2
                  className="text-2xl lg:text-3xl font-bold text-white mb-6 font-[Poppins] leading-tight"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {testimonialsData.sectionTitle}
                </motion.h2>

                <motion.p
                  className="text-blue-100 text-lg font-[Inter] font-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Real stories from real clients
                </motion.p>
              </div>

              {/* Quote Marks */}
              <div className="relative z-10 mt-8">
                <motion.div
                  className="absolute -top-4 -left-2 opacity-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {typeof testimonialsData.quotes.image === "string" ? (
                    <img
                      src={testimonialsData.quotes.image}
                      width={80}
                      height={80}
                      alt={testimonialsData.quotes.alt}
                      className="text-white"
                    />
                  ) : (
                    <Image
                      src={testimonialsData.quotes.image}
                      width={80}
                      height={80}
                      alt={testimonialsData.quotes.alt}
                      className="text-white"
                    />
                  )}
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-2 opacity-20 rotate-180"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {typeof testimonialsData.quotes.image === "string" ? (
                    <img
                      src={testimonialsData.quotes.image}
                      width={80}
                      height={80}
                      alt={testimonialsData.quotes.alt}
                      className="text-white"
                    />
                  ) : (
                    <Image
                      src={testimonialsData.quotes.image}
                      width={80}
                      height={80}
                      alt={testimonialsData.quotes.alt}
                      className="text-white"
                    />
                  )}
                </motion.div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
              </div>
            </div>

            {/* Right Side - Testimonials Content */}
            <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              {loading ? (
                <div className="space-y-4">
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              ) : (
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg
                      className="w-8 h-8"
                      style={{ color: brandColor }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-[Inter] font-light italic">
                    "{reviews[currentReview]?.quotes}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 font-[Inter]">
                          {reviews[currentReview]?.username}
                        </h4>
                        <p className="text-gray-600 font-[Inter] font-light">
                          {reviews[currentReview]?.designation === "0"
                            ? ""
                            : reviews[currentReview]?.designation}
                        </p>
                      </div>

                      {/* Navigation Dots */}
                      <div className="flex space-x-2">
                        {reviews.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentReview
                                ? "bg-gray-800"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              backgroundColor: brandColor,
              boxShadow: `0px 8px 25px ${brandColor}40`,
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 font-[Inter]"
            style={{ backgroundColor: brandColor }}
          >
            Join Our Happy Clients
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

// app/contact/ContactPageContent.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  ChevronRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

interface ContactInfo {
  companyName: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

interface ContactPageContentProps {
  contactInfo: ContactInfo;
}

const brandColor = "#07337a";

export default function ContactPageContent({
  contactInfo,
}: ContactPageContentProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false, // Add this line
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const serviceOptions = [
    "Software Development",
    "Digital Marketing",
    "Web Development",
    "Mobile Apps",
    "SEO Services",
    "Social Media Marketing",
    "UI/UX Design",
    "IT Consulting",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false, // Add this line
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-blue-100/20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mt-2">
                Amazing Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Have a project in mind? Let's discuss how we can help transform
              your vision into reality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-lg"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Send us a message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-semibold text-green-800">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700 text-sm mt-1">
                        We'll contact you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="text-red-600 mt-0.5" size={20} />
                    <div>
                      <p className="font-semibold text-red-800">
                        Something went wrong
                      </p>
                      <p className="text-red-700 text-sm mt-1">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                  />
                </div>

                {/* Consent Checkbox Section */}
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                  {/* Text above checkbox */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To provide you with the best service and respond to your
                    inquiry, we need your consent to contact you.
                  </p>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-gray-700 leading-tight"
                    >
                      By checking this box, you agree to disclose your personal
                      information to{" "}
                      <span className="font-semibold text-gray-900">
                        Rich System Solution
                      </span>{" "}
                      for contacting you via SMS, Email, RCS Messages, Calls and
                      WhatsApp regarding your inquiry and our services. You may
                      withdraw your consent at any time.
                    </label>
                  </div>

                  {/* Text below checkbox */}
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      <strong>Note:</strong> Your information is protected and
                      will only be used for communication purposes related to
                      your inquiry. We do not share your data with third parties
                      for marketing purposes. You can review our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Privacy Policy
                      </a>{" "}
                      for more details.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-[#07337a] hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-[#07337a] to-[#07337a] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-8">Contact information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 mb-1">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-lg font-semibold hover:text-blue-100 transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 mb-1">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-lg font-semibold hover:text-blue-100 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 mb-1">Address</p>
                      <p className="text-lg font-semibold">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 mb-1">
                        Business hours
                      </p>
                      <p className="text-lg font-semibold">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-10 pt-8 border-t border-white/20">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="py-3 px-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Phone size={18} />
                      Call now
                    </a>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp size={18} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Our location
                </h4>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={contactInfo.mapEmbedUrl}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RichSol IT Solutions Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <Building size={16} />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  Follow us
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      icon: FaLinkedin,
                      color: "bg-[#0077B5]",
                      href: contactInfo.social.linkedin,
                      label: "LinkedIn",
                    },
                    {
                      icon: FaFacebookF,
                      color: "bg-[#4267B2]",
                      href: contactInfo.social.facebook,
                      label: "Facebook",
                    },
                    {
                      icon: FaInstagram,
                      color:
                        "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
                      href: contactInfo.social.instagram,
                      label: "Instagram",
                    },
                    {
                      icon: FaYoutube,
                      color: "bg-[#FF0000]",
                      href: contactInfo.social.youtube,
                      label: "YouTube",
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label={social.label}
                      className={`${social.color} text-white p-3 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105`}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to start your project?
          </h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives
            your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center gap-3 py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              <Phone size={20} />
              Schedule a call
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center gap-3 py-3 px-8 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-200 hover:border-blue-300 transition-all duration-300"
            >
              <Mail size={20} />
              Email inquiry
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Response time: Typically within 2 business hours
          </p>
        </div>
      </section>
    </div>
  );
}

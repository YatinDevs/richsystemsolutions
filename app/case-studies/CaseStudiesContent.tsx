"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  ExternalLink,
  Users,
  Calendar,
  TrendingUp,
  Target,
  Globe,
} from "lucide-react";
import { CaseStudy } from "@/types";

interface CaseStudiesContentProps {
  caseStudies: CaseStudy[];
  loading: boolean;
  onFilterChange: (filters: any) => void;
}

const categories = [
  "All",
  "Software Development",
  "Digital Marketing",
  "Mobile Development",
];
const industries = [
  "All Industries",
  "Fashion & Retail",
  "Healthcare",
  "Banking & Finance",
];

export default function CaseStudiesContent({
  caseStudies,
  loading,
  onFilterChange,
}: CaseStudiesContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIndustry, setSelectedIndustry] =
    useState<string>("All Industries");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredStudies, setFilteredStudies] =
    useState<CaseStudy[]>(caseStudies);

  // Client-side filtering
  useEffect(() => {
    let filtered = [...caseStudies];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (study) => study.category === selectedCategory
      );
    }

    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter(
        (study) => study.industry === selectedIndustry
      );
    }

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (study) =>
          study.title.toLowerCase().includes(term) ||
          study.client.toLowerCase().includes(term)
      );
    }

    setFilteredStudies(filtered);
  }, [selectedCategory, selectedIndustry, searchTerm, caseStudies]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({
      category,
      industry: selectedIndustry,
      search: searchTerm,
    });
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustry(industry);
    onFilterChange({
      category: selectedCategory,
      industry,
      search: searchTerm,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto"></div>
          <div className="mt-4 text-gray-600">Loading case studies...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white mt-30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-blue-300">Success Stories</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              Explore how we've helped businesses achieve remarkable results
              through technology and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Case Studies
              </h2>
              <p className="text-gray-600 mt-2">
                Showing {filteredStudies.length} of {caseStudies.length} case
                studies
              </p>
            </div>

            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                className="pl-10 pr-4 py-2 w-full md:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Filter by Industry
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => handleIndustryChange(industry)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedIndustry === industry
                        ? "bg-blue-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                No case studies found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedIndustry("All Industries");
                  setSearchTerm("");
                }}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.thumbnail}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-900 text-white text-xs font-semibold rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {study.title}
                    </h3>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <span>{study.industry}</span>
                      <span>{study.duration}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {study.challenge.substring(0, 120)}...
                    </p>

                    {/* Results Preview */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="bg-blue-50 p-2 rounded">
                          <div className="text-xs text-gray-600">
                            {result.label}
                          </div>
                          <div className="text-sm font-bold text-blue-900">
                            {result.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={study.url}
                      className="flex items-center justify-center w-full py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors group/btn"
                    >
                      <span className="font-semibold">View Case Study</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

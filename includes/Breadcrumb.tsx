"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbProps {
  page?: string;
  showHome?: boolean;
  customPaths?: Array<{
    name: string;
    href: string;
  }>;
  className?: string;
}

const Breadcrumb = ({
  page,
  showHome = true,
  customPaths,
  className = "",
}: BreadcrumbProps) => {
  const pathname = usePathname();

  // Generate breadcrumb paths from URL
  const generatePaths = () => {
    if (customPaths) return customPaths;

    const paths = pathname.split("/").filter((path) => path);

    return paths.map((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      let name = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Special case handling for common pages
      if (name.toLowerCase() === "privacy policy") name = "Privacy Policy";
      if (name.toLowerCase() === "terms conditions")
        name = "Terms & Conditions";
      if (name.toLowerCase() === "contact") name = "Contact Us";
      if (name.toLowerCase() === "about") name = "About Us";
      if (name.toLowerCase() === "services") name = "Our Services";
      if (name.toLowerCase() === "portfolio") name = "Portfolio";
      if (name.toLowerCase() === "blog") name = "Blog";
      if (name.toLowerCase() === "careers") name = "Careers";

      return {
        name,
        href,
      };
    });
  };

  const breadcrumbPaths = generatePaths();

  // If page prop is provided, it's the current page
  const currentPage =
    page ||
    (breadcrumbPaths.length > 0
      ? breadcrumbPaths[breadcrumbPaths.length - 1].name
      : "Home");

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`w-full ${className}`}
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4 md:py-6 overflow-x-auto">
          <ol className="flex items-center space-x-2 md:space-x-4 min-w-max">
            {/* Home Link */}
            {showHome && (
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors group"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4 md:w-5 md:h-5 mr-1 group-hover:text-blue-600 transition-colors" />
                  <span className="hidden md:inline">Home</span>
                </Link>
                {breadcrumbPaths.length > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2 md:mx-3" />
                )}
              </li>
            )}

            {/* Dynamic Paths */}
            {breadcrumbPaths.slice(0, -1).map((path, index) => (
              <li key={index} className="flex items-center">
                <Link
                  href={path.href}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  {path.name}
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2 md:mx-3" />
              </li>
            ))}

            {/* Current Page */}
            <li className="flex items-center" aria-current="page">
              <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                {currentPage}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </motion.nav>
  );
};

export default Breadcrumb;

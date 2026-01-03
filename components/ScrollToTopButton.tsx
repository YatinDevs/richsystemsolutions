// components/ScrollToTopButton.tsx
"use client";

import { ArrowLeft } from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center justify-center mx-auto"
    >
      <ArrowLeft className="w-4 h-4 mr-2 rotate-90" />
      Back to Top
    </button>
  );
}

"use client";

import { useState, useEffect } from "react";
import CaseStudiesContent from "./CaseStudiesContent";
import { CaseStudy } from "@/types"; // Your types

interface CaseStudiesClientProps {
  initialData: CaseStudy[];
}

export default function CaseStudiesClient({
  initialData,
}: CaseStudiesClientProps) {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If you need to fetch additional data or filter client-side
  const fetchFilteredData = async (filters: any) => {
    try {
      setLoading(true);
      // Make API call with filters
      // const response = await fetch(`/api/case-studies?${new URLSearchParams(filters)}`);
      // const data = await response.json();
      // setCaseStudies(data);
    } catch (err) {
      setError("Failed to load case studies");
    } finally {
      setLoading(false);
    }
  };

  // Handle any client-side interactions here
  const handleFilterChange = (filters: any) => {
    // Client-side filtering or API call
    fetchFilteredData(filters);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4">{error}</div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-900 text-white rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* You can add client-only components here */}
      {/* For example: Analytics, WebSocket connections, etc. */}

      <CaseStudiesContent
        caseStudies={caseStudies}
        loading={loading}
        onFilterChange={handleFilterChange}
      />
    </>
  );
}

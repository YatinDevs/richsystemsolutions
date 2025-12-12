import { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";
import { getCaseStudies } from "@/lib/api"; // Your data fetching function

export const metadata: Metadata = {
  title: "Case Studies | Our Work & Success Stories | RichSol",
  description:
    "Browse our portfolio of successful software development and digital marketing projects with detailed case studies and results.",
  keywords:
    "case studies, portfolio, projects, success stories, software development, digital marketing, client work",
  openGraph: {
    title: "Case Studies | Our Work & Success Stories | RichSol",
    description:
      "Browse our portfolio of successful software development and digital marketing projects.",
    images: ["/og-case-studies.jpg"],
  },
};

// Static data - in real app, fetch from CMS/API
const caseStudiesData = [
  {
    id: "1",
    title: "E-Commerce Platform Development for Fashion Retailer",
    category: "Software Development",
    industry: "Fashion & Retail",
    client: "StyleHub Fashion",
    duration: "4 Months",
    teamSize: "6 Members",
    location: "Mumbai, India",
    challenge: "StyleHub needed a scalable e-commerce platform...",
    solution: "We developed a custom e-commerce platform...",
    results: [
      { label: "Increase in Conversion", value: "42%", change: "+42%" },
      { label: "Page Load Speed", value: "0.8s", change: "-70%" },
    ],
    technologies: ["Next.js", "Node.js", "MongoDB"],
    services: ["Web Development", "E-Commerce", "UI/UX Design"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    url: "/case-studies/stylehub-fashion",
  },
  {
    id: "2",
    title: "Digital Transformation for Healthcare Startup",
    category: "Digital Marketing",
    industry: "Healthcare",
    client: "MediCare Plus",
    duration: "6 Months",
    teamSize: "8 Members",
    location: "Delhi, India",
    challenge:
      "MediCare needed to establish digital presence and generate qualified leads in competitive healthcare market. They had minimal online visibility and needed integrated marketing strategy.",
    solution:
      "Developed complete digital marketing strategy including SEO, content marketing, social media campaigns, and Google Ads. Created educational content hub and implemented CRM integration for lead tracking.",
    results: [
      { label: "Organic Traffic", value: "350%", change: "+350%" },
      { label: "Lead Generation", value: "1200+", change: "+500%" },
      { label: "Cost per Lead", value: "₹450", change: "-60%" },
      { label: "Brand Awareness", value: "89%", change: "+89%" },
    ],
    technologies: ["Google Ads", "Facebook Ads", "SEO", "HubSpot", "WordPress"],
    services: ["SEO", "Content Marketing", "PPC", "Social Media Marketing"],
    image:
      "https://images.unsplash.com/photo-1516549655669-df6654e435de?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1516549655669-df6654e435de?w=400&h=300&fit=crop",
    url: "/case-studies/medicare-plus",
    testimonial: {
      text: "Their strategic approach to digital marketing transformed our business. We're now getting consistent qualified leads and our brand recognition has grown tremendously.",
      author: "Dr. Rajesh Verma",
      position: "Founder",
      company: "MediCare Plus",
      avatar:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    id: "3",
    title: "Mobile Banking App Development",
    category: "Mobile Development",
    industry: "Banking & Finance",
    client: "Urban Bank",
    duration: "5 Months",
    teamSize: "10 Members",
    location: "Bangalore, India",
    challenge:
      "Bank needed secure, user-friendly mobile banking app with biometric authentication, real-time transactions, and seamless UX for both iOS and Android platforms.",
    solution:
      "Built cross-platform mobile app using React Native with secure API integration. Implemented biometric authentication, real-time notifications, and AI-powered fraud detection.",
    results: [
      { label: "App Downloads", value: "500K+", change: "+400%" },
      { label: "User Rating", value: "4.8/5", change: "+1.2" },
      { label: "Transaction Volume", value: "85%", change: "+200%" },
      { label: "Customer Satisfaction", value: "94%", change: "+30%" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase", "AWS"],
    services: [
      "Mobile App Development",
      "UI/UX Design",
      "Security",
      "API Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    url: "/case-studies/urban-bank",
    testimonial: {
      text: "The mobile app exceeded our expectations. Security features are robust and user adoption has been phenomenal. Great partnership!",
      author: "Anjali Mehta",
      position: "Head of Digital",
      company: "Urban Bank",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    id: "4",
    title: "SaaS Platform for Logistics Company",
    category: "Software Development",
    industry: "Logistics",
    client: "FastTrack Logistics",
    duration: "8 Months",
    teamSize: "12 Members",
    location: "Pune, India",
    challenge:
      "Logistics company needed comprehensive SaaS platform for route optimization, real-time tracking, and fleet management across 50+ cities.",
    solution:
      "Developed cloud-based SaaS platform with real-time GPS tracking, AI route optimization, automated dispatch, and comprehensive analytics dashboard.",
    results: [
      { label: "Route Efficiency", value: "35%", change: "+35%" },
      { label: "Fuel Savings", value: "28%", change: "+28%" },
      { label: "On-time Delivery", value: "98%", change: "+15%" },
      { label: "Client Acquisition", value: "45", change: "+45" },
    ],
    technologies: [
      "React",
      "Python",
      "PostgreSQL",
      "Google Maps API",
      "Docker",
    ],
    services: [
      "SaaS Development",
      "Cloud Solutions",
      "AI/ML",
      "API Development",
    ],
    image:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop",
    url: "/case-studies/fasttrack-logistics",
  },
  {
    id: "5",
    title: "SEO & Content Strategy for EdTech",
    category: "Digital Marketing",
    industry: "Education",
    client: "LearnSmart Academy",
    duration: "3 Months",
    teamSize: "4 Members",
    location: "Hyderabad, India",
    challenge:
      "EdTech startup needed organic growth strategy to compete with established players and attract quality leads in competitive online education market.",
    solution:
      "Implemented comprehensive SEO strategy with content optimization, technical SEO audit, and backlink building. Created educational content series and optimized conversion funnel.",
    results: [
      { label: "Keyword Ranking", value: "Top 10", change: "+50" },
      { label: "Organic Traffic", value: "220%", change: "+220%" },
      { label: "Course Signups", value: "850+", change: "+300%" },
      { label: "Domain Authority", value: "45", change: "+25" },
    ],
    technologies: [
      "SEO Tools",
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "WordPress",
    ],
    services: ["SEO", "Content Strategy", "Technical SEO", "Link Building"],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    url: "/case-studies/learnsmart-academy",
  },
  {
    id: "6",
    title: "Custom CRM Development for Real Estate",
    category: "Software Development",
    industry: "Real Estate",
    client: "Prime Properties",
    duration: "6 Months",
    teamSize: "7 Members",
    location: "Chennai, India",
    challenge:
      "Real estate agency needed custom CRM to manage 5000+ property listings, client communications, and automate follow-ups for their 50-agent team.",
    solution:
      "Built custom CRM with property management, automated email/SMS campaigns, client portal, and integration with property listing websites.",
    results: [
      { label: "Lead Conversion", value: "40%", change: "+25%" },
      { label: "Time Savings", value: "15hrs/week", change: "-15hrs" },
      { label: "Client Retention", value: "85%", change: "+20%" },
      { label: "Revenue Growth", value: "200%", change: "+200%" },
    ],
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
    services: [
      "CRM Development",
      "Custom Software",
      "Automation",
      "Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop",
    thumbnail:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    url: "/case-studies/prime-properties",
  },
];

export default async function CaseStudiesPage() {
  // In production, fetch data from CMS/API
  // const caseStudies = await getCaseStudies();

  return <CaseStudiesClient initialData={caseStudiesData} />;
}

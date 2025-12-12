// utils/seoConfig.ts
export type PageSeo = {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
};

export const siteSEO = {
  siteName: "Rich System Solutions Pvt Ltd",

  defaultTitle:
    "Software Development Company & Digital Marketing Agency | IT Training - Rich System Solutions",

  defaultDescription:
    "Leading software development company in Nashik offering custom software, website development, digital marketing, bulk SMS, WhatsApp services, and IT training with internship programs.",

  baseUrl: "https://richsol.com",

  email: "support@richsol.com",
  phone: "+91 95959 02006",

  address: {
    streetAddress:
      "4th Floor, Akravi Disha, opposite Hotel City Pride, Tilakwadi",
    addressLocality: "Nashik",
    addressRegion: "Maharashtra",
    postalCode: "422002",
    addressCountry: "IN",
  },

  openingHours: {
    mondayToSaturday: {
      opens: "08:00",
      closes: "20:00",
    },
    sunday: {
      opens: "00:00",
      closes: "00:00",
    },
  },
  ogImage: "/og-image.jpg",
  twitterImage: "/twitter-image.jpg",
};

export const pageSEO: Record<string, PageSeo> = {
  home: {
    title:
      "Software Development | Digital Marketing & Bulk SMS Services in Nashik",
    description:
      "Rich System Solutions offers custom software, website development, digital marketing, bulk SMS, WhatsApp services, and IT training with internships in Nashik.",
    keywords:
      "software development Nashik, website development Nashik, digital marketing Nashik, bulk sms Nashik, whatsapp api Nashik, IT training Nashik",
    canonical: "/",
  },
  digitalMarketingServices: {
    title:
      "Digital Marketing Agency in Nashik | SEO, Social Media & Performance Marketing",
    description:
      "Full-service digital marketing agency in Nashik offering SEO, social media marketing, PPC advertising, content marketing, email and WhatsApp marketing to grow your business.",
    keywords:
      "digital marketing Nashik, SEO services Nashik, social media marketing, PPC advertising, content marketing, email marketing, whatsapp marketing",
    canonical: "/digital-marketing-services",
  },
  softwareItServices: {
    title:
      "Software & IT Services in Nashik | Custom Software & Website Development",
    description:
      "Custom software development, modern responsive websites, mobile apps, IT automation, and training services from Rich System Solutions in Nashik.",
    keywords:
      "custom software development Nashik, website development Nashik, mobile app development Nashik, IT services Nashik",
    canonical: "/software-it-services",
  },
  // About
  about: {
    title: "About Rich System Solutions | Software & Digital Marketing Company",
    description:
      "Learn about Rich System Solutions Pvt Ltd, a Nashik-based company offering software development, digital marketing, bulk SMS and IT training services.",
    keywords:
      "about rich system solutions, about software company Nashik, digital marketing company Nashik",
    canonical: "/about-us",
  },
  blog: {
    title: "IT & Digital Marketing Blog | Rich System Solutions",
    description:
      "Read articles on software development, digital marketing, SEO, bulk SMS and WhatsApp automation from Rich System Solutions.",
    keywords:
      "software development blog, digital marketing blog, SEO tips, whatsapp marketing blog",
    canonical: "/blog",
  }, // Contact
  contact: {
    title: "Contact Rich System Solutions | Nashik",
    description:
      "Contact Rich System Solutions Pvt Ltd for software development, digital marketing, bulk SMS and IT training services in Nashik.",
    keywords: "contact rich system solutions, contact software company Nashik",
    canonical: "/contact",
  },
  careers: {
    title: "Careers at Rich System Solutions | IT & Digital Marketing Jobs",
    description:
      "Explore career opportunities in software development, digital marketing, sales and support at Rich System Solutions Pvt Ltd in Nashik.",
    keywords:
      "it jobs Nashik, digital marketing jobs Nashik, careers rich system solutions",
    canonical: "/careers",
  },
  software_customSoftware: {
    title: "Custom Software Development Company | Rich System Solutions",
    description:
      "Custom software development services to build scalable web and desktop applications tailored to your unique business processes.",
    keywords:
      "custom software development, software development company, enterprise software, business software",
    canonical: "/software-it-services/custom-software-development",
  },
  software_webDevelopment: {
    title: "Web Development Services | Modern Responsive Websites",
    description:
      "Professional web development services using React, Next.js and modern technologies to build fast, responsive websites.",
    keywords:
      "web development, website development, responsive website, next.js development",
    canonical: "/software-it-services/web-development",
  },
  software_mobileApps: {
    title: "Mobile App Development Company | Android & iOS",
    description:
      "Native and cross-platform mobile app development services for Android and iOS, from concept to deployment.",
    keywords:
      "mobile app development, android app development, ios app development, react native apps",
    canonical: "/software-it-services/mobile-app-development",
  },
  software_uiux: {
    title: "UI/UX Design Services | User Experience & Interface Design",
    description:
      "UI/UX design services focused on user research, wireframes, prototypes and modern interface design.",
    keywords: "ui design, ux design, user experience design, interface design",
    canonical: "/software-it-services/ui-ux-design",
  },
  software_ecommerce: {
    title: "E‑Commerce Development Services | Online Store Solutions",
    description:
      "E‑commerce development services including product catalog, payment gateway integration and order management.",
    keywords:
      "ecommerce development, online store development, shopping cart, payment gateway integration",
    canonical: "/software-it-services/ecommerce-solutions",
  },
  software_cloud: {
    title: "Cloud Solutions & Migration Services | AWS, Azure, GCP",
    description:
      "Cloud consulting, migration and management services on AWS, Azure and Google Cloud for secure, scalable infrastructure.",
    keywords:
      "cloud solutions, cloud migration, aws consulting, azure consulting, gcp",
    canonical: "/software-it-services/cloud-solutions",
  },
  software_apiIntegration: {
    title: "API Integration Services | REST & Third‑Party APIs",
    description:
      "API integration and custom API development services to connect your software with third‑party platforms.",
    keywords:
      "api integration, rest api development, third party api integration, web services",
    canonical: "/software-it-services/api-integration",
  },
  software_maintenance: {
    title: "Software Maintenance & Support Services",
    description:
      "Ongoing software maintenance, monitoring and support services to keep your applications secure and up to date.",
    keywords:
      "software maintenance, application support, bug fixing, software updates",
    canonical: "/software-it-services/maintenance-support",
  },
  dm_seo: {
    title: "SEO Services in Nashik | Search Engine Optimization Agency",
    description:
      "SEO services to improve rankings, organic traffic and keyword visibility for businesses in Nashik and beyond.",
    keywords:
      "seo services, search engine optimization, organic traffic, keyword ranking",
    canonical: "/digital-marketing-services/seo",
  },
  dm_smm: {
    title: "Social Media Marketing Services | Facebook & Instagram Marketing",
    description:
      "Social media marketing services including strategy, content, and ads across Facebook, Instagram, LinkedIn and more.",
    keywords:
      "social media marketing, smm, facebook marketing, instagram marketing",
    canonical: "/digital-marketing-services/social-media-marketing",
  },
  dm_ppc: {
    title: "PPC Advertising Services | Google Ads & Meta Ads",
    description:
      "PPC advertising services for Google Ads, Facebook Ads and other platforms to generate high-intent leads.",
    keywords:
      "ppc advertising, google ads, facebook ads, paid advertising, pay per click",
    canonical: "/digital-marketing-services/ppc-advertising",
  },
  dm_content: {
    title: "Content Marketing Services | Blogs & Landing Pages",
    description:
      "Content marketing services including blog writing, content strategy and SEO-focused copywriting.",
    keywords: "content marketing, blog writing, content strategy, copywriting",
    canonical: "/digital-marketing-services/content-marketing",
  },
  dm_email: {
    title: "Email Marketing Services | Campaigns & Automation",
    description:
      "Email marketing services to plan, design and send targeted campaigns with automation workflows.",
    keywords:
      "email marketing, email campaigns, newsletter, marketing automation",
    canonical: "/digital-marketing-services/email-marketing",
  },
  dm_whatsapp: {
    title: "WhatsApp Marketing Services | WhatsApp Business API",
    description:
      "WhatsApp marketing services using WhatsApp Business API for campaigns, notifications and customer engagement.",
    keywords:
      "whatsapp marketing, whatsapp business, bulk whatsapp, whatsapp api",
    canonical: "/digital-marketing-services/whatsapp-marketing",
  },
  dm_bulkSms: {
    title: "Bulk SMS Marketing Services | Promotional & Transactional SMS",
    description:
      "Bulk SMS marketing services for promotional and transactional campaigns with high deliverability.",
    keywords: "bulk sms, sms marketing, text marketing, promotional sms",
    canonical: "/digital-marketing-services/bulk-sms",
  },
  dm_graphic: {
    title: "Graphic Design Services | Logos & Brand Identity",
    description:
      "Graphic design services for logos, brand identity and marketing materials for digital and print.",
    keywords:
      "graphic design, logo design, brand identity, marketing materials",
    canonical: "/digital-marketing-services/graphic-design",
  },
  dm_video: {
    title: "Video Marketing Services | Reels & Promotional Videos",
    description:
      "Video marketing services including promotional videos, reels and animated content for social media and ads.",
    keywords: "video marketing, promotional videos, animated videos, reels",
    canonical: "/digital-marketing-services/video-marketing",
  },
};

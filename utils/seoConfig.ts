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
      opens: "00:00", // Closed format in schema.org
      closes: "00:00",
    },
  },
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
  softwareItServices: {
    title:
      "Software & IT Services in Nashik | Custom Software & Website Development",
    description:
      "Custom software development, modern responsive websites, mobile apps, IT automation, and training services from Rich System Solutions in Nashik.",
    keywords:
      "custom software development Nashik, website development Nashik, mobile app development Nashik, IT services Nashik",
    canonical: "/software-it-services",
  },
  socialMediaMarketing: {
    title: "Social Media & Performance Marketing Agency in Nashik",
    description:
      "Social media marketing, content creation, reels and podcast production, and performance marketing campaigns for brands in Nashik.",
    keywords:
      "social media marketing Nashik, performance marketing Nashik, content marketing Nashik, digital marketing agency Nashik",
    canonical: "/social-media-marketing",
  },
  businessCommunication: {
    title: "Business Communication Solutions | Bulk SMS, WhatsApp API & IVR",
    description:
      "WhatsApp Business API, bulk SMS and voice calls, email campaigns, IVR, and automation solutions to streamline your business communication.",
    keywords:
      "bulk sms Nashik, whatsapp api provider, ivr services, voice calls campaigns, email campaigns",
    canonical: "/business-communication",
  },
  about: {
    title: "About | My Website",
    description: "About page description.",
    keywords: "about, my website",
    canonical: "/about",
  },
  products: {
    title: "Products | My Website",
    description: "Products page description.",
    keywords: "products, services",
    canonical: "/products",
  },
  bulkSMS: {
    title: "Bulk SMS Services | Mass Text Messaging Solutions",
    description:
      "Reliable bulk SMS services for marketing campaigns, alerts, and notifications. Reach thousands instantly with our robust SMS platform.",
    keywords: "bulk sms, mass texting, sms marketing, text alerts",
    canonical: "/products/bulk-sms",
  },
  bulkVoice: {
    title: "Bulk Voice Services | Voice Broadcasting Solutions",
    description:
      "Professional bulk voice messaging services for customer engagement, alerts, and marketing campaigns with high delivery rates.",
    keywords: "bulk voice, voice broadcasting, voice messages, audio alerts",
    canonical: "/products/bulk-voice",
  },
  contact: {
    title: "Contact | My Website",
    description: "Contact page description.",
    keywords: "contact, email, phone",
    canonical: "/contact",
  },
};

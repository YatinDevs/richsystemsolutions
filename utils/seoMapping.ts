// utils/seoMappings.ts
import { pageSEO } from "./seoConfig";

export const productSlugToSeoKey: Record<string, keyof typeof pageSEO> = {
  // Existing
  "bulk-sms": "bulkSMS",
  "bulk-voice": "bulkVoice",

  "custom-software-development": "software_customSoftware",
  "web-development": "software_webDevelopment",
  "mobile-app-development": "software_mobileApps",
  "ui-ux-design": "software_uiux",
  "ecommerce-solutions": "software_ecommerce",
  "cloud-solutions": "software_cloud",
  "api-integration": "software_apiIntegration",
  "maintenance-support": "software_maintenance",
};

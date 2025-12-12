// utils/seoMappings.ts
import { pageSEO } from "./seoConfig";

export const productSlugToSeoKey: Record<string, keyof typeof pageSEO> = {
  "bulk-sms": "bulkSMS",
  "bulk-voice": "bulkVoice",
};

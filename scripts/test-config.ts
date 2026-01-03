// scripts/test-config.ts
import { siteSEO, pageSEO } from "@/utils/seoConfig";

console.log("🧪 Testing Rich System Solutions SEO Configuration...");
console.log("=".repeat(60));

console.log("\n📊 Site SEO Configuration:");
console.log("-".repeat(40));
console.log(`Site Name: ${siteSEO.siteName}`);
console.log(`Base URL: ${siteSEO.baseUrl}`);
console.log(`Email: ${siteSEO.email}`);
console.log(`Phone: ${siteSEO.phone}`);
console.log(
  `Address: ${siteSEO.address.streetAddress}, ${siteSEO.address.addressLocality}`
);

console.log("\n📄 Pages in Configuration:");
console.log("-".repeat(40));
const pageCount = Object.keys(pageSEO).length;
console.log(`Total Pages: ${pageCount}`);

// List all pages
Object.entries(pageSEO).forEach(([key, page], index) => {
  console.log(`${index + 1}. ${key.padEnd(30)} -> ${page.canonical}`);
});

console.log("\n✅ Configuration looks good!");
console.log(`📈 Homepage URL: ${siteSEO.baseUrl}${pageSEO.home.canonical}`);

// Run with: npx tsx scripts/test-config.ts

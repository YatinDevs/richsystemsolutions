import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteSEO } from "@/utils/seoConfig";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: {
    default: siteSEO.defaultTitle,
    template: `%s | ${siteSEO.siteName}`,
  },
  description: siteSEO.defaultDescription,
  metadataBase: new URL(siteSEO.baseUrl),
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    url: siteSEO.baseUrl,
    siteName: siteSEO.siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: siteSEO.ogImage,
        width: 1200,
        height: 630,
        alt: "Rich System Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    site: "@your_twitter",
    images: [siteSEO.twitterImage],
  },
  alternates: {
    canonical: siteSEO.baseUrl,
  },
  keywords: [
    "software development company",
    "website development",
    "custom software",
    "digital marketing agency",
    "SEO services Nashik",
    "bulk SMS services",
    "WhatsApp marketing",
    "IT training",
    "internship programs",
    "web development",
    "mobile app development",
    "bulk sms",
    "digital marketing",
    "whatsapp services",
    "voice messaging",
    "marketing automation",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Rich System Solutions Pvt Ltd" }],
  themeColor: "#000000",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 ">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* <FloatingButtons /> */}
      </body>
    </html>
  );
}

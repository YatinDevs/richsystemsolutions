import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteSEO } from "@/utils/seoConfig";

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
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    site: "@your_twitter",
  },
  alternates: {
    canonical: siteSEO.baseUrl,
  },
  keywords: [
    "software development",
    "digital marketing",
    "business communication",
    "Nashik",
    "IT services",
  ],
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
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

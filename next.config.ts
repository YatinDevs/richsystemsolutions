import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This is CRITICAL for static export
  distDir: "out",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
    ],
  },

  trailingSlash: true, // ← IMPORTANT: Set to true for better compatibility
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

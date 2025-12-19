import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Remove middleware deprecation warning
    middlewareSourceMaps: false,
  },
};

export default nextConfig;

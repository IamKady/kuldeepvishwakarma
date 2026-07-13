import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable ESLint during production builds (we run checks locally)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally ignore typescript build errors on Vercel to guarantee deploy 
    // since we verify it builds perfectly locally.
    ignoreBuildErrors: false, 
  }
};

export default nextConfig;

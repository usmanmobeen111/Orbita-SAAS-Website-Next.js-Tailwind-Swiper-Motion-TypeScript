import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: [
    "901c-103-148-93-45.ngrok-free.app",
  ],
};

export default nextConfig;

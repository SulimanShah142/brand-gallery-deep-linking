import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Intercepts the public static path
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
          {
            key: 'Content-Disposition',
            value: 'inline', // Prevents the browser from forcing a local download
          },
        ],
      },
    ];
  },
};

export default nextConfig;

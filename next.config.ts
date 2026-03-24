// ========================================
// File: next.config.ts
// ========================================

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "apexoverland.co.uk",
          },
        ],
        destination: "/coming-soon",
        permanent: false,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "www.apexoverland.co.uk",
          },
        ],
        destination: "/coming-soon",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
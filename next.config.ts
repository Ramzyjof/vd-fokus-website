import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/int-prep",
        destination: "/services/int-prep",
        permanent: true,
      },
      {
        source: "/career-acceleration",
        destination: "/services/int-prep",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
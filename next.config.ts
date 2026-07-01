import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/career-acceleration",
        destination: "/services/int-prep",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

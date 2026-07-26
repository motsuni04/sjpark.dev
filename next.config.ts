import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonicalise on the apex domain: www.sjpark.dev -> sjpark.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sjpark.dev" }],
        destination: "https://sjpark.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

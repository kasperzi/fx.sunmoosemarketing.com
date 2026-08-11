import type { NextConfig } from "next";

const BMS_ORIGIN = process.env.BMS_API_URL ?? 'https://bms.sunmoosemarketing.com'

const nextConfig: NextConfig = {
  env: {
    BMS_API_URL: BMS_ORIGIN,
    BMS_API_KEY: process.env.BMS_API_KEY ?? '',
  },
  async rewrites() {
    return [
      {
        source: '/storage/:path*',
        destination: `${BMS_ORIGIN}/storage/:path*`,
      },
    ]
  },
};

export default nextConfig;

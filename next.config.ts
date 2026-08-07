import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BMS_API_URL: process.env.BMS_API_URL ?? 'https://bms.sunmoosemarketing.com',
    BMS_API_KEY: process.env.BMS_API_KEY ?? '',
  },
};

export default nextConfig;

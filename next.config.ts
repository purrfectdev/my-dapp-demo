import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 静态导出
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

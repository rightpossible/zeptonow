import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.zeptonow.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.zeptonow.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

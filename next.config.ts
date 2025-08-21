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
      {
        protocol: 'https',
        hostname: 'franchise.zepto.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rider.zepto.co.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'developer.apple.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

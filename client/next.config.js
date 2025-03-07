// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    turbo: false,
  },
  webpack: (config) => {
    config.optimization.minimize = false; // Turbopack 관련 문제 회피
    return config;
  },
};

module.exports = nextConfig;

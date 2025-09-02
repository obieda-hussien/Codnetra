import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Configure for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Codnetra' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Codnetra/' : '',
  
  // Advanced performance optimizations
  compiler: {
    // Automatically remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // One year cache for static images
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome', 'framer-motion', 'three', '@react-three/fiber'],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for better performance
  compress: true,
  
  // Remove powered by header for security
  poweredByHeader: false,
  
  // Enable source maps for debugging in all environments
  // This ensures that JavaScript source maps are generated for production builds
  // helping developers debug minified code in browser dev tools
  productionBrowserSourceMaps: true,
  
  // Configure for GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Codnetra' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Codnetra/' : '',
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for images
  },
  
  // Enable experimental features for better performance
  experimental: {
    // optimizeCss: true, // Disabled due to critters dependency issue with Turbopack
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      'lucide-react', 
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-toast'
    ],
  },

  // Headers, redirects, and rewrites are not supported with static export
  // They would be handled by the .htaccess file instead

  // Environment variables
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://obieda-hussien.github.io/Codnetra'
      : 'http://localhost:3000',
  },

  // TypeScript configuration
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;

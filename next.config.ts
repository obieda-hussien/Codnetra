import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/Codnetra',
  assetPrefix: '/Codnetra/',
  images: { unoptimized: true },
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: false },
}

export default nextConfig

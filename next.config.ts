import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
}

export default nextConfig

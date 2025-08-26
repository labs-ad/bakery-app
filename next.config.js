/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for optimal Docker builds and Cloud Run
  output: 'standalone',

  // Production optimizations
  reactStrictMode: true,
  compress: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false, // Security: prevent SVG XSS
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [], // Preferred over domains for better security
  },

  // Development optimizations
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Experimental optimizations for Next.js 15
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: [
      '@/components',
      '@/lib',
      '@/hooks',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
    ],
    // Better HMR caching for development
    serverComponentsHmrCache: true,
    // Enable React Compiler (if available)
    reactCompiler: true,
  },

  // Security headers
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value:
          'geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()',
      },
    ]

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
          },
        ],
      },
    ]
  },

  // Redirects for SEO and user experience
  async redirects() {
    return [
      // Add your redirects here
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ]
  },

  // Rewrites for clean URLs or API proxying
  async rewrites() {
    return [
      // Add your rewrites here
      // {
      //   source: '/api/proxy/:path*',
      //   destination: 'https://api.example.com/:path*',
      // },
    ]
  },
}

module.exports = nextConfig

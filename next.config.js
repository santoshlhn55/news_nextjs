const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/placehold\.co\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
        },
      },
    },
    {
      urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'unsplash-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
        },
      },
    },
    {
      urlPattern: /^https:\/\/formspree\.io\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 5, // 5 minutes
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https://placehold.co https://images.unsplash.com https://www.google-analytics.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://formspree.io https://www.google-analytics.com https://www.googletagmanager.com;
  frame-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://formspree.io;
`;

const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['react', 'react-dom'],
  },
  
  // Image optimization
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compression
  compress: true,
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'DENY' },
          // XSS protection (legacy)
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Referrer policy
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Permissions policy (restricts camera, mic, geo)
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // HSTS: force HTTPS
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          // Content Security Policy
          { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\n/g, '') },
          // Cross-Origin policies for isolation
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ];
  },
  
  // Redirects for old PHP URLs
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rajneeti.php',
        destination: '/rajneeti',
        permanent: true,
      },
      {
        source: '/vyapar.php',
        destination: '/vyapar',
        permanent: true,
      },
      {
        source: '/vishwa.php',
        destination: '/vishwa',
        permanent: true,
      },
      {
        source: '/khel.php',
        destination: '/khel',
        permanent: true,
      },
      {
        source: '/manoranjan.php',
        destination: '/manoranjan',
        permanent: true,
      },
      {
        source: '/vahan.php',
        destination: '/vahan',
        permanent: true,
      },
      {
        source: '/taknik.php',
        destination: '/taknik',
        permanent: true,
      },
      {
        source: '/shiksha-nokri.php',
        destination: '/shiksha-nokri',
        permanent: true,
      },
      {
        source: '/gopniyata-niti.php',
        destination: '/gopniyata-niti',
        permanent: true,
      },
      {
        source: '/sampadakiya-niti.php',
        destination: '/sampadakiya-niti',
        permanent: true,
      },
      {
        source: '/tathya-janch-niti.php',
        destination: '/tathya-janch-niti',
        permanent: true,
      },
      {
        source: '/sewa-ki-shartein.php',
        destination: '/sewa-ki-shartein',
        permanent: true,
      },
      {
        source: '/hamare-bare-mein.php',
        destination: '/hamare-bare-mein',
        permanent: true,
      },
      {
        source: '/sampark-karein.php',
        destination: '/sampark-karein',
        permanent: true,
      },
    ];
  },
  
  // Bundle analyzer (optional - uncomment for analysis)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
};

module.exports = withPWA(nextConfig); 
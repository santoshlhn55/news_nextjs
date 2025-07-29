import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/*.json$',
        '/*.xml$',
      ],
    },
    sitemap: 'https://newscircleindia.com/sitemap.xml',
  }
} 
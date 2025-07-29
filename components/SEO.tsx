import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  keywords,
  image = '/og-default.jpg',
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: SEOProps): Metadata {
  const fullTitle = `${title} - न्यूज़ सर्कल इंडिया`;
  const fullUrl = url ? `https://newscircleindia.com${url}` : 'https://newscircleindia.com';
  const fullImage = image.startsWith('http') ? image : `https://newscircleindia.com${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ? keywords.split(',').map(k => k.trim()) : [],
    authors: author ? [{ name: author }] : undefined,
    creator: 'न्यूज़ सर्कल इंडिया',
    publisher: 'न्यूज़ सर्कल इंडिया',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://newscircleindia.com'),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'न्यूज़ सर्कल इंडिया',
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'hi_IN',
      type,
      publishedTime,
      modifiedTime,
      authors: author ? [author] : undefined,
      section,
      tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@newscircleindia',
      site: '@newscircleindia',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
} 
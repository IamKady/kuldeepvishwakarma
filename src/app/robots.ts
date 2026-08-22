import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
    ],
    sitemap: 'https://kuldeepvishwakarma.com/sitemap.xml',
    host: 'https://kuldeepvishwakarma.com',
  };
}


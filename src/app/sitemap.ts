import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kuldeepvishwakarma.com';
  
  const routes = [
    '',
    '/about',
    '/projects',
    '/startups',
    '/blog',
    '/ai-lab',
    '/cybersecurity',
    '/uses',
    '/resume',
    '/contact',
    '/architecture',
    '/learning-journal',
    '/developer-notes',
    '/open-source',
    '/reading',
    '/research',
    '/resources',
    '/now',
    '/roadmap',
    '/speaking',
    '/ai-experiments',
    '/case-studies',
    '/startups/startupwire',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/projects' || route === '/startups' || route === '/startups/startupwire' ? 0.9 : 0.7,
  }));
}

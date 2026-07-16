import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kuldeepvishwakarma.com';

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/startups', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/startups/startupwire', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
    { path: '/ai-lab', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/ai-experiments', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/cybersecurity', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/uses', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/resume', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/architecture', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/learning-journal', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/developer-notes', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/open-source', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/reading', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/research', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/resources', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/now', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/roadmap', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/speaking', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/case-studies', changeFrequency: 'monthly', priority: 0.8 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

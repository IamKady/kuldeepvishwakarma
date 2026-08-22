import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kuldeep Chandra Vishwakarma — Portfolio & Engineering OS',
    short_name: 'Kuldeep V.',
    description: 'Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, and Startup Founder.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090d16',
    theme_color: '#090d16',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kuldeep Chandra Vishwakarma — Portfolio & Journal',
    short_name: 'KCV',
    description:
      'Personal website and engineering journal of Kuldeep Chandra Vishwakarma. Software Developer, AI Builder, and Entrepreneur.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f6',
    theme_color: '#faf9f6',
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

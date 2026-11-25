import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Journal & Writing',
  description:
    'An independent personal journal of essays, reflections, philosophical questions, literature, poetry, and unfinished observations by Kuldeep Chandra Vishwakarma.',
  alternates: {
    canonical: 'https://kuldeepvishwakarma.com/blog',
  },
  openGraph: {
    title: 'Journal & Writing | Kuldeep Chandra Vishwakarma',
    description:
      'Personal essays, philosophical questions, reflections on literature, human behaviour, and observations by Kuldeep Chandra Vishwakarma.',
    url: 'https://kuldeepvishwakarma.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://kuldeepvishwakarma.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Journal & Writing – Kuldeep Chandra Vishwakarma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journal & Writing | Kuldeep Chandra Vishwakarma',
    description:
      'An independent personal journal of essays, philosophy, literature, and quiet observations.',
    images: ['https://kuldeepvishwakarma.com/og-image.png'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://kuldeepvishwakarma.com/blog#blog',
    url: 'https://kuldeepvishwakarma.com/blog',
    name: 'Kuldeep Chandra Vishwakarma — Personal Journal & Writing',
    description:
      'Independent literary and philosophical journal exploring human behaviour, literature, poetry, personal reflections, and open questions.',
    author: {
      '@type': 'Person',
      '@id': 'https://kuldeepvishwakarma.com/#person',
      name: 'Kuldeep Chandra Vishwakarma',
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Journal & Writing', item: '/blog' },
        ]}
      />
      <PageJsonLd data={blogSchema} />
      {children}
    </>
  );
}

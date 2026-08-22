import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Blog & Publications",
  description: "Read technical articles, research breakdowns, and developer guides covering AI prompt curation, distributed caching, and Next.js performance.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/blog",
  },
  openGraph: {
    title: "Blog & Publications | Kuldeep Chandra Vishwakarma",
    description: "Read technical articles, research breakdowns, and developer guides covering AI prompt curation, distributed caching, and Next.js performance.",
    url: "https://kuldeepvishwakarma.com/blog",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog & Publications – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Publications | Kuldeep Chandra Vishwakarma",
    description: "Read technical articles, research breakdowns, and developer guides covering AI prompt curation, distributed caching, and Next.js performance.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://kuldeepvishwakarma.com/blog#blog',
    url: 'https://kuldeepvishwakarma.com/blog',
    name: 'Kuldeep Chandra Vishwakarma Technical Blog',
    description: 'Read technical articles, research breakdowns, and developer guides on web scale and AI engineering.',
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
          { name: 'Blog', item: '/blog' },
        ]}
      />
      <PageJsonLd data={blogSchema} />
      {children}
    </>
  );
}


import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Reading List & Engineering Library",
  description: "Tracking books covering software architecture design, entrepreneurship, distributed systems, and cybersecurity logs with status and ratings.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/reading",
  },
  openGraph: {
    title: "Reading List & Engineering Library | Kuldeep Chandra Vishwakarma",
    description: "Tracking books covering software architecture design, entrepreneurship, distributed systems, and cybersecurity logs with status and ratings.",
    url: "https://kuldeepvishwakarma.com/reading",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reading List – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading List & Engineering Library | Kuldeep Chandra Vishwakarma",
    description: "Tracking books covering software architecture design, entrepreneurship, and cybersecurity logs.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ReadingLayout({ children }: { children: React.ReactNode }) {
  const readingSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/reading#webpage',
    url: 'https://kuldeepvishwakarma.com/reading',
    name: 'Reading List & Bookshelf of Kuldeep Chandra Vishwakarma',
    description: 'Curated library of technical, entrepreneurship, and computer science books.',
    publisher: {
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
          { name: 'Reading', item: '/reading' },
        ]}
      />
      <PageJsonLd data={readingSchema} />
      {children}
    </>
  );
}


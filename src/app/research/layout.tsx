import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Research Papers & Academic Preprints",
  description: "Academic abstracts, research notes on distributed systems security, LLM inference pipelines, and cryptographic protocols.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/research",
  },
  openGraph: {
    title: "Research Papers & Academic Preprints | Kuldeep Chandra Vishwakarma",
    description: "Academic abstracts, research notes on distributed systems security, LLM inference pipelines, and cryptographic protocols.",
    url: "https://kuldeepvishwakarma.com/research",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Research Papers – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Papers & Academic Preprints | Kuldeep Chandra Vishwakarma",
    description: "Academic abstracts, research notes on distributed systems security, LLM inference pipelines, and cryptographic protocols.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  const researchSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/research#webpage',
    url: 'https://kuldeepvishwakarma.com/research',
    name: 'Research Papers and Academic Preprints by Kuldeep Chandra Vishwakarma',
    description: 'Scholarly investigations in distributed computing, cyber defense, and artificial intelligence.',
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
          { name: 'Research', item: '/research' },
        ]}
      />
      <PageJsonLd data={researchSchema} />
      {children}
    </>
  );
}


import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "StartupWire Case Study & Architecture",
  description: "Autonomous compilation pipeline specs and pgvector deduplication architectures used in StartupWire — an AI-powered startup news aggregator.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/startups/startupwire",
  },
  openGraph: {
    title: "StartupWire Case Study & Architecture | Kuldeep Chandra Vishwakarma",
    description: "Autonomous compilation pipeline specs and pgvector deduplication architectures used in StartupWire — an AI-powered startup news aggregator.",
    url: "https://kuldeepvishwakarma.com/startups/startupwire",
    type: "article",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "StartupWire Case Study – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupWire Case Study & Architecture | Kuldeep Chandra Vishwakarma",
    description: "Autonomous compilation pipeline specs and pgvector deduplication architectures used in StartupWire.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function StartupWireLayout({ children }: { children: React.ReactNode }) {
  const startupWireSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://kuldeepvishwakarma.com/startups/startupwire#app',
    name: 'StartupWire',
    applicationCategory: 'NewsApplication',
    operatingSystem: 'Web',
    url: 'https://startupwire.in',
    description: 'AI-powered tech news and startup intelligence aggregator with automated deduplication and curation.',
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
          { name: 'Startups', item: '/startups' },
          { name: 'StartupWire', item: '/startups/startupwire' },
        ]}
      />
      <PageJsonLd data={startupWireSchema} />
      {children}
    </>
  );
}


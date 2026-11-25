import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Engineering & Telemetry',
  description:
    'Live GitHub repository activity, verified commit stream, system architecture blueprints, and technical radar for Kuldeep Chandra Vishwakarma.',
  alternates: {
    canonical: 'https://kuldeepvishwakarma.com/engineering',
  },
  openGraph: {
    title: 'Engineering & Telemetry | Kuldeep Chandra Vishwakarma',
    description:
      'Live GitHub repository activity, verified commit stream, system architecture blueprints, and technical radar for Kuldeep Chandra Vishwakarma.',
    url: 'https://kuldeepvishwakarma.com/engineering',
    type: 'website',
    images: [
      {
        url: 'https://kuldeepvishwakarma.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Engineering & Telemetry – Kuldeep Chandra Vishwakarma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering & Telemetry | Kuldeep Chandra Vishwakarma',
    description:
      'Live GitHub repository activity, verified commit stream, system architecture blueprints, and technical radar.',
    images: ['https://kuldeepvishwakarma.com/og-image.png'],
  },
};

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const engineeringSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/engineering#webpage',
    url: 'https://kuldeepvishwakarma.com/engineering',
    name: 'Engineering & Live Telemetry — Kuldeep Chandra Vishwakarma',
    description:
      'Live GitHub repository activity, commit history, technology radar, and system architecture blueprints.',
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
          { name: 'Engineering', item: '/engineering' },
        ]}
      />
      <PageJsonLd data={engineeringSchema} />
      {children}
    </>
  );
}

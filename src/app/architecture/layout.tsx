import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "System Architecture & Data Flows",
  description: "Technical ASCII flowcharts, data ingestion maps, distributed caching topologies, and component design specifications.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/architecture",
  },
  openGraph: {
    title: "System Architecture & Data Flows | Kuldeep Chandra Vishwakarma",
    description: "Technical ASCII flowcharts, data ingestion maps, distributed caching topologies, and component design specifications.",
    url: "https://kuldeepvishwakarma.com/architecture",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "System Architectures – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Architecture & Data Flows | Kuldeep Chandra Vishwakarma",
    description: "Technical ASCII flowcharts, data ingestion maps, distributed caching topologies, and component design specifications.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ArchitectureLayout({ children }: { children: React.ReactNode }) {
  const architectureSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/architecture#webpage',
    url: 'https://kuldeepvishwakarma.com/architecture',
    name: 'System Architecture & Data Flow Topologies by Kuldeep Chandra Vishwakarma',
    description: 'Diagrams and technical specifications for scalable web architectures.',
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
          { name: 'Architecture', item: '/architecture' },
        ]}
      />
      <PageJsonLd data={architectureSchema} />
      {children}
    </>
  );
}


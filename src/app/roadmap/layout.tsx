import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Engineering Roadmap & Milestones",
  description: "Visual checklist of features, database expansions, security layers, and product targets scheduled for Kuldeep's systems.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/roadmap",
  },
  openGraph: {
    title: "Engineering Roadmap & Milestones | Kuldeep Chandra Vishwakarma",
    description: "Visual checklist of features, database expansions, security layers, and product targets scheduled for Kuldeep's systems.",
    url: "https://kuldeepvishwakarma.com/roadmap",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Systems Roadmap – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Roadmap & Milestones | Kuldeep Chandra Vishwakarma",
    description: "Visual checklist of features, database expansions, security layers, and product targets scheduled for Kuldeep's systems.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  const roadmapSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': 'https://kuldeepvishwakarma.com/roadmap#webpage',
    url: 'https://kuldeepvishwakarma.com/roadmap',
    name: 'Engineering Roadmap & Milestones by Kuldeep Chandra Vishwakarma',
    description: 'Public development roadmap for software architecture, AI tooling, and startup releases.',
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
          { name: 'Roadmap', item: '/roadmap' },
        ]}
      />
      <PageJsonLd data={roadmapSchema} />
      {children}
    </>
  );
}


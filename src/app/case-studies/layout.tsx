import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Case Studies & Systems Breakdown",
  description: "In-depth engineering postmortems, system breakdowns, database specs, and architecture trade-offs by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/case-studies",
  },
  openGraph: {
    title: "Case Studies & Systems Breakdown | Kuldeep Chandra Vishwakarma",
    description: "In-depth engineering postmortems, system breakdowns, database specs, and architecture trade-offs by Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/case-studies",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Case Studies – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Systems Breakdown | Kuldeep Chandra Vishwakarma",
    description: "In-depth engineering postmortems, system breakdowns, database specs, and architecture trade-offs by Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  const caseStudiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/case-studies#webpage',
    url: 'https://kuldeepvishwakarma.com/case-studies',
    name: 'Technical Case Studies by Kuldeep Chandra Vishwakarma',
    description: 'Detailed system architecture postmortems and performance case studies.',
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
          { name: 'Case Studies', item: '/case-studies' },
        ]}
      />
      <PageJsonLd data={caseStudiesSchema} />
      {children}
    </>
  );
}


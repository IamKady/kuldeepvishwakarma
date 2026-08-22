import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Learning Journal & MSc CS Study Notes",
  description: "Logs detailing daily technological learnings, mistakes, discoveries, MSc Computer Science coursework, and research milestones.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/learning-journal",
  },
  openGraph: {
    title: "Learning Journal & MSc CS Study Notes | Kuldeep Chandra Vishwakarma",
    description: "Logs detailing daily technological learnings, mistakes, discoveries, MSc Computer Science coursework, and research milestones.",
    url: "https://kuldeepvishwakarma.com/learning-journal",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learning Journal – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Journal & MSc CS Study Notes | Kuldeep Chandra Vishwakarma",
    description: "Logs detailing daily technological learnings, mistakes, discoveries, and milestones across various domains.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function LearningJournalLayout({ children }: { children: React.ReactNode }) {
  const journalSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/learning-journal#webpage',
    url: 'https://kuldeepvishwakarma.com/learning-journal',
    name: 'Learning Journal & MSc CS Notes by Kuldeep Chandra Vishwakarma',
    description: 'Ongoing documentation of computer science studies, daily coding discoveries, and system insights.',
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
          { name: 'Learning Journal', item: '/learning-journal' },
        ]}
      />
      <PageJsonLd data={journalSchema} />
      {children}
    </>
  );
}


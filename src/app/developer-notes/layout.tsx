import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Developer Notes & Cheatsheets",
  description: "Technical quick references, terminal configurations, git flows, Docker snippets, and database optimization notes.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/developer-notes",
  },
  openGraph: {
    title: "Developer Notes & Cheatsheets | Kuldeep Chandra Vishwakarma",
    description: "Technical quick references, terminal configurations, git flows, Docker snippets, and database optimization notes.",
    url: "https://kuldeepvishwakarma.com/developer-notes",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Notes – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Notes & Cheatsheets | Kuldeep Chandra Vishwakarma",
    description: "Technical quick references, terminal configurations, git flows, Docker snippets, and database optimization notes.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function DeveloperNotesLayout({ children }: { children: React.ReactNode }) {
  const notesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/developer-notes#webpage',
    url: 'https://kuldeepvishwakarma.com/developer-notes',
    name: 'Developer Notes & Code Reference Snippets by Kuldeep Chandra Vishwakarma',
    description: 'Technical quick reference commands and code snippets.',
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
          { name: 'Developer Notes', item: '/developer-notes' },
        ]}
      />
      <PageJsonLd data={notesSchema} />
      {children}
    </>
  );
}


import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Curated Developer Resources & Tooling",
  description: "Compiled utilities, cheatsheets, checklist assets, database tools, and curated bookmarks for software engineers.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/resources",
  },
  openGraph: {
    title: "Curated Developer Resources & Tooling | Kuldeep Chandra Vishwakarma",
    description: "Compiled utilities, cheatsheets, checklist assets, database tools, and curated bookmarks for software engineers.",
    url: "https://kuldeepvishwakarma.com/resources",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Resources – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated Developer Resources & Tooling | Kuldeep Chandra Vishwakarma",
    description: "Compiled utilities, cheatsheets, checklist assets, database tools, and curated bookmarks for software engineers.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const resourcesSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/resources#webpage',
    url: 'https://kuldeepvishwakarma.com/resources',
    name: 'Curated Developer Resources & Tooling by Kuldeep Chandra Vishwakarma',
    description: 'Selected developer tools, software engineering resources, and reference sheets.',
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
          { name: 'Resources', item: '/resources' },
        ]}
      />
      <PageJsonLd data={resourcesSchema} />
      {children}
    </>
  );
}


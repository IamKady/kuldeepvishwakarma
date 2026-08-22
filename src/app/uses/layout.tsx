import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Uses & Hardware/Software Workspace Setup",
  description: "Workstation specs, mechanical keyboards, IDE themes, development software, and local server stack configurations used by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/uses",
  },
  openGraph: {
    title: "Uses & Hardware/Software Workspace Setup | Kuldeep Chandra Vishwakarma",
    description: "Workstation specs, mechanical keyboards, IDE themes, development software, and local server stack configurations used by Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/uses",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uses & Setup – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses & Hardware/Software Workspace Setup | Kuldeep Chandra Vishwakarma",
    description: "Workstation specs, mechanical keyboards, IDE themes, development software, and local server stack configurations used by Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function UsesLayout({ children }: { children: React.ReactNode }) {
  const usesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': 'https://kuldeepvishwakarma.com/uses#webpage',
    url: 'https://kuldeepvishwakarma.com/uses',
    name: 'Hardware, Software & Developer Setup of Kuldeep Chandra Vishwakarma',
    description: 'Hardware tools, developer utilities, and productivity equipment stack.',
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
          { name: 'Uses', item: '/uses' },
        ]}
      />
      <PageJsonLd data={usesSchema} />
      {children}
    </>
  );
}


import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Open Source Contributions & Repositories",
  description: "Pull requests, active repositories, code showcases, and open-source contributions by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/open-source",
  },
  openGraph: {
    title: "Open Source Contributions & Repositories | Kuldeep Chandra Vishwakarma",
    description: "Pull requests, active repositories, code showcases, and open-source contributions by Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/open-source",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Source Contributions – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Contributions & Repositories | Kuldeep Chandra Vishwakarma",
    description: "Pull requests, active repositories, code showcases, and open-source contributions by Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function OpenSourceLayout({ children }: { children: React.ReactNode }) {
  const openSourceSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/open-source#webpage',
    url: 'https://kuldeepvishwakarma.com/open-source',
    name: 'Open Source Repositories and Contributions by Kuldeep Chandra Vishwakarma',
    description: 'Public software libraries, developer tooling, and GitHub pull requests.',
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
          { name: 'Open Source', item: '/open-source' },
        ]}
      />
      <PageJsonLd data={openSourceSchema} />
      {children}
    </>
  );
}


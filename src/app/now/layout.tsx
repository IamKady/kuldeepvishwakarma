import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "What I'm Doing Now (/now)",
  description: "A public /now page detailing current engineering focus, MSc CS coursework, reading queue, and projects by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/now",
  },
  openGraph: {
    title: "What I'm Doing Now (/now) | Kuldeep Chandra Vishwakarma",
    description: "A public /now page detailing current engineering focus, MSc CS coursework, reading queue, and projects by Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/now",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Now Log – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What I'm Doing Now (/now) | Kuldeep Chandra Vishwakarma",
    description: "A public /now page detailing current engineering focus, MSc CS coursework, reading queue, and projects by Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function NowLayout({ children }: { children: React.ReactNode }) {
  const nowSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    '@id': 'https://kuldeepvishwakarma.com/now#webpage',
    url: 'https://kuldeepvishwakarma.com/now',
    name: 'What I Am Doing Now - Kuldeep Chandra Vishwakarma',
    description: 'Current real-time focus, activities, and engineering goals inspired by the /now page movement.',
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
          { name: 'Now', item: '/now' },
        ]}
      />
      <PageJsonLd data={nowSchema} />
      {children}
    </>
  );
}


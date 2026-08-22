import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "About",
  description: "Explore the engineering journey, background, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/about",
  },
  openGraph: {
    title: "About | Kuldeep Chandra Vishwakarma",
    description: "Explore the engineering journey, background, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/about",
    type: "profile",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kuldeep Chandra Vishwakarma",
    description: "Explore the engineering journey, background, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://kuldeepvishwakarma.com/about#webpage',
    url: 'https://kuldeepvishwakarma.com/about',
    name: 'About Kuldeep Chandra Vishwakarma',
    description: 'Explore the engineering journey, background, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.',
    mainEntity: {
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
          { name: 'About', item: '/about' },
        ]}
      />
      <PageJsonLd data={aboutSchema} />
      {children}
    </>
  );
}


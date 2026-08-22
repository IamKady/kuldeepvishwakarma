import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Speaking, Talks & Technical Presentations",
  description: "Logs of speaking engagements, developer conference talks, technical workshops, and slide decks by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/speaking",
  },
  openGraph: {
    title: "Speaking, Talks & Technical Presentations | Kuldeep Chandra Vishwakarma",
    description: "Logs of speaking engagements, developer conference talks, technical workshops, and slide decks by Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/speaking",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speaking & Talks – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking, Talks & Technical Presentations | Kuldeep Chandra Vishwakarma",
    description: "Logs of speaking engagements, developer conference talks, technical workshops, and slide decks by Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function SpeakingLayout({ children }: { children: React.ReactNode }) {
  const speakingSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/speaking#webpage',
    url: 'https://kuldeepvishwakarma.com/speaking',
    name: 'Speaking Engagements & Technical Talks by Kuldeep Chandra Vishwakarma',
    description: 'Archive of tech presentations, slide decks, and conference talk notes.',
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
          { name: 'Speaking', item: '/speaking' },
        ]}
      />
      <PageJsonLd data={speakingSchema} />
      {children}
    </>
  );
}


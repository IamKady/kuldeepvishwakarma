import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Startup Logs & Ventures",
  description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of StartupWire.in and digital products.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/startups",
  },
  openGraph: {
    title: "Startup Logs & Ventures | Kuldeep Chandra Vishwakarma",
    description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of StartupWire.in and digital products.",
    url: "https://kuldeepvishwakarma.com/startups",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Startup Logs – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Logs & Ventures | Kuldeep Chandra Vishwakarma",
    description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of StartupWire.in and digital products.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function StartupsLayout({ children }: { children: React.ReactNode }) {
  const startupsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/startups#webpage',
    url: 'https://kuldeepvishwakarma.com/startups',
    name: 'Startup Logs & Founder Ventures by Kuldeep Chandra Vishwakarma',
    description: 'Chronological founder notes and scaling telemetry of StartupWire.in and digital products.',
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
          { name: 'Startups', item: '/startups' },
        ]}
      />
      <PageJsonLd data={startupsSchema} />
      {children}
    </>
  );
}


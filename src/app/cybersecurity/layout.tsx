import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Cybersecurity Logs & Security Audits",
  description: "CTF writeups, vulnerability analysis, ethical hacking experiments, network security audits, and security engineering research.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Logs & Security Audits | Kuldeep Chandra Vishwakarma",
    description: "CTF writeups, vulnerability analysis, ethical hacking experiments, network security audits, and security engineering research.",
    url: "https://kuldeepvishwakarma.com/cybersecurity",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Log – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Logs & Security Audits | Kuldeep Chandra Vishwakarma",
    description: "CTF writeups, vulnerability analysis, ethical hacking experiments, network security audits, and security engineering research.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function CybersecurityLayout({ children }: { children: React.ReactNode }) {
  const cybersecuritySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/cybersecurity#webpage',
    url: 'https://kuldeepvishwakarma.com/cybersecurity',
    name: 'Cybersecurity Logs & CTF Audits by Kuldeep Chandra Vishwakarma',
    description: 'Technical notes on network security, web application testing, and CTF security writeups.',
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
          { name: 'Cybersecurity', item: '/cybersecurity' },
        ]}
      />
      <PageJsonLd data={cybersecuritySchema} />
      {children}
    </>
  );
}


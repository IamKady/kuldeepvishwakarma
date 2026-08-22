import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Contact, Inquiries & Meeting Booking",
  description: "Get in touch with Kuldeep Chandra Vishwakarma for software engineering roles, startup collaboration, or schedule a 1-on-1 meeting.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/contact",
  },
  openGraph: {
    title: "Contact, Inquiries & Meeting Booking | Kuldeep Chandra Vishwakarma",
    description: "Get in touch with Kuldeep Chandra Vishwakarma for software engineering roles, startup collaboration, or schedule a 1-on-1 meeting.",
    url: "https://kuldeepvishwakarma.com/contact",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact, Inquiries & Meeting Booking | Kuldeep Chandra Vishwakarma",
    description: "Get in touch with Kuldeep Chandra Vishwakarma for software engineering roles, startup collaboration, or schedule a 1-on-1 meeting.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://kuldeepvishwakarma.com/contact#webpage',
    url: 'https://kuldeepvishwakarma.com/contact',
    name: 'Contact & Hire Kuldeep Chandra Vishwakarma',
    description: 'Direct communication channels, meeting scheduler, and email contact for software engineering inquiries.',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://kuldeepvishwakarma.com/#person',
      name: 'Kuldeep Chandra Vishwakarma',
      email: 'mailto:kuldeepvishwakarma3803@gmail.com',
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Contact', item: '/contact' },
        ]}
      />
      <PageJsonLd data={contactSchema} />
      {children}
    </>
  );
}


import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae",
  description: "View the official digital CV and career achievements log. Experience highlights, tech stack, and full-stack engineering skill set of Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/resume",
  },
  openGraph: {
    title: "Resume & Curriculum Vitae | Kuldeep Chandra Vishwakarma",
    description: "View the official digital CV and career achievements log. Experience highlights, tech stack, and full-stack engineering skill set.",
    url: "https://kuldeepvishwakarma.com/resume",
    type: "profile",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resume – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume & Curriculum Vitae | Kuldeep Chandra Vishwakarma",
    description: "View the official digital CV and career achievements log. Experience highlights, tech stack, and full-stack engineering skill set.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  const resumeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://kuldeepvishwakarma.com/resume#webpage',
    url: 'https://kuldeepvishwakarma.com/resume',
    name: 'Kuldeep Chandra Vishwakarma - Resume & CV',
    description: 'Professional experience, technical projects, education, and skills of Kuldeep Chandra Vishwakarma.',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://kuldeepvishwakarma.com/#person',
      name: 'Kuldeep Chandra Vishwakarma',
      jobTitle: 'Software Engineer',
      knowsAbout: ['Next.js', 'React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AI Systems'],
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', item: '/' },
          { name: 'Resume', item: '/resume' },
        ]}
      />
      <PageJsonLd data={resumeSchema} />
      {children}
    </>
  );
}


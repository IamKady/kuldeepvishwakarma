import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "Projects & Applications",
  description: "Explore production web applications, open-source AI tools, full-stack systems, and engineering projects by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/projects",
  },
  openGraph: {
    title: "Projects & Applications | Kuldeep Chandra Vishwakarma",
    description: "Explore production web applications, open-source AI tools, full-stack systems, and engineering projects by Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/projects",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects & Applications – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Applications | Kuldeep Chandra Vishwakarma",
    description: "Explore production web applications, open-source AI tools, full-stack systems, and engineering projects by Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/projects#webpage',
    url: 'https://kuldeepvishwakarma.com/projects',
    name: 'Projects & Software Applications by Kuldeep Chandra Vishwakarma',
    description: 'Explore production web applications, open-source AI tools, full-stack systems, and engineering projects.',
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
          { name: 'Projects', item: '/projects' },
        ]}
      />
      <PageJsonLd data={projectsSchema} />
      {children}
    </>
  );
}


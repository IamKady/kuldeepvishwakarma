import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "AI Lab & Prompt Engineering",
  description: "Experimental AI prompts, system instructions, LLM agent workflows, token metrics, and programmatic content filtering prompts.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/ai-lab",
  },
  openGraph: {
    title: "AI Lab & Prompt Engineering | Kuldeep Chandra Vishwakarma",
    description: "Experimental AI prompts, system instructions, LLM agent workflows, token metrics, and programmatic content filtering prompts.",
    url: "https://kuldeepvishwakarma.com/ai-lab",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Lab & Prompts – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lab & Prompt Engineering | Kuldeep Chandra Vishwakarma",
    description: "Experimental AI prompts, system instructions, LLM agent workflows, token metrics, and programmatic content filtering prompts.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function AiLabLayout({ children }: { children: React.ReactNode }) {
  const aiLabSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/ai-lab#webpage',
    url: 'https://kuldeepvishwakarma.com/ai-lab',
    name: 'AI Lab & LLM Agent Experiments by Kuldeep Chandra Vishwakarma',
    description: 'Collection of system prompts, agent workflows, and LLM orchestration benchmarks.',
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
          { name: 'AI Lab', item: '/ai-lab' },
        ]}
      />
      <PageJsonLd data={aiLabSchema} />
      {children}
    </>
  );
}


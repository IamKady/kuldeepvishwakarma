import { Metadata } from 'next';
import { BreadcrumbJsonLd, PageJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: "AI Experiments & LLM Benchmarks",
  description: "Collection of AI agent experiments, LLM workflow tests, vector indexing benchmarks, and prompt engineering explorations.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/ai-experiments",
  },
  openGraph: {
    title: "AI Experiments & LLM Benchmarks | Kuldeep Chandra Vishwakarma",
    description: "Collection of AI agent experiments, LLM workflow tests, vector indexing benchmarks, and prompt engineering explorations.",
    url: "https://kuldeepvishwakarma.com/ai-experiments",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Experiments – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Experiments & LLM Benchmarks | Kuldeep Chandra Vishwakarma",
    description: "Collection of AI agent experiments, LLM workflow tests, vector indexing benchmarks, and prompt engineering explorations.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function AiExperimentsLayout({ children }: { children: React.ReactNode }) {
  const experimentsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kuldeepvishwakarma.com/ai-experiments#webpage',
    url: 'https://kuldeepvishwakarma.com/ai-experiments',
    name: 'AI Experiments and Benchmark Tests by Kuldeep Chandra Vishwakarma',
    description: 'Autonomous AI agents, tool invocation prototypes, and prompt evaluations.',
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
          { name: 'AI Experiments', item: '/ai-experiments' },
        ]}
      />
      <PageJsonLd data={experimentsSchema} />
      {children}
    </>
  );
}


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Experiments",
  description: "Collection of AI agent experiments, LLM workflow tests, and prompt engineering explorations.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/ai-experiments",
  },
  openGraph: {
    title: "AI Experiments | Kuldeep Chandra Vishwakarma",
    description: "Collection of AI agent experiments, LLM workflow tests, and prompt engineering explorations.",
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
    title: "AI Experiments | Kuldeep Chandra Vishwakarma",
    description: "Collection of AI agent experiments, LLM workflow tests, and prompt engineering explorations.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function aiexperimentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

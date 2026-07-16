import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Research Papers & Notes",
  description: "Academic abstracts and theoretical notes on distributed systems security, LLM pipelines, and cryptographic protocols.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/research",
  },
  openGraph: {
    title: "Research Papers & Notes | Kuldeep Chandra Vishwakarma",
    description: "Academic abstracts and theoretical notes on distributed systems security, LLM pipelines, and cryptographic protocols.",
    url: "https://kuldeepvishwakarma.com/research",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Research Papers – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Papers & Notes | Kuldeep Chandra Vishwakarma",
    description: "Academic abstracts and theoretical notes on distributed systems security, LLM pipelines, and cryptographic protocols.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function researchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

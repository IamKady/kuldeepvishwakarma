import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Lab & Prompts",
  description: "Check out experimental AI prompts, system instructions, token metrics, and programmatic content filtering prompts.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/ai-lab",
  },
  openGraph: {
    title: "AI Lab & Prompts | Kuldeep Chandra Vishwakarma",
    description: "Check out experimental AI prompts, system instructions, token metrics, and programmatic content filtering prompts.",
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
    title: "AI Lab & Prompts | Kuldeep Chandra Vishwakarma",
    description: "Check out experimental AI prompts, system instructions, token metrics, and programmatic content filtering prompts.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function ailabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

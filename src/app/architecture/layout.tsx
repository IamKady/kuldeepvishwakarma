import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "System Architectures",
  description: "Check out technical ASCII flowcharts, data ingestion map diagrams, and component rationales of automated pipelines.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/architecture",
  },
  openGraph: {
    title: "System Architectures | Kuldeep Chandra Vishwakarma",
    description: "Check out technical ASCII flowcharts, data ingestion map diagrams, and component rationales of automated pipelines.",
    url: "https://kuldeepvishwakarma.com/architecture",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "System Architectures – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Architectures | Kuldeep Chandra Vishwakarma",
    description: "Check out technical ASCII flowcharts, data ingestion map diagrams, and component rationales of automated pipelines.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function architectureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Systems Roadmap",
  description: "Visual checklist of features, database expansions, security layers, and product targets currently scheduled for Kuldeep's projects.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/roadmap",
  },
  openGraph: {
    title: "Systems Roadmap | Kuldeep Chandra Vishwakarma",
    description: "Visual checklist of features, database expansions, security layers, and product targets currently scheduled.",
    url: "https://kuldeepvishwakarma.com/roadmap",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Systems Roadmap – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Systems Roadmap | Kuldeep Chandra Vishwakarma",
    description: "Visual checklist of features, database expansions, security layers, and product targets currently scheduled.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function roadmapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

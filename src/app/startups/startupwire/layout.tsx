import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "StartupWire Case Study",
  description: "Autonomous compilation pipeline specs and pgvector deduplication architectures used in StartupWire — an AI-powered startup news aggregator.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/startups/startupwire",
  },
  openGraph: {
    title: "StartupWire Case Study | Kuldeep Chandra Vishwakarma",
    description: "Autonomous compilation pipeline specs and pgvector deduplication architectures used in StartupWire — an AI-powered startup news aggregator.",
    url: "https://kuldeepvishwakarma.com/startups/startupwire",
    type: "article",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "StartupWire Case Study – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupWire Case Study | Kuldeep Chandra Vishwakarma",
    description: "Autonomous compilation pipeline specs and pgvector deduplication architectures used in StartupWire.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function startupsstartupwireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

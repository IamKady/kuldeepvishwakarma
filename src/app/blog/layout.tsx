import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog & Publications",
  description: "Read monthly logs, research articles, and developer notes covering AI prompt curation, distributed caching, and backend scale.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/blog",
  },
  openGraph: {
    title: "Blog & Publications | Kuldeep Chandra Vishwakarma",
    description: "Read monthly logs, research articles, and developer notes covering AI prompt curation, distributed caching, and backend scale.",
    url: "https://kuldeepvishwakarma.com/blog",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog & Publications – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Publications | Kuldeep Chandra Vishwakarma",
    description: "Read monthly logs, research articles, and developer notes covering AI prompt curation, distributed caching, and backend scale.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function blogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

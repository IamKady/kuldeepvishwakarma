import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reading List & Library Tracker",
  description: "Tracking books covering software architecture design, entrepreneurship, and cybersecurity logs. Reading list with status and ratings.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/reading",
  },
  openGraph: {
    title: "Reading List | Kuldeep Chandra Vishwakarma",
    description: "Tracking books covering software architecture design, entrepreneurship, and cybersecurity logs. Reading list with status and ratings.",
    url: "https://kuldeepvishwakarma.com/reading",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reading List – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading List | Kuldeep Chandra Vishwakarma",
    description: "Tracking books covering software architecture design, entrepreneurship, and cybersecurity logs.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function readingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

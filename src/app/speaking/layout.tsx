import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Speaking & Talks",
  description: "Logs of speaking engagements, technical presentations, and presentation slides index by Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/speaking",
  },
  openGraph: {
    title: "Speaking & Talks | Kuldeep Chandra Vishwakarma",
    description: "Logs of speaking engagements, technical presentations, and presentation slides index.",
    url: "https://kuldeepvishwakarma.com/speaking",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speaking & Talks – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking & Talks | Kuldeep Chandra Vishwakarma",
    description: "Logs of speaking engagements, technical presentations, and presentation slides index.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function speakingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Now Log",
  description: "A dynamic list of current projects, academic status, reading, and immediate personal goals of Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/now",
  },
  openGraph: {
    title: "Now Log | Kuldeep Chandra Vishwakarma",
    description: "A dynamic list of current projects, academic status, reading, and immediate personal goals.",
    url: "https://kuldeepvishwakarma.com/now",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Now Log – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Now Log | Kuldeep Chandra Vishwakarma",
    description: "A dynamic list of current projects, academic status, reading, and immediate personal goals.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function nowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

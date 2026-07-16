import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Case Studies Summary",
  description: "Summary of problem-solving techniques, database specification structures, and product layouts for engineering case studies.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | Kuldeep Chandra Vishwakarma",
    description: "Summary of problem-solving techniques, database specification structures, and product layouts for engineering case studies.",
    url: "https://kuldeepvishwakarma.com/case-studies",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Case Studies – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Kuldeep Chandra Vishwakarma",
    description: "Summary of problem-solving techniques, database specification structures, and product layouts for engineering case studies.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function casestudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Learning Journal",
  description: "Logs detailing daily technological learnings, mistakes, discoveries, and milestones across various domains.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/learning-journal",
  },
  openGraph: {
    title: "Learning Journal | Kuldeep Chandra Vishwakarma",
    description: "Logs detailing daily technological learnings, mistakes, discoveries, and milestones across various domains.",
    url: "https://kuldeepvishwakarma.com/learning-journal",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learning Journal – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Journal | Kuldeep Chandra Vishwakarma",
    description: "Logs detailing daily technological learnings, mistakes, discoveries, and milestones across various domains.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function learningjournalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

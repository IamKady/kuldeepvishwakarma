import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Review deep-dive engineering case studies, systems architecture decisions, database specs, and trade-offs of production products.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/projects",
  },
  openGraph: {
    title: "Projects & Case Studies | Kuldeep Chandra Vishwakarma",
    description: "Review deep-dive engineering case studies, systems architecture decisions, database specs, and trade-offs of production products.",
    url: "https://kuldeepvishwakarma.com/projects",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Projects & Case Studies – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Case Studies | Kuldeep Chandra Vishwakarma",
    description: "Review deep-dive engineering case studies, systems architecture decisions, database specs, and trade-offs of production products.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function projectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

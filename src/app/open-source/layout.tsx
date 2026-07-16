import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description: "Logs of pull requests, contributions, and community additions made to open source software repositories.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/open-source",
  },
  openGraph: {
    title: "Open Source Contributions | Kuldeep Chandra Vishwakarma",
    description: "Logs of pull requests, contributions, and community additions made to open source software repositories.",
    url: "https://kuldeepvishwakarma.com/open-source",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Source Contributions – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Contributions | Kuldeep Chandra Vishwakarma",
    description: "Logs of pull requests, contributions, and community additions made to open source software repositories.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function opensourceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

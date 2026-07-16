import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Developer Resources",
  description: "Compiled utilities, cheatsheets, checklist assets, and bookmark collections for developers.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/resources",
  },
  openGraph: {
    title: "Developer Resources | Kuldeep Chandra Vishwakarma",
    description: "Compiled utilities, cheatsheets, checklist assets, and bookmark collections for developers.",
    url: "https://kuldeepvishwakarma.com/resources",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Resources – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Resources | Kuldeep Chandra Vishwakarma",
    description: "Compiled utilities, cheatsheets, checklist assets, and bookmark collections for developers.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function resourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

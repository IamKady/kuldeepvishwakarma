import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uses & Setup",
  description: "Details of hardware workstation specs, IDE customization themes, software utilities, and local server stack configurations.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/uses",
  },
  openGraph: {
    title: "Uses & Setup | Kuldeep Chandra Vishwakarma",
    description: "Details of hardware workstation specs, IDE customization themes, software utilities, and local server stack configurations.",
    url: "https://kuldeepvishwakarma.com/uses",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uses & Setup – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses & Setup | Kuldeep Chandra Vishwakarma",
    description: "Details of hardware workstation specs, IDE customization themes, software utilities, and local server stack configurations.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function usesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

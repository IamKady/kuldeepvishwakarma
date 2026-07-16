import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cybersecurity Log",
  description: "CTF writeups, vulnerability analysis, network security research, and security engineering notes.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Log | Kuldeep Chandra Vishwakarma",
    description: "CTF writeups, vulnerability analysis, network security research, and security engineering notes.",
    url: "https://kuldeepvishwakarma.com/cybersecurity",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Log – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Log | Kuldeep Chandra Vishwakarma",
    description: "CTF writeups, vulnerability analysis, network security research, and security engineering notes.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function cybersecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

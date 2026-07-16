import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Startup Logs",
  description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of digital products.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/startups",
  },
  openGraph: {
    title: "Startup Logs | Kuldeep Chandra Vishwakarma",
    description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of digital products.",
    url: "https://kuldeepvishwakarma.com/startups",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Startup Logs – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Logs | Kuldeep Chandra Vishwakarma",
    description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of digital products.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function startupsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

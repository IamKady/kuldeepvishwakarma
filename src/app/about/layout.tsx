import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "Explore the systems engineering transition narrative, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/about",
  },
  openGraph: {
    title: "About | Kuldeep Chandra Vishwakarma",
    description: "Explore the systems engineering transition narrative, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.",
    url: "https://kuldeepvishwakarma.com/about",
    type: "profile",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Kuldeep Chandra Vishwakarma",
    description: "Explore the systems engineering transition narrative, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function aboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

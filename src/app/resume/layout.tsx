import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume",
  description: "View the official digital CV and career achievements log. Read experience highlights, tools, and technical skill sets of Kuldeep Chandra Vishwakarma.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/resume",
  },
  openGraph: {
    title: "Resume | Kuldeep Chandra Vishwakarma",
    description: "View the official digital CV and career achievements log. Read experience highlights, tools, and technical skill sets.",
    url: "https://kuldeepvishwakarma.com/resume",
    type: "profile",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resume – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Kuldeep Chandra Vishwakarma",
    description: "View the official digital CV and career achievements log. Read experience highlights, tools, and technical skill sets.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function resumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Get in touch for software roles or schedule a meeting. Connect via email, social links, or use the interactive schedule booking widget.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/contact",
  },
  openGraph: {
    title: "Contact & Booking | Kuldeep Chandra Vishwakarma",
    description: "Get in touch for software roles or schedule a meeting. Connect via email, social links, or use the interactive schedule booking widget.",
    url: "https://kuldeepvishwakarma.com/contact",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Booking | Kuldeep Chandra Vishwakarma",
    description: "Get in touch for software roles or schedule a meeting. Connect via email, social links, or use the interactive schedule booking widget.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function contactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

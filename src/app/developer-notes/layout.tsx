import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Developer Notes",
  description: "Technical quick references, commands, and snippets for terminal configurations, git flows, and scripting.",
  alternates: {
    canonical: "https://kuldeepvishwakarma.com/developer-notes",
  },
  openGraph: {
    title: "Developer Notes | Kuldeep Chandra Vishwakarma",
    description: "Technical quick references, commands, and snippets for terminal configurations, git flows, and scripting.",
    url: "https://kuldeepvishwakarma.com/developer-notes",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Notes – Kuldeep Chandra Vishwakarma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Notes | Kuldeep Chandra Vishwakarma",
    description: "Technical quick references, commands, and snippets for terminal configurations, git flows, and scripting.",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
};

export default function developernotesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

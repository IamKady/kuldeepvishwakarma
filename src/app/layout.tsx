import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kuldeep Chandra Vishwakarma | Software Engineer • AI Builder • Startup Founder",
    template: "%s | Kuldeep Chandra Vishwakarma"
  },
  description: "Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, Startup Founder, and Tech Writer. Building StartupWire, researching cybersecurity and AI workflows.",
  metadataBase: new URL("https://kuldeepvishwakarma.com"),
  keywords: ["Kuldeep Chandra Vishwakarma", "Software Engineer", "AI Builder", "Startup Founder", "StartupWire", "MERN Developer", "Cybersecurity Log", "React Developer", "Next.js Portfolio"],
  authors: [{ name: "Kuldeep Chandra Vishwakarma" }],
  openGraph: {
    title: "Kuldeep Chandra Vishwakarma | Software Engineer • AI Builder • Startup Founder",
    description: "Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, Startup Founder, and Tech Writer.",
    url: "https://kuldeepvishwakarma.com",
    siteName: "Kuldeep Chandra Vishwakarma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Chandra Vishwakarma | Software Engineer • AI Builder • Startup Founder",
    description: "Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, Startup Founder, and Tech Writer.",
    creator: "@iamkady"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}

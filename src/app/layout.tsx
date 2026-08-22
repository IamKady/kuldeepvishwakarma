import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#090d16",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Kuldeep Chandra Vishwakarma | Software Engineer • AI Builder • Startup Founder",
    template: "%s | Kuldeep Chandra Vishwakarma"
  },
  description: "Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, Startup Founder, and Tech Writer. Building StartupWire, researching cybersecurity and AI workflows.",
  metadataBase: new URL("https://kuldeepvishwakarma.com"),
  applicationName: "Kuldeep Chandra Vishwakarma Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Kuldeep Chandra Vishwakarma",
    "Kuldeep Vishwakarma",
    "Software Engineer",
    "AI Builder",
    "Startup Founder",
    "StartupWire",
    "Bookperia",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Cybersecurity Log",
    "AI Systems Architecture"
  ],
  authors: [{ name: "Kuldeep Chandra Vishwakarma", url: "https://kuldeepvishwakarma.com" }],
  creator: "Kuldeep Chandra Vishwakarma",
  publisher: "Kuldeep Chandra Vishwakarma",
  category: "technology",
  classification: "Portfolio & Engineering Operating System",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/logo.png" },
    ],
  },
  alternates: {
    canonical: "https://kuldeepvishwakarma.com",
    types: {
      "application/rss+xml": "https://kuldeepvishwakarma.com/rss.xml",
    },
  },
  openGraph: {
    title: "Kuldeep Chandra Vishwakarma | Software Engineer • AI Builder • Startup Founder",
    description: "Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, Startup Founder, and Tech Writer. Building StartupWire, researching cybersecurity and AI workflows.",
    url: "https://kuldeepvishwakarma.com",
    siteName: "Kuldeep Chandra Vishwakarma Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kuldeepvishwakarma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kuldeep Chandra Vishwakarma – Software Engineer, AI Builder, Startup Founder",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuldeep Chandra Vishwakarma | Software Engineer • AI Builder • Startup Founder",
    description: "Personal Operating System of Kuldeep Chandra Vishwakarma. Software Engineer, AI Builder, Startup Founder, and Tech Writer.",
    creator: "@Kuldeep81824338",
    site: "@Kuldeep81824338",
    images: ["https://kuldeepvishwakarma.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Yq-SkGoiqszMExrGcTcQDQd0q8HquIk-bnaPSh9YA0c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema LD+JSON
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://kuldeepvishwakarma.com/#person",
    "name": "Kuldeep Chandra Vishwakarma",
    "alternateName": "Kuldeep Vishwakarma",
    "url": "https://kuldeepvishwakarma.com",
    "image": "https://kuldeepvishwakarma.com/logo.png",
    "email": "mailto:kuldeepvishwakarma3803@gmail.com",
    "sameAs": [
      "https://github.com/IamKady",
      "https://www.linkedin.com/in/iamkady/",
      "https://x.com/Kuldeep81824338"
    ],
    "jobTitle": "Software Engineer",
    "description": "Software Engineer and AI Builder focused on full-stack web applications, AI prompt curation, distributed caching, and startup engineering.",
    "worksFor": {
      "@type": "Organization",
      "name": "StartupWire",
      "url": "https://kuldeepvishwakarma.com/startups/startupwire"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Dr. A.P.J. Abdul Kalam Technical University"
    },
    "knowsAbout": [
      "Software Engineering",
      "Web Development",
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Artificial Intelligence",
      "Cybersecurity",
      "Search Engine Optimization (SEO)"
    ]
  };

  // WebSite search schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://kuldeepvishwakarma.com/#website",
    "url": "https://kuldeepvishwakarma.com",
    "name": "Kuldeep Chandra Vishwakarma Portfolio",
    "description": "Personal Operating System of Kuldeep Chandra Vishwakarma — Software Engineer, AI Builder, and Startup Founder.",
    "publisher": {
      "@id": "https://kuldeepvishwakarma.com/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://kuldeepvishwakarma.com/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <ClientShell>{children}</ClientShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


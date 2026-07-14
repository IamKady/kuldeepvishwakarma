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
    creator: "@Kuldeep81824338"
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: "Yq-SkGoiqszMExrGcTcQDQd0q8HquIk-bnaPSh9YA0c",
  }
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
    "name": "Kuldeep Chandra Vishwakarma",
    "alternateName": "Kuldeep Vishwakarma",
    "url": "https://kuldeepvishwakarma.com",
    "image": "https://kuldeepvishwakarma.com/favicon.ico",
    "sameAs": [
      "https://github.com/IamKady",
      "https://www.linkedin.com/in/iamkady/",
      "https://x.com/Kuldeep81824338"
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "StartupWire"
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
      "PostgreSQL",
      "Artificial Intelligence",
      "Cybersecurity"
    ]
  };

  // WebSite search schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://kuldeepvishwakarma.com",
    "name": "Kuldeep Chandra Vishwakarma Portfolio",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kuldeepvishwakarma.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
      </body>
    </html>
  );
}

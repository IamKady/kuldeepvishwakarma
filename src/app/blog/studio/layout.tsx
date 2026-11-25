import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Author Studio — Private Drafts',
  description: 'Private writing studio for drafting, reviewing, and deliberately publishing original pieces.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function JournalStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

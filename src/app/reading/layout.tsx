import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Library & Reading List",
  description: "Book shelf tracking progress, ratings, and engineering notes on systems, startups, and self-education literature."
};

export default function readingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

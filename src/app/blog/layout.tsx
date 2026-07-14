import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog & Publications",
  description: "Read monthly logs, research articles, and developer notes covering AI prompt curation, distributed caching, and backend scale."
};

export default function blogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

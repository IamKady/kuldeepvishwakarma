import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Systems Roadmap",
  description: "Visual checklist of features, database expansions, security layers, and product targets currently scheduled."
};

export default function roadmapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

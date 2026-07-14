import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Review deep-dive engineering case studies, systems architecture decisions, database specs, and trade-offs of production products."
};

export default function projectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

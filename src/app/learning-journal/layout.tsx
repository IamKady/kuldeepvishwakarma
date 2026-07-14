import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Learning Journal",
  description: "Logs detailing daily technological learnings, mistakes, discoveries, and milestones across various domains."
};

export default function learningjournalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

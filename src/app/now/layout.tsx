import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Now Log",
  description: "A dynamic list of current projects, academic status, reading, and immediate personal goals."
};

export default function nowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

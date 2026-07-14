import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Speaking & Talks",
  description: "Logs of speaking engagements, technical presentations, and presentation slides index."
};

export default function speakingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Research Papers & Notes",
  description: "Academic abstracts and theoretical notes on distributed systems security, LLM pipelines, and cryptographic protocols."
};

export default function researchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

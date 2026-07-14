import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "System Architectures",
  description: "Check out technical ASCII flowcharts, data ingestion map diagrams, and component rationales of automated pipelines."
};

export default function architectureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

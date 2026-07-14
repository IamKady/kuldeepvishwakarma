import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Agent Experiments",
  description: "Detailed telemetry logs of multi-agent interactions, token usages, and vector database queries."
};

export default function aiexperimentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Lab & Prompts",
  description: "Check out experimental AI prompts, system instructions, token metrics, and programmatic content filtering prompts."
};

export default function ailabLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

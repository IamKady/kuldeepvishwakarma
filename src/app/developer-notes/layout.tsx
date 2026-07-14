import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Developer Notes",
  description: "Technical quick references, commands, and snippets for terminal configurations, git flows, and scripting."
};

export default function developernotesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Developer Resources",
  description: "Compiled utilities, cheatsheets, checklist assets, and bookmark collections for developers."
};

export default function resourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description: "Logs of pull requests, contributions, and community additions made to open source software repositories."
};

export default function opensourceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

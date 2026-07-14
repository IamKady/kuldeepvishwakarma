import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cybersecurity Logs",
  description: "Logs, CTF write-ups, networking notes, and security audit logs compiled during ethical hacking research."
};

export default function cybersecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Startup Logs",
  description: "Chronological documentation of experiments, lessons, mistakes, growth spikes, and scaling telemetry of digital products."
};

export default function startupsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

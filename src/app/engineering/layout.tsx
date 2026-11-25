import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering & Telemetry',
  description:
    'Live GitHub repository activity, verified commit stream, system architecture blueprints, and technical radar for Kuldeep Chandra Vishwakarma.',
};

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

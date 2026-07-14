import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uses & Setup",
  description: "Details of hardware workstation specs, IDE customization themes, software utilities, and local server stack configurations."
};

export default function usesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

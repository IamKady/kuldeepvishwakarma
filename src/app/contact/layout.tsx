import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Get in touch for software roles or schedule a meeting. Connect via email, social links, or use the interactive schedule booking widget."
};

export default function contactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

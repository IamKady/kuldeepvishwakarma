import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "Explore the systems engineering transition narrative, coding philosophies, and timeline highlights of Kuldeep Chandra Vishwakarma."
};

export default function aboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

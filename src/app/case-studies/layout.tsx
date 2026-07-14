import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Case Studies Summary",
  description: "Summary of problem-solving techniques, database Spec structures, and product layouts."
};

export default function casestudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

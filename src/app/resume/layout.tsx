import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume",
  description: "View the official digital CV and career achievements log. Read experience highlights, tools, and technical skill sets."
};

export default function resumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

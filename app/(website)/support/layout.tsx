import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Facets',
  description:
    "Find true love. We combine the latest research, psychologist experience, and people's feedback to help you build strong and deeper connections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

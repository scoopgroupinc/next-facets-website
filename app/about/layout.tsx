import 'public/assets/web/assets/mobirise-icons2/mobirise2.css';
import 'public/assets/bootstrap/css/bootstrap.min.css';
import 'public/assets/bootstrap/css/bootstrap-grid.min.css';
import 'public/assets/bootstrap/css/bootstrap-reboot.min.css';
import 'public/assets/web/assets/gdpr-plugin/gdpr-styles.css';
import 'public/assets/dropdown/css/style.css';
import 'public/assets/socicon/css/styles.css';
import 'public/assets/theme/css/style.css';
import 'public/assets/mobirise/css/mbr-additional.css';
import 'public/assets/mobirise/css/mbr-additional.css';
import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

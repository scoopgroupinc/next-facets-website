import Script from 'next/script';
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
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Facets Authentic & Mindful Dating',
  description:
    "Find true love. We are a wellness app for singles navigating the dating space. We combine the latest research & psychology to help people build stronger and deeper connections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="vMd6_VKR6nVlLEhqn7u45kEZpG9HSAE5PEtuzdBQ8Mg" />
      </head>
      <body className={poppins.className}>{children}</body>
      <Script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/smoothscroll/smooth-scroll.js"></Script>
      <Script src="/assets/ytplayer/index.js"></Script>
      <Script src="/assets/dropdown/js/navbar-dropdown.js"></Script>
      <Script src="/assets/embla/embla.min.js"></Script>
      <Script src="/assets/embla/script.js"></Script>
      <Script src="/assets/theme/js/Script.js"></Script>
    </html>
  );
}

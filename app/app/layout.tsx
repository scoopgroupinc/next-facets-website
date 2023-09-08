import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import META from './shareprofile/constants';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins', //tailwind
});

export const metadata: Metadata = {
  title: META.layout.title,
  description: META.layout.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const pageMeta = {
  title: 'Animation page',
  description: 'Created to practice animations',
};
export const metadata: Metadata = {
  ...pageMeta,
  metadataBase: new URL(`https://${process.env.CURRENT_URL}`),
  openGraph: {
    ...pageMeta,
    type: 'website',
  },
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

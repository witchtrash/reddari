import React from 'react';
import localFont from 'next/font/local';
import { TopNav } from '@app/components/top-nav';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'reddari',
};

const gambetta = localFont({
  src: [
    {
      path: '../../public/fonts/Gambetta-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gambetta-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-gambetta',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gambetta.variable} font-serif bg-background text-text`}
      >
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}

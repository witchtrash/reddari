import './globals.css';
import React from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { TopNav } from '@app/components/top-nav';

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

const switzer = localFont({
  src: [
    {
      path: '../../public/fonts/Switzer-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Switzer-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-switzer',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <title>foo</title>
      <body
        className={`${gambetta.variable} ${switzer.variable} bg-background font-serif text-text`}
      >
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

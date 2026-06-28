import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppProvider } from '@/contexts/AppContext';
import BackToTop from '@/components/BackToTop';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Daniel González · Portfolio',
  description: 'Full-Stack Developer — construyo aplicaciones web modernas con foco en rendimiento y buena UX.',
  icons: {
    icon: '/images/profile/icono.png',
    shortcut: '/images/profile/icono.png',
    apple: '/images/profile/icono.png',
  },
  openGraph: {
    title: 'Daniel González · Portfolio',
    description: 'Full-Stack Developer — Next.js, React, TypeScript.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="font-sans antialiased bg-background text-primary"
        suppressHydrationWarning
      >
        <AppProvider>
          {children}
          <BackToTop />
        </AppProvider>
      </body>
    </html>
  );
}

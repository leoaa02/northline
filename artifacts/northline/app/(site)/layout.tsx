import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import { Layout } from '@/components/layout/Layout';

const inter = Inter({ subsets: ['latin'], variable: '--app-font-sans' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--app-font-serif' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--app-font-mono' });

export const metadata: Metadata = {
  title: {
    default: 'Northline',
    template: '%s | Northline',
  },
  description: 'Northline — una publicación editorial moderna sobre cultura, tecnología y ciudad.',
  metadataBase: new URL('https://northline.local'),
  openGraph: {
    title: 'Northline',
    description: 'Northline — una publicación editorial moderna sobre cultura, tecnología y ciudad.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northline',
    description: 'Northline — una publicación editorial moderna sobre cultura, tecnología y ciudad.',
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable} ${jetBrainsMono.variable} min-h-screen bg-background font-sans text-foreground`}>
        <Layout>{children}</Layout>
    </div>
  );
}

import type { Metadata } from 'next';
require('../src/index.css');

export const metadata: Metadata = {
  title: 'Northline',
  description: 'Northline - una publicación editorial moderna',
  icons: {
    icon: '/northline-logo.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

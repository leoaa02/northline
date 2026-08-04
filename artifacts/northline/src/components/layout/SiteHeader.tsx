import React from 'react';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A0E1A] text-white border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-serif text-2xl md:text-3xl italic font-bold tracking-tight text-white hover:text-white/90 transition-colors">
            Northline
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 font-sans text-xs uppercase tracking-wider font-medium text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Secciones</Link>
            <Link href="/sobre" className="hover:text-white transition-colors">Sobre mí</Link>
            <Link href="/" className="hover:text-accent transition-colors">Suscribirse</Link>
          </div>
          
        </nav>
      </div>
    </header>
  );
}

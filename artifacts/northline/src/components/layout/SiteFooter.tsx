import React from 'react';
import { Link } from 'wouter';
import { Twitter, Github, Rss } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#0A0E1A] text-white border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-serif text-3xl italic font-bold tracking-tight text-white">
            Northline
          </Link>
          <p className="font-sans italic text-sm text-white/60">
            Apuntes de la intersección entre código y ciudad.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-4 text-white/60">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="/rss" className="hover:text-white transition-colors">
              <Rss size={18} />
            </a>
          </div>
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} Northline. Una publicación personal.
          </p>
        </div>
      </div>
    </footer>
  );
}

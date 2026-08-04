import Link from 'next/link';
import { Twitter, Github, Rss } from 'lucide-react';
import { Container } from '@/components/ui';

export function SiteFooter() {
  return (
    <footer className="mt-20 w-full border-t border-white/10 bg-primary text-primary-foreground md:mt-24">
      <Container className="flex flex-col justify-between gap-10 py-12 md:flex-row md:items-start md:py-14">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <Link href="/" className="font-serif text-3xl font-bold italic tracking-tight text-white transition-colors hover:text-white/90">
            Northline
          </Link>
          <p className="max-w-sm font-sans text-sm italic leading-6 text-white/65">
            Apuntes de la intersección entre código y ciudad.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.22em] text-white/70 md:justify-start">
            <Link href="/" className="transition-colors hover:text-white">
              Inicio
            </Link>
            <Link href="/sobre" className="transition-colors hover:text-white">
              Sobre mí
            </Link>
            <Link href="/#newsletter" className="transition-colors hover:text-white">
              Newsletter
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex items-center gap-4 text-white/60" aria-label="Redes sociales">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="/rss" className="transition-colors hover:text-white" aria-label="RSS">
              <Rss size={18} />
            </a>
          </div>
          <p className="text-center font-mono text-xs text-white/40 md:text-right">
            © {new Date().getFullYear()} Northline. Una publicación personal.
          </p>
        </div>
      </Container>
    </footer>
  );
}

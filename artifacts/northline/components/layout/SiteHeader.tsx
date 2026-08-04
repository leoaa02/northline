import Link from 'next/link';
import { Container } from '@/components/ui';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-primary-foreground backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-8 px-5 sm:px-8 lg:px-10">
        <div className="flex items-center">
          <Link
            href="/"
            className="
font-serif
text-2xl
md:text-3xl
font-bold
italic
tracking-tight
text-white
hover:text-white/90
transition-colors
"
          >
            Northline
          </Link>
        </div>

        <nav className="flex items-center gap-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 md:gap-7" aria-label="Navegación principal">
          <Link href="/#secciones" className="transition-colors duration-200 ease-out hover:text-white">
            Secciones
          </Link>
          <Link href="/sobre" className="transition-colors duration-200 ease-out hover:text-white">
            Sobre mí
          </Link>
          <Link href="/#newsletter" className="font-semibold text-accent transition-colors duration-200 ease-out hover:text-white">
            Suscribirse
          </Link>
        </nav>
      </Container>
    </header>
  );
}

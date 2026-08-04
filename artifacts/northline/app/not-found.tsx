import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded border border-border bg-card p-8 text-center shadow-sm md:p-10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">404</p>
        <h1 className="mt-4 font-serif text-3xl text-foreground">Página no encontrada</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          El contenido que buscas no está disponible o ha cambiado de ubicación.
        </p>
        <Link href="/" className="mt-6 inline-flex min-h-10 items-center rounded border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

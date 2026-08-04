'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded border border-border bg-card p-8 text-center shadow-sm md:p-10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Error</p>
        <h1 className="mt-4 font-serif text-3xl text-foreground">No se pudo cargar la vista</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Algo falló al renderizar esta página. Intenta nuevamente.
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 inline-flex min-h-10 rounded border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}

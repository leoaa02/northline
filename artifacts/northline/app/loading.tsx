export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded border border-border bg-card p-8 text-center shadow-sm md:p-10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Northline</p>
        <div className="mt-4 inline-flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-muted-foreground">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
          Cargando…
        </div>
      </div>
    </div>
  );
}

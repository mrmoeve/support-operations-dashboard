import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4">
      <div className="rounded-3xl border border-border bg-panel p-10 text-center shadow-panel">
        <div className="text-2xl font-semibold">Page not found</div>
        <p className="mt-2 text-muted">The support operations view you requested does not exist.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 font-semibold text-slate-950">
          Return to dashboard
        </Link>
      </div>
    </div>
  );
}

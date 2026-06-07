"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, BellRing, Menu, Moon, Search, ShieldCheck, SunMedium } from "lucide-react";
import { navigationItems } from "@/lib/navigation";
import { useTheme } from "@/components/theme-provider";
import clsx from "clsx";
import { useState } from "react";

export function AppShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-grid bg-[size:26px_26px]">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside
          className={clsx(
            "fixed inset-y-0 left-0 z-40 w-72 border-r border-border/80 bg-panel/95 p-5 shadow-panel backdrop-blur xl:sticky xl:translate-x-0",
            mobileNavOpen ? "translate-x-0" : "-translate-x-full",
            "transition-transform duration-300 xl:block",
          )}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">Support Ops</div>
              <div className="text-lg font-semibold">Command Center</div>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={clsx(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                    isActive
                      ? "bg-accent text-slate-950 shadow-lg shadow-accent/20"
                      : "text-muted hover:bg-accent/10 hover:text-text",
                  )}
                >
                  <span>{item.label}</span>
                  <BarChart3 className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-3xl border border-border/80 bg-surface/70 p-4">
            <div className="text-sm font-semibold">Today&apos;s Focus</div>
            <p className="mt-2 text-sm text-muted">
              Breach risk is concentrated in Platform and Automation queues. Executive-visible escalations need same-day recovery updates.
            </p>
          </div>
        </aside>

        <div className="flex-1">
          <div className="sticky top-0 z-30 border-b border-border/70 bg-surface/85 backdrop-blur">
            <header className="flex items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
              <button
                type="button"
                aria-label="Toggle navigation"
                onClick={() => setMobileNavOpen((open) => !open)}
                className="rounded-2xl border border-border bg-panel p-3 xl:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>

              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Operations Pulse</div>
                <h1 className="mt-1 text-2xl font-semibold">{title}</h1>
                <p className="mt-1 text-sm text-muted">{description}</p>
              </div>

              <div className="hidden items-center gap-2 rounded-2xl border border-border bg-panel px-3 py-2 text-sm text-muted md:flex">
                <Search className="h-4 w-4" />
                Cross-page operational search
              </div>

              <button
                type="button"
                onClick={toggleTheme}
                className="rounded-2xl border border-border bg-panel p-3"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button type="button" className="rounded-2xl border border-border bg-panel p-3" aria-label="Notifications">
                <BellRing className="h-5 w-5" />
              </button>
            </header>
          </div>

          <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

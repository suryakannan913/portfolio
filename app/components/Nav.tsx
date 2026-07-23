"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { OPEN_PALETTE_EVENT } from "./CommandPalette";

const links = [
  ["about", "/about"],
  ["experience", "/experience"],
  ["projects", "/projects"],
  ["skills", "/skills"],
  ["education", "/education"],
  ["contact", "/contact"],
] as const;

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape and lock body scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-12 max-w-4xl items-center justify-between px-6 font-mono">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition-colors hover:text-accent"
        >
          <span className="text-accent">~</span>/surya-kannan
        </Link>

        <div className="flex items-center gap-3">
          {/* Desktop links — numbered, justin-kang style */}
          <ul className="hidden items-center gap-5 text-xs text-muted sm:flex">
            {links.map(([label, href], i) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`transition-colors hover:text-foreground ${
                    isActive(href) ? "text-foreground" : ""
                  }`}
                >
                  <span className="text-accent/70">0{i + 1}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Command palette trigger */}
          <button
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            aria-label="Open command palette"
            className="hidden items-center gap-1 rounded border border-border px-1.5 py-0.5 text-[10px] text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            ⌘K
          </button>

          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:text-accent sm:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-0 top-12 z-20 bg-background/60 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <div
        className={`fixed inset-x-0 top-12 z-20 origin-top border-b border-border bg-background/95 backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-4xl flex-col px-6 py-2 font-mono text-sm">
          {links.map(([label, href], i) => (
            <li key={href} className="border-b border-border/60 last:border-none">
              <Link
                href={href}
                className={`block py-4 transition-colors hover:text-accent ${
                  isActive(href) ? "text-accent" : "text-foreground"
                }`}
              >
                <span className="mr-2 text-accent/70">0{i + 1}</span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

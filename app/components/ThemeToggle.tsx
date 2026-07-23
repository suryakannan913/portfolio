"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  // Null until mounted — the inline script in layout.tsx already applied
  // the resolved theme to <html> before paint, so we just read it back
  // rather than guessing and risking a mismatched icon.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // The inline script in layout.tsx resolved the theme (dark by default,
    // stored choice wins) before paint — just read it back.
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === null
          ? "Toggle theme"
          : theme === "dark"
            ? "Switch to light theme"
            : "Switch to dark theme"
      }
      className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-300 hover:text-accent"
    >
      <span className={theme === null ? "invisible" : ""}>
        {theme === "dark" ? (
          <SunIcon className="size-[18px]" />
        ) : (
          <MoonIcon className="size-[18px]" />
        )}
      </span>
    </button>
  );
}

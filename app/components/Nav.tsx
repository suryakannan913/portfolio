"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content";

const links = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Education", "/education"],
  ["Writing", "/writing"],
  ["Contact", "/contact"],
] as const;

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight transition-colors hover:text-accent"
        >
          {profile.name}
        </Link>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors hover:text-foreground ${
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-foreground"
                    : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

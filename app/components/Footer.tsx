import Link from "next/link";
import { profile } from "@/content";
import SocialLinks from "./SocialLinks";

const links = [
  ["about", "/about"],
  ["experience", "/experience"],
  ["projects", "/projects"],
  ["skills", "/skills"],
  ["education", "/education"],
  ["contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 font-mono">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="text-lg font-semibold tracking-tight">
          <span className="text-accent">~</span>/surya-kannan
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          {links.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <SocialLinks />
        <p className="text-xs text-muted">
          © {profile.name} · built with next.js + tailwind · press{" "}
          <kbd className="rounded border border-border px-1 py-0.5 text-[10px]">
            ⌘K
          </kbd>
        </p>
      </div>
    </footer>
  );
}

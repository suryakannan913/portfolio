import Link from "next/link";
import { profile } from "@/content";
import SocialLinks from "./SocialLinks";

const links = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Education", "/education"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-serif text-xl tracking-tight">
          {profile.name}
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
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
          © {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

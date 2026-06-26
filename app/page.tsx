import Link from "next/link";
import {
  profile,
  about,
  experience,
  projects,
  skills,
  education,
} from "@/content";
import Reveal from "./components/Reveal";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <main className="overflow-x-clip">
        <Hero />
        <Reveal direction="up">
          <SectionGrid />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const meta = [profile.role, ...profile.meta, profile.location].filter(Boolean);
  return (
    <section className="py-24 sm:py-32">
      <div className="hero-in">
        {profile.availability && (
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="status-dot" />
            {profile.availability}
          </div>
        )}
        <h1 className="font-serif text-6xl font-normal leading-[0.92] tracking-tight sm:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
          {profile.tagline}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-muted">
          {meta.map((m, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && <span className="text-border">/</span>}
              {m}
            </span>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/40"
          >
            Get in touch
          </Link>
          {profile.socials.resume && (
            <a
              href={profile.socials.resume}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:border-accent hover:bg-card"
            >
              View resume
            </a>
          )}
          <SocialLinks className="ml-1" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section grid — doorways to each section page                       */
/* ------------------------------------------------------------------ */

const sections = [
  {
    index: "01",
    label: "About",
    href: "/about",
    teaser: about[0].slice(0, 90) + "…",
  },
  {
    index: "02",
    label: "Experience",
    href: "/experience",
    teaser: experience.map((e) => e.company).join(" · "),
  },
  {
    index: "03",
    label: "Projects",
    href: "/projects",
    teaser: `${projects.length} projects — ${projects.map((p) => p.title.split("—")[0].trim()).join(", ")}`,
  },
  {
    index: "04",
    label: "Skills",
    href: "/skills",
    teaser: skills.flatMap((g) => g.items.slice(0, 2)).join(" · "),
  },
  {
    index: "05",
    label: "Education",
    href: "/education",
    teaser: education.map((e) => e.school).join(" · "),
  },
  {
    index: "06",
    label: "Contact",
    href: "/contact",
    teaser: `Let's connect — ${profile.email}`,
  },
];

function SectionGrid() {
  return (
    <section className="border-t border-border py-20">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        Explore
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {sections.map(({ index, label, href, teaser }) => (
          <Link
            key={href}
            href={href}
            className="group relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card/70 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-xs text-accent">{index}</span>
              <span className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                ↗
              </span>
            </div>
            <h3 className="mt-2 font-serif text-2xl tracking-tight transition-colors duration-300 group-hover:text-accent">
              {label}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm text-muted">{teaser}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 border-t border-border py-10 text-center text-sm text-muted">
      <SocialLinks />
      <p>© {profile.name}. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}

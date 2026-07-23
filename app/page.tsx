import Link from "next/link";
import {
  profile,
  about,
  experience,
  projects,
  skills,
  education,
  certifications,
} from "@/content";
import Reveal from "./components/Reveal";
import SocialLinks from "./components/SocialLinks";
import SectionCard from "./components/SectionCard";
import HeroTitle from "./components/HeroTitle";
import CountUp from "./components/CountUp";
import BackgroundPaths from "./components/BackgroundPaths";
import GitHubActivity from "./components/GitHubActivity";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <main className="overflow-x-clip">
        <Hero />
        <Reveal direction="up">
          <StatStrip />
        </Reveal>
        <GitHubActivity />
        <Reveal direction="up">
          <SectionGrid />
        </Reveal>
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero — anime.js letter entrance over KokonutUI background paths    */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative flex flex-col items-center py-28 text-center sm:py-36">
      <BackgroundPaths />
      <div className="hero-in relative flex flex-col items-center">
        <p className="text-sm font-medium tracking-wide text-muted">
          {profile.role} · Data Science @ UC Berkeley
        </p>
        <HeroTitle />
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
          {profile.tagline}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
          {profile.socials.resume && (
            <Link href="/resume" className="btn-secondary">
              View resume <span aria-hidden>→</span>
            </Link>
          )}
        </div>
        <SocialLinks className="mt-8 justify-center" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat strip — recruiter-scannable facts with anime.js count-up      */
/* ------------------------------------------------------------------ */

const skillCount = skills.reduce((n, g) => n + g.items.length, 0);

const stats = [
  { value: `${projects.length}`, label: "AI & full-stack projects" },
  { value: `${skillCount}+`, label: "technologies across the stack" },
  {
    value: `${certifications.length}`,
    label: `certifications — ${certifications.map((c) => c.issuer).join(", ")}`,
  },
];

function StatStrip() {
  return (
    <section className="border-t border-border py-16">
      <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp value={s.value} className="display text-5xl text-accent" />
            <p className="mx-auto mt-2 max-w-[16rem] text-sm text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Bento grid — Motion spring cards                                   */
/* ------------------------------------------------------------------ */

function SectionGrid() {
  return (
    <section className="border-t border-border py-20">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        Explore_
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SectionCard index="01" label="About" href="/about" wide>
          <p className="line-clamp-2">{about[0]}</p>
        </SectionCard>

        <SectionCard index="02" label="Experience" href="/experience">
          <p className="font-medium text-foreground/80">{experience[0].title}</p>
          <p className="mt-0.5 text-accent">
            {experience[0].company}
            <span className="text-muted"> · {experience[0].period}</span>
          </p>
          {experience.length > 1 && (
            <p className="mt-1.5 text-xs">
              + {experience.length - 1} more role
              {experience.length - 1 > 1 ? "s" : ""}
            </p>
          )}
        </SectionCard>

        <SectionCard index="03" label="Projects" href="/projects">
          <ul className="space-y-1">
            {projects.map((p) => (
              <li key={p.title} className="flex items-center gap-2">
                <span className="size-1 shrink-0 rounded-full bg-accent" />
                <span className="text-foreground/80">
                  {p.title.split("—")[0].trim()}
                </span>
                {p.isComingSoon && (
                  <span className="text-[10px] uppercase tracking-wide text-accent/70">
                    soon
                  </span>
                )}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard index="04" label="Skills" href="/skills">
          <ul className="flex flex-wrap gap-1.5">
            {skills
              .flatMap((g) => g.items)
              .slice(0, 8)
              .map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-background px-2.5 py-0.5 text-xs"
                >
                  {item}
                </li>
              ))}
          </ul>
        </SectionCard>

        <SectionCard index="05" label="Education" href="/education">
          {education.map((e) => (
            <p key={e.school} className="text-foreground/80">
              {e.school}
            </p>
          ))}
        </SectionCard>

        <SectionCard index="06" label="Contact" href="/contact" wide>
          <p>Open to internships and new opportunities.</p>
          <p className="mt-0.5 text-accent">{profile.email}</p>
        </SectionCard>
      </div>
    </section>
  );
}

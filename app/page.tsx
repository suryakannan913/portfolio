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
    <div className="mx-auto max-w-4xl px-6">
      <main className="overflow-x-clip">
        <Hero />
        <Reveal direction="up">
          <StatStrip />
        </Reveal>
        <Reveal direction="up">
          <SectionGrid />
        </Reveal>
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero — Apple-style centered display headline                       */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="flex flex-col items-center py-28 text-center sm:py-36">
      <div className="hero-in flex flex-col items-center">
        <p className="text-sm font-medium tracking-wide text-muted">
          {profile.role} · Data Science @ UC Berkeley
        </p>
        <h1 className="display mt-5 text-6xl sm:text-8xl">
          Hello, I&apos;m <span className="gradient-text">Surya</span>.
        </h1>
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
/*  Stat strip — bold inline metrics, pratik.ai-style                  */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "100%", label: "multi-hop query accuracy on graph RAG" },
  { value: "+40%", label: "faithfulness improvement vs. vector-only" },
  { value: "3", label: "full-stack AI projects built or in flight" },
];

function StatStrip() {
  return (
    <section className="border-t border-border py-16">
      <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="display text-5xl text-accent">{s.value}</div>
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
/*  Bento grid — borderless rounded cards on the surface color         */
/* ------------------------------------------------------------------ */

function SectionCard({
  index,
  label,
  href,
  wide = false,
  children,
}: {
  index: string;
  label: string;
  href: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-3xl bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
          ↗
        </span>
      </div>
      <h3 className="display mt-3 text-2xl transition-colors duration-300 group-hover:text-accent">
        {label}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </Link>
  );
}

function SectionGrid() {
  return (
    <section className="border-t border-border py-20">
      <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        Explore
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

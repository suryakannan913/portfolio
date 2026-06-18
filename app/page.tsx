import {
  profile,
  about,
  skills,
  projects,
  experience,
  education,
  certifications,
} from "@/content";
import Reveal from "./components/Reveal";
import SpotlightCard from "./components/SpotlightCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Reveal direction="left">
          <About />
        </Reveal>
        <Reveal direction="right">
          <Experience />
        </Reveal>
        <Reveal direction="left">
          <Projects />
        </Reveal>
        <Reveal direction="right">
          <Skills />
        </Reveal>
        <Reveal direction="left">
          <Certifications />
        </Reveal>
        <Reveal direction="right">
          <Education />
        </Reveal>
        <Reveal direction="scale">
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

function Nav() {
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-20 -mx-6 border-b border-border bg-background/70 px-6 backdrop-blur-md">
      <nav className="flex h-16 items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl tracking-tight transition-colors hover:text-accent"
        >
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-foreground">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function SocialLinks({ className = "" }: { className?: string }) {
  const items = [
    profile.socials.github && {
      href: profile.socials.github,
      label: "GitHub",
      Icon: GitHubIcon,
      external: true,
    },
    profile.socials.linkedin && {
      href: profile.socials.linkedin,
      label: "LinkedIn",
      Icon: LinkedInIcon,
      external: true,
    },
    profile.email && {
      href: `mailto:${profile.email}`,
      label: "Email",
      Icon: MailIcon,
      external: false,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    Icon: (p: { className?: string }) => React.ReactElement;
    external: boolean;
  }[];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {items.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/20"
        >
          <Icon className="size-[18px]" />
        </a>
      ))}
    </div>
  );
}

function Hero() {
  const meta = [profile.role, ...profile.meta, profile.location].filter(
    Boolean,
  );
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
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/40"
          >
            Get in touch
          </a>
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

function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-20">
      <SectionHeading index="01">About</SectionHeading>
      <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
        {about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-20"
    >
      <SectionHeading index="02">Experience</SectionHeading>
      <div>
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.period}`}
            className="index-row border-b border-border py-7"
          >
            <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
                {job.title}
              </h3>
              <span className="shrink-0 text-sm text-muted">{job.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-accent">
              {job.company}
              {job.location ? (
                <span className="text-muted"> · {job.location}</span>
              ) : null}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground/80">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border py-20">
      <SectionHeading index="03">Projects</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <SpotlightCard
            key={project.title}
            className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
          >
            <h3 className="font-serif text-xl tracking-tight transition-colors group-hover/sc:text-accent">
              {project.title}
            </h3>
            {project.period && (
              <p className="mt-1 text-xs text-muted">{project.period}</p>
            )}
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded bg-background px-2 py-0.5 text-xs text-muted"
                >
                  {t}
                </li>
              ))}
            </ul>
            {(project.liveUrl || project.repoUrl) && (
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live demo →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground"
                  >
                    Code
                  </a>
                )}
              </div>
            )}
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border py-20">
      <SectionHeading index="04">Skills</SectionHeading>
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-medium text-muted">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="pill rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm backdrop-blur-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="scroll-mt-20 border-t border-border py-20">
      <SectionHeading index="05">Certifications</SectionHeading>
      <div className="space-y-5">
        {certifications.map((cert) => (
          <SpotlightCard
            key={`${cert.issuer}-${cert.name}`}
            className="rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-serif text-xl tracking-tight transition-colors group-hover/sc:text-accent">
                <span className="text-accent">{cert.issuer}</span>{" "}
                <span className="text-foreground/50">·</span> {cert.name}
              </h3>
              <span className="text-sm text-muted">{cert.date}</span>
            </div>

            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                ★ {cert.metric}
              </span>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-foreground/80">
              {cert.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {cert.skills.map((s) => (
                <li
                  key={s}
                  className="rounded bg-background px-2 py-0.5 text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-border py-20">
      <SectionHeading index="06">Education</SectionHeading>
      <div>
        {education.map((edu) => (
          <div
            key={edu.school}
            className="index-row border-b border-border py-7 sm:flex sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <h3 className="font-serif text-2xl tracking-tight">
                {edu.school}
              </h3>
              <p className="mt-1 text-sm text-foreground/80">
                {edu.credential}
              </p>
              {edu.location && (
                <p className="text-sm text-muted">{edu.location}</p>
              )}
            </div>
            <p className="mt-1 shrink-0 text-sm text-muted sm:mt-0">
              {edu.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24">
      <SectionHeading index="07">Get in touch</SectionHeading>
      <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
        I'm open to internships and new opportunities. The best way to reach me
        is by email — I'd love to hear from you.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 inline-flex items-center gap-3 break-all font-serif text-3xl tracking-tight sm:text-5xl"
      >
        <span className="gradient-text">{profile.email}</span>
        <ArrowUpRight className="size-7 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-9" />
      </a>
      <SocialLinks className="mt-10" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 border-t border-border py-10 text-center text-sm text-muted">
      <SocialLinks />
      <p>© {profile.name}. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}

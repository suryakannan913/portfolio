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
          className="font-semibold tracking-tight transition-colors hover:text-accent"
        >
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <p className="mb-3 text-sm font-medium text-accent">Hi, I'm</p>
      <h1 className="gradient-text text-5xl font-bold tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-xl text-muted sm:text-2xl">{profile.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/40"
        >
          Get in touch
        </a>
        {profile.socials.resume && (
          <a
            href={profile.socials.resume}
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-[1.03] hover:border-accent hover:bg-card"
          >
            View resume
          </a>
        )}
      </div>
      <div className="mt-6 flex gap-4 text-sm text-muted">
        {profile.socials.github && (
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        )}
        {profile.socials.linkedin && (
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl font-bold tracking-tight">
      <span className="gradient-text">{children}</span>
    </h2>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16">
      <SectionHeading>About</SectionHeading>
      <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
        {about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        {profile.location && (
          <p className="text-base text-muted">📍 {profile.location}</p>
        )}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-16"
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="sm:flex sm:gap-8">
            <p className="mb-2 shrink-0 text-sm text-muted sm:w-36 sm:pt-0.5">
              {job.period}
            </p>
            <div>
              <h3 className="font-semibold">
                {job.title}{" "}
                <span className="font-normal text-muted">· {job.company}</span>
              </h3>
              {job.location && (
                <p className="text-sm text-muted">{job.location}</p>
              )}
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/80">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border py-16"
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <SpotlightCard
            key={project.title}
            className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
          >
            <h3 className="text-lg font-semibold transition-colors group-hover/sc:text-accent">
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
    <section id="skills" className="scroll-mt-20 border-t border-border py-16">
      <SectionHeading>Skills</SectionHeading>
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
                  className="pill rounded-md border border-border bg-card/80 px-3 py-1.5 text-sm backdrop-blur-sm"
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
    <section className="scroll-mt-20 border-t border-border py-16">
      <SectionHeading>Certifications</SectionHeading>
      <div className="space-y-5">
        {certifications.map((cert) => (
          <SpotlightCard
            key={`${cert.issuer}-${cert.name}`}
            className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold transition-colors group-hover/sc:text-accent">
                <span className="text-accent">{cert.issuer}</span>{" "}
                <span className="font-normal text-foreground/60">·</span>{" "}
                {cert.name}
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
    <section
      id="education"
      className="scroll-mt-20 border-t border-border py-16"
    >
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="sm:flex sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-sm text-foreground/80">{edu.credential}</p>
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
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border py-16"
    >
      <SectionHeading>Get in touch</SectionHeading>
      <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
        I'm open to internships and new opportunities. The best way to reach me
        is by email — I'd love to hear from you.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/40"
      >
        {profile.email}
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      <p>© {profile.name}. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}

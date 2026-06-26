import { education, certifications, pageIntros } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

export const metadata = { title: "Education — Surya Kannan" };

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="right">
        <section className="py-20">
          <SectionHeading index="05">Education</SectionHeading>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {pageIntros.education}
          </p>
          <div className="mb-16">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="index-row border-b border-border py-7 sm:flex sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div>
                  <h3 className="font-serif text-2xl tracking-tight">{edu.school}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{edu.credential}</p>
                  {edu.location && <p className="text-sm text-muted">{edu.location}</p>}
                </div>
                <p className="mt-1 shrink-0 text-sm text-muted sm:mt-0">{edu.period}</p>
              </div>
            ))}
          </div>

          <SectionHeading index="05b">Certifications</SectionHeading>
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
                    <li key={s} className="rounded bg-background px-2 py-0.5 text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}

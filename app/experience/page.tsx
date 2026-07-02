import { experience, pageIntros } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Experience — Surya Kannan",
  description:
    "Surya Kannan's experience — Global Technology Intern at Albertsons, plus teaching and leadership roles spanning engineering and mentorship.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="right">
        <section className="py-20">
          <SectionHeading index="02">Experience</SectionHeading>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {pageIntros.experience}
          </p>
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
      </Reveal>
    </main>
  );
}

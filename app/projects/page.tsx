import Link from "next/link";
import { projects, pageIntros } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SpotlightCard from "../components/SpotlightCard";

export const metadata = {
  title: "Projects — Surya Kannan",
  description:
    "Projects by Surya Kannan — a hybrid RAG system pairing a knowledge graph with vector search, an AI study tutor, and a browser-based strategy game engine.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="left">
        <section className="py-20">
          <SectionHeading index="03">Projects</SectionHeading>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {pageIntros.projects}
          </p>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <SpotlightCard
                key={project.slug}
                className="rounded-3xl bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40 sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {project.isComingSoon && (
                      <span className="mb-3 inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        Coming Soon
                      </span>
                    )}
                    <h3 className="display text-2xl">{project.title}</h3>
                    {project.period && (
                      <p className="mt-0.5 text-xs text-muted">{project.period}</p>
                    )}
                  </div>
                  <span className="font-mono text-sm text-muted/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-background px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
                  {project.caseStudy && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-accent hover:underline"
                    >
                      Read case study →
                    </Link>
                  )}
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
                      className="text-muted transition-colors hover:text-foreground"
                    >
                      Code
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}

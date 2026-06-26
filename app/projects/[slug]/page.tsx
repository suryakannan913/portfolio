import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content";
import Reveal from "../../components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Surya Kannan` : "Project" };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="up">
        <article className="py-20">
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.isComingSoon && (
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                Coming Soon
              </span>
            )}
            <span className="text-sm text-muted">{project.period}</span>
          </div>

          <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded bg-card px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </li>
            ))}
          </ul>

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-5 flex gap-4 text-sm font-medium">
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
                  View code
                </a>
              )}
            </div>
          )}

          {cs ? (
            <>
              <p className="mt-10 border-l-2 border-accent/40 pl-5 text-lg leading-relaxed text-foreground/80">
                {cs.overview}
              </p>

              {cs.metrics && cs.metrics.length > 0 && (
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur-sm"
                    >
                      <div className="font-serif text-3xl text-accent">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-12 space-y-10">
                {cs.sections.map((s) => (
                  <section key={s.heading}>
                    <h2 className="font-serif text-2xl tracking-tight">
                      {s.heading}
                    </h2>
                    <div className="mt-3 space-y-4 text-base leading-relaxed text-foreground/80">
                      {s.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </>
          ) : (
            <p className="mt-10 text-lg leading-relaxed text-foreground/80">
              {project.description}
            </p>
          )}
        </article>
      </Reveal>
    </main>
  );
}

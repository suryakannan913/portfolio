import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content";
import Reveal from "../../components/Reveal";
import ReadingProgress from "../../components/ReadingProgress";
import BackToTop from "../../components/BackToTop";
import ImageSlot from "../../components/ImageSlot";

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
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Surya Kannan`,
    description: project.caseStudy?.overview ?? project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Surya Kannan`,
      description: project.caseStudy?.overview ?? project.description,
      type: "article",
    },
  };
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
      {cs && <ReadingProgress />}
      {cs && <BackToTop />}
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

          <h1 className="display mt-3 text-4xl sm:text-5xl">
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

          <ImageSlot
            src={project.image}
            alt={`${project.title} screenshot`}
            label={`${project.slug}-cover.png`}
            className="mt-8 aspect-video w-full"
          />

          {project.demoUrl && (
            <section className="mt-10">
              <h2 className="display text-2xl">
                Live demo<span className="text-accent">_</span>
              </h2>
              <p className="mt-2 text-sm text-muted">
                Playable build embedded below —{" "}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  open full screen →
                </a>
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card/50">
                <iframe
                  src={project.demoUrl}
                  title={`${project.title} live demo`}
                  className="aspect-video w-full"
                  loading="lazy"
                  allow="fullscreen"
                />
              </div>
            </section>
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
                      className="rounded-xl border border-border bg-card/50 p-6 text-center"
                    >
                      <div className="display text-4xl text-accent">
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
                    <h2 className="display text-2xl">
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

              {cs.images && cs.images.length > 0 && (
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {cs.images.map((img) => (
                    <ImageSlot
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      label="screenshot"
                      className="aspect-video w-full"
                      sizes="(max-width: 768px) 100vw, 384px"
                    />
                  ))}
                </div>
              )}
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

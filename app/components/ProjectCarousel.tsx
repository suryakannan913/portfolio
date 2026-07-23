"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  isComingSoon?: boolean;
  caseStudy?: unknown;
};

export default function ProjectCarousel({ items }: { items: Project[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="relative">
      {/* Slide track */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((project, i) => (
            <div key={i} className="w-full min-w-full">
              <SpotlightCard className="flex min-h-72 flex-col rounded-3xl bg-card p-8 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {project.isComingSoon && (
                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        Coming Soon
                      </span>
                    )}
                    <h3 className="display text-2xl">{project.title}</h3>
                    {project.period && (
                      <p className="mt-0.5 text-xs text-muted">{project.period}</p>
                    )}
                  </div>
                  <span className="font-mono text-sm text-muted/60">
                    {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <li key={t} className="rounded bg-background px-2 py-0.5 text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium">
                  {Boolean(project.caseStudy) && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-accent hover:underline"
                    >
                      Read case study →
                    </Link>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      Live demo →
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
                      Code
                    </a>
                  )}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:border-accent hover:text-accent"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

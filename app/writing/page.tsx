import Link from "next/link";
import { posts } from "@/writing";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export const metadata = { title: "Writing — Surya Kannan" };

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="left">
        <section className="py-20">
          <SectionHeading index="06">Writing</SectionHeading>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Notes on what I&apos;m building and learning — mostly about
            retrieval, LLMs, and the engineering around them.
          </p>

          <div>
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="index-row block border-b border-border py-7"
              >
                <div className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl tracking-tight transition-colors hover:text-accent sm:text-3xl">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-sm text-muted">
                    {formatDate(post.date)}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/80">
                  {post.summary}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                  <span>{post.readingTime}</span>
                  {post.tags.map((t) => (
                    <span key={t} className="text-accent/70">
                      #{t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}

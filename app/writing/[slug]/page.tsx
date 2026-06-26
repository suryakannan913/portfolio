import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, type Block } from "@/writing";
import Reveal from "../../components/Reveal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Surya Kannan` : "Writing" };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 font-serif text-2xl tracking-tight">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-2 text-foreground/80">
              <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-border bg-card"
        >
          {block.lang && (
            <div className="border-b border-border px-4 py-1.5 font-mono text-xs text-muted">
              {block.lang}
            </div>
          )}
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="font-mono">{block.code}</code>
          </pre>
        </div>
      );
    default:
      return (
        <p key={i} className="leading-relaxed text-foreground/80">
          {block.text}
        </p>
      );
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="up">
        <article className="py-20">
          <Link
            href="/writing"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            ← All writing
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            <span>{formatDate(post.date)}</span>
            <span className="text-border">/</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="mt-3 font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <li
                key={t}
                className="rounded bg-card px-2.5 py-1 text-xs text-muted"
              >
                #{t}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4 text-base">
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>
        </article>
      </Reveal>
    </main>
  );
}

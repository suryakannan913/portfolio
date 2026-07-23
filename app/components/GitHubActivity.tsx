"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Contribution = { date: string; count: number };
type ApiResponse = { contributions: Contribution[] };

const USERNAME = "suryakannan913";
const WEEKS = 26;

/**
 * bklit-inspired mini data-viz: weekly GitHub contributions for the last
 * ~6 months as animated bars. Fetches public data client-side (no token);
 * renders nothing if the API is unreachable, so the page never breaks on it.
 */
export default function GitHubActivity() {
  const [weeks, setWeeks] = useState<number[] | null>(null);
  const [total, setTotal] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((r) => (r.ok ? (r.json() as Promise<ApiResponse>) : null))
      .then((data) => {
        if (cancelled || !data?.contributions?.length) return;
        const days = data.contributions.slice(-WEEKS * 7);
        const sums: number[] = [];
        for (let i = 0; i < days.length; i += 7) {
          sums.push(days.slice(i, i + 7).reduce((n, d) => n + d.count, 0));
        }
        setWeeks(sums);
        setTotal(days.reduce((n, d) => n + d.count, 0));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!weeks) return null;

  const max = Math.max(...weeks, 1);

  return (
    <section className="border-t border-border py-16">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          GitHub activity_
        </p>
        <p className="text-sm text-muted">
          <span className="font-semibold text-foreground">{total}</span>{" "}
          contributions in the last 6 months ·{" "}
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            @{USERNAME}
          </a>
        </p>
      </div>

      <div className="mt-6 rounded-3xl bg-card p-6 sm:p-8">
        <div
          className="flex h-28 items-end gap-1.5 sm:gap-2"
          role="img"
          aria-label={`${total} GitHub contributions in the last six months, shown as weekly bars`}
        >
          {weeks.map((count, i) => (
            <motion.div
              key={i}
              className="min-h-[3px] flex-1 rounded-full bg-gradient-to-t from-accent to-accent-2"
              style={{ originY: 1 }}
              initial={reduce ? false : { scaleY: 0, opacity: 0.3 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 16,
                delay: i * 0.03,
              }}
            >
              <div
                style={{ height: `${Math.max((count / max) * 112, 3)}px` }}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
          <span>6 months ago</span>
          <span>now</span>
        </div>
      </div>
    </section>
  );
}

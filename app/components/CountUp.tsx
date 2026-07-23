"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

/**
 * Animates a stat value ("21+", "3", "100%") counting up from zero when it
 * scrolls into view, using anime.js. Non-numeric prefix/suffix are preserved.
 */
export default function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }
    const [, prefix, num, suffix] = match;
    const target = parseInt(num, 10);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const counter = { n: 0 };
        animate(counter, {
          n: target,
          duration: 1400,
          ease: "outExpo",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
          },
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}

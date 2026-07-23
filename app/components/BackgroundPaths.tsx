"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * KokonutUI-style animated background paths: thin flowing lines that draw
 * themselves and drift behind the hero. Pure SVG + Motion, accent-tinted,
 * subtle enough to sit under text.
 */
export default function BackgroundPaths() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const paths = Array.from({ length: 14 }, (_, i) => {
    const y = 60 + i * 26;
    const drift = (i % 2 === 0 ? 1 : -1) * (18 + i * 2);
    return {
      d: `M -80 ${y + 40} C 240 ${y + drift}, 480 ${y - drift}, 800 ${y + drift / 2} S 1200 ${y + 30}, 1560 ${y - 20}`,
      width: 0.6 + (i % 3) * 0.3,
      delay: i * 0.18,
      duration: 9 + (i % 5) * 2,
    };
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full text-accent"
        viewBox="0 0 1440 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.width}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1],
              opacity: [0, 0.14, 0],
              pathOffset: [0, 0, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
      {/* Fade the lines out toward the bottom so the stat strip stays clean */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

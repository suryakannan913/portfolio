"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

const LINE = "~/berkeley $ whoami";

/**
 * justin-kang-style terminal prompt, typed out with anime.js and finished
 * with a blinking block cursor. Falls back to static text without JS or
 * under reduced motion.
 */
export default function TerminalPrompt() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = LINE;
      return;
    }
    const progress = { chars: 0 };
    el.textContent = "";
    animate(progress, {
      chars: LINE.length,
      duration: 1100,
      ease: "linear",
      delay: 200,
      onUpdate: () => {
        el.textContent = LINE.slice(0, Math.round(progress.chars));
      },
    });
  }, []);

  return (
    <p className="font-mono text-sm text-muted">
      {/* Server-rendered full line = SEO/no-JS safe; the effect retypes it. */}
      <span ref={ref}>{LINE}</span>
      <span className="cursor-blink" aria-hidden />
    </p>
  );
}

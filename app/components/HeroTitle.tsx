"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

/**
 * "Hello, I'm Surya." with an anime.js staggered letter-rise entrance.
 * Letters are server-rendered (SEO-safe) with opacity 0 and lifted to 1 by
 * the animation; a <noscript> rule keeps them visible without JS.
 */
export default function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = el.querySelectorAll<HTMLElement>("[data-letter]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      letters.forEach((l) => (l.style.opacity = "1"));
      return;
    }
    animate(letters, {
      opacity: [0, 1],
      translateY: [26, 0],
      rotateZ: [4, 0],
      duration: 900,
      delay: stagger(28, { start: 150 }),
      ease: "outElastic(1, .8)",
    });
  }, []);

  const plain = "Hello, I'm ";

  return (
    <>
      <noscript>
        <style>{`[data-letter]{opacity:1 !important}`}</style>
      </noscript>
      <h1 ref={ref} className="display mt-5 text-6xl sm:text-8xl" aria-label="Hello, I'm Surya.">
        <span aria-hidden className="inline-block">
          {plain.split("").map((ch, i) =>
            ch === " " ? (
              <span key={i}> </span>
            ) : (
              <span
                key={i}
                data-letter
                className="inline-block will-change-transform"
                style={{ opacity: 0 }}
              >
                {ch}
              </span>
            ),
          )}
          <span
            data-letter
            className="gradient-text inline-block will-change-transform"
            style={{ opacity: 0 }}
          >
            Surya
          </span>
          <span data-letter className="inline-block" style={{ opacity: 0 }}>
            .
          </span>
        </span>
      </h1>
    </>
  );
}

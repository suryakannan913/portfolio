"use client";

import { useRef } from "react";

/**
 * A card whose interior lights up with a soft glow that follows the cursor.
 * Tracks pointer position relative to the card and exposes it as --cx/--cy
 * for the .sc-glow layer (see globals.css).
 */
export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--cy", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group/sc relative overflow-hidden ${className}`}
    >
      <div className="sc-glow" aria-hidden="true" />
      <div className="sc-border" aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}

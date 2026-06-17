"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed, full-screen decorative background:
 *  - an accent "spotlight" glow that follows the cursor
 *  - a grid that only illuminates near the cursor
 *  - two slowly drifting color blobs
 * Pointer tracking is throttled with requestAnimationFrame.
 */
export default function InteractiveBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="bg-fx" aria-hidden="true">
      <div className="bg-fx-grid" />
      <div className="bg-fx-blob bg-fx-blob-1" />
      <div className="bg-fx-blob bg-fx-blob-2" />
      <div className="bg-fx-glow" />
    </div>
  );
}

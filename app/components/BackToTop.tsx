"use client";
import { useCallback, useEffect, useState } from "react";

export default function BackToTop({ threshold = 480 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    function update() {
      setVisible(window.scrollY > threshold);
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-8 right-6 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:right-10 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

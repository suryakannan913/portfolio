"use client";

import { motion, useReducedMotion } from "motion/react";

type Direction = "up" | "left" | "right" | "scale";

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 36 },
  left: { x: -56 },
  right: { x: 56 },
  scale: { scale: 0.94 },
};

/**
 * Animates its children into view on scroll with spring physics (Motion).
 * `direction` controls where they travel in from. `delay` is in ms to stay
 * compatible with the previous CSS implementation. Respects reduced motion.
 */
export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 18,
        mass: 0.9,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}

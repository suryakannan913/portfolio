"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

/**
 * Bento grid card with Motion spring hover-lift and press feedback.
 * Server pages pass the preview content in as children.
 */
export default function SectionCard({
  index,
  label,
  href,
  wide = false,
  children,
}: {
  index: string;
  label: string;
  href: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={wide ? "sm:col-span-2" : ""}
      whileHover={reduce ? undefined : { y: -5, scale: 1.012 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col rounded-3xl bg-card p-8 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40"
      >
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-xs text-accent">{index}</span>
          <span className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
            ↗
          </span>
        </div>
        <h3 className="display mt-3 text-2xl transition-colors duration-300 group-hover:text-accent">
          {label}
        </h3>
        <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
      </Link>
    </motion.div>
  );
}

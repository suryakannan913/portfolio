import type { Experience } from "./types";

// Work history, newest first. The first entry is previewed on the home grid.

export const experience: Experience[] = [
  {
    company: "Albertsons",
    title: "Global Technology Intern — Full-Stack Engineering",
    period: "Jun 2026 — Present",
    location: "Pleasanton, CA", // TODO: VERIFY location (remote/hybrid?)
    bullets: [
      "Building an end-to-end analytics manager that gives stakeholders visibility into product usage, as part of a broader end-to-end instrumentation ecosystem.",
      "Developing the frontend with React, TypeScript, Vite, and Node.js.",
    ],
  },
  {
    company: "The Coderschool",
    title: "Python Tutor & Mentor",
    period: "Feb 2025 – Jun 2025",
    location: "Cupertino, CA",
    bullets: [
      // TODO: VERIFY / refine — resume had no bullets for this role.
      "Taught Python fundamentals and project-based coding to students, breaking down complex concepts into approachable lessons.",
    ],
  },
  {
    company: "Momentum Tennis",
    title: "Lead Junior Coach",
    period: "Mar 2024 – Aug 2025",
    location: "Cupertino, CA",
    bullets: [
      // TODO: VERIFY / refine — resume had no bullets for this role.
      "Led junior training sessions, coordinated drills, and mentored younger players.",
    ],
  },
];

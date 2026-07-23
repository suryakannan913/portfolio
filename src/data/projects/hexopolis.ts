import type { Project } from "../types";

export const hexopolis: Project = {
  slug: "hexopolis",
  title: "Hexopolis",
  period: "Coming 2026",
  description:
    "Browser-based strategy game built on hexagonal tile mechanics — resource management, settlement building, and turn-based play. Features a game AI opponent using heuristic board evaluation and planned real-time multiplayer via WebSockets.",
  tech: ["Next.js", "Canvas API", "FastAPI", "Python", "PostgreSQL", "Zustand"],
  liveUrl: "",
  repoUrl: "",
  image: "", // e.g. "/images/projects/hexopolis-cover.png"
  // Playable demo embed — set NEXT_PUBLIC_HEXOPOLIS_URL in .env.local
  // (e.g. http://localhost:3001) or in Vercel env settings once deployed.
  demoUrl: process.env.NEXT_PUBLIC_HEXOPOLIS_URL ?? "",
  isComingSoon: true,
  caseStudy: {
    overview:
      "A from-scratch take on the hex-and-resource strategy genre, built to stretch a different set of muscles than my AI work: game-state modeling, a rules engine, board rendering on Canvas, and an AI opponent that has to reason about a board rather than retrieve from one.",
    sections: [
      {
        heading: "Why build a game",
        body: [
          "AI projects show I can work with data and models. A game shows something different — that I can model complex, stateful systems with a lot of interacting rules and keep them correct. A turn-based strategy game is a clean way to demonstrate that without the networking complexity of a real-time title.",
        ],
      },
      {
        heading: "What it involves",
        body: [
          "The core is a game engine: a hexagonal board graph, resource production tied to dice rolls, settlement and road placement with adjacency rules, and a turn state machine. On top of that sits an AI opponent that evaluates board positions heuristically to decide its moves.",
          "The frontend renders the board with the Canvas API and manages client state with Zustand; a FastAPI backend holds authoritative game state, with real-time multiplayer over WebSockets planned for a later phase.",
        ],
      },
      {
        heading: "Status",
        body: [
          "In active development — the engine and rules come first, because the game has to be correct before it can be pretty or multiplayer.",
        ],
      },
    ],
    // images: [{ src: "/images/projects/hexopolis-board.png", alt: "Hex board mid-game" }],
  },
};

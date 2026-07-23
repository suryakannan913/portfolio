import type { SkillGroup } from "./types";

// Grouped skills shown on /skills and previewed on the home grid.
// Add new items to an existing group, or add a whole new group —
// both render automatically.

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "JavaScript", "Java", "C/C++"],
  },
  {
    category: "Data Platforms",
    items: ["Google Cloud (GCP)", "BigQuery", "Neo4j", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Frameworks & Tools",
    items: ["FastAPI", "Flask", "Docker", "Git", "FAISS"],
  },
  {
    category: "Concepts",
    items: [
      "Multi-agent AI",
      "RAG",
      "ETL Pipelines",
      "Data Observability",
      "Data Quality",
      "SDLC",
    ],
  },
];

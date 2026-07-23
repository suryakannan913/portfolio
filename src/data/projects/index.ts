import type { Project } from "../types";
import { courseRecommendationRag } from "./course-recommendation-rag";
import { aiStudyBuddy } from "./ai-study-buddy";
import { hexopolis } from "./hexopolis";

// To add a project:
//   1. Copy an existing file in this folder (e.g. hexopolis.ts) and edit it.
//   2. Import it above and add it to this array.
// The array order is the display order everywhere on the site.

export const projects: Project[] = [
  courseRecommendationRag,
  aiStudyBuddy,
  hexopolis,
];

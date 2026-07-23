import type { Project } from "../types";

export const aiStudyBuddy: Project = {
  slug: "ai-study-buddy",
  title: "AI Study Buddy",
  period: "Jun 2026 – Present",
  description:
    "Full-stack RAG-powered tutor app — upload your course PDFs and ask questions answered from your own notes, not generic LLM knowledge. Built a complete pipeline from PDF extraction and chunking through vector embedding and semantic retrieval, all wired into a conversational interface.",
  tech: ["Next.js", "FastAPI", "Python", "Groq", "Qdrant", "PostgreSQL"],
  liveUrl: "",
  repoUrl: "https://github.com/suryakannan913/ai-study-buddy",
  image: "", // e.g. "/images/projects/study-buddy-cover.png"
  isComingSoon: true,
  caseStudy: {
    overview:
      "A study tool that tutors you from your own material. Most AI chatbots answer from general knowledge — useful, but they don't know what's in your professor's slides. AI Study Buddy lets a student upload their PDFs and get patient, conversational explanations grounded in those specific notes, using a retrieval-augmented generation pipeline I built end to end.",
    sections: [
      {
        heading: "The idea",
        body: [
          "Generic LLM tutoring has a grounding problem: it can explain a concept, but not your concept the way your course frames it. The fix is RAG — retrieve the relevant passages from the student's own materials and hand them to the model as context, so answers stay anchored to the source.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "When a student uploads a PDF, the backend extracts the text, splits it into overlapping ~500-token chunks, and embeds each chunk locally with a fastembed model. Those vectors live in Qdrant. On a question, the query gets embedded the same way, Qdrant returns the closest passages, and they're injected into the prompt before it reaches the LLM (Llama 3.3 70B via Groq).",
          "The stack is a FastAPI backend, a Next.js chat frontend, and Postgres for conversation history. Embeddings run locally rather than through an API, which keeps the pipeline free to run and avoids shipping student material to a third-party embedding service.",
        ],
      },
      {
        heading: "Status",
        body: [
          "The core chat and the full RAG pipeline (upload → chunk → embed → retrieve → answer) are built and working. A live demo is coming once auth and the progress dashboard land and it's deployed.",
        ],
      },
    ],
    // images: [{ src: "/images/projects/study-buddy-chat.png", alt: "Chat interface" }],
  },
};

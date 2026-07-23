import type { Project } from "../types";

export const courseRecommendationRag: Project = {
  slug: "course-recommendation-rag",
  title: "Course Recommendation — Hybrid RAG System",
  period: "Jan 2026 – Apr 2026",
  description:
    "Engineered a hybrid retrieval system pairing a Neo4j knowledge graph with FAISS vector search to compare retrieval accuracy on complex datasets. Hit 100% accuracy on multi-hop logical queries (where standard vector RAG failed) and boosted faithfulness scores by 40% by using graph structure to eliminate GPT-4o hallucinations.",
  tech: ["Python", "Neo4j", "Cypher", "FAISS", "OpenAI API", "Flask"],
  liveUrl: "",
  repoUrl: "",
  image: "", // e.g. "/images/projects/course-rag-cover.png"
  caseStudy: {
    overview:
      "A course recommender that can answer the questions students actually ask — not just 'find me something similar,' but 'what should I take next that builds on what I've already done and fits my schedule?' Standard vector RAG falls apart on that kind of multi-step reasoning. I built a hybrid system that routes those queries through a knowledge graph instead, and measured the difference.",
    metrics: [
      { label: "Multi-hop query accuracy", value: "100%" },
      { label: "Faithfulness improvement", value: "+40%" },
      { label: "Retrieval strategies compared", value: "2" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Vector search is great at semantic similarity — give it a query and it finds chunks that talk about the same thing. But course recommendation isn't really a similarity problem. The interesting questions are relational: which courses list this one as a prerequisite, what builds on a topic I've already covered, what's offered in a term I can actually take it.",
          "When I tested a standard vector RAG pipeline on these multi-hop logical queries, it consistently retrieved topically-related-but-wrong chunks and the LLM confidently hallucinated prerequisites that didn't exist. The retrieval layer simply couldn't traverse relationships.",
        ],
      },
      {
        heading: "The approach",
        body: [
          "I modeled the course catalog as a Neo4j knowledge graph — courses, topics, prerequisites, and terms as nodes, with the relationships between them as typed edges. Relational queries get answered by traversing the graph with Cypher; open-ended semantic queries still go to FAISS vector search.",
          "Both retrieval paths feed their context into GPT-4o, so the model generates from grounded, structurally-correct information instead of guessing at relationships. Building both pipelines side by side let me measure exactly where each one wins.",
        ],
      },
      {
        heading: "The results",
        body: [
          "On multi-hop logical queries — the ones standard vector RAG got wrong — the graph-backed system hit 100% accuracy, because prerequisite chains are explicit edges rather than something the model has to infer. Grounding answers in graph structure also raised faithfulness scores by 40% by eliminating the hallucinated relationships.",
          "The bigger takeaway: retrieval strategy should match the shape of the question. Semantic similarity and relational traversal are different tools, and a hybrid system gets to use the right one per query.",
        ],
      },
    ],
    // images: [{ src: "/images/projects/course-rag-graph.png", alt: "Knowledge graph schema" }],
  },
};

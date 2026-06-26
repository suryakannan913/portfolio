// ============================================================================
//  WRITING / BLOG CONTENT
//
//  ⚠️  DRAFTS: these posts were drafted to seed the section, grounded in your
//      real projects. Read them, edit the voice to sound like you, and verify
//      every claim before sharing — they go out under your name.
//
//  Each post body is an array of blocks. Block types:
//    { type: "p",  text }           paragraph
//    { type: "h2", text }           section heading
//    { type: "ul", items: [] }      bullet list
//    { type: "code", lang?, code }  code block
// ============================================================================

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang?: string; code: string };

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO, e.g. "2026-05-01"
  readingTime: string;
  summary: string;
  tags: string[];
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "knowledge-graph-vs-vector-rag",
    title: "Why I Paired a Knowledge Graph with Vector Search for RAG",
    date: "2026-04-20",
    readingTime: "5 min read",
    summary:
      "Vector RAG is great at 'find me something similar' and bad at 'what builds on what I've already done.' Here's why, and what a knowledge graph fixes.",
    tags: ["RAG", "Neo4j", "Retrieval", "LLMs"],
    body: [
      {
        type: "p",
        text: "I spent a semester building a course recommender, and the most useful thing it taught me had nothing to do with courses. It was this: most of the time, when retrieval-augmented generation gives a wrong answer, the problem isn't the model — it's that you asked the wrong index a question it can't answer.",
      },
      {
        type: "h2",
        text: "Vector search answers 'similar to,' not 'related to'",
      },
      {
        type: "p",
        text: "Vector RAG works by embedding your documents and your query into the same space and pulling back the nearest chunks. That's a similarity operation, and it's genuinely good at it. Ask 'what's this course about' and you'll get relevant passages.",
      },
      {
        type: "p",
        text: "But the questions students actually ask are relational, not semantic: 'what should I take next that builds on this,' 'what lists this as a prerequisite,' 'what's offered in spring that I'm eligible for.' Those require traversing relationships between entities. Cosine similarity has no notion of a prerequisite chain, so the retriever pulls back chunks that mention the right topics — and the LLM, handed topically-relevant-but-structurally-wrong context, confidently invents prerequisites that don't exist.",
      },
      {
        type: "h2",
        text: "Knowledge graphs make relationships first-class",
      },
      {
        type: "p",
        text: "So I modeled the catalog as a graph instead: courses, topics, prerequisites, and terms as nodes, with the relationships between them as explicit, typed edges. Now a multi-hop question becomes a traversal — a Cypher query that walks the prerequisite edges — rather than something the model has to infer from prose.",
      },
      {
        type: "code",
        lang: "cypher",
        code: `// "What can I take next that builds on what I've finished?"
MATCH (done:Course)-[:UNLOCKS]->(next:Course)
WHERE done.code IN $completed
  AND next.term IN $terms
  AND NOT EXISTS {
    MATCH (req:Course)-[:UNLOCKS]->(next)
    WHERE NOT req.code IN $completed
  }
RETURN next.code, next.title
ORDER BY next.code`,
      },
      {
        type: "p",
        text: "That's the whole multi-hop question expressed declaratively: courses unlocked by ones I've passed, offered when I can take them, with every prerequisite already satisfied. No inference required — the relationships are in the data, so the model can't hallucinate a prerequisite that doesn't exist.",
      },
      {
        type: "p",
        text: "The hybrid part matters: I didn't throw out vector search. Open-ended semantic questions still go to FAISS; relational ones go to the graph. Both feed their context to the LLM. The retrieval strategy gets matched to the shape of the question.",
      },
      {
        type: "code",
        lang: "python",
        code: `def retrieve(query: str) -> list[str]:
    # Relational questions hit the graph; everything else hits vectors.
    if is_relational(query):
        return graph_search(query)   # Cypher traversal over Neo4j
    return vector_search(query)      # FAISS nearest-neighbor`,
      },
      {
        type: "h2",
        text: "The numbers",
      },
      {
        type: "p",
        text: "On the multi-hop logical queries that standard vector RAG got wrong, the graph-backed path hit 100% accuracy, because the relationships were explicit edges instead of inferences. Grounding answers in that structure also raised faithfulness by 40% by cutting the hallucinated prerequisites entirely.",
      },
      {
        type: "h2",
        text: "The takeaway",
      },
      {
        type: "p",
        text: "If your RAG system feels unreliable on questions that involve how things connect — prerequisites, hierarchies, dependencies, timelines — it might not be a prompting problem or a model problem. It might be that you're asking a similarity index to do relational reasoning. A graph is a different tool, and sometimes it's the right one.",
      },
    ],
  },
  {
    slug: "grounding-an-ai-tutor",
    title: "Grounding an AI Tutor in Your Own Notes",
    date: "2026-06-22",
    readingTime: "4 min read",
    summary:
      "Notes on building the RAG pipeline behind AI Study Buddy — and why I run embeddings locally instead of through an API.",
    tags: ["RAG", "FastAPI", "Embeddings", "LLMs"],
    body: [
      {
        type: "p",
        text: "A general-purpose chatbot can explain photosynthesis. What it can't do is explain it the way your professor framed it, using the terms from your slides, weighted toward what's actually on the exam. That gap — between general knowledge and your knowledge — is the whole reason I built AI Study Buddy on retrieval-augmented generation.",
      },
      {
        type: "h2",
        text: "The pipeline",
      },
      {
        type: "p",
        text: "When a student uploads a PDF, the backend walks it through a fairly standard RAG pipeline:",
      },
      {
        type: "ul",
        items: [
          "Extract the text from the PDF.",
          "Split it into overlapping chunks of roughly 500 tokens, so a passage isn't cut off mid-thought.",
          "Embed each chunk into a vector and store it in Qdrant.",
          "On a question, embed the query the same way, pull the closest chunks, and inject them into the prompt before it reaches the LLM.",
        ],
      },
      {
        type: "p",
        text: "The model (Llama 3.3 70B, served through Groq) then answers from the student's own material instead of its training data. FastAPI runs the backend, Next.js the chat UI, and Postgres holds conversation history.",
      },
      {
        type: "h2",
        text: "Why embeddings run locally",
      },
      {
        type: "p",
        text: "The one decision I'd defend hardest is running embeddings locally with fastembed rather than calling an embeddings API. Two reasons. First, cost: embedding every chunk of every upload through an API adds up fast, and a free study tool can't carry that. Second, and more important, privacy — local embedding means a student's notes never leave the server to reach a third-party embedding provider.",
      },
      {
        type: "h2",
        text: "What's next",
      },
      {
        type: "p",
        text: "The chat and the full upload-to-answer pipeline work today. Next up is auth and a progress dashboard, then a live deploy. I'll write more once it's shipped.",
      },
    ],
  },
];

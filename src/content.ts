// ============================================================================
//  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS.
//  Everything the site displays comes from here. No need to touch the
//  components unless you want to change layout/styling.
//
//  ⚠️  Items marked "TODO: VERIFY" are best-guess drafts from your resume —
//      double-check them before sharing the site.
// ============================================================================

export const profile = {
  name: "Surya Kannan",
  role: "Software Engineer",
  // Drop a headshot at public/me.jpg (square, ~800x800) and set this to "/me.jpg".
  headshot: "",
  tagline:
    "Full-stack software engineer and Data Science student at UC Berkeley. I build AI-powered applications — from RAG pipelines and knowledge graphs to full-stack web apps. Currently a Global Technology Intern at Albertsons.",
  location: "San Francisco Bay Area, CA",
  // Short status line shown as a pill in the hero. Set to "" to hide.
  availability: "",
  // Compact meta line shown under the hero. Edit freely.
  meta: [
    "Global Technology Intern @ Albertsons",
    "Data Science @ UC Berkeley",
  ],
  email: "suryakannan913@berkeley.edu",
  socials: {
    github: "https://github.com/suryakannan913",
    linkedin: "https://linkedin.com/in/surya-kannan-9bb9312b0",
    // Drop your resume PDF at public/resume.pdf to enable this button.
    resume: "/resume.pdf",
  },
};

export const about = [
  "I'm a Data Science student at UC Berkeley and a full-stack engineer drawn to the space where applied AI meets real, usable products. Building things and figuring out how systems work has always been what drives me — I like taking an idea from a rough sketch all the way to something people can actually click on and use.",
  "My work centers on AI-powered applications: retrieval-augmented generation, knowledge graphs, and data-intensive systems. I care about the whole stack — designing the retrieval pipeline, building the interface that surfaces it, and thinking through the data architecture underneath. The goal is always the same: technical depth that turns into something genuinely useful.",
  "Right now I'm a Global Technology Intern at Albertsons, where I'm building a stakeholder-facing analytics platform as part of a broader data instrumentation ecosystem. It's full-stack work that sits right at the intersection of engineering and real business impact.",
  "I'm always looking for harder problems to take on — a new framework, a messier dataset, a system that needs to scale. If you're working on something interesting, I'd love to hear about it.",
];

// Short lede shown under the heading on each section page. Set to "" to hide.
export const pageIntros = {
  experience:
    "A mix of engineering, teaching, and leadership roles. Each one sharpened how I break down hard problems and communicate clearly — skills I bring to every codebase I touch.",
  projects:
    "A selection of things I've built and am building — from a production-grade hybrid RAG system to a strategy game engine. Each project pushed me into new territory: graph databases, vector search, real-time state, or game AI.",
  skills:
    "The languages, platforms, and concepts I reach for most. I'm less interested in collecting tools than in picking the right one for the problem — but here's what I've gone deep on so far.",
  education:
    "My academic path — from a full IGETC transfer curriculum through dual enrollment to Data Science at UC Berkeley, grounded in statistics, computing, and the societal impact of data.",
};

export const skills: { category: string; items: string[] }[] = [
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

export type CaseStudy = {
  overview: string;
  metrics?: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
  // Screenshots for the case-study gallery. Drop files in public/projects/
  // (e.g. "/projects/ai-study-buddy-chat.png", ~1600px wide) and list them here.
  images?: { src: string; alt: string }[];
};

export const projects: {
  slug: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  // Card thumbnail. Drop a file in public/projects/ (16:9, ~1200x675)
  // and set e.g. "/projects/hexopolis-cover.png". Empty = placeholder slot.
  image: string;
  // If set, the case-study page embeds this URL as a playable demo iframe.
  // For Hexopolis: set NEXT_PUBLIC_HEXOPOLIS_URL in .env.local (dev) or
  // Vercel env settings (prod).
  demoUrl?: string;
  isComingSoon?: boolean;
  caseStudy?: CaseStudy;
}[] = [
  {
    slug: "course-recommendation-rag",
    title: "Course Recommendation — Hybrid RAG System",
    period: "Jan 2026 – Apr 2026",
    description:
      "Engineered a hybrid retrieval system pairing a Neo4j knowledge graph with FAISS vector search to compare retrieval accuracy on complex datasets. Hit 100% accuracy on multi-hop logical queries (where standard vector RAG failed) and boosted faithfulness scores by 40% by using graph structure to eliminate GPT-4o hallucinations.",
    tech: ["Python", "Neo4j", "Cypher", "FAISS", "OpenAI API", "Flask"],
    liveUrl: "",
    repoUrl: "",
    image: "", // e.g. "/projects/course-rag-cover.png"
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
    },
  },
  {
    slug: "ai-study-buddy",
    title: "AI Study Buddy",
    period: "Jun 2026 – Present",
    description:
      "Full-stack RAG-powered tutor app — upload your course PDFs and ask questions answered from your own notes, not generic LLM knowledge. Built a complete pipeline from PDF extraction and chunking through vector embedding and semantic retrieval, all wired into a conversational interface.",
    tech: ["Next.js", "FastAPI", "Python", "Groq", "Qdrant", "PostgreSQL"],
    liveUrl: "",
    repoUrl: "https://github.com/suryakannan913/ai-study-buddy",
    image: "", // e.g. "/projects/study-buddy-cover.png"
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
    },
  },
  {
    slug: "hexopolis",
    title: "Hexopolis",
    period: "Coming 2026",
    description:
      "Browser-based strategy game built on hexagonal tile mechanics — resource management, settlement building, and turn-based play. Features a game AI opponent using heuristic board evaluation and planned real-time multiplayer via WebSockets.",
    tech: ["Next.js", "Canvas API", "FastAPI", "Python", "PostgreSQL", "Zustand"],
    liveUrl: "",
    repoUrl: "",
    image: "", // e.g. "/projects/hexopolis-cover.png"
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
    },
  },
];

export const experience: {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
}[] = [
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

export const education: {
  school: string;
  credential: string;
  period: string;
  location: string;
}[] = [
  {
    school: "University of California, Berkeley",
    credential:
      "Data Science Major · College of Computing, Data Science and Society",
    period: "Aug 2025 – May 2027",
    location: "Berkeley, CA",
  },
  {
    school: "De Anza College",
    credential: "Dual Enrollment — IGETC (Intersegmental General Education Transfer Curriculum)",
    period: "Aug 2022 – Jun 2025",
    location: "Cupertino, CA",
  },
];

export const certifications: {
  name: string;
  issuer: string;
  date: string;
  // Short headline stat shown as a badge. Replace TODO ones with real numbers
  // if you have them (exam score, hours, # of projects, etc.).
  metric: string;
  skills: string[];
  highlights: string[];
}[] = [
  {
    name: "Certified Professional",
    issuer: "Neo4j",
    date: "Mar 2026",
    metric: "Professional-level exam", // TODO: add your exam score if you'd like (e.g. "92% exam score")
    skills: ["Cypher", "Schema Design", "Property Graphs", "APOC", "Indexing"],
    highlights: [
      "Architected high-performance graph databases using advanced property graph models with optimized node labels, relationship types, and indexing strategies.",
      "Engineered complex Cypher queries with subqueries, pattern comprehension, and list-processing functions to extract deep insights from highly interconnected datasets.",
      "Configured database security and ACID-compliant transactions, leveraging the APOC library for advanced data procedures.",
    ],
  },
  {
    name: "Introduction to Software Development",
    issuer: "Amazon",
    date: "Oct 2025",
    metric: "Full-cycle SDLC",
    skills: ["Python", "Java", "JavaScript", "CI/CD", "Automated Testing"],
    highlights: [
      "Managed the full software development life cycle — from requirements gathering through architecture design and automated testing.",
      "Streamlined CI/CD pipelines with automated testing and version-control workflows to maintain high deployment standards.",
    ],
  },
  {
    name: "IT Automation with Python",
    issuer: "Google",
    date: "Sep 2024",
    metric: "6-course Professional Certificate",
    skills: ["Python", "Bash", "Regex", "Git", "Configuration Mgmt"],
    highlights: [
      "Automated system administration by developing Python scripts to manage files and process log data.",
      "Implemented configuration management to maintain consistent state across a fleet of virtual machines.",
    ],
  },
];

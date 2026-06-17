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
  tagline:
    "Full-stack software engineer and Data Science student at UC Berkeley. I build AI-powered applications — from RAG pipelines and knowledge graphs to full-stack web apps. Currently a Global Technology Intern at Albertsons.",
  location: "San Francisco Bay Area, CA",
  email: "suryakannan913@berkeley.edu",
  socials: {
    github: "https://github.com/suryakannan913",
    linkedin: "https://linkedin.com/in/surya-kannan-9bb9312b0",
    // Drop your resume PDF at public/resume.pdf to enable this button.
    resume: "/resume.pdf",
  },
};

export const about = [
  "I'm a Data Science student at UC Berkeley and a full-stack engineer who loves building practical AI systems. My work spans retrieval-augmented generation, knowledge graphs, and data-intensive applications — always with an eye toward shipping something that actually works.",
  "I'm currently a Global Technology Intern at Albertsons, where I work on full-stack engineering. I'm always looking for opportunities to build, learn, and take on harder problems.",
];

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

export const projects: {
  title: string;
  period: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
}[] = [
  {
    title: "Course Recommendation — Hybrid RAG System",
    period: "Jan 2026 – Apr 2026",
    description:
      "Engineered a hybrid retrieval system pairing a Neo4j knowledge graph with FAISS vector search to compare retrieval accuracy on complex datasets. Hit 100% accuracy on multi-hop logical queries (where standard vector RAG failed) and boosted faithfulness scores by 40% by using graph structure to eliminate GPT-4o hallucinations.",
    tech: ["Python", "Neo4j", "Cypher", "FAISS", "OpenAI API", "Flask"],
    liveUrl: "",
    repoUrl: "", // TODO: add GitHub repo link if public
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

export const certifications: { name: string; issuer: string; date: string }[] = [
  {
    name: "Certified Professional",
    issuer: "Neo4j",
    date: "Mar 2026",
  },
  {
    name: "Introduction to Software Development",
    issuer: "Amazon",
    date: "Oct 2025",
  },
  {
    name: "IT Automation with Python",
    issuer: "Google",
    date: "Sep 2024",
  },
];

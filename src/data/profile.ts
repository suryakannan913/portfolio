// Who you are: hero, about page, and the short intros on section pages.

export const profile = {
  name: "Surya Kannan",
  role: "Software Engineer",
  // Drop a headshot at public/images/profile/me.jpg (square, ~800x800)
  // and set this to "/images/profile/me.jpg".
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
    // The resume PDF lives at public/resume.pdf.
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

// Shared shapes for all portfolio data. If you add a field here, the
// TypeScript compiler will point you at every file that needs updating.

export type CaseStudy = {
  overview: string;
  metrics?: { label: string; value: string }[];
  sections: { heading: string; body: string[] }[];
  // Screenshots for the case-study gallery. Drop files in
  // public/images/projects/ and list them here (~1600px wide works well).
  images?: { src: string; alt: string }[];
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
  // Card thumbnail (16:9, ~1200x675). Drop a file in public/images/projects/
  // and set e.g. "/images/projects/hexopolis-cover.png". Empty = placeholder.
  image: string;
  // If set, the case-study page embeds this URL as a playable demo iframe.
  demoUrl?: string;
  isComingSoon?: boolean;
  caseStudy?: CaseStudy;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Education = {
  school: string;
  credential: string;
  period: string;
  location: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  // Short headline stat shown as a badge (exam score, hours, # courses…).
  metric: string;
  skills: string[];
  highlights: string[];
};

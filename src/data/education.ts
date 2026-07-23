import type { Education, Certification } from "./types";

// Schools (newest first) and certifications — both render on /education.

export const education: Education[] = [
  {
    school: "University of California, Berkeley",
    credential:
      "Data Science Major · College of Computing, Data Science and Society",
    period: "Aug 2025 – May 2027",
    location: "Berkeley, CA",
  },
  {
    school: "De Anza College",
    credential:
      "Dual Enrollment — IGETC (Intersegmental General Education Transfer Curriculum)",
    period: "Aug 2022 – Jun 2025",
    location: "Cupertino, CA",
  },
];

export const certifications: Certification[] = [
  {
    name: "Certified Professional",
    issuer: "Neo4j",
    date: "Mar 2026",
    metric: "Professional-level exam", // TODO: add your exam score if you'd like
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

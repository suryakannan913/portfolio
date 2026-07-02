import { skills, pageIntros } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Skills — Surya Kannan",
  description:
    "Surya Kannan's technical skills — Python, SQL, FastAPI, Neo4j, RAG, and the languages, platforms, and concepts behind his full-stack and AI work.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="right">
        <section className="py-20">
          <SectionHeading index="04">Skills</SectionHeading>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {pageIntros.skills}
          </p>
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="mb-3 text-sm font-medium text-muted">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="pill rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm backdrop-blur-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}

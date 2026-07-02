import { projects, pageIntros } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCarousel from "../components/ProjectCarousel";

export const metadata = {
  title: "Projects — Surya Kannan",
  description:
    "Projects by Surya Kannan — a hybrid RAG system pairing a knowledge graph with vector search, an AI study tutor, and a browser-based strategy game engine.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="left">
        <section className="py-20">
          <SectionHeading index="03">Projects</SectionHeading>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {pageIntros.projects}
          </p>
          <ProjectCarousel items={projects} />
        </section>
      </Reveal>
    </main>
  );
}

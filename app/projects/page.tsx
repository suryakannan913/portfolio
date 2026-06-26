import { projects } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ProjectCarousel from "../components/ProjectCarousel";

export const metadata = { title: "Projects — Surya Kannan" };

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="left">
        <section className="py-20">
          <SectionHeading index="03">Projects</SectionHeading>
          <ProjectCarousel items={projects} />
        </section>
      </Reveal>
    </main>
  );
}

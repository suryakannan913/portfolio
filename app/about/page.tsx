import { about } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "About — Surya Kannan",
  description:
    "Surya Kannan — Data Science student at UC Berkeley and full-stack engineer building AI-powered applications. My background, focus, and what I'm looking for.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="left">
        <section className="py-20">
          <SectionHeading index="01">About</SectionHeading>
          <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
            {about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}

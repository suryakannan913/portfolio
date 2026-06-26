import { about } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export const metadata = { title: "About — Surya Kannan" };

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

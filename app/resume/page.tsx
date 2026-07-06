import { profile } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Resume — Surya Kannan",
  description: "View or download Surya Kannan's resume.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="up">
        <section className="py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <SectionHeading index="—">Resume</SectionHeading>
            <a
              href={profile.socials.resume}
              download
              className="mb-10 inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-accent hover:bg-card"
            >
              Download PDF
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
            <object
              data={profile.socials.resume}
              type="application/pdf"
              className="h-[85vh] w-full"
              aria-label={`${profile.name}'s resume`}
            >
              <div className="flex h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center text-muted">
                <p>
                  Your browser can&apos;t preview PDFs inline.
                </p>
                <a
                  href={profile.socials.resume}
                  download
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
                >
                  Download the resume instead
                </a>
              </div>
            </object>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

import { profile } from "@/content";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";

export const metadata = { title: "Contact — Surya Kannan" };

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6">
      <Reveal direction="scale">
        <section className="py-24">
          <SectionHeading index="07">Get in touch</SectionHeading>
          <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
            I am open to internships and new opportunities. The best way to reach me
            is by email — I would love to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-8 inline-flex items-center gap-3 break-all font-serif text-3xl tracking-tight sm:text-5xl"
          >
            <span className="gradient-text">{profile.email}</span>
            <ArrowUpRight className="size-7 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-9" />
          </a>
          <SocialLinks className="mt-10" />
        </section>
      </Reveal>
    </main>
  );
}

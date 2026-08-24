import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { RESEARCH_INTERESTS, EXPLORING } from "@/lib/data/interests";

export function Research() {
  return (
    <section id="research" className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Research & Technical Interests"
            title="What I'm interested in"
            description="These came out of my own work, not out of a reading list. Mostly from building a RAG system and running into its limits."
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {RESEARCH_INTERESTS.map((interest, i) => (
            <Reveal key={interest.title} delay={i * 80}>
              <h3 className="font-semibold text-foreground">
                {interest.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{interest.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="mt-14 border-t border-border/60 pt-10">
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            What I&apos;m exploring right now
          </h3>
          <ul className="mt-4 space-y-3">
            {EXPLORING.map((item, i) => (
              <Reveal key={i} as="li" delay={Math.min(i, 4) * 70} className="flex gap-2 text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{item}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

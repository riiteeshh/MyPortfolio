import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { EDUCATION } from "@/lib/data/education";

export function About() {
  return (
    <section id="about" className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="About" title="Who I am" />
        </Reveal>

        <Reveal delay={100} className="space-y-4 text-muted-foreground">
          <p>
            I&apos;m a software engineer working on conversational AI and
            agentic systems at Ycotek Nepal, in Lalitpur. I started with
            mobile development, moved into frontend and backend web
            development and databases, and more recently into AI
            applications.
          </p>
          <p>
            Building real AI systems changed the kind of question I ask about
            software. It used to be &ldquo;how do I make this work.&rdquo; Now
            it&apos;s closer to &ldquo;why does it behave this way, and what
            can be done about its limitations.&rdquo; Right now that
            curiosity is pointed at retrieval, knowledge representation, and
            how multiple AI agents coordinate on a task.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

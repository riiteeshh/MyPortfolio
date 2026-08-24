import { Award, ExternalLink } from "lucide-react";
import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { ACHIEVEMENTS } from "@/lib/data/achievements";

export function Achievements() {
  return (
    <section className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Achievements" />
        </Reveal>

        <div className="space-y-6">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="flex gap-4">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                <Award className="size-4" />
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-semibold text-foreground transition-colors hover:text-brand"
                    >
                      {item.title}
                      <ExternalLink className="size-3.5" />
                    </a>
                  ) : (
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {item.org} · {item.year}
                  </span>
                </div>
                <p className="mt-1 text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { MY_PATH } from "@/lib/data/path";

export function MyPath() {
  return (
    <section id="path" className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="My Path"
            title="How my interests developed"
            description="From computer engineering to software systems to conversational AI, and from there to retrieval and knowledge representation."
          />
        </Reveal>

        <ol className="relative border-l border-border">
          {MY_PATH.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={Math.min(i, 3) * 80}
              className="relative mb-10 pl-6 last:mb-0"
            >
              <span
                className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full bg-brand"
                aria-hidden
              />
              <p className="text-sm font-medium tracking-wide text-brand">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <div className="mt-2 space-y-3 text-muted-foreground">
                {item.body.map((paragraph, pi) => (
                  <p key={pi}>{paragraph}</p>
                ))}
              </div>
              {item.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

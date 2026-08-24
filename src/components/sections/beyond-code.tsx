import { Container } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { BEYOND_CODE } from "@/lib/data/beyond-code";

export function BeyondCode() {
  return (
    <section className="border-b border-border/60 bg-accent/40 py-14">
      <Container>
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Beyond code
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {BEYOND_CODE.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex gap-3.5 rounded-lg border border-border bg-background p-4 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

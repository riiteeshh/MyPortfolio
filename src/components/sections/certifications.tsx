import { ExternalLink } from "lucide-react";
import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { CERTIFICATIONS } from "@/lib/data/certifications";

export function Certifications() {
  return (
    <section className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Coursework & certifications" />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert, i) => {
            const cardClass = `flex items-baseline justify-between gap-3 rounded-lg border px-4 py-3 ${
              cert.inProgress
                ? "border-brand/40"
                : cert.url
                  ? "border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-brand"
                  : "border-border"
            }`;

            const content = (
              <>
                <div>
                  <p className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                    {cert.name}
                    {cert.url && (
                      <ExternalLink className="size-3.5 text-muted-foreground" />
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <span
                  className={`shrink-0 text-xs ${
                    cert.inProgress
                      ? "font-medium text-brand"
                      : "text-muted-foreground"
                  }`}
                >
                  {cert.date}
                </span>
              </>
            );

            return (
              <Reveal key={cert.name} delay={Math.min(i, 5) * 60}>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClass}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

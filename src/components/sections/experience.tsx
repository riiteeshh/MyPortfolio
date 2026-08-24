import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { EXPERIENCE } from "@/lib/data/experience";
import { EDUCATION, HIGHER_SECONDARY } from "@/lib/data/education";
import { SKILL_GROUPS } from "@/lib/data/skills";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Professional experience" />
        </Reveal>

        <div className="space-y-10">
          {EXPERIENCE.map((entry, i) => (
            <Reveal key={entry.company} delay={i * 100}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.company}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {entry.location}
                </span>
              </div>
              {entry.note && (
                <p className="mt-1 text-sm text-brand">{entry.note}</p>
              )}

              <div className="mt-4 space-y-6 border-l border-border pl-5">
                {entry.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-medium text-foreground">
                        {role.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {role.period}
                      </p>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-muted-foreground">
                      {role.points.map((point, pi) => (
                        <li key={pi} className="flex gap-2">
                          <span aria-hidden>–</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal as="div" className="mt-14 border-t border-border/60 pt-10">
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Education
          </h3>
          <div className="mt-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium text-foreground">
                {EDUCATION.degree}
              </p>
              <p className="text-sm text-muted-foreground">
                {EDUCATION.period}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {EDUCATION.institution} · {EDUCATION.note}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((c) => (
                <span
                  key={c}
                  className="rounded-sm border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {HIGHER_SECONDARY.degree}, {HIGHER_SECONDARY.institution},{" "}
            {HIGHER_SECONDARY.period}
          </p>
        </Reveal>

        {/* Skills */}
        <Reveal as="div" className="mt-14 border-t border-border/60 pt-10">
          <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Technical skills
          </h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-medium text-foreground">
                  {group.label}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-sm border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

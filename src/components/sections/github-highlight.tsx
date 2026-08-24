import { GithubIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/section-container";
import { Reveal } from "@/components/reveal";
import { PROJECTS } from "@/lib/data/projects";
import { SITE } from "@/lib/data/site";

const REPOS = PROJECTS.filter((p) => p.github);

export function GithubHighlight() {
  return (
    <section className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="GitHub"
            title="Selected repositories"
            description="Code you can actually read, not just a list of technologies."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {REPOS.map((repo, i) => (
            <Reveal key={repo.slug} delay={i * 80}>
              <a
                href={repo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground group-hover:text-brand">
                    {repo.title}
                  </h3>
                  <GithubIcon className="size-4 text-muted-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {repo.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {repo.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand"
        >
          <GithubIcon className="size-4" /> See more on GitHub
        </a>
      </Container>
    </section>
  );
}

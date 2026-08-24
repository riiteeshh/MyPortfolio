import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/section-container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { FEATURED_PROJECTS } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section id="work" className="border-b border-border/60 py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What I've Built"
            title="Featured projects"
            description="The projects with the most technical depth and the clearest evidence of what I personally built."
          />
        </Reveal>

        <div className="space-y-5">
          {FEATURED_PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
            <Card className="p-6 md:p-8 transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      <GithubIcon className="size-4" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="size-4" /> Live
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-3 text-muted-foreground">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                Read the case study <ArrowRight className="size-3.5" />
              </Link>
            </Card>
            </Reveal>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-brand"
        >
          View all projects <ArrowRight className="size-3.5" />
        </Link>
      </Container>
    </section>
  );
}

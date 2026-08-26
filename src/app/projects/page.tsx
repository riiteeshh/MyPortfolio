import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Container, SectionHeading } from "@/components/section-container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured and other projects by Ritesh Pandey, from a KEC award-winning anti-theft system to conversational AI work at Ycotek.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Featured & other work"
            description="Featured projects have full case studies. Other projects are smaller, mostly solo, side projects."
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
                  <h2 className="mt-1 text-xl font-semibold text-foreground">
                    {project.title}
                  </h2>
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
                  {project.privateNote && !project.github && !project.liveUrl && (
                    <span className="text-xs text-muted-foreground">
                      {project.privateNote}
                    </span>
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

        <Reveal as="div" className="mt-16">
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Other projects
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {OTHER_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={Math.min(i, 4) * 70} className="rounded-lg border border-border p-5 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="hover:text-foreground"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="hover:text-foreground"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.privateNote && !project.github && !project.liveUrl && (
                  <p className="mt-3 text-xs text-muted-foreground">
                    {project.privateNote}
                  </p>
                )}
                {project.status === "in-progress" && (
                  <p className="mt-2 text-xs text-brand">In progress</p>
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}

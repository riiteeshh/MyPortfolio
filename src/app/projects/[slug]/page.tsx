import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Container } from "@/components/section-container";
import { FEATURED_PROJECTS, getProjectBySlug } from "@/lib/data/projects";

export function generateStaticParams() {
  return FEATURED_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) notFound();

  const { caseStudy } = project;

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> All projects
        </Link>

        <p className="mt-6 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{project.summary}</p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              <GithubIcon className="size-4" /> View code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
            >
              <ExternalLink className="size-4" /> Live demo
            </a>
          )}
          {project.privateNote && (
            <span className="text-sm text-muted-foreground">
              {project.privateNote}
            </span>
          )}
        </div>

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

        <div className="mt-12 space-y-10 border-t border-border/60 pt-10">
          <CaseStudySection title="Problem" body={caseStudy.problem} />
          <CaseStudySection title="Solution" body={caseStudy.solution} />
          <CaseStudySection title="My Contribution" body={caseStudy.contribution} />
          <div>
            <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Technical Details
            </h2>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              {caseStudy.technicalDetails.map((detail, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden>–</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          {caseStudy.challenges&& <CaseStudySection title="Challenges" body={caseStudy.challenges??""} />}
          <CaseStudySection title="Results" body={caseStudy.results} />
        </div>
      </Container>
    </div>
  );
}

function CaseStudySection({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">{body}</p>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/section-container";
import { SITE } from "@/lib/data/site";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-border/60 py-20 md:py-28">
      <Container className="max-w-5xl">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="order-2 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 md:order-1">
            <p className="text-sm font-medium tracking-wide text-brand">
              {SITE.role}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {SITE.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {SITE.tagline}
            </p>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Currently a Senior Software Engineer at Ycotek Nepal, working on
              conversational AI. Increasingly interested in retrieval,
              knowledge representation, and how multi-agent systems
              coordinate.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Button asChild>
                <Link href="/projects">
                  Explore my work <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Link
                href="/#path"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                My path
              </Link>
              <Link
                href="/#research"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Research interests
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-4 text-muted-foreground">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="transition-colors hover:text-foreground"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <div
            className="order-1 relative mx-auto motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000 motion-safe:delay-150 md:order-2"
            aria-hidden
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-brand/15 blur-3xl" />
            <div className="motion-safe:animate-float">
              <Image
                src="/images/tech-guy.png"
                alt=""
                width={340}
                height={340}
                priority
                className="w-56 select-none sm:w-64 md:w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

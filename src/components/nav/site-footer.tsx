import Link from "next/link";
import { SITE } from "@/lib/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-center">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href={SITE.github} target="_blank" className="hover:text-foreground">
            GitHub
          </Link>
          <Link href={SITE.linkedin} target="_blank" className="hover:text-foreground">
            LinkedIn
          </Link>
          <a href={`mailto:${SITE.email}`} className="hover:text-foreground">
            Email
          </a>
          <a href={SITE.resumeUrl} target="_blank" className="hover:text-foreground">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

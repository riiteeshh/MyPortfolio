"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE } from "@/lib/data/site";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "My Path", href: "/#path" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

// Maps in-page section ids to the nav link they should activate. "work" (the
// Featured projects section) maps to the /projects route link since there's
// no standalone nav anchor for it.
const SECTION_TO_NAV_HREF: Record<string, string> = {
  about: "/#about",
  path: "/#path",
  work: "/projects",
  experience: "/#experience",
  research: "/#research",
  contact: "/#contact",
};

function useActiveNavHref(pathname: string) {
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [trackedPathname, setTrackedPathname] = useState(pathname);

  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setActiveHref(null);
  }

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = Object.keys(SECTION_TO_NAV_HREF)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const topMost = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (topMost) setActiveHref(SECTION_TO_NAV_HREF[topMost.target.id]);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return activeHref;
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const activeHref = useActiveNavHref(pathname);

  const isLinkActive = (href: string) =>
    href === "/projects"
      ? pathname.startsWith("/projects") || activeHref === "/projects"
      : href === activeHref;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/85 backdrop-blur transition-shadow duration-300 supports-backdrop-blur:bg-background/60 ${
        scrolled ? "border-border/60 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-md border border-border bg-accent transition-transform duration-300 ease-out motion-safe:group-hover:-rotate-6 motion-safe:group-hover:scale-105">
            <Image
              src="/images/main-logo-white.png"
              alt=""
              width={18}
              height={18}
              className="opacity-90 invert dark:invert-0"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Ritesh Pandey
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-foreground after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100 ${
                  active
                    ? "text-foreground after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top-2 motion-safe:duration-200 border-t border-border/60 md:hidden"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-md px-2 py-2.5 text-sm transition-colors hover:bg-accent hover:text-foreground ${
                    active ? "bg-accent text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

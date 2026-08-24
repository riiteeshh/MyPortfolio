import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-4xl px-6", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-sm font-medium tracking-wide text-brand">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

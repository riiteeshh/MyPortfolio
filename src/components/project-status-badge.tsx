import type { Project } from "@/lib/data/types";

export function ProjectStatusBadge({ status }: { status: Project["status"] }) {
  if (status !== "in-progress") return null;

  return (
    <span className="rounded-sm border border-brand/40 px-2 py-0.5 text-xs font-medium text-brand">
      In progress
    </span>
  );
}

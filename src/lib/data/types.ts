export type ProjectStatus = "completed" | "in-progress";
export type ProjectTier = "featured" | "other";

export interface CaseStudy {
  problem: string;
  solution: string;
  contribution: string;
  technicalDetails: string[];
  challenges?: string;
  results: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tier: ProjectTier;
  status: ProjectStatus;
  tech: string[];
  year: string;
  github?: string;
  liveUrl?: string;
  privateNote?: string;
  caseStudy?: CaseStudy;
}

export interface Role {
  title: string;
  period: string;
  points: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  roles: Role[];
  note?: string;
}

export interface PathItem {
  period: string;
  title: string;
  body: string[];
  tags?: string[];
}

export interface Interest {
  title: string;
  body: string;
}

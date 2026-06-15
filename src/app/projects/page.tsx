import ProjectsPage from "@/components/pages/projects-page/projects-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return <ProjectsPage />;
}

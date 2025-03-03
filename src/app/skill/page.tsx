import SkillPage from "@/components/pages/skills-page/skills-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Skills",
    description: "My skills",
  };
export default function Contacts(){
    return <SkillPage/>
}
import AboutPage from "@/components/pages/about-page/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About Me",
  };
export default function About(){
    return <AboutPage/>
}
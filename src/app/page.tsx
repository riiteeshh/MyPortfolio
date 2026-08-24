import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { MyPath } from "@/components/sections/my-path";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Experience } from "@/components/sections/experience";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { Research } from "@/components/sections/research";
import { GithubHighlight } from "@/components/sections/github-highlight";
import { BeyondCode } from "@/components/sections/beyond-code";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MyPath />
      <FeaturedProjects />
      <Experience />
      <Achievements />
      <Certifications />
      <Research />
      <GithubHighlight />
      <BeyondCode />
      <Contact />
    </>
  );
}

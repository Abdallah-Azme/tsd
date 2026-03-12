import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../features/hero/ui/Hero";
import { PartnersCarousel } from "../features/partners/ui/PartnersCarousel";
import { Services } from "../features/services/ui/Services";
import { ProjectsCarousel } from "../features/projects/ui/ProjectsCarousel";
import { AboutSection } from "../features/about/ui/AboutSection";
import { BlogSection } from "../features/blog/ui/BlogSection";
import { TeamSection } from "../features/team/ui/TeamSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <AboutSection />
      <Services />
      <ProjectsCarousel />
      <BlogSection />
      <TeamSection />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { AboutHeroSection } from "../features/about/ui/AboutHeroSection";
import { PartnersCarousel } from "../features/partners/ui/PartnersCarousel";
import { ProcessSection } from "../features/process/ui/ProcessSection";
import { FaqSection } from "../features/faq/ui/FaqSection";
import { TeamSection } from "../features/team/ui/TeamSection";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-col items-center w-full">
      <AboutHeroSection />
      <PartnersCarousel />
      <ProcessSection />
      <FaqSection />
      <TeamSection />
    </div>
  );
}

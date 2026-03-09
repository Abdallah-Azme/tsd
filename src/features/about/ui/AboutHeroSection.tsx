import { SectionHeader } from "@/components/shared/SectionHeader";
import { AboutStats } from "./AboutStats";

export const AboutHeroSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        badge="About us"
        title="We Build Software"
        description="TSD helps businesses grow with scalable digital products."
        className="mb-12"
      />

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-16 text-[var(--sea-ink-soft)] text-lg leading-relaxed font-medium">
        <p className="flex-1">
          We create intelligent software solutions that empower businesses to
          operate more efficiently, cut costs, and drive faster digital growth
          using modern, tailored technologies. Our expert developers build
          robust architectures that scale with your business needs, ensuring
          your digital product remains competitive in a rapidly evolving market.
        </p>
        <p className="flex-1">
          From drafting wireframes and complex planning to coding advanced
          platforms, we turn your ideas into a strong, functional, and
          user-centric software product. Our whole focus is on building scalable
          architecture by designing robust system components so your product
          remains competitive, reliable, and secure right from the start and in
          the long run.
        </p>
      </div>

      <AboutStats />
    </section>
  );
};

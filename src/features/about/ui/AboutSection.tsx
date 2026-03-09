import { SectionHeader } from "@/components/shared/SectionHeader";
import { AboutStats } from "./AboutStats";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <SectionHeader
          badge="About us"
          title="We Build Software"
          description="TSD helps businesses grow with scalable digital products. We transform complex problems into elegant, user-centric software solutions."
          className="flex-1"
        />
        <Button className="rounded-full px-8 py-6 text-lg font-semibold bg-[var(--lagoon)] hover:bg-[var(--lagoon-deep)] text-white group transition-all duration-300 shadow-lg shadow-[var(--lagoon)]/20">
          Get Started
          <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Image Illustration */}
        <div className="lg:col-span-7 relative group">
          <div className="absolute -inset-4 bg-linear-to-r from-[var(--lagoon)]/20 to-[var(--palm)]/20 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative rounded-[2rem] overflow-hidden border border-[var(--line)] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
            <img
              src="/images/about-illustration.png"
              alt="Software Engineering Illustration"
              className="w-full h-auto object-cover"
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-[var(--lagoon)]/5 pointer-events-none" />
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[var(--sea-ink)]">
              Smart Solutions.
              <br />
              <span className="text-[var(--lagoon-deep)]">Real Scale.</span>
            </h3>

            <div className="space-y-4 text-[var(--sea-ink-soft)] text-lg leading-relaxed font-medium">
              <p>
                We create intelligent software solutions that empower businesses
                to operate more efficiently, cut costs, and drive faster digital
                growth using modern, tailored technologies.
              </p>
              <p>
                Our expert developers build robust architectures that scale with
                your business needs, ensuring your digital product remains
                competitive in a rapidly evolving market.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1 text-[var(--lagoon-deep)] font-bold hover:gap-2 transition-all duration-300 group relative w-fit"
            >
              Explore more
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="h-0.5 w-full bg-[var(--lagoon)]/30 absolute -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </div>
        </div>
      </div>

      <AboutStats />
    </section>
  );
};

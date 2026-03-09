import { SectionHeader } from "@/components/shared/SectionHeader";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import { services } from "../services/servicesData";
import { useServicesCarousel } from "../hooks/useServicesCarousel";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const { emblaRef, selectedIndex, scrollPrev, scrollNext } =
    useServicesCarousel();

  return (
    <section className="w-full bg-white py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="What We Do"
          title="Our Software Services"
          description="Custom solutions designed to meet your business needs."
          className="mb-16"
        />
      </div>

      {/* Carousel Container */}
      <div className="relative w-full">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-8 px-4 py-10">
            {services.map((service, index) => (
              <div key={service.id} className="flex-[0_0_auto] min-w-0">
                <ServiceCard
                  service={service}
                  isActive={index === selectedIndex % services.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mx-auto mt-12 flex max-w-7xl items-center justify-end gap-10">
        <button
          onClick={scrollPrev}
          className="group relative flex items-center"
          aria-label="Previous slide"
        >
          <div className="h-[2px] w-20 bg-gray-200 transition-colors group-hover:bg-gray-400" />
          <LucideArrowLeft className="absolute -left-1 h-5 w-5 text-gray-300 transition-colors group-hover:text-gray-500" />
        </button>

        <button
          onClick={scrollNext}
          className="group relative flex items-center"
          aria-label="Next slide"
        >
          <div className="h-[2px] w-32 bg-[#FF9D42] transition-transform group-hover:scale-x-110" />
          <LucideArrowRight className="absolute -right-1 h-6 w-6 text-[#FF9D42] transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom Styles for Embla and Arrows */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          display: flex;
        }
        .embla__slide {
          flex: 0 0 auto;
          min-width: 0;
        }
      `,
        }}
      />
    </section>
  );
};

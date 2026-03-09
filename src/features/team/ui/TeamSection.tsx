import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "./TeamCard";
import { teamService } from "../services/teamService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "#/components/ui/carousel";
import { cn } from "#/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CustomCarouselControls = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex items-center gap-8 mt-12 justify-end">
      {/* Previous Button */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={cn(
          "group flex items-center gap-2 transition-all duration-300",
          !canScrollPrev ? "opacity-30 cursor-not-allowed" : "hover:gap-4",
        )}
      >
        <div className="flex items-center">
          <ArrowLeft
            className={cn(
              "w-5 h-5 transition-colors duration-300",
              canScrollPrev
                ? "text-gray-400 group-hover:text-orange-500"
                : "text-gray-400",
            )}
          />
          <div
            className={cn(
              "h-[2px] w-24 transition-colors duration-300",
              canScrollPrev
                ? "bg-gray-300 group-hover:bg-orange-500"
                : "bg-gray-300",
            )}
          />
        </div>
      </button>

      {/* Next Button */}
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={cn(
          "group flex items-center gap-2 transition-all duration-300",
          !canScrollNext ? "opacity-30 cursor-not-allowed" : "hover:gap-4",
        )}
      >
        <div className="flex items-center">
          <div
            className={cn(
              "h-[2px] w-24 transition-colors duration-300",
              canScrollNext
                ? "bg-orange-500 group-hover:bg-orange-600"
                : "bg-gray-300",
            )}
          />
          <ArrowRight
            className={cn(
              "w-5 h-5 transition-colors duration-300",
              canScrollNext
                ? "text-orange-500 group-hover:text-orange-600"
                : "text-gray-400",
            )}
          />
        </div>
      </button>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  const members = teamService.getMembers();

  return (
    <section className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Meet the Team"
        title="The People Behind TSD"
        description="A skilled team of developers and tech experts driving every project forward."
        className="mb-16"
      />

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {members.map((member) => (
            <CarouselItem
              key={member.id}
              className="pl-6 basis-full md:basis-1/2 lg:basis-1/4"
            >
              <TeamCard member={member} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CustomCarouselControls />
      </Carousel>
    </section>
  );
};

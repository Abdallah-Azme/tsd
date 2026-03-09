import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "./BlogCard";
import { blogService } from "../services/blogService";
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

export const BlogSection: React.FC = () => {
  const posts = blogService.getPosts();

  // Create sets of 5 posts for each slide to maintain the grid layout
  const slides = [];
  for (let i = 0; i < posts.length; i += 5) {
    slides.push(posts.slice(i, i + 5));
  }

  return (
    <section className="w-full py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="Insights"
        title="Our Blog"
        description="Thoughts, stories, and perspectives shaping the digital world."
        className="mb-12"
      />

      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slidePosts, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Top Row: 2 Large Cards (Span 3 columns each) */}
                {slidePosts[0] && (
                  <div className="md:col-span-3">
                    <BlogCard post={slidePosts[0]} isLarge />
                  </div>
                )}
                {slidePosts[1] && (
                  <div className="md:col-span-3">
                    <BlogCard post={slidePosts[1]} isLarge />
                  </div>
                )}

                {/* Bottom Row: 3 Smaller Cards (Span 2 columns each) */}
                {slidePosts[2] && (
                  <div className="md:col-span-2">
                    <BlogCard post={slidePosts[2]} />
                  </div>
                )}
                {slidePosts[3] && (
                  <div className="md:col-span-2">
                    <BlogCard post={slidePosts[3]} />
                  </div>
                )}
                {slidePosts[4] && (
                  <div className="md:col-span-2">
                    <BlogCard post={slidePosts[4]} />
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CustomCarouselControls />
      </Carousel>
    </section>
  );
};

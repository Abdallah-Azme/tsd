import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "./BlogCard";
import { blogService } from "../services/blogService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import { useTranslations } from "use-intl";

import { ArrowLeft, ArrowRight } from "lucide-react";

export const BlogSection: React.FC = () => {
  const t = useTranslations("Blog");
  const posts = blogService.getPosts();

  // Create sets of 5 posts for each slide to maintain the grid layout
  const slides = [];
  for (let i = 0; i < posts.length; i += 5) {
    slides.push(posts.slice(i, i + 5));
  }

  return (
    <section className="w-full py-6 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("title")}
          description={t("description")}
          className="mb-14"
        />

        <div className="relative">
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

            <div className="flex justify-end gap-1 mt-14 border-t border-gray-100 pt-8">
              <CarouselPrevious
                Icon={ArrowLeft}
                className="static translate-y-0 h-10 w-24 rounded-none border-none bg-transparent hover:bg-transparent text-gray-300 hover:text-gray-400 p-0 justify-start"
              />
              <div className="h-10 w-px bg-gray-100" />
              <CarouselNext
                Icon={ArrowRight}
                className="static translate-y-0 h-10 w-24 rounded-none border-none bg-transparent hover:bg-transparent text-[#B56500] hover:text-[#965400] p-0 justify-end"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

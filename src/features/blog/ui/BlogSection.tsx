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

export const BlogSection: React.FC = () => {
  const t = useTranslations("Blog");
  const posts = blogService.getPosts();

  // Create sets of 5 posts for each slide to maintain the grid layout
  const slides = [];
  for (let i = 0; i < posts.length; i += 5) {
    slides.push(posts.slice(i, i + 5));
  }

  return (
    <section className="w-full py-24 container mx-auto px-4">
      <SectionHeader
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        className="mb-12"
      />

      <div className="relative px-12">
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

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BlogCard } from "./BlogCard";
import { blogService } from "../services/blogService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "#/components/ui/carousel";
import { useTranslations } from "use-intl";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  cardVariants, 
  viewportConfig 
} from "#/lib/animations/variants";

export const BlogSection: React.FC = () => {
  const t = useTranslations("Blog");
  const posts = blogService.getPosts();

  // Create sets of 5 posts for each slide to maintain the grid layout
  const slides = [];
  for (let i = 0; i < posts.length; i += 5) {
    slides.push(posts.slice(i, i + 5));
  }

  return (
    <section className="w-full py-6 bg-white overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeUpVariants}>
          <SectionHeader
            title={t("title")}
            description={t("description")}
            className="mb-14"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="relative"
        >
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slidePosts, index) => (
                <CarouselItem key={index} className="basis-full">
                  <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-6 gap-6"
                  >
                    {/* Top Row: 2 Large Cards (Span 3 columns each) */}
                    {slidePosts[0] && (
                      <motion.div variants={cardVariants} className="md:col-span-3">
                        <BlogCard post={slidePosts[0]} isLarge />
                      </motion.div>
                    )}
                    {slidePosts[1] && (
                      <motion.div variants={cardVariants} className="md:col-span-3">
                        <BlogCard post={slidePosts[1]} isLarge />
                      </motion.div>
                    )}

                    {/* Bottom Row: 3 Smaller Cards (Span 2 columns each) */}
                    {slidePosts[2] && (
                      <motion.div variants={cardVariants} className="md:col-span-2">
                        <BlogCard post={slidePosts[2]} />
                      </motion.div>
                    )}
                    {slidePosts[3] && (
                      <motion.div variants={cardVariants} className="md:col-span-2">
                        <BlogCard post={slidePosts[3]} />
                      </motion.div>
                    )}
                    {slidePosts[4] && (
                      <motion.div variants={cardVariants} className="md:col-span-2">
                        <BlogCard post={slidePosts[4]} />
                      </motion.div>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};


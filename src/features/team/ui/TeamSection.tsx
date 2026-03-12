import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TeamCard } from "./TeamCard";
import { teamService } from "../services/teamService";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import { useTranslations } from "use-intl";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  cardVariants, 
  viewportConfig 
} from "#/lib/animations/variants";

export const TeamSection: React.FC = () => {
  const t = useTranslations("Team");
  const members = teamService.getMembers();

  return (
    <section className="w-full py-5 bg-white overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeUpVariants}>
          <SectionHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
            className="mb-10"
          />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="relative"
        >
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
                  <motion.div variants={cardVariants}>
                    <TeamCard member={member} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white border-slate-200" />
            <CarouselNext className="-right-4 bg-white/80 hover:bg-white border-slate-200" />
          </Carousel>
        </motion.div>
      </motion.div>
    </section>
  );
};


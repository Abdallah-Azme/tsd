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

export const TeamSection: React.FC = () => {
  const t = useTranslations("Team");
  const members = teamService.getMembers();

  return (
    <section className="w-full py-5 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
          className="mb-10"
        />

        <div className="relative">
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

            <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white border-slate-200" />
            <CarouselNext className="-right-4 bg-white/80 hover:bg-white border-slate-200" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

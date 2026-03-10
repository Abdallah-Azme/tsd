import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import { useProjects } from "../hooks/useProjects";
import { cn } from "#/lib/utils";
import { useTranslations } from "use-intl";

export const ProjectsCarousel = () => {
  const t = useTranslations("Projects");
  const { lang, isRtl, projects } = useProjects();

  return (
    <section
      className="relative w-full py-24 overflow-hidden bg-[#fdfdfd]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(rgba(241, 140, 34, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 140, 34, 0.05) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f18c22]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1e3a5a]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
          />

          <Link
            to={"/" as any}
            search={{ lang } as any}
            className="text-[#f18c22] font-bold text-sm hover:underline underline-offset-4"
          >
            {t("viewMore")}
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {projects.map((project, idx) => (
                <CarouselItem
                  key={`${project.id}-${idx}`}
                  className="pl-6 basis-full md:basis-1/2 lg:basis-[480px]"
                >
                  <div
                    className={cn(
                      "group relative bg-white rounded-3xl overflow-hidden border transition-all duration-500",
                      project.featured
                        ? "border-[#f18c22]/50 shadow-xl shadow-orange-500/10"
                        : "border-[#f18c22]/30 shadow-lg blur-[0.2px] hover:blur-none hover:shadow-xl hover:border-[#f18c22]/50",
                    )}
                  >
                    {/* Project Image */}
                    <div className="aspect-4/3 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Shadow overlay for depth */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/5 to-transparent" />
                    </div>

                    {/* Project Details */}
                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-bold text-[#1e3a5a]">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="pt-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300",
                            "bg-[#f18c22] text-white hover:bg-[#d87a1a] shadow-lg shadow-orange-200",
                          )}
                        >
                          {t("learnMore")}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

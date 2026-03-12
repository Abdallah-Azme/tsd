import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "#/components/ui/carousel";
import { useProjects } from "../hooks/useProjects";
import { cn } from "#/lib/utils";
import { useTranslations } from "use-intl";
import { GlassButton } from "#/components/ui/GlassButton";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  cardVariants, 
  viewportConfig 
} from "#/lib/animations/variants";

const ArrowIcon = ({
  direction,
  active,
}: {
  direction: "left" | "right";
  active: boolean;
}) => {
  return (
    <svg
      width="102"
      height="15"
      viewBox="0 0 102 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "block transition-colors duration-300",
        direction === "left" && "rotate-180",
      )}
    >
      <path
        d="M1 6.36401C0.447715 6.36401 0 6.81173 0 7.36401C0 7.9163 0.447715 8.36401 1 8.36401V7.36401V6.36401ZM101.707 8.07112C102.098 7.6806 102.098 7.04743 101.707 6.65691L95.3431 0.292946C94.9526 -0.0975785 94.3195 -0.0975785 93.9289 0.292946C93.5384 0.68347 93.5384 1.31664 93.9289 1.70716L99.5858 7.36401L93.9289 13.0209C93.5384 13.4114 93.5384 14.0446 93.9289 14.4351C94.3195 14.8256 94.9526 14.8256 95.3431 14.4351L101.707 8.07112ZM1 7.36401V8.36401H101V7.36401V6.36401H101V7.36401Z"
        fill={active ? "#FF8E00" : "#B8B8B8"}
      />
    </svg>
  );
};

const PrevArrow = () => {
  const { canScrollPrev } = useCarousel();
  return <ArrowIcon direction="left" active={canScrollPrev} />;
};

const NextArrow = () => {
  const { canScrollNext } = useCarousel();
  return <ArrowIcon direction="right" active={canScrollNext} />;
};

export const ProjectsCarousel = () => {
  const t = useTranslations("Projects");
  const { lang, isRtl, projects } = useProjects();

  return (
    <section
      className="relative w-full py-6 overflow-hidden bg-[#fdfdfd]"
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
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <motion.div variants={fadeUpVariants}>
            <SectionHeader
              badge={t("badge")}
              title={t("title")}
              description={t("description")}
            />
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <Link
              to={"/" as any}
              search={{ lang } as any}
              className="text-[#f18c22] font-bold text-sm hover:underline underline-offset-4"
            >
              {t("viewMore")}
            </Link>
          </motion.div>
        </motion.div>

        {/* Carousel */}
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
                  <motion.div
                    variants={cardVariants}
                    className={cn(
                      "group relative bg-white rounded-3xl overflow-hidden border transition-all duration-500",
                      project.featured
                        ? "border-[#f18c22]/50 shadow-xl shadow-orange-500/10"
                        : "border-[#f18c22]/10 shadow-lg hover:shadow-xl hover:border-[#f18c22]/50",
                    )}
                  >
                    {/* Project Image */}
                    <div className="aspect-video overflow-hidden relative">
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
                          className="inline-block"
                        >
                            <GlassButton variant="primary" className="h-12 px-6">
                              {t("visitWebsite")}
                              <ArrowUpRight className="h-4 w-4" />
                            </GlassButton>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Carousel Controls at bottom right */}
            <motion.div variants={fadeUpVariants} className="flex items-center justify-end gap-10 mt-12 pr-4">
              <CarouselPrevious
                variant="ghost"
                className="static translate-y-0 h-auto w-auto p-0 hover:bg-transparent disabled:opacity-30 disabled:pointer-events-auto"
              >
                <PrevArrow />
              </CarouselPrevious>
              <CarouselNext
                variant="ghost"
                className="static translate-y-0 h-auto w-auto p-0 hover:bg-transparent disabled:opacity-30 disabled:pointer-events-auto"
              >
                <NextArrow />
              </CarouselNext>
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};


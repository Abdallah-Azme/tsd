import { useState } from "react";
import { useProjects } from "../hooks/useProjects";
import { Tabs, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import { cn } from "#/lib/utils";
import { useTranslations } from "use-intl";

export const ProjectsGridSection = () => {
  const t = useTranslations("Projects");
  const { isRtl, projects } = useProjects();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Mobile Apps", "Websites", "Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-6 bg-[#fafbfc]" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-[42px] font-bold text-[#1e3a5a]">
            {t("title")}
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base">
            {t("description")}
          </p>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full flex flex-col items-center mt-12"
        >
          <TabsList className="inline-flex p-1.5 bg-[#8ea0b5] rounded-[16px] mb-12 w-auto max-w-full overflow-x-auto gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className={cn(
                  "flex-1 md:flex-none min-w-[120px] rounded-[10px] px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                  "text-white/80 hover:text-white data-[state=active]:bg-[#f18c22] data-[state=active]:text-white data-[state=active]:shadow-md border-transparent",
                )}
              >
                {t(`categories.${category}` as any) || category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-2">
            {filteredProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                className={cn(
                  "group relative bg-white rounded-[32px] overflow-hidden border-[1.5px] transition-all duration-500",
                  project.featured
                    ? "border-[#f18c22] shadow-xl shadow-[#f18c22]/10"
                    : "border-gray-100 hover:border-[#f18c22] hover:shadow-xl",
                )}
              >
                {/* Project Image */}
                <div className="p-4 pb-0">
                  <div className="aspect-[1.5/1] overflow-hidden relative rounded-[20px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 pt-6 space-y-3">
                  <h3 className="text-[22px] font-bold text-[#1e3a5a]">
                    {project.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 px-6 py-3 rounded-[12px] font-bold text-sm transition-all duration-300",
                        "bg-[#f18c22] text-white hover:bg-[#d87a1a] shadow-lg shadow-[#f18c22]/30",
                      )}
                    >
                      {t("visitWebsite")}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

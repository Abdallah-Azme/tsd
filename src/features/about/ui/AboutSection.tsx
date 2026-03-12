import { SectionHeader } from "@/components/shared/SectionHeader";
import { AboutStats } from "./AboutStats";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useTranslations } from "use-intl";

export const AboutSection = () => {
  const t = useTranslations("About");
  return (
    <section className="py-6 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <SectionHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
            className="flex-1"
          />
          <Button className="shrink-0 rounded-2xl px-10 py-7 text-base font-bold bg-[#FF8A00] hover:bg-[#E67E00] text-white group transition-all duration-300 shadow-[0_10px_20px_rgba(255,138,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,138,0,0.3)] active:scale-95">
            {t("getStarted")}
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Main Image Illustration */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] bg-slate-50">
              <img
                src="/images/about-illustration.png"
                alt="Software Engineering Illustration"
                className="w-full h-[380px] md:h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                {t("subtitlePart1")}
                <br />
                <span className="text-slate-800">{t("subtitlePart2")}</span>
              </h3>

              <div className="space-y-6 text-slate-500 text-lg md:text-xl leading-relaxed font-medium opacity-80">
                <p>{t("para1")}</p>
                <p>{t("para2")}</p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#FF8A00] font-bold text-lg hover:gap-3 transition-all duration-300 group relative w-fit"
              >
                {t("exploreMore")}
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100/50 group-hover:bg-orange-100 transition-colors">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <AboutStats />
      </div>
    </section>
  );
};

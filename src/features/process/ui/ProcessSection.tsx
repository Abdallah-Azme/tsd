import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "use-intl";

export const ProcessSection = () => {
  const t = useTranslations("Process");
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineSteps = [
    {
      title: t("step1Title"),
      description: t("step1Desc"),
      icon: "📋",
    },
    {
      title: t("step2Title"),
      description: t("step2Desc"),
      icon: "🔍",
    },
    {
      title: t("step3Title"),
      description: t("step3Desc"),
      icon: "🎨",
    },
    {
      title: t("step4Title"),
      description: t("step4Desc"),
      icon: "💻",
    },
    {
      title: t("step5Title"),
      description: t("step5Desc"),
      icon: "✅",
    },
    {
      title: t("step6Title"),
      description: t("step6Desc"),
      icon: "🛠️",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="py-24 container mx-auto px-4 overflow-hidden relative"
      ref={containerRef}
    >
      {/* Background Gradients & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_top,#fff0e6_0%,transparent_70%)] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,#000_10%,transparent_100%)] -z-20" />

      <SectionHeader
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        className="mb-24"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Central Vertical Line (Background) */}
        <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gray-200 md:-translate-x-1/2 rounded-full" />

        {/* Animated Fill Line */}
        <motion.div
          className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-orange-500 origin-top md:-translate-x-1/2 z-0 rounded-full"
          style={{ scaleY }}
        />

        <div className="space-y-16">
          {timelineSteps.map((step, index) => {
            // index 0 -> right side
            const isRightSide = index % 2 === 0;

            return (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col md:flex-row items-start md:items-center justify-between",
                  isRightSide ? "md:flex-row" : "md:flex-row-reverse",
                  "pl-16 md:pl-0",
                )}
              >
                {/* Dot */}
                <motion.div
                  initial={{
                    backgroundColor: "#e5e7eb",
                    borderColor: "#ffffff",
                    scale: 1,
                  }}
                  whileInView={{
                    backgroundColor: "#f97316",
                    borderColor: "#fcd6b8",
                    scale: 1.2,
                  }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-[14px] h-[14px] rounded-full border-[3px] z-10 top-8 md:top-1/2 md:-translate-y-1/2"
                />

                {/* Empty Space for alternate layout */}
                <div className="hidden md:block w-[45%]" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px", once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="w-full md:w-[45%] bg-white backdrop-blur-sm border border-orange-50/50 p-6 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(249,115,22,0.08)] transition-all duration-300 relative group"
                >
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#ecf1f6] group-hover:bg-[#ffedd5] transition-colors duration-300 text-3xl shadow-sm">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#8c3b1a] mb-2 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

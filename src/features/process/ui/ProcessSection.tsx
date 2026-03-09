import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const timelineSteps = [
  {
    title: "Requirement Gathering",
    description:
      "We start by understanding your business goals, challenges, and expectations to define a clear project vision from day one.",
    icon: "📋",
  },
  {
    title: "Research & Analysis",
    description:
      "Our team analyzes your requirements, target audience, and technical needs to build a solid foundation for the solution.",
    icon: "🔍",
  },
  {
    title: "Design & Planning",
    description:
      "User interfaces and user experience are designed in a professional manner that aligns with the brand identity, ensuring ease of use and visual appeal.",
    icon: "🎨",
  },
  {
    title: "Development & Programming",
    description:
      "The development team begins implementing the project using the latest technologies, while ensuring high performance and adherence to security and quality standards.",
    icon: "💻",
  },
  {
    title: "Testing & Delivery",
    description:
      "We conduct a thorough review of the platform or application to ensure it operates efficiently and is free of any errors, then deliver it ready for official launch and use.",
    icon: "✅",
  },
  {
    title: "Technical Support",
    description:
      "We provide continuous support after launch, including monitoring, updates, and resolving any technical issues to ensure stable performance and ongoing success.",
    icon: "🛠️",
  },
];

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="py-24 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative"
      ref={containerRef}
    >
      {/* Background Gradients & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(ellipse_at_top,#fff0e6_0%,transparent_70%)] -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,#000_10%,transparent_100%)] -z-20" />

      <SectionHeader
        badge="Our Process"
        title="From Vision to Execution"
        description="Our software development process is designed to ensure exceptional quality, efficient timelines, and clear communication."
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

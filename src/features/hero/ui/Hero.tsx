import { PartnersCarousel } from "#/features/partners/ui/PartnersCarousel";
import { LucideSparkles } from "lucide-react";
import { useTranslations } from "use-intl";
import { GlassButton } from "#/components/ui/GlassButton";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  buttonVariants
} from "#/lib/animations/variants";

export const Hero = () => {
  const t = useTranslations("Hero");
  
  return (
    <section className="relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-[#F8FBFF] px-6 pt-32 pb-20 text-center select-none">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5EAF3 1px, transparent 1px),
            linear-gradient(to bottom, #E5EAF3 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      {/* Floating Sparkles/Light Effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-100/30 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-orange-100/30 blur-[120px]" />

      {/* Top Badge */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        className="z-10 mb-8 flex items-center gap-2 rounded-full border border-white/20 bg-linear-to-r from-[#a6988c]/90 to-[#8c7b6d]/90 px-6 py-2.5 shadow-[0_8px_16px_rgba(0,0,0,0.1)] backdrop-blur-md transition-transform hover:scale-105 outline-none"
      >
        <div className="flex items-center gap-2 text-sm font-semibold leading-none text-white">
          <LucideSparkles className="h-4 w-4 text-white" />
          <span>{t("badge")}</span>
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="z-10 flex max-w-5xl flex-col items-center"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="mb-8 text-5xl font-black tracking-tight sm:text-[80px] leading-[1.1]"
        >
          <span className="bg-linear-to-r from-[#FF8A00] to-[#8c8c8c] bg-clip-text text-transparent">
            {t("title1")}
          </span>{" "}
          <span className="text-[#1E3A8A]">{t("title2")}</span> <br />
          <span className="bg-linear-to-r from-[#FF8A00] to-[#1E3A8A] bg-clip-text text-transparent">
            {t("title3")}
          </span>
        </motion.h1>

        <motion.p 
          variants={fadeUpVariants}
          className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-[#5F6368]/80"
        >
          {t("description")}
        </motion.p>

        <motion.div 
          variants={containerVariants}
          className="flex flex-wrap items-center justify-center gap-6 mt-2 relative z-10"
        >
          <motion.div variants={buttonVariants}>
            <GlassButton variant="primary">{t("startProject")}</GlassButton>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <GlassButton variant="secondary">{t("exploreProjects")}</GlassButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Assets */}

      {/* Code Icon - Top Left */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute left-[15%] top-[15%] z-20 hidden animate-bounce-slow sm:block"
      >
        <img
          src="/home-page/code.png"
          alt="Code Icon"
          className="h-16 w-16 object-contain drop-shadow-xl mix-blend-multiply"
        />
      </motion.div>

      {/* Robot - Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute left-[5%] bottom-[20%] z-20 hidden items-end gap-2 sm:flex"
      >
        <div className="relative">
          <img
            src="/home-page/robot.png"
            alt="Robot Mascot"
            className="h-48 w-48 object-contain animate-float mix-blend-multiply"
          />
        </div>
      </motion.div>

      {/* Globe - Right Side */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5, type: "spring" }}
        className="absolute right-[5%] top-1/2 z-20 hidden -translate-y-1/2 sm:block"
      >
        <img
          src="/home-page/earth.png"
          alt="Globe"
          className="h-[320px] w-[320px] object-contain drop-shadow-2xl animate-float mix-blend-multiply"
        />
      </motion.div>

      <PartnersCarousel />

      {/* Bottom Background Pattern */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none opacity-[0.4]">
        <img
          src="/home-page/triangles.png"
          alt="Pattern"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};


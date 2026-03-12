import { HelpCircle, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useCTA } from "../hooks/useCTA";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  buttonVariants, 
  viewportConfig 
} from "#/lib/animations/variants";

export const CTASection = () => {
  const { lang, isRtl } = useCTA();

  return (
    <section
      className="relative w-full py-12 overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background with Texture and Gradient */}
      <div className="absolute inset-0 z-0">
        {/* Base dark color */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Main Gradient: Orange to Blue/Dark */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background: `linear-gradient(135deg, rgba(241, 140, 34, 0.4) 0%, rgba(10, 10, 10, 0.4) 40%, rgba(30, 58, 90, 0.3) 100%)`,
          }}
        />

        {/* Texture/Noise overlay (simulated) */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariants} className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/5 shadow-lg">
          <span className="text-sm font-medium text-white/80">
            Get In Touch
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Looking for Help?
        </motion.h2>

        {/* Subtitle */}
        <motion.p variants={fadeUpVariants} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Have a question or need expert assistance? Our team is ready to guide
          you every step of the way.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={containerVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          {/* FAQs Button */}
          <motion.div variants={buttonVariants}>
            <Link
              to={"/faqs" as any}
              search={{ lang } as any}
              className="flex items-center gap-2 bg-white px-8 py-4 rounded-2xl shadow-xl hover:bg-gray-50 transition-all duration-300 group min-w-[180px] justify-center"
            >
              <span className="text-[#f18c22] font-bold text-lg">FAQs</span>
              <HelpCircle className="w-5 h-5 text-[#f18c22] transition-transform group-hover:scale-110" />
            </Link>
          </motion.div>

          {/* Contact Us Button */}
          <motion.div variants={buttonVariants}>
            <Link
              to={"/contact" as any}
              search={{ lang } as any}
              className="flex items-center gap-2 bg-linear-to-r from-[#f18c22] to-[#ff9b44] px-8 py-4 rounded-2xl shadow-xl hover:shadow-[#f18c22]/20 hover:scale-[1.02] transition-all duration-300 group min-w-[180px] justify-center border border-white/10"
            >
              <span className="text-white font-bold text-lg">Contact Us</span>
              <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};


import { LucideSparkles } from "lucide-react";
import { useTranslations } from "use-intl";

export const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section className="relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-[#F8FBFF] px-6 py-20 text-center select-none">
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
      <div className="z-10 mb-8 flex items-center gap-2 rounded-full border border-white/20 bg-linear-to-r from-[#a6988c]/90 to-[#8c7b6d]/90 px-6 py-2.5 shadow-[0_8px_16px_rgba(0,0,0,0.1)] backdrop-blur-md transition-transform hover:scale-105 outline-none">
        <div className="flex items-center gap-2 text-sm font-semibold leading-none text-white">
          <LucideSparkles className="h-4 w-4 text-white" />
          <span>{t("badge")}</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="z-10 flex max-w-5xl flex-col items-center">
        <h1 className="mb-8 text-5xl font-black tracking-tight sm:text-[80px] leading-[1.1]">
          <span className="bg-linear-to-r from-[#FF8A00] to-[#8c8c8c] bg-clip-text text-transparent">
            {t("title1")}
          </span>{" "}
          <span className="text-[#1E3A8A]">{t("title2")}</span> <br />
          <span className="bg-linear-to-r from-[#FF8A00] to-[#1E3A8A] bg-clip-text text-transparent">
            {t("title3")}
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-[#5F6368]/80">
          {t("description")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
          <button className="h-14 rounded-2xl bg-[#FF8A00] px-8 text-base font-bold text-white shadow-[0_8px_20px_rgba(255,138,0,0.3)] transition-all hover:scale-105 hover:bg-[#F08000] active:scale-95">
            {t("startProject")}
          </button>
          <button className="h-14 rounded-2xl border border-gray-200 bg-white px-8 text-base font-bold text-[#FF8A00] shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all hover:bg-gray-50 hover:scale-105 active:scale-95">
            {t("exploreProjects")}
          </button>
        </div>
      </div>

      {/* Floating Assets */}

      {/* Code Icon - Top Left */}
      <div className="absolute left-[15%] top-[15%] z-20 hidden rotate-[-15deg] animate-bounce-slow sm:block">
        <img
          src="/hero-code.png"
          alt="Code Icon"
          className="h-16 w-16 object-contain drop-shadow-xl mix-blend-multiply"
        />
      </div>

      {/* Robot - Bottom Left */}
      <div className="absolute left-[5%] bottom-[10%] z-20 hidden items-end gap-2 sm:flex">
        <div className="relative">
          <img
            src="/hero-robot.png"
            alt="Robot Mascot"
            className="h-48 w-48 object-contain animate-float mix-blend-multiply"
          />
          {/* Chat Bubbles */}
          <div className="absolute -right-4 top-0 translate-x-1/2 rounded-2xl bg-white p-3 shadow-lg border border-gray-100 animate-fade-in-up">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-orange-400" />
              <div className="h-2 w-2 rounded-full bg-orange-300" />
              <div className="h-2 w-2 rounded-full bg-orange-200" />
            </div>
          </div>
          <div className="absolute -left-12 bottom-1/4 rounded-2xl bg-white p-3 shadow-lg border border-gray-100 animate-fade-in-up delay-75">
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-blue-400" />
              <div className="h-2 w-2 rounded-full bg-blue-300" />
              <div className="h-2 w-2 rounded-full bg-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Globe - Right Side */}
      <div className="absolute right-[5%] top-1/2 z-20 hidden -translate-y-1/2 sm:block">
        <img
          src="/hero-globe.png"
          alt="Globe"
          className="h-[320px] w-[320px] object-contain drop-shadow-2xl animate-spin-slow mix-blend-multiply"
        />
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-15deg); }
          50% { transform: translateY(-10px) rotate(-15deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `,
        }}
      />
    </section>
  );
};

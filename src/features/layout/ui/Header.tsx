import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useHeader } from "../hooks/useHeader";
import { TSDLogo } from "./TSDLogo";
import { useTranslations } from "use-intl";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "#/components/ui/sheet";
import { useEffect } from "react";
import { cn } from "#/lib/utils";

const NavLink = ({
  to,
  children,
  lang,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  lang: "en" | "ar";
  onClick?: () => void;
}) => (
  <Link
    to={to}
    search={{ lang }}
    onClick={onClick}
    activeOptions={{ includeSearch: true }}
    className="flex items-center justify-center px-2 py-2 text-[16px] font-medium transition-colors duration-200 capitalize whitespace-nowrap"
    style={{ fontFamily: "'Space Grotesk', sans-serif", lineHeight: "116%" }}
  >
    {({ isActive }) => (
      <span
        className={isActive ? "text-[#B56500]!" : "text-[#0F172A]!"}
      >
        {children}
      </span>
    )}
  </Link>
);

const Divider = () => (
  <div className="h-[18px] w-px bg-[#474747]/30 rounded-[64px] flex-none" />
);

export const Header = () => {
  const { lang, isRtl, toggleLanguage } = useHeader();
  const t = useTranslations("Navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500 flex items-center",
        isScrolled
          ? "bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] before:absolute before:inset-0 before:bg-linear-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
          : "bg-transparent"
      )}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section - Left Aligned */}
        <Link to="/" search={{ lang }} className="shrink-0">
          <TSDLogo className="h-10" />
        </Link>

        {/* Desktop Navigation Pill - Right Aligned / Centered */}
        <nav className="hidden lg:flex items-center gap-[12px]   h-[52px] pl-[24px] pr-[16px] ">
          <NavLink to="/" lang={lang}>
            {t("home")}
          </NavLink>
          <Divider />
          <NavLink to="/about" lang={lang}>
            {t("about")}
          </NavLink>
          <Divider />
          <NavLink to="/projects" lang={lang}>
            {t("projects")}
          </NavLink>
          <Divider />
          <NavLink to="/blog" lang={lang}>
            {t("blog")}
          </NavLink>
          <Divider />
          <NavLink to="/contact" lang={lang}>
            {t("contact")}
          </NavLink>
          <Divider />

          {/* Language Switcher */}
          <div
            onClick={toggleLanguage}
            className="flex items-center gap-[4px] pl-2 h-[24px] cursor-pointer select-none group"
          >
            <div className="flex items-center gap-[8px]">
              <span
                className="text-[16px] font-medium text-[#0F172A]! uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {lang === "en" ? "EN" : "AR"}
              </span>
              <ChevronDown className="w-[20px] h-[20px] text-[#0F172A]! opacity-60 transition-transform group-hover:translate-y-0.5" />
            </div>
          </div>
        </nav>

        {/* Mobile Menu Section */}
        <div className="flex items-center gap-4 lg:hidden">
          <div
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-100 bg-white/50 cursor-pointer shadow-sm"
          >
            <span className="text-lg">{lang === "en" ? "🇺🇸" : "🇸🇦"}</span>
            <span className="text-xs font-bold text-[#0F172A] uppercase">
              {lang === "en" ? "EN" : "AR"}
            </span>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="p-2 text-[#0F172A] hover:bg-gray-100 rounded-lg transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side={isRtl ? "right" : "left"}
              className="p-0 border-none bg-white w-[85%] sm:max-w-sm"
            >
              <SheetHeader className="p-6 border-b border-gray-50 flex flex-row items-center justify-between">
                <SheetTitle className="text-left">
                  <TSDLogo className="h-8" />
                </SheetTitle>
              </SheetHeader>

              <div className="p-6 flex flex-col gap-2">
                {[
                  { to: "/", label: t("home") },
                  { to: "/about", label: t("about") },
                  { to: "/projects", label: t("projects") },
                  { to: "/blog", label: t("blog") },
                  { to: "/contact", label: t("contact") },
                ].map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    lang={lang}
                    onClick={closeMenu}
                  >
                    <div className="py-4 text-lg border-b border-gray-50 flex items-center justify-between group">
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-300 transition-colors group-hover:text-[#B56500] ${isRtl ? "rotate-90" : "-rotate-90"}`}
                      />
                    </div>
                  </NavLink>
                ))}

                <div className="mt-8 p-6 rounded-2xl bg-gray-50 flex flex-col gap-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    {lang === "en" ? "Change Language" : "تغيير اللغة"}
                  </p>
                  <div
                    onClick={() => {
                      toggleLanguage();
                      closeMenu();
                    }}
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-[#B56500]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {lang === "en" ? "🇸🇦" : "🇺🇸"}
                      </span>
                      <span className="font-bold text-[#0F172A]">
                        {lang === "en" ? "العربية" : "English"}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-blue-600 -rotate-90" />
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

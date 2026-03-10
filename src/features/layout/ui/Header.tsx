import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useHeader } from "../hooks/useHeader";
import { TSDLogo } from "./TSDLogo";
import { useTranslations } from "use-intl";

const NavLink = ({
  to,
  children,
  lang,
}: {
  to: string;
  children: React.ReactNode;
  lang: "en" | "ar";
}) => (
  <Link
    to={to}
    search={{ lang }}
    className="px-3 py-2 text-sm font-bold transition-colors duration-200 text-[#002d5a] hover:text-[#f18c22]/80"
    activeProps={{ className: "!text-[#f18c22]" }}
  >
    {children}
  </Link>
);

const Divider = () => <div className="h-4 w-px bg-gray-300 mx-1" />;

export const Header = () => {
  const { lang, isRtl, toggleLanguage } = useHeader();
  const t = useTranslations("Navigation");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#f8fafc]/80 backdrop-blur-md border-b border-gray-100 h-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" search={{ lang }} className="shrink-0">
          <TSDLogo />
        </Link>

        {/* Navigation & Language Section */}
        <nav className="flex items-center">
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

          {/* Language Switcher */}
          <div
            onClick={toggleLanguage}
            className={`flex items-center gap-2 ${isRtl ? "mr-4 pr-4 border-r" : "ml-4 pl-4 border-l"} border-gray-300 group cursor-pointer select-none`}
          >
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors">
              <span className="text-xl">{lang === "en" ? "🇺🇸" : "🇸🇦"}</span>
              <span className="text-sm font-bold text-[#002d5a] uppercase">
                {lang === "en" ? "EN" : "AR"}
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Dribbble, // Using Dribbble as placeholder for Behance if not available, or just SVG
} from "lucide-react";
import { TSDLogo } from "./TSDLogo";
import { useFooter } from "../hooks/useFooter";
import { useTranslations } from "use-intl";

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1e3a5a] hover:text-[#f18c22] transition-colors duration-200"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({
  to,
  children,
  lang,
}: {
  to: string;
  children: React.ReactNode;
  lang: "en" | "ar";
}) => (
  <li>
    <Link
      to={to}
      search={{ lang }}
      className="text-gray-500 hover:text-[#f18c22] transition-colors duration-200 text-sm py-1 block"
    >
      {children}
    </Link>
  </li>
);

export const Footer = () => {
  const { lang, isRtl, currentYear } = useFooter();
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");

  return (
    <footer
      className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 lg:px-8 mt-auto"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo & Desc */}
          <div className="flex flex-col gap-6">
            <TSDLogo className="w-32 h-12" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t("description")}
            </p>
            <div className="flex items-center gap-5 pt-2">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={Twitter} href="#" />
              <SocialIcon Icon={Dribbble} href="#" />{" "}
              {/* Behance placeholder */}
              <SocialIcon Icon={Linkedin} href="#" />
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-[#7d5a50] font-bold text-lg mb-6">
              {t("links")}
            </h3>
            <ul className="flex flex-col gap-2">
              <FooterLink to="/" lang={lang}>
                {nav("home")}
              </FooterLink>
              <FooterLink to="/about" lang={lang}>
                {nav("about")}
              </FooterLink>
              <FooterLink to="/projects" lang={lang}>
                {nav("projects")}
              </FooterLink>
              <FooterLink to="/blog" lang={lang}>
                {nav("blog")}
              </FooterLink>
              <FooterLink to="/contact" lang={lang}>
                {nav("contact")}
              </FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-[#7d5a50] font-bold text-lg mb-6">
              {t("contactUs")}
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>+20 100 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:info@tsd.com"
                  className="hover:text-[#f18c22] transition-colors"
                >
                  info@tsd.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span>{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {currentYear}{" "}
            <span className="font-bold text-[#1e3a5a]">{t("company")}</span> .
            {t("rights")}
          </p>
          <div className="flex items-center gap-4 text-gray-400 text-sm italic">
            <a href="#" className="hover:text-[#f18c22] transition-colors">
              {t("terms")}
            </a>
            <span className="text-gray-200">|</span>
            <a href="#" className="hover:text-[#f18c22] transition-colors">
              {t("faqs")}
            </a>
            <span className="text-gray-200">|</span>
            <a href="#" className="hover:text-[#f18c22] transition-colors">
              {t("privacy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

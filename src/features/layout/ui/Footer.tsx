import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  X,
  Linkedin,
} from "lucide-react";
import { TSDLogo } from "./TSDLogo";
import { useFooter } from "../hooks/useFooter";
import { useTranslations } from "use-intl";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  viewportConfig 
} from "#/lib/animations/variants";

const SocialIcon = ({ Icon, href, isSvg = false }: { Icon: any; href: string; isSvg?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-5 h-5 flex items-center justify-center text-[#002347] hover:text-[#B55612] transition-colors duration-200"
  >
    {isSvg ? Icon : <Icon size={20} strokeWidth={1.5} />}
  </a>
);

const BehanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.228 15.01c0 .544.137.997.41 1.352.274.355.704.533 1.287.533h1.734c.548 0 .973-.146 1.272-.437s.449-.785.449-1.48v-.812c0-.629-.153-1.096-.458-1.4-.306-.305-.732-.458-1.282-.458h-1.637v1.889h-1.775v.813zm0-4.524c0 .542.131.983.391 1.32.261.336.657.505 1.189.505h1.536c.491 0 .883-.143 1.171-.43.289-.286.435-.747.435-1.38v-.76c0-.521-.137-.936-.411-1.242s-.696-.46-1.267-.46H9.728c-.463 0-.828.143-1.093.43-.266.286-.407.747-.407 1.381v.636zm10.743 2.502c-.015.688-.202 1.21-.56 1.564-.359.354-.863.531-1.516.531h-1.62c-.652 0-1.15-.181-1.493-.541-.343-.36-.514-.881-.514-1.562v-.713c0-.663.178-1.168.532-1.517.355-.349.852-.523 1.491-.523h1.61c.64 0 1.139.176 1.497.527.358.351.543.856.554 1.515l.019.718zm-4.103-1.514c-.21 0-.362.052-.454.156s-.138.293-.138.566v.152h1.22c-.014-.306-.062-.511-.144-.616-.082-.104-.242-.258-.484-.258zm6.132 1.514c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
  </svg>
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
      className="text-[#3D3D3D] hover:text-[#B55612] transition-colors duration-200 text-base font-space capitalize py-1 block"
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
      className="bg-[#FDFDFF] border border-[#D6D6D669] footer-shadow mt-auto relative"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        {/* Main Content Area */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-start justify-between py-8 md:py-[32px] gap-[40px] md:gap-[181px] border-b border-[#929292C2]"
        >
          {/* Column 1: Logo & Desc */}
          <motion.div variants={fadeUpVariants} className="flex flex-col gap-8 flex-1 max-w-[483px]">
            <TSDLogo className="w-[146px] h-[78px] object-contain" />
            <p className="text-[#5B5B5B] text-sm leading-[150%] font-space">
              {t("description")}
            </p>
            <div className="flex items-center gap-2 pt-2">
              <SocialIcon Icon={Facebook} href="#" />
              <SocialIcon Icon={Instagram} href="#" />
              <SocialIcon Icon={X} href="#" />
              <SocialIcon Icon={<BehanceIcon />} href="#" isSvg />
              <SocialIcon Icon={Linkedin} href="#" />
            </div>
          </motion.div>

          {/* Links and Contact Us Group for small screens */}
          <div className="flex flex-row flex-wrap md:flex-nowrap md:contents gap-x-12 gap-y-10">
            {/* Column 2: Links */}
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-6 min-w-[120px]">
              <h3 className="text-gradient-footer font-inter font-semibold text-xl leading-[28px]">
                {t("links")}
              </h3>
              <ul className="flex flex-col gap-4">
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
            </motion.div>

            {/* Column 3: Contact Us */}
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-4 flex-1 max-w-[276px]">
              <h3 className="text-gradient-footer font-inter font-semibold text-xl leading-[28px]">
                {t("contactUs")}
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="flex items-center gap-2 text-[#3D3D3D] text-base font-space">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Phone size={20} className="text-[#002347]" />
                  </div>
                  <span>+20 100 123 4567</span>
                </li>
                <li className="flex items-center gap-2 text-[#3D3D3D] text-base font-space">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail size={20} className="text-[#002347]" />
                  </div>
                  <a
                    href="mailto:info@tsd.com"
                    className="hover:text-[#B55612] transition-colors"
                  >
                    info@tsd.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[#3D3D3D] text-base font-space leading-[28px]">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#002347]" />
                  </div>
                  <span>{t("address")}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUpVariants}
          className="py-6 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[#8A9AAA] text-sm font-space flex items-center gap-1">
            <span>{currentYear}</span>
            <span className="text-[#002347] font-medium">{t("company")}</span>
            <span>.</span>
            <span>{t("rights")}</span>
          </p>
          
          <div className="flex items-center gap-4 text-[#3D3D3D] text-base font-space">
            <a href="#" className="hover:text-[#B55612] transition-colors">
              {t("terms")}
            </a>
            <div className="h-4 w-px bg-[#C3C3C3]" />
            <a href="#" className="hover:text-[#B55612] transition-colors uppercase">
              {t("faqs")}
            </a>
            <div className="h-4 w-px bg-[#C3C3C3]" />
            <a href="#" className="hover:text-[#B55612] transition-colors">
              {t("privacy")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};


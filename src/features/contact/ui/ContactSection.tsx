import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "use-intl";

export const ContactSection = () => {
  const t = useTranslations("Contact");
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#F4F7FC] px-6 py-5 lg:py-32">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E2E8F0 1px, transparent 1px),
            linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center top",
          maskImage:
            "radial-gradient(circle at center 30%, black 20%, transparent 80%)",
        }}
      />
      {/* Background Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[800px] w-[800px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#FFE8D6]/70 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[800px] w-[800px] translate-x-1/3 translate-y-1/3 rounded-full bg-[#E5F0FF]/70 blur-[120px]" />

      <div className="z-10 w-full container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/20 shadow-md bg-linear-to-r from-[#cf9a7f] via-[#979ea9] to-[#9198a6] backdrop-blur-sm">
            <div className="w-5 h-5 rounded-full relative shadow-[inner_0_-1px_2px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fcd6b8_0%,#d4784a_30%,#576480_70%,#9ba4b5_100%)]"></div>
              <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white/50 rounded-full blur-[0.5px]"></div>
            </div>
            <span className="text-sm font-semibold text-white tracking-wide pr-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-4xl lg:text-[50px] font-extrabold tracking-tight leading-[1.2] mb-6">
            <span className="text-[#111827]">{t("titlePart1")}</span>
            <br />
            <span className="text-[#0a2540]">{t("titlePart2")}</span>
          </h2>

          <p className="text-[#6B7280] text-[17px] font-medium leading-[1.6] max-w-[420px] mb-12 whitespace-pre-line">
            {t("description")}
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-11 h-11 bg-white text-[#FF8A00] rounded-[14px] shadow-sm">
                <Phone className="w-5 h-5 stroke-2 fill-[#FFF3E5]" />
              </div>
              <span className="text-[#4B5563] font-medium text-[15px]">
                +20 100 123 4567
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-11 h-11 bg-white text-[#FF8A00] rounded-[14px] shadow-sm">
                <Mail className="w-5 h-5 stroke-2 fill-[#FFF3E5]" />
              </div>
              <span className="text-[#4B5563] font-medium text-[15px]">
                info@tsd.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-11 h-11 bg-white text-[#FF8A00] rounded-[14px] shadow-sm">
                <MapPin className="w-5 h-5 stroke-2 fill-[#FFF3E5]" />
              </div>
              <span className="text-[#4B5563] font-medium text-[15px]">
                15 El Tahrir St, Cairo, Egypt
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Form */}
        <div className="w-full max-w-[500px]">
          <div className="bg-white/80 rounded-[28px] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white backdrop-blur-md">
            <form className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-[#111827] ml-1">
                  {t("fullName")}
                </label>
                <input
                  type="text"
                  placeholder={t("fullName")}
                  className="w-full px-5 py-[14px] bg-[#F9FAFB] border border-gray-100 rounded-xl text-[14px] outline-none focus:bg-white focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-[#111827] ml-1">
                  {t("phoneNumber")}
                </label>
                <input
                  type="text"
                  placeholder={t("phonePlaceholder")}
                  className="w-full px-5 py-[14px] bg-white border border-[#FF8A00] rounded-xl text-[14px] outline-none shadow-[0_0_0_2px_rgba(255,138,0,0.1)] focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-[#111827] ml-1">
                  {t("emailAddress")}
                </label>
                <input
                  type="email"
                  placeholder={t("emailAddress")}
                  className="w-full px-5 py-[14px] bg-[#F9FAFB] border border-gray-100 rounded-xl text-[14px] outline-none focus:bg-white focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-[#111827] ml-1">
                  {t("message")}
                </label>
                <textarea
                  placeholder={t("message")}
                  rows={4}
                  className="w-full px-5 py-[14px] bg-[#F9FAFB] border border-gray-100 rounded-xl text-[14px] outline-none focus:bg-white focus:border-[#FF8A00] focus:ring-1 focus:ring-[#FF8A00] transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              <div className="flex justify-end mt-1">
                <button
                  type="button"
                  className="py-3 px-10 rounded-xl bg-linear-to-r from-[#FF8A00] to-[#FFA800] text-white font-bold text-[15px] shadow-[0_8px_16px_-6px_rgba(255,138,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

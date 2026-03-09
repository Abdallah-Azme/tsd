import { Route } from "../../../routes/__root";
import { useNavigate } from "@tanstack/react-router";

export const useHeader = () => {
  const { lang } = Route.useSearch();
  const navigate = useNavigate();
  const isRtl = lang === "ar";

  const toggleLanguage = () => {
    const nextLang: "en" | "ar" = lang === "en" ? "ar" : "en";
    navigate({
      // @ts-ignore - TanStack Router inference can be tricky with root search params
      search: (prev: any) => ({ ...prev, lang: nextLang }),
    });
  };

  return { lang, isRtl, toggleLanguage };
};

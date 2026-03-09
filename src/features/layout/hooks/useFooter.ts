import { Route } from "../../../routes/__root";

export const useFooter = () => {
  const { lang } = Route.useSearch();
  const isRtl = lang === "ar";
  const currentYear = new Date().getFullYear();

  return { lang, isRtl, currentYear };
};

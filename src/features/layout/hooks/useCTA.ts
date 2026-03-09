import { Route } from "../../../routes/__root";

export const useCTA = () => {
  const { lang } = Route.useSearch();
  const isRtl = lang === "ar";

  return { lang, isRtl };
};

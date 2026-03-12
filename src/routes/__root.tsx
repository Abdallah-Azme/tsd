import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { DirectionProvider } from "../components/ui/direction";
import { IntlProvider } from "use-intl";
import "../styles.css";

import { Header } from "../features/layout/ui/Header";
import { Footer } from "../features/layout/ui/Footer";
import { CTASection } from "../features/layout/ui/CTASection";

import en from "../messages/en.json";
import ar from "../messages/ar.json";

const messages = { en, ar };

export const Route = createRootRoute({
  // 1. Define 'lang' as a valid search param (?lang=en or ?lang=ar)
  validateSearch: (search: Record<string, unknown>) => {
    return {
      lang: (search.lang as "en" | "ar") || "en",
    };
  },
  component: RootComponent,
});

function RootComponent() {
  const { lang } = Route.useSearch() as { lang: "en" | "ar" };
  const isRtl = lang === "ar";
  const direction = isRtl ? "rtl" : "ltr";
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <DirectionProvider dir={direction}>
          <div
            dir={direction}
            lang={lang}
            className="min-h-screen flex flex-col"
          >
            <Header />
            <div className={location.pathname === "/" ? "" : "pt-20"}>
              {/* Adjust padding top to account for fixed header except on home page where hero handles it */}
              <Outlet />
            </div>
            {!isContactPage && <CTASection />}
            <Footer />
          </div>
        </DirectionProvider>
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "TanStack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </IntlProvider>
    </>
  );
}

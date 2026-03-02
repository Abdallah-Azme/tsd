import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { IntlProvider } from "use-intl";
import "../styles.css";

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
  const { lang } = Route.useSearch();
  const isRtl = lang === "ar";
  return (
    <>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div dir={isRtl ? "rtl" : "ltr"} lang={lang} className="min-h-screen">
          <Outlet />
        </div>
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

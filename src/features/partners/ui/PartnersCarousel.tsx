import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "#/components/ui/carousel";
import { usePartners } from "../hooks/usePartners";

export function PartnersCarousel() {
  const { partners } = usePartners();

  // Double the partners to ensure smooth infinite scroll
  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <section className="w-full py-10 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {displayPartners.map((partner, index) => (
              <CarouselItem
                key={`${partner.id}-${index}`}
                className="basis-auto px-8 md:px-12"
              >
                <div className="flex items-center justify-center transition-all duration-300 transform hover:scale-105 opacity-80 hover:opacity-100">
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap">
                    {partner.name === "Arize" && (
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#FF007A] rounded-full" />
                        Arize
                      </span>
                    )}
                    {partner.name === "Articul8" && (
                      <span className="text-[#1E40AF]">
                        Articul<span className="text-[#F97316]">8</span>
                      </span>
                    )}
                    {partner.name === "BCG" && (
                      <span className="text-[#00875A]">BCG</span>
                    )}
                    {partner.name === "C3 AI" && (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-black dark:bg-white" />
                        C3.ai
                      </span>
                    )}
                    {partner.name === "Confluent" && (
                      <span className="text-[#0047AB] flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-5 h-5 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            d="M12 6v12M6 12h12"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                        CONFLUENT
                      </span>
                    )}
                    {partner.name === "Collibra" && (
                      <span className="text-[#00A859] flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#00A859] rounded-sm rotate-45" />
                        Collibra
                      </span>
                    )}
                    {partner.name === "Cohere" && (
                      <span className="text-[#000000] dark:text-white flex items-center gap-2">
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-[#FF7F50] rounded-full" />
                          <div className="w-2 h-2 bg-[#FF7F50] rounded-full" />
                        </div>
                        cohere
                      </span>
                    )}
                    {![
                      "Arize",
                      "Articul8",
                      "BCG",
                      "C3 AI",
                      "Confluent",
                      "Collibra",
                      "Cohere",
                    ].includes(partner.name) && partner.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

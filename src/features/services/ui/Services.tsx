import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { services } from "../services/servicesData";
import { ServiceCard } from "./ServiceCard";
import { useTranslations } from "use-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export const Services = () => {
  const t = useTranslations("Services");
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="w-full bg-white py-24 px-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
          className="mb-16"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <Carousel
          opts={{
            loop: true,
            align: "center",
            containScroll: false,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              stopOnInteraction: false,
              speed: 1,
            }),
          ]}
          setApi={(api) => {
            if (!api) return;
            setSelectedIndex(api.selectedScrollSnap());
            api.on("select", () => {
              setSelectedIndex(api.selectedScrollSnap());
            });
          }}
          className="w-full"
        >
          <CarouselContent className="py-10">
            {services.map((service, index) => (
              <CarouselItem key={service.id} className="basis-auto pl-8">
                <ServiceCard
                  service={service}
                  isActive={index === selectedIndex % services.length}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

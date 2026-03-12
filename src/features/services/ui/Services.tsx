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
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeUpVariants, 
  cardVariants, 
  viewportConfig 
} from "#/lib/animations/variants";

export const Services = () => {
  const t = useTranslations("Services");
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="w-full bg-white py-6 px-6 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeUpVariants}>
          <SectionHeader
            badge={t("badge")}
            title={t("title")}
            description={t("description")}
            className="mb-10"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={containerVariants}
        className="container mx-auto px-4 relative"
      >
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
          <CarouselContent className="py-6 -ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={service.id}
                className="basis-[85%] sm:basis-[50%] md:basis-[40%] lg:basis-[35%] 2xl:basis-[34.48%] pl-8"
              >
                <motion.div variants={cardVariants}>
                  <ServiceCard
                    service={service}
                    isActive={index === selectedIndex % services.length}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
};


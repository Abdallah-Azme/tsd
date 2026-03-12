import { cn } from "#/lib/utils";
import type { Service } from "../services/servicesData";

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isActive,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col transition-all duration-500 ease-in-out font-sans",
        // Uniform Style across all screens
        "rounded-[12px] p-5 gap-4 w-full",
        // Height per breakpoint - using min-h or h to maintain consistency
        "h-[200px] sm:h-[220px] md:h-[240px] 2xl:h-[273.7px]",
        isActive
          ? [
              "z-10 text-white border border-white/5 -rotate-2",
              "bg-[url(/.jpg),linear-gradient(123.75deg,#E88100_-17.3%,#002347_92.4%)]",
              "shadow-[0px_10px_30px_rgba(0,0,0,0.1)]",
            ]
          : "bg-white border text-[#1A1A1A] border-[#E5EAF3] shadow-sm",
      )}
    >
      {/* Icon Housing */}
      <div
        className={cn(
          "flex items-center justify-center transition-all duration-500",
          isActive
            ? "bg-white/10 backdrop-blur-md border border-white/20"
            : "bg-gray-50 border border-gray-100",
          "h-10 w-10 rounded-lg shrink-0",
        )}
      >
        <span className="text-xl">{service.icon}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 min-w-0">
        <h3
          className={cn(
            "text-lg sm:text-xl font-bold leading-tight transition-all duration-500 truncate",
            isActive ? "text-white" : "text-[#1A1A1A]",
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "text-xs sm:text-sm leading-relaxed opacity-80 transition-all duration-500 line-clamp-2 sm:line-clamp-3",
            isActive ? "text-gray-100" : "text-[#5F6368]",
          )}
        >
          {service.description}
        </p>
      </div>

      {/* Footer Link */}
      <div className="mt-auto">
        <button
          className={cn(
            "text-xs font-bold underline underline-offset-4 transition-colors",
            "text-[#FF9D42]",
            isActive ? "hover:text-white" : "hover:text-[#E67E22]",
          )}
        >
          View More
        </button>
      </div>
    </div>
  );
};

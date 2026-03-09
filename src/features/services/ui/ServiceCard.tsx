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
        "relative flex min-h-[400px] w-[350px] flex-col rounded-[2.5rem] p-10 transition-all duration-500 ease-in-out",
        isActive
          ? "z-10 scale-105 bg-linear-to-br from-[#1E2024] to-[#121316] text-white shadow-2xl shadow-orange-500/10 border border-white/5"
          : "bg-white border text-[#1A1A1A] border-[#E5EAF3] shadow-sm",
      )}
    >
      {/* Icon Housing */}
      <div
        className={cn(
          "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-colors duration-500",
          isActive
            ? "bg-white/10 backdrop-blur-md border border-white/20"
            : "bg-gray-50 border border-gray-100",
        )}
      >
        <span className="text-3xl">{service.icon}</span>
      </div>

      {/* Content */}
      <h3
        className={cn(
          "mb-4 text-2xl font-bold leading-tight",
          isActive ? "text-white" : "text-[#1A1A1A]",
        )}
      >
        {service.title}
      </h3>

      <p
        className={cn(
          "mb-8 text-base leading-relaxed opacity-80",
          isActive ? "text-gray-100" : "text-[#5F6368]",
        )}
      >
        {service.description}
      </p>

      {/* Footer Link */}
      <div className="mt-auto">
        <button
          className={cn(
            "text-base font-bold underline underline-offset-4 transition-colors",
            isActive
              ? "text-[#FF9D42] hover:text-white"
              : "text-[#FF9D42] hover:text-[#E67E22]",
          )}
        >
          View More
        </button>
      </div>

      {/* Subtle sparkle effect for active card */}
      {isActive && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem]">
          <div className="absolute top-[-10%] right-[-10%] h-32 w-32 bg-white/5 blur-3xl rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] h-32 w-32 bg-orange-500/10 blur-3xl rounded-full" />
        </div>
      )}
    </div>
  );
};

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  badge,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-1 px-4 h-8 rounded-[100px] bg-[linear-gradient(180deg,rgba(181,86,18,0.65)_6.22%,rgba(26,66,125,0.65)_100%)] shadow-[inset_0px_0px_8px_#FFFFFF] backdrop-blur-sm w-fit">
          <div className="w-4 h-4 rounded-full relative">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffc4a3_0%,#e16b26_50%,#87390b_100%)]"></div>
            <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white/60 rounded-full blur-[0.5px]"></div>
          </div>
          <span className="text-sm font-semibold text-white tracking-wide">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl md:text-5xl font-extrabold text-[#111827]">
        {title}
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl">{description}</p>
    </div>
  );
};

import React from "react";
import { cn } from "#/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const variantStyles = {
      primary:
        "bg-[#FF8A00]/90 border-white/20 text-white shadow-[0_8px_20px_rgba(255,138,0,0.25)] hover:bg-[#FF8A00] hover:shadow-[0_12px_30px_rgba(255,138,0,0.35)]",
      secondary:
        "bg-white/60 border-white/50 text-[#FF8A00] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:bg-white/80 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "button-group group relative h-14 overflow-hidden rounded-2xl backdrop-blur-md border px-8 text-base font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 hover:-translate-y-0.5 inline-flex items-center justify-center",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        <span className="shine-effect shine-animation" />
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

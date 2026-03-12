import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  className?: string;
}

export const StatItem = ({
  label,
  value,
  suffix = "",
  prefix = "",
  description,
  className,
}: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col items-center text-center gap-3 pt-8 border-t border-slate-200 transition-all duration-300",
        className,
      )}
    >
      <p className="text-lg font-bold text-slate-700 tracking-tight">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl md:text-6xl font-black tracking-tight text-[#1E3A8A]">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

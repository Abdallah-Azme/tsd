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
        "flex flex-col gap-2 p-6 rounded-2xl transition-all duration-500 hover:bg-[var(--surface-strong)] group border border-transparent hover:border-[var(--line)]",
        className,
      )}
    >
      <p className="text-[10px] font-bold text-[var(--kicker)] uppercase tracking-[0.2em]">
        {label}
      </p>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[var(--sea-ink)] group-hover:text-[var(--lagoon-deep)] transition-colors">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-sm text-[var(--sea-ink-soft)] font-medium leading-tight">
        {description}
      </p>
      <div className="h-1 w-8 bg-[var(--line)] group-hover:w-16 group-hover:bg-[var(--lagoon)] transition-all duration-700 rounded-full mt-3" />
    </div>
  );
};

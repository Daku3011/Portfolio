import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  badge,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("w-full border-b border-border pb-6 mb-12 sm:mb-16", className)}>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs sm:text-sm text-accent font-semibold tracking-wider">
            {number}
          </span>
          <span className="text-muted font-mono text-xs">/</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase font-sans">
            {title}
          </h2>
        </div>
        {badge && (
          <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-accent/30 bg-accent/5 text-accent self-start sm:self-auto">
            {badge}
          </span>
        )}
      </div>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground font-mono max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

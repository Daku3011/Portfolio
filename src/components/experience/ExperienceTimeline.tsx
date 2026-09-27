import React from "react";
import { experiences } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExperienceTimeline() {
  return (
    <section className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="03"
        title="EXPERIENCE"
        subtitle="Technical leadership, engineering roles, and developer community stewardship."
        badge="TIMELINE"
      />

      <div className="flex flex-col divide-y divide-border/60">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="py-10 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start group"
          >
            {/* Year Column */}
            <div className="md:col-span-3 font-mono text-sm">
              <span className="text-accent font-bold tracking-wider">
                {exp.year}
              </span>
              {exp.current && (
                <span className="ml-3 px-2 py-0.5 text-[10px] font-mono uppercase bg-accent/10 border border-accent/30 text-accent">
                  CURRENT
                </span>
              )}
            </div>

            {/* Role & Org Column */}
            <div className="md:col-span-5 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase group-hover:text-accent transition-colors font-sans">
                {exp.role}
              </h3>
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1">
                {exp.organization}
              </span>
              <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
                {exp.summary}
              </p>
            </div>

            {/* Focus / Skills Column */}
            <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
              {exp.focus.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono border border-border/80 bg-surface/80 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

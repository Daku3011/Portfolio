import React from "react";
import { buildPhilosophy } from "@/content/philosophy";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PhilosophySection() {
  return (
    <section className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="02"
        title="BUILD PHILOSOPHY"
        subtitle="The mental models and operating principles behind my engineering."
        badge="DISCIPLINE"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buildPhilosophy.map((p) => (
          <div
            key={p.number}
            className="border border-border/80 bg-surface/50 p-6 sm:p-8 flex flex-col justify-between hover:border-accent/40 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-6">
                <span className="font-mono text-sm font-bold text-accent">
                  {p.number}
                </span>
                <span className="font-mono text-[10px] uppercase text-muted tracking-widest">
                  RULE // 0{p.number}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground uppercase group-hover:text-accent transition-colors font-sans">
                {p.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-300 font-mono">
                {p.statement}
              </p>

              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                {p.elaboration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

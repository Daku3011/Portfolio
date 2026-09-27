import React from "react";
import { technicalSystem } from "@/content/system";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechSystem() {
  return (
    <section id="system" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="05"
        title="TECHNICAL SYSTEM"
        subtitle="Core engineering toolchains, runtimes, and distributed architectures verified across live codebases."
        badge="STACK"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technicalSystem.map((category) => (
          <div
            key={category.category}
            className="border border-border/80 bg-surface/40 p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="border-b border-border/40 pb-3 mb-5">
                <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                  {"// "} {category.category}
                </span>
                <p className="font-sans text-xs text-muted-foreground mt-1 leading-normal">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-foreground">
                        {item.name}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.verifiedIn.map((v) => (
                        <span
                          key={v}
                          className="text-[9px] font-mono uppercase px-1.5 py-0.5 border border-border/40 text-muted bg-surface"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { labExperiments } from "@/content/lab";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export function LabSection() {
  return (
    <section id="lab" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="04"
        title="LAB"
        subtitle="Things I'm currently figuring out."
        badge="ACTIVE R&D"
      />

      {/* Masonry / Staggered 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {labExperiments.map((exp, index) => {
          // Asymmetric layout variations: some taller, some compact
          const isTall = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`border border-border/80 bg-surface/40 p-6 flex flex-col justify-between hover:border-accent/40 transition-colors group ${
                isTall ? "min-h-[260px]" : "min-h-[210px]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4 font-mono text-[10px]">
                  <span className="text-accent uppercase tracking-wider font-semibold">
                    {exp.category}
                  </span>
                  <span
                    className={`uppercase font-mono text-[10px] ${
                      exp.status === "ACTIVE EXPERIMENT"
                        ? "text-accent font-semibold"
                        : exp.status === "PROTOTYPE"
                        ? "text-slate-300"
                        : "text-muted"
                    }`}
                  >
                    STATUS: {exp.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-tight text-foreground uppercase group-hover:text-accent transition-colors font-sans">
                  {exp.name}
                </h3>

                <p className="mt-2 text-xs font-mono text-slate-300 leading-normal">
                  {exp.tagline}
                </p>

                {isTall && (
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-sans">
                    {exp.description}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between font-mono text-[10px]">
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-border/60 bg-surface text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={`GitHub for ${exp.name}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {exp.demoUrl && (
                    <a
                      href={exp.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label={`Demo for ${exp.name}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

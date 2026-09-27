import React from "react";
import { labExperiments } from "@/content/lab";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Github, ExternalLink, FlaskConical, Terminal } from "lucide-react";

export function LabSection() {
  return (
    <section id="lab" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="04"
        title="LAB / EXPERIMENTS"
        subtitle="Prototypes, research spikes, and edge-case experiments currently in the laboratory."
        badge="ACTIVE R&D"
      />

      {/* Currently Building Ticker */}
      <div className="mb-12 p-6 border border-border/80 bg-surface/40 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-accent font-bold tracking-wider">
            <FlaskConical className="w-4 h-4" />
            <span>CURRENTLY EXPLORING //</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-300">
            <span>→ Autonomous AI Honeypots</span>
            <span>→ Zero-Trust Agent Governance</span>
            <span>→ Low-Latency Edge Vision Models</span>
            <span>→ Peer-to-Peer LAN Synchronization</span>
          </div>
        </div>
      </div>

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labExperiments.map((exp) => (
          <div
            key={exp.id}
            className="border border-border/80 bg-surface/40 p-6 flex flex-col justify-between hover:border-accent/40 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4 font-mono text-[10px]">
                <span className="text-accent uppercase tracking-wider font-semibold">
                  [{exp.category}]
                </span>
                <span className="text-muted uppercase">
                  {exp.status}
                </span>
              </div>

              <h3 className="text-lg font-bold tracking-tight text-foreground uppercase group-hover:text-accent transition-colors font-sans">
                {exp.name}
              </h3>

              <p className="mt-1 text-xs font-mono text-slate-300">
                {exp.tagline}
              </p>

              <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-sans">
                {exp.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono border border-border/60 bg-surface text-muted"
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
        ))}
      </div>
    </section>
  );
}

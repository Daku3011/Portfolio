"use client";

import React from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArchitectureViewer } from "./ProjectArchitectureViewer";
import { ArrowUpRight, Github, ExternalLink, GitBranch } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrambleText } from "@/components/ui/ScrambleText";

export function SelectedWork() {
  return (
    <section id="work" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="01"
        title="SELECTED WORK"
        subtitle="Things I've built, broken, rebuilt and shipped."
        badge="PRODUCTION SYSTEMS"
      />

      <div className="flex flex-col divide-y divide-border/80">
        {projects.map((project) => (
          <article
            key={project.slug}
            data-project="true"
            className="py-16 sm:py-24 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start group"
          >
            {/* Left Column: Number, Title, Positioning & Story */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted mb-4">
                  <span className="text-accent font-bold text-sm tracking-wider cursor-default">
                    <ScrambleText text={project.number} />
                  </span>
                  <span>/</span>
                  <span className="uppercase tracking-widest">{project.role}</span>
                  <span>·</span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold border border-accent/40 bg-accent/10 text-accent">
                    {project.status}
                  </span>
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="block focus:outline-none"
                >
                  <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground uppercase font-sans group-hover:text-accent group-hover:-translate-y-1 transition-all duration-300">
                    {project.title}
                  </h3>
                </Link>

                <p className="mt-3 text-base sm:text-lg font-mono text-slate-300 leading-snug">
                  {project.tagline}
                </p>

                {/* Technical Stack Tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono border border-border bg-surface text-slate-300 hover:border-accent/40 hover:text-accent transition-colors duration-150"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 font-mono text-xs">
                <Magnetic strength={0.2}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/btn flex items-center gap-2 px-5 py-3 border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-background font-bold tracking-wider transition-all duration-200 active:scale-[0.98]"
                    data-magnetic="true"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </Magnetic>

                <Magnetic strength={0.15}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 border border-border bg-surface hover:border-foreground/40 text-foreground transition-all active:scale-[0.98]"
                  >
                    <Github className="w-4 h-4" />
                    <span>REPOSITORY</span>
                  </a>
                </Magnetic>

                {project.liveUrl && (
                  <Magnetic strength={0.15}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-3 border border-border bg-surface hover:border-accent hover:text-accent text-muted-foreground transition-all active:scale-[0.98]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE DEMO</span>
                    </a>
                  </Magnetic>
                )}
              </div>
            </div>

            {/* Right Column: Visual Architecture & Pipeline */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <ProjectArchitectureViewer
                nodes={project.architecture.nodes}
                flow={project.architecture.flow}
              />

              {/* Decision Snippet Highlight */}
              {project.decisions.length > 0 && (
                <div className="p-4 border border-border/60 bg-surface-muted/40 font-mono text-xs">
                  <div className="text-muted text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-accent" />
                    <span>TRADE-OFF // {project.decisions[0].topic}</span>
                  </div>
                  <div className="text-foreground font-semibold">
                    {project.decisions[0].choice}
                  </div>
                  <p className="text-muted-foreground text-[11px] mt-1 leading-normal">
                    {project.decisions[0].rationale}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

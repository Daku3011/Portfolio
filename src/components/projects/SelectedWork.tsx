"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, Project } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArchitectureViewer } from "./ProjectArchitectureViewer";
import { ArrowUpRight, Github, ExternalLink, GitBranch, Layers } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { ScrambleText } from "@/components/ui/ScrambleText";

function ProjectItem({
  project,
  index,
  total,
  onInView,
}: {
  project: Project;
  index: number;
  total: number;
  onInView: (index: number) => void;
}) {
  const articleRef = useRef<HTMLElement>(null);

  // Parallax subtle offset for the architecture card
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start end", "end start"],
  });

  const archY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.article
      ref={articleRef}
      data-project="true"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
      onViewportEnter={() => onInView(index)}
      className="py-16 sm:py-24 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start group relative"
    >
      {/* Dynamic Animated Divider Top */}
      {index > 0 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent origin-left"
        />
      )}

      {/* Left Column: Number, Title, Positioning & Story */}
      <div className="lg:col-span-6 flex flex-col justify-between h-full">
        <div>
          {/* Telemetry Index & Role */}
          <div className="flex items-center gap-3 font-mono text-xs text-muted mb-4">
            <span className="text-accent font-bold text-sm tracking-wider cursor-default">
              <ScrambleText text={project.number} />
            </span>
            <span>/</span>
            <span className="uppercase tracking-widest text-[11px]">{project.role}</span>
            <span>·</span>
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold border border-accent/40 bg-accent/10 text-accent">
              {project.status}
            </span>
            <span className="ml-auto text-[10px] text-muted font-mono hidden sm:inline">
              INDEX 0{index + 1} OF 0{total}
            </span>
          </div>

          {/* Project Title with smooth lift and glitch on hover */}
          <Link href={`/work/${project.slug}`} className="block focus:outline-none group/title">
            <h3
              data-text={project.title}
              className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground uppercase font-sans group-hover/title:text-accent group-hover/title:glitch-active group-hover/title:-translate-y-1 transition-all duration-300"
            >
              {project.title}
            </h3>
          </Link>

          {/* Tagline */}
          <p className="mt-3 text-base sm:text-lg font-mono text-slate-300 leading-snug">
            {project.tagline}
          </p>

          {/* Technical Stack Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                className="px-2.5 py-1 text-xs font-mono border border-border bg-surface text-slate-300 hover:border-accent/50 hover:text-accent transition-colors duration-150"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
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

      {/* Right Column: Visual Architecture with Subtle Scroll Parallax */}
      <motion.div
        style={{ y: archY }}
        className="lg:col-span-6 flex flex-col gap-4 will-change-transform"
      >
        <ProjectArchitectureViewer
          nodes={project.architecture.nodes}
          flow={project.architecture.flow}
        />

        {/* Architectural Trade-off Snippet */}
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
      </motion.div>
    </motion.article>
  );
}

export function SelectedWork() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  return (
    <section
      id="work"
      className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80 relative"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-border pb-6 mb-12 sm:mb-16">
        <div className="flex items-baseline gap-4 group/hdr cursor-default">
          <span className="font-mono text-xs sm:text-sm text-accent font-semibold tracking-wider">
            01
          </span>
          <span className="text-muted font-mono text-xs">/</span>
          <h2
            data-text="SELECTED WORK"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase font-sans group-hover/hdr:glitch-active transition-all"
          >
            SELECTED WORK
          </h2>
        </div>

        {/* Live Scroll Telemetry Status */}
        <div className="flex items-center gap-4 font-mono text-xs self-start sm:self-auto">
          <div className="flex items-center gap-2 px-3 py-1 border border-border/80 bg-surface/60 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span
              data-text={`FOCUS: ${projects[activeProjectIdx].title.toUpperCase()}`}
              className="hover:glitch-active transition-all"
            >
              FOCUS: {projects[activeProjectIdx].title.toUpperCase()}
            </span>
          </div>
          <span className="text-muted text-[11px] hidden md:inline">
            [0{activeProjectIdx + 1} / 0{projects.length}]
          </span>
        </div>
      </div>

      {/* Projects List with Scroll Animations */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.slug}
            project={project}
            index={index}
            total={projects.length}
            onInView={(idx) => setActiveProjectIdx(idx)}
          />
        ))}
      </div>
    </section>
  );
}

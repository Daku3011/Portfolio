import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { CaseStudySvgDiagram } from "@/components/projects/CaseStudySvgDiagram";
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} — Case Study | Dwarkesh Ramani`,
    description: `${project.tagline} ${project.description}`,
  });
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full py-16 sm:py-24 max-w-5xl mx-auto px-6 sm:px-8">
      {/* Back to Work navigation */}
      <div className="mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>INDEX / RETURN TO SELECTED WORK</span>
        </Link>
      </div>

      {/* 1. HERO */}
      <header className="border-b border-border pb-10">
        <div className="flex items-center gap-3 font-mono text-xs text-muted mb-4">
          <span className="text-accent font-bold text-sm tracking-wider">
            {project.number}
          </span>
          <span>/</span>
          <span className="uppercase">{project.role}</span>
          <span>·</span>
          <span className="uppercase text-slate-300">{project.year}</span>
          <span>·</span>
          <span className="px-2 py-0.5 text-[10px] uppercase font-bold border border-accent/40 bg-accent/10 text-accent">
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tightest uppercase text-foreground">
          {project.title}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-medium text-accent leading-snug">
          {project.tagline}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono border border-border bg-surface text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border border-border bg-surface hover:border-accent hover:text-accent text-foreground transition-all flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>VIEW SOURCE ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-accent bg-accent text-background font-bold tracking-wider hover:bg-accent/90 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>LAUNCH LIVE APPLICATION</span>
            </a>
          )}
        </div>
      </header>

      {/* 2. PROJECT OVERVIEW */}
      <section className="py-12 border-b border-border/80">
        <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-3">
          01 // OVERVIEW
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed font-sans">
          {project.description}
        </p>
      </section>

      {/* 3. THE PROBLEM & THE IDEA */}
      <section className="py-12 border-b border-border/80 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-border/60 bg-surface/40 p-6 sm:p-8">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-rose-400 uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>THE PROBLEM</span>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
            {project.problem}
          </p>
        </div>

        <div className="border border-accent/30 bg-surface/40 p-6 sm:p-8">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent uppercase tracking-wider mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>THE IDEA & APPROACH</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            {project.idea}
          </p>
        </div>
      </section>

      {/* 4. SYSTEM ARCHITECTURE (SVG VECTOR DIAGRAM) */}
      <section className="py-12 border-b border-border/80">
        <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-6">
          02 // SYSTEM ARCHITECTURE & DATA FLOW
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed font-sans mb-8">
          {project.architecture.overview}
        </p>

        <CaseStudySvgDiagram slug={project.slug} />

        <div className="mt-8 space-y-2 font-mono text-xs">
          <span className="block text-[10px] uppercase text-muted tracking-wider mb-2">
            DETAILED EXECUTION SEQUENCE
          </span>
          {project.architecture.flow.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 border border-border/40 bg-surface/20">
              <span className="text-accent font-bold">0{idx + 1} →</span>
              <span className="text-slate-300">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TECHNICAL DECISION BLOCKS (Layer 14 Format) */}
      <section className="py-12 border-b border-border/80">
        <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-8">
          03 // TECHNICAL DECISIONS & TRADE-OFFS
        </h2>
        <div className="space-y-6">
          {project.decisions.map((decision, index) => (
            <div
              key={index}
              className="p-6 border border-border/80 bg-surface/50 font-mono text-xs space-y-3"
            >
              <div>
                <span className="text-muted text-[10px] uppercase tracking-widest block mb-1">
                  DECISION
                </span>
                <span className="text-foreground text-sm font-bold">
                  {decision.choice}
                </span>
              </div>

              <div className="pt-2 border-t border-border/40">
                <span className="text-muted text-[10px] uppercase tracking-widest block mb-1">
                  ALTERNATIVES CONSIDERED
                </span>
                <span className="text-slate-300 text-xs">
                  {decision.topic}
                </span>
              </div>

              <div className="pt-2 border-t border-border/40 font-sans">
                <span className="font-mono text-accent text-[10px] uppercase tracking-widest block mb-1">
                  WHY
                </span>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {decision.rationale}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CHALLENGE / HOW PAIRS (Layer 14 Format) */}
      <section className="py-12 border-b border-border/80">
        <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-6">
          04 // CHALLENGES & RESOLUTIONS
        </h2>
        <div className="space-y-4 font-mono text-xs">
          {project.challenges.map((challenge, i) => (
            <div key={i} className="p-5 border border-border/60 bg-surface/30 space-y-2">
              <div className="text-rose-400 font-bold tracking-wider uppercase text-[11px]">
                CHALLENGE // 0{i + 1}
              </div>
              <p className="text-foreground font-sans text-xs leading-relaxed">
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. VERIFIED RESULTS & OUTCOMES */}
      <section className="py-12 border-b border-border/80">
        <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-6">
          05 // VERIFIED OUTCOMES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.outcomes.map((outcome, idx) => (
            <div key={idx} className="p-4 border border-border/60 bg-surface/40 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LESSONS LEARNED */}
      <section className="py-12 border-b border-border/80">
        <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-widest mb-6">
          06 // LESSONS & TAKEAWAYS
        </h2>
        <div className="space-y-3 font-mono text-xs text-muted-foreground">
          {project.lessons.map((lesson, idx) => (
            <div key={idx} className="p-4 border-l-2 border-accent bg-surface/30">
              <span className="text-foreground leading-relaxed">{lesson}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. REPO & DEMO FOOTER CALLOUT */}
      <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-muted uppercase">STATUS: VERIFIED ON GITHUB</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-border hover:border-accent text-foreground transition-all"
          >
            <Github className="w-4 h-4" />
            <span>INSPECT REPO</span>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-accent text-background font-bold tracking-wider hover:bg-accent/90 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>TEST DEMO</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

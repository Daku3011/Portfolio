import React from "react";
import Link from "next/link";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArchitectureViewer } from "@/components/projects/ProjectArchitectureViewer";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Selected Work & Case Studies — Dwarkesh Ramani",
  description: "Architectural case studies and systems built by Dwarkesh Ramani: MiniCode, AI Hackathon Judge, GitRemote, Class Intelligence System, and more."
});

export default function WorkPage() {
  return (
    <div className="w-full py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8">
      <SectionHeading
        number="INDEX"
        title="ENGINEERING ARCHIVE"
        subtitle="Complete catalog of production platforms, distributed systems, and AI evaluation tools."
        badge="CASE STUDIES"
      />

      <div className="flex flex-col divide-y divide-border/80">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="py-16 sm:py-20 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted mb-3">
                  <span className="text-accent font-bold text-sm tracking-wider">
                    {project.number}
                  </span>
                  <span>/</span>
                  <span className="uppercase">{project.role}</span>
                  <span>·</span>
                  <span className="text-accent uppercase font-semibold">
                    {project.status}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground uppercase font-sans">
                  {project.title}
                </h2>

                <p className="mt-2 text-base font-medium text-accent">
                  {project.tagline}
                </p>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono border border-border bg-surface text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
                <Link
                  href={`/work/${project.slug}`}
                  className="px-5 py-3 border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-background font-bold tracking-wider transition-all flex items-center gap-2"
                >
                  <span>READ FULL CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-border bg-surface hover:border-foreground text-foreground transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProjectArchitectureViewer
                nodes={project.architecture.nodes}
                flow={project.architecture.flow}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="06"
        title="ABOUT"
        badge="ENGINEER"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Strong Opener */}
        <div className="lg:col-span-6 space-y-6">
          <p className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
            I BUILD THINGS<br />
            THAT WORK.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
            Computer engineering student based in Surat. Moving between product development, multimodal AI systems, backend architectures, and experiments that started as &ldquo;what if we automated this?&rdquo;
          </p>
        </div>

        {/* Sparse Technical Grid */}
        <div className="lg:col-span-6 border border-border/80 bg-surface/40 p-6 sm:p-8 font-mono text-xs">
          <div className="space-y-4 divide-y divide-border/40">
            <div className="flex items-center justify-between pb-3">
              <span className="text-muted uppercase tracking-widest text-[11px]">BASED IN</span>
              <span className="text-foreground font-semibold">{profile.location}</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-muted uppercase tracking-widest text-[11px]">STUDYING</span>
              <span className="text-foreground font-semibold">Computer Engineering</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-muted uppercase tracking-widest text-[11px]">FOCUS</span>
              <span className="text-accent font-semibold">Full-Stack · AI Systems · Developer Tools</span>
            </div>

            <div className="flex items-center justify-between pt-3">
              <span className="text-muted uppercase tracking-widest text-[11px]">CURRENTLY</span>
              <span className="text-slate-300">Building, experimenting, shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

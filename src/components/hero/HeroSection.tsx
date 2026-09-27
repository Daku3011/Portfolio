"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownRight, Terminal, Github, Cpu, ExternalLink } from "lucide-react";
import { profile } from "@/content/profile";
import { ProfileVisualCard } from "./ProfileVisualCard";
import { Magnetic } from "@/components/ui/Magnetic";

export function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-border/80">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 engineering-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Telemetry Status Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-border/40 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-foreground font-semibold tracking-wider">
              {profile.statusText}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-muted">
            <span>LOC: {profile.location.toUpperCase()}</span>
            <span>SYSTEM: ONLINE (IST)</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pt-10 sm:pt-16">
          {/* Left Column: Macro Typography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
                DWARKESH RAMANI
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tightest leading-[0.92] text-foreground uppercase">
                I BUILD<br />
                SOFTWARE<br />
                <span className="text-accent">
                  THAT MOVES.
                </span>
              </h1>
            </div>

            {/* Quick Actions & Meta */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 font-mono text-xs">
              <Magnetic strength={0.25}>
                <a
                  href="#work"
                  className="group flex items-center gap-2 px-6 py-3.5 bg-accent text-background font-bold tracking-wider hover:bg-accent/90 transition-all active:scale-[0.98]"
                  data-magnetic="true"
                >
                  <span>EXPLORE WORK</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 border border-border bg-surface hover:border-accent hover:text-accent text-foreground transition-all active:scale-[0.98]"
                  data-magnetic="true"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB / DAKU3011</span>
                </a>
              </Magnetic>

              <a
                href="#system"
                className="hidden sm:flex items-center gap-2 px-4 py-3.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Cpu className="w-4 h-4 text-accent" />
                <span>INSPECT SYSTEM ARCHITECTURE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Operator Visual Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <ProfileVisualCard />
          </div>
        </div>
      </div>
    </section>
  );
}

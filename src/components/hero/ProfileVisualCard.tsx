"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { Terminal, Shield, Cpu, MapPin } from "lucide-react";

export function ProfileVisualCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:max-w-none border border-border/80 bg-surface/50 backdrop-blur-sm p-5 sm:p-7 flex flex-col gap-5 group select-none transition-all duration-300 hover:border-accent/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-project="true"
    >
      {/* Corner Precision Crosshairs */}
      <span className="absolute -top-1.5 -left-1.5 text-accent font-mono text-xs leading-none">+</span>
      <span className="absolute -top-1.5 -right-1.5 text-accent font-mono text-xs leading-none">+</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-accent font-mono text-xs leading-none">+</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-accent font-mono text-xs leading-none">+</span>

      {/* Card Header Telemetry */}
      <div className="flex items-center justify-between border-b border-border/50 pb-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-foreground font-semibold uppercase tracking-wider">
            OPERATOR // IDENT
          </span>
        </div>
        <span className="text-muted text-[10px] tracking-widest uppercase">
          ID: DAKU3011
        </span>
      </div>

      {/* Main Image Viewport with Engineering Overlay */}
      <div className="relative w-full aspect-square max-h-[380px] overflow-hidden border border-border/80 bg-background/80 flex items-center justify-center">
        <Image
          src="/dwarkesh.jpg"
          alt="Dwarkesh Ramani — Engineer"
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          priority
          className="object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
        />

        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-background/60 pointer-events-none" />

        {/* Tactical Crosshair / Focus Grid in corners */}
        <div className="absolute top-3 left-3 px-2 py-0.5 border border-border/60 bg-background/80 backdrop-blur-sm font-mono text-[9px] text-accent tracking-widest uppercase">
          SYSTEM_ONLINE
        </div>

        <div className="absolute bottom-3 right-3 px-2 py-0.5 border border-border/60 bg-background/80 backdrop-blur-sm font-mono text-[9px] text-muted tracking-widest">
          UTC+05:30
        </div>
      </div>

      {/* Operator Metadata Footer */}
      <div className="space-y-3 font-mono text-xs pt-1">
        <div className="flex items-center justify-between">
          <span className="text-foreground font-bold tracking-tight text-sm">
            {profile.name.toUpperCase()}
          </span>
          <span className="text-accent text-[11px]">
            COMPUTER ENGINEER
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground pt-2 border-t border-border/40">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Surat, India</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-accent" />
            <span>Full-Stack · AI</span>
          </div>
        </div>

        {/* Dynamic status line */}
        <div className="p-2.5 bg-surface-muted/60 border border-border/50 text-[10px] text-slate-300 flex items-center justify-between">
          <span>MODE: ACTIVE IN THE LAB</span>
          <span className="text-accent font-semibold">● READY</span>
        </div>
      </div>
    </div>
  );
}

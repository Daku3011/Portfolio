"use client";

import React, { useEffect, useState } from "react";

export function SplashScreen() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isSplitting, setIsSplitting] = useState(false);

  useEffect(() => {
    // Check if splash was already shown in this session
    const seen = sessionStorage.getItem("splashSeen");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || prefersReducedMotion) {
      return;
    }

    setShouldRender(true);

    // Timeline: 0.8s hold -> split panels -> 1.4s total complete
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
    }, 800);

    const finishTimer = setTimeout(() => {
      setShouldRender(false);
      sessionStorage.setItem("splashSeen", "true");
    }, 1400);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] pointer-events-none flex flex-col overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Panel */}
      <div
        className={`w-full h-1/2 bg-background border-b border-border/80 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSplitting ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Center Wordmark Reveal */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-300 ${
          isSplitting ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex items-center gap-2 mb-2 font-mono text-xs text-accent uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
          <span>INITIALIZING</span>
        </div>
        <h1 className="font-mono text-2xl sm:text-4xl font-black tracking-widest text-foreground uppercase">
          DWARKESH
        </h1>
        <span className="font-mono text-[10px] text-muted tracking-widest mt-1">
          BUILD SYSTEM // 2026
        </span>
      </div>

      {/* Bottom Panel */}
      <div
        className={`w-full h-1/2 bg-background border-t border-border/80 transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isSplitting ? "translate-y-full" : "translate-y-0"
        }`}
      />
    </div>
  );
}

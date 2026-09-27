"use client";

import React, { useEffect, useState } from "react";

export function SplashScreen() {
  const [shouldRender, setShouldRender] = useState(true);
  const [isSplitting, setIsSplitting] = useState(false);
  const [progress, setProgress] = useState(12);
  const [statusLog, setStatusLog] = useState("INITIALIZING DWARKESH // BUILD SYSTEM...");

  useEffect(() => {
    // If user prefers reduced motion, skip quickly
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    // Lock body scrolling during splash sequence
    document.body.style.overflow = "hidden";

    // Progressive Boot Steps: ~2.5s hold + 0.7s split reveal
    const t1 = setTimeout(() => {
      setProgress(48);
      setStatusLog("MOUNTING REPOSITORIES & NEURAL CORES...");
    }, 600);

    const t2 = setTimeout(() => {
      setProgress(82);
      setStatusLog("CALIBRATING TELEMETRY & TACTICAL WORKSPACE...");
    }, 1300);

    const t3 = setTimeout(() => {
      setProgress(100);
      setStatusLog("SYSTEM VERIFIED · ACCESS GRANTED");
    }, 1900);

    // Trigger split curtain opening
    const splitTimer = setTimeout(() => {
      setIsSplitting(true);
      document.body.style.overflow = "";
    }, 2500);

    // Remove component from DOM completely after curtain animation finishes
    const finishTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3200);

    // Keyboard listener: Escape key skips immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSplitting(true);
        document.body.style.overflow = "";
        setTimeout(() => setShouldRender(false), 600);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  const handleSkip = () => {
    setIsSplitting(true);
    document.body.style.overflow = "";
    setTimeout(() => setShouldRender(false), 600);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col overflow-hidden select-none transition-all ${
        isSplitting ? "pointer-events-none" : "pointer-events-auto"
      }`}
      aria-label="System Initializing"
    >
      {/* Top Split Panel */}
      <div
        className={`w-full h-1/2 bg-[#090A0C] border-b border-border transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isSplitting ? "-translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Center Cinematic Engineering HUD */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center z-20 px-6 transition-all duration-500 ${
          isSplitting ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
        }`}
      >
        {/* Monogram Badge */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 border border-border/80 bg-surface/80 rounded mb-6 font-mono text-xs text-accent">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="font-bold tracking-widest text-[11px]">SYS_INIT // DWARKESH.LAB</span>
        </div>

        {/* Primary Name & Monogram */}
        <div className="text-center">
          <div className="text-5xl sm:text-7xl font-mono font-black tracking-tight text-foreground flex items-center justify-center gap-2">
            <span>DWARKESH</span>
            <span className="text-accent">RAMANI</span>
          </div>
          <div className="mt-3 font-mono text-xs sm:text-sm text-slate-400 tracking-wider uppercase">
            Computer Engineering · Full-Stack Engineer
          </div>
        </div>

        {/* Precision Progress Bar */}
        <div className="w-full max-w-md mt-10">
          <div className="flex justify-between items-center font-mono text-[11px] text-muted mb-2">
            <span className="truncate pr-2 text-slate-300">{statusLog}</span>
            <span className="text-accent font-semibold">{progress}%</span>
          </div>
          <div className="w-full h-1 bg-surface border border-border/60 overflow-hidden relative rounded-full">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-accent to-emerald-300 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(46,229,157,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Telemetry Footer & Quick Skip */}
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-8 flex justify-between items-center font-mono text-[11px] text-muted">
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent/80 rounded-full" />
            <span>OPERATOR // DAKU3011</span>
          </div>
          <button
            onClick={handleSkip}
            className="hover:text-accent border border-border/60 px-3 py-1 bg-surface/40 hover:bg-surface text-muted transition-colors cursor-pointer ml-auto"
          >
            [ ESC / SKIP ]
          </button>
        </div>
      </div>

      {/* Bottom Split Panel */}
      <div
        className={`w-full h-1/2 bg-[#090A0C] border-t border-border transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isSplitting ? "translate-y-full" : "translate-y-0"
        }`}
      />
    </div>
  );
}

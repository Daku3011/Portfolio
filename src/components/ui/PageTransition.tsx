"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="relative w-full flex-1 flex flex-col">
      {/* Precision horizontal sweeping indicator */}
      <div
        className={`fixed top-0 left-0 right-0 h-[2px] bg-accent z-[9990] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left pointer-events-none ${
          isTransitioning ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-out ${
          isTransitioning ? "opacity-75 translate-y-[2px]" : "opacity-100 translate-y-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

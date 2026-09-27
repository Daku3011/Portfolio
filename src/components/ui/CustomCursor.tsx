"use client";

import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<"default" | "link" | "project" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect fine pointer (mouse)
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasMouse) return;

    setIsTouch(false);
    document.body.classList.add("custom-cursor-active");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-project]");
      const linkEl = target.closest("a, button, [role='button'], input, textarea");
      const dragEl = target.closest("[data-drag]");

      if (projectEl) {
        setCursorState("project");
      } else if (dragEl) {
        setCursorState("drag");
      } else if (linkEl) {
        setCursorState("link");
      } else {
        setCursorState("default");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    // Spring/lerp loop for ring
    let animationId: number;
    const lerp = 0.18; // smooth lag

    const tick = () => {
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationId = requestAnimationFrame(tick);
    };
    animationId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Exact 1:1 Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-[3px] -mt-[3px] w-[6px] h-[6px] rounded-full bg-accent pointer-events-none z-[9999] transition-opacity duration-150 ${
          isVisible && cursorState === "default" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Lagging Spring Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-200 -translate-x-1/2 -translate-y-1/2 ${
          !isVisible ? "opacity-0 scale-50" : "opacity-100"
        } ${
          cursorState === "default"
            ? "-ml-[18px] -mt-[18px] w-[36px] h-[36px] rounded-full border border-border/80 bg-transparent text-transparent"
            : cursorState === "link"
            ? "-ml-[24px] -mt-[24px] w-[48px] h-[48px] rounded-full border border-accent bg-accent/15 text-transparent scale-110"
            : cursorState === "project"
            ? "-ml-[36px] -mt-[36px] w-[72px] h-[72px] rounded-full border border-accent bg-accent text-background scale-100 shadow-lg shadow-accent/20"
            : "-ml-[28px] -mt-[28px] w-[56px] h-[56px] rounded-full border border-accent bg-background/80 backdrop-blur-sm text-accent"
        }`}
      >
        {cursorState === "project" && "VIEW"}
        {cursorState === "drag" && "DRAG"}
      </div>
    </>
  );
}

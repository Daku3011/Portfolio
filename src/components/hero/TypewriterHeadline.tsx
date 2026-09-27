"use client";

import React, { useState, useEffect } from "react";

const LINES = ["I BUILD", "SOFTWARE", "THAT MOVES."];

export function TypewriterHeadline() {
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", "", ""]);
  const [currentLineIdx, setCurrentLineIdx] = useState<number>(0);
  const [currentCharIdx, setCurrentCharIdx] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    // If user prefers reduced motion, skip typing animation immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayedLines(LINES);
      setIsComplete(true);
      return;
    }

    if (currentLineIdx >= LINES.length) {
      setIsComplete(true);
      return;
    }

    const targetLine = LINES[currentLineIdx];

    if (currentCharIdx < targetLine.length) {
      // Type next character
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLineIdx] = targetLine.slice(0, currentCharIdx + 1);
          return updated;
        });
        setCurrentCharIdx((prev) => prev + 1);
      }, 45); // typing speed

      return () => clearTimeout(timer);
    } else {
      // Finished current line, pause slightly then advance to next line
      const linePause = setTimeout(() => {
        setCurrentLineIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      }, 140);

      return () => clearTimeout(linePause);
    }
  }, [currentLineIdx, currentCharIdx]);

  return (
    <h1
      className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tightest leading-[0.92] text-foreground uppercase select-none min-h-[2.8em] sm:min-h-[2.8em]"
      aria-label="I BUILD SOFTWARE THAT MOVES."
    >
      {/* Line 1: I BUILD */}
      <span className="block">
        {displayedLines[0]}
        {currentLineIdx === 0 && (
          <span className="inline-block w-[0.08em] h-[0.82em] bg-accent ml-1 align-baseline animate-pulse shadow-[0_0_8px_rgba(46,229,157,0.8)]" />
        )}
      </span>

      {/* Line 2: SOFTWARE */}
      <span className="block">
        {displayedLines[1]}
        {currentLineIdx === 1 && (
          <span className="inline-block w-[0.08em] h-[0.82em] bg-accent ml-1 align-baseline animate-pulse shadow-[0_0_8px_rgba(46,229,157,0.8)]" />
        )}
      </span>

      {/* Line 3: THAT MOVES. */}
      <span className="block text-accent">
        {displayedLines[2]}
        {(currentLineIdx === 2 || isComplete) && (
          <span
            className={`inline-block w-[0.08em] h-[0.82em] bg-accent ml-1 align-baseline shadow-[0_0_8px_rgba(46,229,157,0.8)] ${
              isComplete ? "animate-pulse" : ""
            }`}
          />
        )}
      </span>
    </h1>
  );
}

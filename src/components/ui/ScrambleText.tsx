"use client";

import React, { useRef } from "react";
import { scrambleText } from "@/lib/scramble";

interface ScrambleTextProps {
  text: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  duration?: number;
}

export function ScrambleText({
  text,
  as: Component = "span",
  className = "",
  duration = 400,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      scrambleText(ref.current, text, duration);
    }
  };

  return (
    <Component
      ref={ref as any}
      onMouseEnter={handleMouseEnter}
      className={`inline-block ${className}`}
    >
      {text}
    </Component>
  );
}

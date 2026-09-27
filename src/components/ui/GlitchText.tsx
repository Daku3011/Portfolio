"use client";

import React, { useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  active?: boolean;
  hoverGlitch?: boolean;
}

export function GlitchText({
  text,
  className = "",
  as: Component = "span",
  active = false,
  hoverGlitch = true,
}: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      data-text={text}
      onMouseEnter={() => hoverGlitch && setIsHovered(true)}
      onMouseLeave={() => hoverGlitch && setIsHovered(false)}
      className={`glitch-text ${active || isHovered ? "glitch-active" : ""} ${className}`}
    >
      {text}
    </Component>
  );
}

import React from "react";

const TICKER_ITEMS = [
  "FULL-STACK ENGINEER",
  "AI SYSTEMS",
  "DEVELOPER TOOLS",
  "REACT NATIVE",
  "FASTAPI",
  "NEXT.JS 15",
  "POSTGRESQL",
  "REDIS",
  "DOCKER",
  "GEMINI 2.5",
  "CHROMADB",
  "SURAT, INDIA",
];

export function MarqueeTicker() {
  const content = TICKER_ITEMS.join("  ·  ") + "  ·  ";

  return (
    <div
      className="w-full border-y border-border/80 py-3 overflow-hidden bg-surface/30 select-none"
      aria-label="Technology and engineering specialties"
    >
      <div className="marquee-container">
        <div className="marquee-track font-mono text-[11px] uppercase tracking-widest text-muted">
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
}

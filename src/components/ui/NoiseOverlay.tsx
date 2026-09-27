import React from "react";

export function NoiseOverlay() {
  return (
    <>
      <svg className="hidden" aria-hidden="true">
        <filter id="site-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="noise-overlay"
        style={{ filter: "url(#site-noise)" }}
        aria-hidden="true"
      />
      <div className="bg-grid-precision" aria-hidden="true" />
    </>
  );
}

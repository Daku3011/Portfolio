import React from "react";
import { TechSystem } from "@/components/system/TechSystem";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Technical System & Architecture — Dwarkesh Ramani",
  description: "Core engineering toolchain, distributed runtimes, and frameworks verified across production codebases by Dwarkesh Ramani."
});

export default function SystemPage() {
  return (
    <div className="w-full">
      <TechSystem />
    </div>
  );
}

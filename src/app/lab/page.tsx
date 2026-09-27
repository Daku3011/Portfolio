import React from "react";
import { LabSection } from "@/components/lab/LabSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Lab & Experiments — Dwarkesh Ramani",
  description: "R&D experiments, autonomous agent honeypots, edge computer vision, and zero-trust security prototypes by Dwarkesh Ramani."
});

export default function LabPage() {
  return (
    <div className="w-full">
      <LabSection />
    </div>
  );
}

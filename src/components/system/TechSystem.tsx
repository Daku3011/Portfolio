import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface SystemColumn {
  title: string;
  items: string[];
}

const SYSTEM_COLUMNS: SystemColumn[] = [
  {
    title: "FRONTEND",
    items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "State & Context"],
  },
  {
    title: "BACKEND",
    items: ["FastAPI (Python)", "Node.js / Express", "REST Architecture", "Webhooks & IPC", "AsyncIO", "Celery Queues"],
  },
  {
    title: "DATA & STATE",
    items: ["PostgreSQL", "Redis", "ChromaDB (Vector)", "SQL Optimization", "Relational Models"],
  },
  {
    title: "AI & MULTIMODAL",
    items: ["Gemini 2.5 / 1.5", "RAG Pipelines", "Autonomous Agents", "Multi-Persona Panels", "Computer Vision", "MediaPipe / OpenCV"],
  },
  {
    title: "INFRASTRUCTURE",
    items: ["Docker Sandboxing", "AWS Cloud", "Vercel Edge", "Render Deployments", "Linux / POSIX"],
  },
  {
    title: "MOBILE & EDGE",
    items: ["React Native", "Expo", "Local Subnet Sync", "UDP / Socket Pairing", "Edge Inference (ONNX)"],
  },
];

export function TechSystem() {
  return (
    <section id="system" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="05"
        title="SYSTEM"
        subtitle="Architectural matrix verified across production repositories."
        badge="RUNTIME MATRIX"
      />

      {/* Horizontal Scrollable Technical Grid */}
      <div className="w-full overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0">
        <div className="min-w-[760px] grid grid-cols-6 border border-border/80 bg-surface/30 divide-x divide-border/80 font-mono text-xs">
          {SYSTEM_COLUMNS.map((col) => (
            <div key={col.title} className="p-5 flex flex-col gap-6">
              {/* Column Header */}
              <div className="border-b border-border/60 pb-3">
                <span className="text-accent font-bold tracking-wider text-[11px] uppercase block">
                  {col.title}
                </span>
                <span className="text-muted text-[9px] block mt-0.5">
                  {col.items.length} TECHNOLOGIES
                </span>
              </div>

              {/* Items List */}
              <ul className="space-y-3.5" role="list">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/90 hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-accent/60 text-[9px]">▪</span>
                    <span className="tracking-tight text-[11px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

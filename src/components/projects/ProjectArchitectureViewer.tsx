import React from "react";
import { ProjectArchitectureNode } from "@/content/projects";
import { Database, Server, Smartphone, Cpu, ShieldCheck, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  nodes: ProjectArchitectureNode[];
  flow: string[];
}

export function ProjectArchitectureViewer({ nodes, flow }: Props) {
  const getIcon = (type: ProjectArchitectureNode["type"]) => {
    switch (type) {
      case "client":
        return <Smartphone className="w-3.5 h-3.5 text-sky-400" />;
      case "service":
        return <Server className="w-3.5 h-3.5 text-accent" />;
      case "db":
        return <Database className="w-3.5 h-3.5 text-amber-400" />;
      case "ai":
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      case "sandbox":
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-muted-foreground" />;
    }
  };

  return (
    <div className="w-full border border-border/80 bg-surface/60 p-5 sm:p-6 flex flex-col gap-5">
      <div className="flex items-center justify-between border-b border-border/40 pb-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          SYSTEM TOPOLOGY & EXECUTION PIPELINE
        </span>
        <span className="font-mono text-[10px] text-muted-foreground uppercase">
          {nodes.length} ARCHITECTURAL NODES
        </span>
      </div>

      {/* Nodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nodes.map((node, i) => (
          <div
            key={i}
            className="p-3 border border-border bg-surface-muted/60 flex flex-col justify-between gap-2 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-foreground">
                {node.label}
              </span>
              {getIcon(node.type)}
            </div>
            {node.sublabel && (
              <span className="font-mono text-[10px] text-muted">
                {node.sublabel}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Execution Flow Sequence */}
      <div className="pt-2">
        <span className="block font-mono text-[10px] uppercase text-muted tracking-wider mb-2">
          EXECUTION FLOW
        </span>
        <div className="space-y-1.5 font-mono text-xs text-muted-foreground">
          {flow.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="text-accent text-[11px] font-bold mt-0.5">
                0{idx + 1} →
              </span>
              <span className="leading-relaxed text-slate-300">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

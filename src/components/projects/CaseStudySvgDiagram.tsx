import React from "react";

interface Props {
  slug: string;
}

export function CaseStudySvgDiagram({ slug }: Props) {
  if (slug === "minicode") {
    return (
      <div className="w-full border border-border/80 bg-surface/50 p-6 overflow-x-auto">
        <span className="block font-mono text-[10px] uppercase text-muted tracking-widest mb-4">
          FIG 1.0 // PIPELINE ARCHITECTURE (EVENT-DRIVEN WEBHOOK HARNESS)
        </span>
        <svg
          viewBox="0 0 800 240"
          className="w-full min-w-[650px] h-auto text-xs font-mono"
          aria-label="MiniCode Architecture Flow"
        >
          {/* Arrows */}
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#2ee59d" />
            </marker>
          </defs>

          {/* Node 1: Student Git */}
          <rect x="20" y="90" width="110" height="60" fill="#101216" stroke="#222631" strokeWidth="1.5" />
          <text x="75" y="118" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">GITHUB</text>
          <text x="75" y="134" fill="#9ca3af" textAnchor="middle" fontSize="10">Git Push Hook</text>

          {/* Line 1 -> 2 */}
          <path d="M 130 120 L 174 120" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 2: Next.js Frontend */}
          <rect x="180" y="90" width="120" height="60" fill="#101216" stroke="#222631" strokeWidth="1.5" />
          <text x="240" y="118" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">NEXT.JS 15</text>
          <text x="240" y="134" fill="#9ca3af" textAnchor="middle" fontSize="10">App Router HUD</text>

          {/* Line 2 -> 3 */}
          <path d="M 300 120 L 344 120" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 3: FastAPI Backend */}
          <rect x="350" y="90" width="120" height="60" fill="#101216" stroke="#2ee59d" strokeWidth="1.5" />
          <text x="410" y="118" fill="#2ee59d" textAnchor="middle" fontWeight="bold">FASTAPI</text>
          <text x="410" y="134" fill="#9ca3af" textAnchor="middle" fontSize="10">Async Orchestrator</text>

          {/* Fork to Redis / Celery */}
          <path d="M 470 120 L 514 80" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M 470 120 L 514 160" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 4A: Redis & Celery */}
          <rect x="520" y="50" width="120" height="50" fill="#101216" stroke="#222631" strokeWidth="1.5" />
          <text x="580" y="74" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">REDIS / CELERY</text>
          <text x="580" y="88" fill="#9ca3af" textAnchor="middle" fontSize="10">Task Queue</text>

          {/* Node 4B: PostgreSQL */}
          <rect x="520" y="140" width="120" height="50" fill="#101216" stroke="#222631" strokeWidth="1.5" />
          <text x="580" y="164" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">POSTGRESQL</text>
          <text x="580" y="178" fill="#9ca3af" textAnchor="middle" fontSize="10">User & State DB</text>

          {/* Convergence to Docker Sandbox */}
          <path d="M 640 75 L 684 105" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow)" />

          {/* Node 5: Docker Sandbox + Gemini */}
          <rect x="690" y="85" width="100" height="70" fill="#101216" stroke="#2ee59d" strokeWidth="1.5" />
          <text x="740" y="115" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">DOCKER</text>
          <text x="740" y="130" fill="#2ee59d" textAnchor="middle" fontSize="10">Sandbox</text>
          <text x="740" y="144" fill="#9ca3af" textAnchor="middle" fontSize="9">+ Gemini Judge</text>
        </svg>
      </div>
    );
  }

  if (slug === "ai-hackathon-judge") {
    return (
      <div className="w-full border border-border/80 bg-surface/50 p-6 overflow-x-auto">
        <span className="block font-mono text-[10px] uppercase text-muted tracking-widest mb-4">
          FIG 1.0 // MULTI-PERSONA PARALLEL CONSENSUS MATRIX
        </span>
        <svg
          viewBox="0 0 800 240"
          className="w-full min-w-[650px] h-auto text-xs font-mono"
          aria-label="AI Hackathon Judge Consensus Matrix"
        >
          <defs>
            <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#2ee59d" />
            </marker>
          </defs>

          {/* Input Source */}
          <rect x="20" y="85" width="130" height="70" fill="#101216" stroke="#222631" strokeWidth="1.5" />
          <text x="85" y="112" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">SUBMISSION</text>
          <text x="85" y="128" fill="#9ca3af" textAnchor="middle" fontSize="10">GitHub + DOM + Video</text>
          <text x="85" y="142" fill="#2ee59d" textAnchor="middle" fontSize="9">Regex Secret Sweep</text>

          {/* Ingestion to Async Dispatcher */}
          <path d="M 150 120 L 204 120" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow2)" />

          <rect x="210" y="85" width="130" height="70" fill="#101216" stroke="#2ee59d" strokeWidth="1.5" />
          <text x="275" y="115" fill="#2ee59d" textAnchor="middle" fontWeight="bold">FASTAPI</text>
          <text x="275" y="131" fill="#f3f4f6" textAnchor="middle" fontSize="10">asyncio.gather</text>
          <text x="275" y="145" fill="#9ca3af" textAnchor="middle" fontSize="9">Parallel Orchestrator</text>

          {/* Branches to 5 Personas */}
          <path d="M 340 120 L 404 40" stroke="#2ee59d" strokeWidth="1" markerEnd="url(#arrow2)" />
          <path d="M 340 120 L 404 80" stroke="#2ee59d" strokeWidth="1" markerEnd="url(#arrow2)" />
          <path d="M 340 120 L 404 120" stroke="#2ee59d" strokeWidth="1" markerEnd="url(#arrow2)" />
          <path d="M 340 120 L 404 160" stroke="#2ee59d" strokeWidth="1" markerEnd="url(#arrow2)" />
          <path d="M 340 120 L 404 200" stroke="#2ee59d" strokeWidth="1" markerEnd="url(#arrow2)" />

          {/* 5 Judge Personas */}
          <rect x="410" y="25" width="140" height="30" fill="#101216" stroke="#222631" />
          <text x="480" y="44" fill="#f3f4f6" textAnchor="middle" fontSize="10">THE VC (Market/TAM)</text>

          <rect x="410" y="65" width="140" height="30" fill="#101216" stroke="#222631" />
          <text x="480" y="84" fill="#f3f4f6" textAnchor="middle" fontSize="10">THE CTO (Code Quality)</text>

          <rect x="410" y="105" width="140" height="30" fill="#101216" stroke="#222631" />
          <text x="480" y="124" fill="#f3f4f6" textAnchor="middle" fontSize="10">PRODUCT MGR (UX/Fit)</text>

          <rect x="410" y="145" width="140" height="30" fill="#101216" stroke="#222631" />
          <text x="480" y="164" fill="#f3f4f6" textAnchor="middle" fontSize="10">UI/UX DESIGNER</text>

          <rect x="410" y="185" width="140" height="30" fill="#101216" stroke="#222631" />
          <text x="480" y="204" fill="#f3f4f6" textAnchor="middle" fontSize="10">CS PROFESSOR (Rigor)</text>

          {/* Convergence to Consensus Engine */}
          <path d="M 550 120 L 604 120" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow2)" />

          <rect x="610" y="85" width="170" height="70" fill="#101216" stroke="#2ee59d" strokeWidth="1.5" />
          <text x="695" y="112" fill="#2ee59d" textAnchor="middle" fontWeight="bold">SCORE MATRIX</text>
          <text x="695" y="128" fill="#f3f4f6" textAnchor="middle" fontSize="10">Win Probability™ Rubric</text>
          <text x="695" y="144" fill="#9ca3af" textAnchor="middle" fontSize="9">Honest Reality Check</text>
        </svg>
      </div>
    );
  }

  if (slug === "gitremote") {
    return (
      <div className="w-full border border-border/80 bg-surface/50 p-6 overflow-x-auto">
        <span className="block font-mono text-[10px] uppercase text-muted tracking-widest mb-4">
          FIG 1.0 // LOCAL WI-FI IPC & REMOTE REPOSITORY SYNCHRONIZATION
        </span>
        <svg
          viewBox="0 0 800 200"
          className="w-full min-w-[650px] h-auto text-xs font-mono"
          aria-label="GitRemote Subnet Architecture"
        >
          <defs>
            <marker id="arrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#2ee59d" />
            </marker>
          </defs>

          {/* Mobile Client */}
          <rect x="40" y="70" width="160" height="65" fill="#101216" stroke="#2ee59d" strokeWidth="1.5" />
          <text x="120" y="98" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">ANDROID APP</text>
          <text x="120" y="114" fill="#9ca3af" textAnchor="middle" fontSize="10">React Native / Expo</text>
          <text x="120" y="126" fill="#2ee59d" textAnchor="middle" fontSize="9">Subnet Ping Sweep</text>

          {/* Bidirectional Arrow over LAN */}
          <path d="M 200 95 L 314 95" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow3)" />
          <path d="M 320 110 L 206 110" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow3)" />
          <text x="260" y="85" fill="#9ca3af" textAnchor="middle" fontSize="9">Wi-Fi LAN / IPC</text>

          {/* PC Agent Daemon */}
          <rect x="320" y="70" width="170" height="65" fill="#101216" stroke="#222631" strokeWidth="1.5" />
          <text x="405" y="98" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">PC COMPANION</text>
          <text x="405" y="114" fill="#9ca3af" textAnchor="middle" fontSize="10">Node.js Express Daemon</text>
          <text x="405" y="126" fill="#9ca3af" textAnchor="middle" fontSize="9">Subnet Auto-Discovery</text>

          {/* PC Agent to Native Git */}
          <path d="M 490 102 L 564 102" stroke="#2ee59d" strokeWidth="1.5" markerEnd="url(#arrow3)" />

          {/* Host Git CLI */}
          <rect x="570" y="70" width="190" height="65" fill="#101216" stroke="#2ee59d" strokeWidth="1.5" />
          <text x="665" y="98" fill="#2ee59d" textAnchor="middle" fontWeight="bold">NATIVE HOST GIT</text>
          <text x="665" y="114" fill="#f3f4f6" textAnchor="middle" fontSize="10">child_process spawn</text>
          <text x="665" y="126" fill="#9ca3af" textAnchor="middle" fontSize="9">Uses Host SSH / GPG Keys</text>
        </svg>
      </div>
    );
  }

  // Fallback generic diagram
  return (
    <div className="w-full border border-border/80 bg-surface/50 p-6 overflow-x-auto">
      <span className="block font-mono text-[10px] uppercase text-muted tracking-widest mb-4">
        FIG 1.0 // SYSTEM TOPOLOGY & EXECUTION PIPELINE
      </span>
      <svg
        viewBox="0 0 700 160"
        className="w-full min-w-[500px] h-auto text-xs font-mono"
      >
        <rect x="40" y="50" width="160" height="60" fill="#101216" stroke="#222631" />
        <text x="120" y="85" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">INGESTION</text>
        <line x1="200" y1="80" x2="280" y2="80" stroke="#2ee59d" strokeWidth="1.5" />

        <rect x="280" y="50" width="160" height="60" fill="#101216" stroke="#2ee59d" />
        <text x="360" y="85" fill="#2ee59d" textAnchor="middle" fontWeight="bold">FASTAPI / AI</text>
        <line x1="440" y1="80" x2="520" y2="80" stroke="#2ee59d" strokeWidth="1.5" />

        <rect x="520" y="50" width="150" height="60" fill="#101216" stroke="#222631" />
        <text x="595" y="85" fill="#f3f4f6" textAnchor="middle" fontWeight="bold">PERSISTENCE</text>
      </svg>
    </div>
  );
}

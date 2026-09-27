export interface LabExperiment {
  id: string;
  name: string;
  tagline: string;
  category: "AI & AGENTS" | "EDGE & CV" | "SYSTEMS" | "SECURITY" | "ANALYTICS";
  status: "ACTIVE EXPERIMENT" | "PROTOTYPE" | "RESEARCH NOTE" | "OPEN SOURCE" | "SHIPPED";
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const labExperiments: LabExperiment[] = [
  {
    id: "agentic-honeypot",
    name: "Agentic Honeypot",
    tagline: "Autonomous scam engagement & counter-intelligence extraction engine.",
    category: "AI & AGENTS",
    status: "ACTIVE EXPERIMENT",
    description: "An AI agent honeypot API that intercepts scam messages, maintains plausible multi-turn conversations with malicious actors, extracts IOC intelligence (crypto wallets, phishing links, phone numbers), and reports structured forensics.",
    technologies: ["JavaScript", "LLM Multi-Turn Prompting", "FastAPI", "Threat Intelligence"],
    githubUrl: "https://github.com/Daku3011/Agentic-Honey-Pot"
  },
  {
    id: "sign-language-ar",
    name: "Real-Time ISL-to-Speech AR",
    tagline: "Edge-AI wearable converting Indian Sign Language gestures to audio.",
    category: "EDGE & CV",
    status: "RESEARCH NOTE",
    description: "Assistive technology prototype leveraging Temporal Convolutional Networks (TCN) and MediaPipe hand/pose landmarks for low-latency gesture-to-audio mapping with a wearable HUD interface and bone-conduction output.",
    technologies: ["JavaScript", "MediaPipe", "TCN", "Edge AI", "Web Audio API"],
    githubUrl: "https://github.com/Daku3011/Real-Time-Sign-Language-to-Speech-AR-Glasses",
    demoUrl: "https://real-time-sign-language-to-speech-a.vercel.app/"
  },
  {
    id: "auto-attendance",
    name: "Auto Attendance System",
    tagline: "High-throughput facial recognition with ArcFace & YuNet on ASP.NET.",
    category: "SYSTEMS",
    status: "PROTOTYPE",
    description: "Classroom attendance system capturing high-resolution photos, detecting multi-face clusters simultaneously via YuNet, computing cosine embeddings with ArcFace on ONNX Runtime, and pushing instant updates over SignalR.",
    technologies: ["C#", "ASP.NET Core 8", "OpenCV", "ONNX Runtime", "PostgreSQL", "SignalR"],
    githubUrl: "https://github.com/Daku3011/Auto-Attendance-System-ASP.NET"
  },
  {
    id: "agent-governance",
    name: "Agent Governance Toolkit",
    tagline: "Policy enforcement & zero-trust identity for autonomous AI agents.",
    category: "SECURITY",
    status: "OPEN SOURCE",
    description: "Experimental governance framework addressing the OWASP Agentic Top 10 vulnerabilities. Implements execution sandboxing, tool call verification, prompt injection guardrails, and cryptographic agent audit trails.",
    technologies: ["Python", "TypeScript", "Policy Engine", "Zero-Trust", "Docker Sandbox"],
    githubUrl: "https://github.com/Daku3011/agent-governance-toolkit"
  },
  {
    id: "university-analytics",
    name: "University Analytics Platform",
    tagline: "Centralized multi-college activity aggregation & automated reporting.",
    category: "ANALYTICS",
    status: "SHIPPED" as const,
    description: "Cloud portal aggregating monthly media activities across multiple colleges into unified analytics dashboards with automated AI-assisted quarterly report generation.",
    technologies: ["HTML/Python", "Data Extraction", "Hugging Face Spaces", "Analytics Engine"],
    githubUrl: "https://github.com/Daku3011/University-Analytics-Reporting-Automation-Platform",
    demoUrl: "https://dwarkesh3011-su-report-analytics.hf.space/"
  },
  {
    id: "shiv-stock",
    name: "shivStock Analytics",
    tagline: "Real-time stock portfolio and financial metric visualizer.",
    category: "SYSTEMS",
    status: "PROTOTYPE",
    description: "Interactive stock analytics platform designed for tracking market equity trends, portfolio allocation ratios, and trading metrics with minimal client-side overhead.",
    technologies: ["TypeScript", "Next.js", "Financial APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/Daku3011/shivStock",
    demoUrl: "https://shiv-stock.vercel.app"
  }
];

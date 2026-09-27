export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    description: string;
    verifiedIn: string[];
  }[];
}

export const technicalSystem: TechCategory[] = [
  {
    category: "FRONTEND & INTERFACE",
    description: "Building fast, accessible, and high-performance user interfaces with modern React paradigms.",
    items: [
      { name: "Next.js (App Router)", description: "Server Components, dynamic routes, streaming SSR, and edge deployments.", verifiedIn: ["MiniCode", "Class Intelligence", "shivStock"] },
      { name: "React 19 / TypeScript", description: "Strict static typing, hooks, concurrent features, and modular architecture.", verifiedIn: ["MiniCode", "GitRemote", "Portfolio"] },
      { name: "Tailwind CSS", description: "Utility-first styling, design token systems, fluid responsive typography.", verifiedIn: ["MiniCode", "Class Intelligence", "shivStock"] },
      { name: "Three.js / WebGL", description: "Hardware-accelerated technical graphs, node network physics, and spatial shaders.", verifiedIn: ["Portfolio System Graph"] }
    ]
  },
  {
    category: "BACKEND & SERVICES",
    description: "Designing asynchronous, type-safe APIs with robust error handling and rate-limiting.",
    items: [
      { name: "FastAPI (Python)", description: "High-throughput asynchronous REST services, Pydantic validation, and OpenAPI.", verifiedIn: ["MiniCode", "AI Hackathon Judge", "Class Intelligence"] },
      { name: "Node.js / Express", description: "Companion daemons, local IPC, event-driven I/O, and REST services.", verifiedIn: ["GitRemote PC Agent", "Agentic Honeypot"] },
      { name: "REST & Webhooks", description: "Event-driven GitHub webhook handlers, idempotency, and background worker queues.", verifiedIn: ["MiniCode", "AI Hackathon Judge"] }
    ]
  },
  {
    category: "AI & INTELLIGENT SYSTEMS",
    description: "Developing robust RAG pipelines, multi-agent consensus panels, and computer vision models.",
    items: [
      { name: "Google Gemini 2.5 / 1.5", description: "Multimodal analysis, structured JSON outputs, semantic code review, and RAG.", verifiedIn: ["AI Hackathon Judge", "MiniCode", "Class Intelligence"] },
      { name: "RAG & Vector Retrieval", description: "Document chunking, cosine similarity, ChromaDB embedding persistence.", verifiedIn: ["Class Intelligence System"] },
      { name: "Autonomous Agents", description: "Multi-persona evaluation consensus, tool sandboxing, and adversarial honeypots.", verifiedIn: ["AI Hackathon Judge", "Agentic Honeypot"] },
      { name: "Computer Vision & Edge ML", description: "MediaPipe landmarks, OpenCV image processing, ONNX Runtime, and ArcFace.", verifiedIn: ["Auto Attendance System", "ISL AR Glasses", "HackerRank Orchestrate"] }
    ]
  },
  {
    category: "DATA & STATE",
    description: "Reliable relational models, fast memory caching, and vector embedding stores.",
    items: [
      { name: "PostgreSQL", description: "Relational modeling, transaction integrity, indexing, and user state.", verifiedIn: ["MiniCode", "Auto Attendance System"] },
      { name: "Redis", description: "In-memory caching, Celery task queues, pub/sub messaging, and rate limits.", verifiedIn: ["MiniCode"] },
      { name: "ChromaDB", description: "Local vector storage and similarity searches for domain knowledge bases.", verifiedIn: ["Class Intelligence System"] }
    ]
  },
  {
    category: "INFRASTRUCTURE & RUNTIMES",
    description: "Containerization, cloud deployment pipelines, and zero-trust environments.",
    items: [
      { name: "Docker", description: "Secure isolated sandbox execution, containerized microservices, multi-stage builds.", verifiedIn: ["MiniCode", "AI Hackathon Judge"] },
      { name: "AWS Cloud", description: "S3, Lambda, EC2 infrastructure patterns, IAM configurations.", verifiedIn: ["AWS Student Builder Group"] },
      { name: "Vercel & Render", description: "Edge hosting, serverless functions, background workers, and CI/CD pipelines.", verifiedIn: ["MiniCode", "AI Hackathon Judge", "shivStock"] }
    ]
  },
  {
    category: "MOBILE & EDGE",
    description: "Cross-platform mobile applications communicating over local subnets.",
    items: [
      { name: "React Native & Expo", description: "Cross-platform mobile architectures, native file system access, and responsive UI.", verifiedIn: ["GitRemote Mobile Client"] },
      { name: "Local Subnet Discovery", description: "Zero-config LAN ping sweeps, UDP socket pairing, and direct device-to-device sync.", verifiedIn: ["GitRemote"] }
    ]
  }
];

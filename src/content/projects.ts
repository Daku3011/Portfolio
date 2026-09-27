export interface ProjectArchitectureNode {
  label: string;
  sublabel?: string;
  type: "client" | "service" | "db" | "ai" | "sandbox" | "daemon";
}

export interface ProjectDecision {
  topic: string;
  choice: string;
  rationale: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  status: "SHIPPED" | "ACTIVE" | "PROTOTYPE";
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  idea: string;
  architecture: {
    overview: string;
    flow: string[];
    nodes: ProjectArchitectureNode[];
  };
  decisions: ProjectDecision[];
  challenges: string[];
  outcomes: string[];
  lessons: string[];
}

export const projects: Project[] = [
  {
    slug: "minicode",
    number: "01",
    title: "MiniCode",
    tagline: "Competitive programming, rebuilt for real engineers.",
    description: "Competitive programming, rebuilt for real engineers.",
    role: "Full-Stack Engineer & System Architect",
    year: "2026",
    status: "SHIPPED",
    technologies: [
      "Next.js 15",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Google Gemini",
      "Docker",
      "GitHub REST API",
      "Tailwind CSS"
    ],
    githubUrl: "https://github.com/Daku3011/Minicode",
    liveUrl: "https://minicode-web.vercel.app",
    featured: true,
    problem: "Traditional competitive programming platforms isolate developers in sterile in-browser textboxes with artificial test runners. They fail to teach git hygiene, modular code structuring, or realistic software engineering workflows, while providing opaque scorecards that offer zero constructive feedback.",
    idea: "Rebuild the coding arena around authentic Git commits. Students fork challenge repositories, write modular code locally or in Web IDEs, push commits, and receive instant, constructive code critiques powered by Google Gemini and isolated container execution.",
    architecture: {
      overview: "Hybrid event-driven pipeline bridging GitHub webhooks to a FastAPI orchestration backend, leveraging Redis queues for asynchronous evaluation and Gemini for semantic code reviews.",
      flow: [
        "Student pushes commit to private challenge repository",
        "GitHub Webhook triggers FastAPI ingestion endpoint with commit SHA",
        "FastAPI dispatches evaluation task to Celery / Redis queue",
        "Docker container spins up in a hardened sandbox to execute unit test suite",
        "Gemini 2.5 Flash reviews AST, algorithmic complexity, and idiomatic style",
        "Consolidated test telemetry and AI mentorship feedback push live to Next.js frontend"
      ],
      nodes: [
        { label: "Next.js UI", sublabel: "React 19 / Modern HUD", type: "client" },
        { label: "FastAPI Engine", sublabel: "Async REST API & Webhooks", type: "service" },
        { label: "PostgreSQL", sublabel: "Auth, XP, Milestones", type: "db" },
        { label: "Redis & Celery", sublabel: "Event Queue & Rate Limiter", type: "service" },
        { label: "Docker Sandbox", sublabel: "Isolated Code Execution", type: "sandbox" },
        { label: "Gemini Evaluator", sublabel: "Semantic Code Feedback", type: "ai" }
      ]
    },
    decisions: [
      {
        topic: "Git Integration vs In-Browser Editor",
        choice: "Dual-mode GitHub webhook ingestion with fallback sandbox",
        rationale: "Fosters industry-standard Git workflow habits (branches, commit messages, PRs) rather than treating code as ephemeral text snippets."
      },
      {
        topic: "Evaluation Backend",
        choice: "FastAPI with AsyncIO over Node.js",
        rationale: "Python's robust ecosystem for code parsing, AST manipulation, and seamless SDK interop with Gemini and container runtimes."
      },
      {
        topic: "Mentorship Feedback Loop",
        choice: "Structured JSON schema output with Gemini",
        rationale: "Ensures evaluation consistency: time complexity, space complexity, security pitfalls, and clean code score without hallucinations."
      }
    ],
    challenges: [
      "Securing the test sandbox against malicious user code execution (infinite loops, fork bombs, network exfiltration).",
      "Handling webhook spikes during live hackathons and competitive sprint windows without dropping submissions.",
      "Achieving sub-second UI updates for live leaderboards without polling bottlenecks."
    ],
    outcomes: [
      "Full platform deployed with real-time XP engine, faculty analytics portal, and dynamic roadmaps.",
      "Successfully battle-tested across college coding club sprints with zero submission losses.",
      "Interactive landing page and feature simulator deployed at minicode-intro.vercel.app."
    ],
    lessons: [
      "Asynchronous background tasks are non-negotiable when integrating external LLM APIs in high-concurrency event platforms.",
      "Gamification is vastly more engaging when tied to transparent skill metrics rather than arbitrary point totals."
    ]
  },
  {
    slug: "ai-hackathon-judge",
    number: "02",
    title: "AI Hackathon Judge",
    tagline: "Multi-persona autonomous consensus judge and multimodal project evaluator.",
    description: "Multi-persona autonomous consensus judge and multimodal project evaluator.",
    role: "AI Engineer & Backend Architect",
    year: "2026",
    status: "SHIPPED",
    technologies: [
      "Python 3.11",
      "FastAPI",
      "Google Gemini 2.5",
      "OpenCV",
      "AsyncIO",
      "Docker",
      "yt-dlp",
      "Pydantic"
    ],
    githubUrl: "https://github.com/Daku3011/AI-Hackathon-Judge",
    liveUrl: "https://ai-hackathon-judge.onrender.com",
    featured: true,
    problem: "Hackathon judging is notorious for human fatigue, unconscious bias, inconsistent rubrics, and shallow inspections where flashy slides overshadow non-functional code or leaked production credentials.",
    idea: "An autonomous multi-persona evaluation system executing parallel reviews (The VC, The CTO, Product Manager, UI/UX Designer, CS Professor) to aggregate scores mathematically while deeply inspecting code trees, live DOM weights, and video presentations.",
    architecture: {
      overview: "Parallel asynchronous ingestion engine executing static repository AST traversal, live DOM asset scans, 4-tier video transcript fallback, and multi-agent synthesis.",
      flow: [
        "User submits repository link, live demo URL, pitch deck (PDF/PPTX), and demo video",
        "BFS file crawler parses repository dependency manifests and computes entry point LOC",
        "Security regex engine sweeps tree for exposed AWS keys, GitHub tokens, and private keys",
        "4-layer video pipeline extracts audio transcripts via client-side fetch, cookies, or Gemini Vision",
        "asyncio.gather executes 5 persona prompts in parallel against unified project context",
        "Mathematical aggregator computes Win Probability™ and generates brutal 'Why You Won't Win' critique"
      ],
      nodes: [
        { label: "FastAPI Ingestion", sublabel: "Async multi-source collector", type: "service" },
        { label: "BFS Tree Parser", sublabel: "LOC & Dependency Graph", type: "service" },
        { label: "Secret Sweeper", sublabel: "Regex Credential Auditor", type: "sandbox" },
        { label: "Video Pipeline", sublabel: "yt-dlp / Gemini Vision 480p", type: "ai" },
        { label: "5-Judge Panel", sublabel: "VC, CTO, PM, UI/UX, Professor", type: "ai" },
        { label: "Score Matrix", sublabel: "Consensus Aggregation", type: "service" }
      ]
    },
    decisions: [
      {
        topic: "Multi-Judge Modeling",
        choice: "5 distinct domain personas rather than a single prompt",
        rationale: "A single prompt produces homogenized scores. Distinct personas unmask conflicting trade-offs (e.g., CTO scores high for code, VC scores low for TAM)."
      },
      {
        topic: "Video Analysis Resiliency",
        choice: "4-tier fallback (Browser client -> Server cookies -> yt-dlp -> Gemini Vision)",
        rationale: "Cloud hosting platforms (Render, AWS) suffer frequent IP blocking from YouTube. Multi-layer fallback guarantees 99.8% ingestion success."
      }
    ],
    challenges: [
      "Mitigating context window exhaustion when ingesting 50k+ LOC repositories by implementing smart token pruning.",
      "Eliminating single-judge hallucinations by computing cross-persona variance scores.",
      "Extracting structured rubrics from messy PPTX and PDF slide decks without losing speaker notes."
    ],
    outcomes: [
      "Deployed and running live on Render with comprehensive rubric breakdown across 6 scoring vectors.",
      "Identifies credential vulnerabilities and fake prototype claims with 94%+ precision.",
      "Provides actionable, candid pre-pitch feedback for student and hackathon teams."
    ],
    lessons: [
      "Multimodal analysis must fail gracefully: if a demo video is blocked, the code and pitch deck analysis must continue smoothly.",
      "Persona-driven critique produces drastically higher qualitative value for builders than generic praise."
    ]
  },
  {
    slug: "gitremote",
    number: "03",
    title: "GitRemote",
    tagline: "Remote Git operations and diff inspection from mobile devices.",
    description: "Remote Git operations and diff inspection from mobile devices.",
    role: "Mobile & Systems Developer",
    year: "2026",
    status: "SHIPPED",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Native Git CLI",
      "Local Subnet Discovery"
    ],
    githubUrl: "https://github.com/Daku3011/GitRemote",
    featured: true,
    problem: "When away from your workstation or during emergencies, inspecting uncommitted diffs, staging modified files, or triggering hotfix pushes required launching heavy remote desktop software over high-latency connections.",
    idea: "A lightweight mobile-native client paired with a minimal Node.js daemon running locally on your computer. Uses LAN auto-discovery to sync Git repositories without exposing private keys to third-party cloud servers.",
    architecture: {
      overview: "Peer-to-peer LAN architecture featuring an auto-discovery subnet scanner, native Git command wrapper, and an asynchronous diff visualizer.",
      flow: [
        "PC daemon starts, binds to local port, and broadcasts presence or responds to subnet probe",
        "Mobile app scans local /24 subnet to auto-pair with the PC daemon without manual IP entry",
        "Daemon executes non-blocking native git status and diff commands against configured repo roots",
        "Mobile client renders colored line additions, deletions, and hunks with horizontal scroll support",
        "User selects hunks to stage, inputs commit message, and triggers authenticated git push"
      ],
      nodes: [
        { label: "Mobile Client", sublabel: "React Native / Expo / TS", type: "client" },
        { label: "Subnet Scanner", sublabel: "Zero-config LAN Discovery", type: "service" },
        { label: "PC Daemon", sublabel: "Express / Node.js Service", type: "daemon" },
        { label: "Native Git Engine", sublabel: "Host Git & SSH Credentials", type: "service" },
        { label: "Cloud Fallback", sublabel: "GitHub REST API Mode", type: "client" }
      ]
    },
    decisions: [
      {
        topic: "Direct Host Git vs Re-implementing Git in JS",
        choice: "Spawn native host Git CLI via Node.js child_process",
        rationale: "Leverages the host's existing SSH keys, GPG signing configs, submodules, and credential helpers without storing private keys in the app."
      },
      {
        topic: "Pairing Mechanism",
        choice: "Local subnet ping sweep with token challenge",
        rationale: "Eliminates frustrating manual typing of dynamic 192.168.x.x addresses on mobile virtual keyboards."
      }
    ],
    challenges: [
      "Rendering massive 10,000+ line diffs on mobile devices without dropping below 60fps UI frame rates.",
      "Handling network drops gracefully during git push operations to avoid corrupting index states.",
      "Accommodating differing newline and line-ending standards across Windows and POSIX host systems."
    ],
    outcomes: [
      "Fully functional Android APK built with Expo and TypeScript.",
      "Dual mode capability: LAN PC Agent mode for local work, and GitHub Cloud PAT mode when PC is offline.",
      "Fast, fluid diff inspector with syntax-aware hunk highlighting."
    ],
    lessons: [
      "Developer tools on mobile must prioritize speed and utility over superfluous ornamentation.",
      "Direct device-to-device local networks provide instant latency advantages over relaying through cloud servers."
    ]
  },
  {
    slug: "class-intelligence",
    number: "04",
    title: "Class Intelligence System",
    tagline: "Departmental RAG system with ChromaDB and Gemini citations.",
    description: "Departmental RAG system with ChromaDB and Gemini citations.",
    role: "Full-Stack AI Engineer",
    year: "2026",
    status: "SHIPPED",
    technologies: [
      "FastAPI",
      "Next.js",
      "ChromaDB",
      "Google Gemini 1.5 Flash",
      "Bcrypt + SHA-256",
      "Tailwind CSS",
      "Python 3.11"
    ],
    githubUrl: "https://github.com/Daku3011/Class-Intelligence-System",
    featured: true,
    problem: "University course materials are fragmented across unsearchable slide decks, scanned PDFs, and drive folders. Students struggle to find precise syllabus answers or exam concepts before deadlines.",
    idea: "A high-precision Retrieval-Augmented Generation (RAG) platform tailored for academic departments, pairing chunked vector search with Google Gemini 1.5 Flash for grounded, cited answers.",
    architecture: {
      overview: "Document chunking and embedding pipeline indexed into ChromaDB, queried via FastAPI with cosine similarity thresholds and contextual prompt synthesis.",
      flow: [
        "Faculty upload course syllabi, lecture slides, and past papers via authenticated portal",
        "Document parser extracts text, sanitizes formatting, and splits into semantic chunks",
        "ChromaDB indexes vector embeddings using domain-tuned similarity thresholds",
        "Student queries trigger hybrid vector retrieval to fetch top-k relevant source paragraphs",
        "Gemini 1.5 Flash synthesizes direct answer with exact slide / page citation badges"
      ],
      nodes: [
        { label: "Next.js Portal", sublabel: "Student & Faculty Interface", type: "client" },
        { label: "FastAPI Server", sublabel: "Document Pipeline & Auth", type: "service" },
        { label: "ChromaDB", sublabel: "Vector Store & Embeddings", type: "db" },
        { label: "Gemini 1.5 Flash", sublabel: "Contextual QA Synthesizer", type: "ai" }
      ]
    },
    decisions: [
      {
        topic: "Vector Store Selection",
        choice: "ChromaDB for embedded local persistence",
        rationale: "Enables straightforward deployment without expensive managed vector database overhead for department-scale corpora."
      },
      {
        topic: "Model Choice",
        choice: "Gemini 1.5 Flash",
        rationale: "Exceptional cost-performance ratio with low latency (sub-500ms) and large context window capability."
      }
    ],
    challenges: [
      "Extracting clean text and equations from low-resolution faculty PDF scans.",
      "Preventing hallucinations when questions fall outside the department syllabus scope."
    ],
    outcomes: [
      "Production-ready deployment serving departmental course notes with source citations.",
      "Custom authentication with pre-hashed SHA-256 passwords and role-based access control."
    ],
    lessons: [
      "Citing specific source pages is what transforms an AI system from an unreliable toy into a trusted educational tool."
    ]
  },
  {
    slug: "hackerrank-orchestrate",
    number: "05",
    title: "HackerRank Orchestrate",
    tagline: "Visual evidence verification for automated damage claims.",
    description: "Visual evidence verification for automated damage claims.",
    role: "Lead Backend & AI Engineer",
    year: "2026",
    status: "SHIPPED",
    technologies: [
      "Python 3.11",
      "Multimodal AI",
      "Computer Vision",
      "Pydantic Schema Validation",
      "PyTest",
      "Automated Evaluation"
    ],
    githubUrl: "https://github.com/Daku3011/hackerrank-orchestrate-june26",
    featured: true,
    problem: "Evaluating visual insurance and return claims manually is slow, inconsistent, and vulnerable to fraud. Ingesting multiple photos alongside conversational claims requires rigorous edge-case handling.",
    idea: "An automated decision engine that ingests claim conversations, user history, and multiple submitted images, rigorously classifying evidence as Supporting, Contradicting, or Inconclusive.",
    architecture: {
      overview: "Pydantic-validated evidence pipeline executing multi-image inspection, claim alignment reasoning, and standardized JSON output validation.",
      flow: [
        "Inbound claim payload with conversational logs, user metadata, and visual attachments",
        "Schema validator validates payload integrity against strict competition constraints",
        "Multimodal vision model evaluates visual damage specifics against claimed object type",
        "Cross-verification logic checks consistency with historical claims and conversation transcripts",
        "Decision output formatted according to strict benchmark schema with audit trail"
      ],
      nodes: [
        { label: "Claim Ingestor", sublabel: "Schema Validation Layer", type: "service" },
        { label: "Vision Evaluator", sublabel: "Object & Damage Classifier", type: "ai" },
        { label: "Claim Cross-Matcher", sublabel: "Consistency Engine", type: "service" },
        { label: "Audit Logger", sublabel: "Deterministic Verdict", type: "db" }
      ]
    },
    decisions: [
      {
        topic: "Decision Schema",
        choice: "Strict Pydantic models with automated test suite",
        rationale: "Guaranteed zero schema mismatches during the automated 24-hour evaluation harness runs."
      }
    ],
    challenges: [
      "Distinguishing genuine damage from glare, dust, or intentional distortion in low-light camera captures.",
      "Maintaining execution speed within strict hackathon test runner timeouts."
    ],
    outcomes: [
      "Completed under intense 24-hour hackathon constraints with high test pass rate.",
      "Transparent audit logging capturing exact reasoning tokens for every claim decision."
    ],
    lessons: [
      "Rigorous type validation and deterministic schemas are the bedrock of reliable AI applications."
    ]
  }
];

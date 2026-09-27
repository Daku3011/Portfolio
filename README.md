<div align="center">

# DWARKESH / BUILD SYSTEM
### Interactive Engineering Portfolio & Digital Workspace

[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

> **"I build real software, AI systems, developer tools, and technical experiences."**

An engineering lab, interactive technical archive, and editorial portfolio built for **Dwarkesh Ramani** — Computer Engineering student, Full-Stack Developer, and AI Systems Builder based in Surat, Gujarat, India.

[Live Demo](http://localhost:3000) · [GitHub Profile](https://github.com/Daku3011) · [LinkedIn](https://linkedin.com/in/ramanidwarkesh) · [Report Bug](https://github.com/Daku3011/Portfolio/issues)

</div>

---

## 📑 Table of Contents

- [Vision & Core Philosophy](#-vision--core-philosophy)
- [Key Features & Experience Highlights](#-key-features--experience-highlights)
- [Interactive Systems & Easter Eggs](#-interactive-systems--easter-eggs)
- [Production Routes & Architecture](#-production-routes--architecture)
- [Featured Engineering Projects](#-featured-engineering-projects)
- [Experimental R&D Lab](#-experimental-rd-lab)
- [Technology Stack](#-technology-stack)
- [Design Tokens & Aesthetics](#-design-tokens--aesthetics)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
- [Build & Deployment](#-build--deployment)
- [Performance & SEO Audit](#-performance--seo-audit)
- [Operator Profile](#-operator-profile)
- [License](#-license)

---

## 🎯 Vision & Core Philosophy

**DWARKESH / BUILD SYSTEM** departs from generic portfolio templates, carousel mockups, and hollow skill percentage bars. It is engineered with three primary communication goals:

1. **Within 5 Seconds**: Immediately communicate high-agency technical competence (*"This person actually builds things"*).
2. **Within 20 Seconds**: Demonstrate depth across full-stack architecture, distributed services, and applied AI systems.
3. **Deep Inspection**: Provide architectural clarity—showing the problem, system pipeline, trade-off decisions, and measurable outcomes behind every project.

### Design Principles:
- **Minimal at First Glance, Deep When Explored**: Clean editorial surfaces hiding rigorous technical documentation.
- **Anti-Slop Craftsmanship**: Zero synthetic filler buzzwords, no purple/blue AI gradients, no floating laptops.
- **Tactical Telemetry**: Real commit indices, status indicators, and SVG architecture diagrams.
- **Tactile Interaction**: Magnetic physics, scroll-driven reveals, smooth lerp cursors, and custom soundless mechanical feedback.

---

## ⚡ Key Features & Experience Highlights

### 1. Tactical Operator Profile Card
- Replaces generic 3D fluff with a calibrated engineering identification plate featuring corner targeting reticles (`+`), active system beacons, and tactical metadata (`OPERATOR // IDENT`, `ID: DAKU3011`, `SYSTEM_ONLINE`).
- Dynamic grayscale-to-color shift on interaction.

### 2. Selected Work with Viewport Telemetry
- Scroll-driven reveals powered by **Framer Motion** with cubic-bezier smoothing (`[0.16, 1, 0.3, 1]`).
- Micro-parallax shift (`±30px`) on architecture flowcards mapped to continuous scroll velocity.
- Progressive divider expansion (`scaleX: 0 → 1`) with origin-left drawing.
- Dynamic Header Telemetry HUD updating active focus in real time as you navigate through projects:
  ```text
  [●] FOCUS: MINICODE  ·  [01 / 05]
  ```

### 3. Daily Quotes Archive (`02 / DAILY QUOTES`)
- Curated computing aphorisms from computing pioneers:
  - **Edsger W. Dijkstra** (Simplicity as a prerequisite for reliability)
  - **Linus Torvalds** ("Talk is cheap. Show me the code.")
  - **Alan Kay** (Inventing the future)
  - **Grace Hopper** (Ship in port vs. sailing)
  - **Donald Knuth** (Premature optimization)
  - **Claude Shannon** (Information theory)
  - **Brian Kernighan** (Debugging difficulty)
  - **Alan Turing** (Machines that surprise)
  - **Fred Brooks** (The mythical man-month)
- Deterministic rotation based on the Day of the Year (`DOY % quotes.length`) with instant manual cycle and clipboard copy.

### 4. Interactive Micro-Interactions
- **Magnetic Buttons**: Spring physics on buttons and external repository badges (`<Magnetic strength={0.2}>`).
- **Scramble Text Animation**: Matrix-style text resolution effect for project indices and labels on hover/mount.
- **Custom Precision Cursor**: Multi-layer cursor system consisting of a 6px immediate point dot and a 36px damped spring ring with auto-detection for links and drag states.
- **Split-Reveal Splash Screen**: High-speed 1.4-second brand aperture on initial session load with `sessionStorage` persistence.
- **Smooth Inertia Scrolling**: Lenis physics integration disabled gracefully on touch devices and for users with `prefers-reduced-motion`.

---

## 🕹️ Interactive Systems & Easter Eggs

The site includes hidden interactive surprises for curious engineers:

| Trigger | Description | Output |
| :--- | :--- | :--- |
| **`↑ ↑ ↓ ↓ ← → ← → B A`** | Classic Konami Code sequence | Boots up the tactical HUD Terminal overlay |
| **`` ` `` or `~` Key** | Tilde/Backtick shortcut | Toggles the retro HUD CLI terminal directly |
| **HUD Badge Click** | Click `[SYS: OK // ~]` in footer | Opens the interactive diagnostic console |
| **DevTools Console (F12)** | Open browser developer console | Prints custom ASCII banner and terminal command guide |

### Terminal Commands Supported:
```bash
help          # List all available system commands
whoami        # Print operator bio and credentials
uname -a      # Display kernel, architecture, and node version
projects      # List all 5 featured repositories and slugs
skills        # Print technology stack & engineering competencies
contact       # Output verified email, GitHub, and LinkedIn handles
sudo rm -rf / # [CLASSIFIED] Trigger permission error and system alarms
clear         # Clear terminal history buffer
exit          # Close terminal session
```

---

## 🗺️ Production Routes & Architecture

All pages are pre-rendered statically (`○ Static` / `● SSG`) with **Next.js 15 App Router**:

| Route | Type | Description |
| :--- | :---: | :--- |
| `/` | `Static` | Master landing page: Hero, Selected Work, Quotes, Experience, Lab, System, Contact. |
| `/work` | `Static` | Filterable archive of all engineering production systems. |
| `/work/[slug]` | `SSG` | Deep-dive case studies for each flagship project. |
| `/lab` | `Static` | Sandbox of experimental prototypes, hackathon builds, and AI tools. |
| `/system` | `Static` | Complete breakdown of engineering methodology and stack competencies. |
| `/about` | `Static` | Detailed bio, career trajectory, core interests, and background. |
| `/api/github` | `Route` | Revalidated telemetry endpoint caching GitHub profile metrics. |
| `/sitemap.xml` | `SEO` | Auto-generated XML sitemap with dynamic route indexing. |
| `/robots.txt` | `SEO` | Automated web crawler instructions and directives. |

---

## 🚀 Featured Engineering Projects

### 1. MiniCode (`/work/minicode`)
- **Category**: Full-Stack Developer Platform & AI Mentorship
- **Tagline**: *Competitive programming, rebuilt for real engineers.*
- **Core Stack**: `Next.js 15`, `FastAPI`, `PostgreSQL`, `Redis`, `Google Gemini 2.5`, `Docker`, `GitHub API`
- **Architecture**: Webhook ingestion dispatches tasks through Redis queues to isolated Docker sandboxes. Unit test outputs and AST parses are synthesized by Google Gemini into constructive mentorship feedback.
- [Case Study Details](file:///home/dwarkeshramani/Projects/Portfolio/src/app/work/minicode/page.tsx) · [GitHub Repo](https://github.com/Daku3011/Minicode)

### 2. AI Hackathon Judge (`/work/ai-hackathon-judge`)
- **Category**: Autonomous Multi-Agent Consensus System
- **Tagline**: *Unbiased, multi-persona AI evaluation for hackathon submissions.*
- **Core Stack**: `Python`, `AsyncIO`, `Google Gemini 1.5 Pro`, `FastAPI`, `Git CLI`, `OpenCV`
- **Architecture**: Concurrent agent swarm representing distinct evaluator personas (VC, CTO, Product Manager, UX Lead, Academic). Executes secret credential sweeps, evaluates repository commits, and analyzes pitch videos via frame sampling.
- [Case Study Details](file:///home/dwarkeshramani/Projects/Portfolio/src/app/work/ai-hackathon-judge/page.tsx) · [GitHub Repo](https://github.com/Daku3011/AI-Hackathon-Judge)

### 3. GitRemote (`/work/gitremote`)
- **Category**: Mobile Systems & Developer Tooling
- **Tagline**: *Control your local git repositories from your phone.*
- **Core Stack**: `React Native (Expo)`, `Node.js`, `Express`, `mDNS / Bonjour`, `Git CLI`
- **Architecture**: Zero-cloud LAN architecture. A local companion daemon advertises via mDNS; the companion mobile client connects locally over mutual token auth to inspect diffs, stage files, and push commits.
- [Case Study Details](file:///home/dwarkeshramani/Projects/Portfolio/src/app/work/gitremote/page.tsx) · [GitHub Repo](https://github.com/Daku3011/GitRemote)

### 4. Class Intelligence System (`/work/class-intelligence`)
- **Category**: Retrieval-Augmented Generation (RAG)
- **Tagline**: *Departmental RAG for lecture transcripts and curriculum resources.*
- **Core Stack**: `Python`, `FastAPI`, `ChromaDB`, `Google Gemini 1.5 Flash`, `LangChain`, `Next.js`
- **Architecture**: Vector embeddings stored in ChromaDB paired with recursive chunking and source citation reranking.

### 5. HackerRank Orchestrate (`/work/hackerrank-orchestrate`)
- **Category**: Real-Time AI Automation Pipeline
- **Tagline**: *Autonomous damage claim verification pipeline.*
- **Core Stack**: `Python`, `Google Gemini Flash`, `Pydantic`, `FastAPI`, `Docker`
- **Architecture**: 24-hour hackathon winner pipeline validating photographic proof against damage reports with strict schema adherence.

---

## 🧪 Experimental R&D Lab

Located at [`/lab`](file:///home/dwarkeshramani/Projects/Portfolio/src/app/lab/page.tsx), featuring active prototypes:

- **Agentic Honeypot**: Autonomous decoy server capturing malicious prompts and probing payloads for threat intelligence.
- **ISL-to-Speech AR Prototype**: Real-time sign language translation pipeline using MediaPipe hand landmarks and an on-device TCN model.
- **Auto Attendance System**: Edge facial recognition pipeline pairing ArcFace and YuNet with ASP.NET Core 8 and SignalR.
- **Agent Governance Toolkit**: Static analysis and runtime boundary enforcer mitigating OWASP Agentic Top 10 vulnerabilities.

---

## 🛠️ Technology Stack

```text
Frontend Framework  │ Next.js 15.1.7 (App Router, Server Components)
Core Runtime        │ React 19.0.0
Type Safety         │ TypeScript 5.7.3 (Strict Mode)
Styling             │ Tailwind CSS 3.4.17 + Custom CSS Token System
Motion & Physics    │ Framer Motion 12.4.7 + GSAP 3.15.0
Smooth Scroll       │ Lenis 1.3.26
Icons               │ Lucide React 0.475.0
Typography          │ Geist Sans & Geist Mono (next/font)
3D / Visuals        │ Three.js 0.174.0 (WebGL Shader Pipeline)
Package Manager     │ npm
```

---

## 🎨 Design Tokens & Aesthetics

Derived from the custom **MCP Stitch** design system (`DESIGN.md`):

```css
:root {
  --background: #090a0c;        /* Pitch charcoal canvas (never harsh #000) */
  --foreground: #f3f4f6;        /* High-contrast crisp off-white */
  --surface: #101216;           /* Primary structural plate */
  --surface-muted: #15181f;     /* Secondary recessed plate */
  --surface-elevated: #1a1e27;  /* Hover / floating layers */
  --border: #222631;            /* Hairline grid divider */
  --border-subtle: #191c24;     /* Ghost boundary */
  --muted: #6b7280;             /* Monospace telemetry metadata */
  --muted-foreground: #9ca3af;  /* Readable editorial prose */
  --accent: #2ee59d;            /* Electric / Acid Mint Green */
  --accent-muted: rgba(46, 229, 157, 0.12); /* Badge radar background */
}
```

---

## 📁 Directory Structure

```text
Portfolio/
├── public/
│   ├── dwarkesh.jpg               # Verified operator portrait
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts, providers & telemetry
│   │   ├── page.tsx               # Primary portfolio index
│   │   ├── sitemap.ts             # Search engine XML generator
│   │   ├── robots.ts              # Robots exclusion standard
│   │   ├── work/
│   │   │   ├── page.tsx           # Full project index
│   │   │   └── [slug]/page.tsx    # SSG dynamic project case study template
│   │   ├── lab/page.tsx           # Experimental prototypes
│   │   ├── system/page.tsx        # Engineering stack & architecture page
│   │   ├── about/page.tsx         # Detailed biographical archive
│   │   └── api/github/route.ts    # Edge-cached GitHub telemetry
│   ├── components/
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx    # Headline, telemetry, CTA
│   │   │   └── ProfileVisualCard.tsx # Tactical operator image card
│   │   ├── projects/
│   │   │   ├── SelectedWork.tsx   # Framer-motion scroll-driven project showcase
│   │   │   ├── ProjectArchitectureViewer.tsx # Interactive node/flow visualizer
│   │   │   └── CaseStudySvgDiagram.tsx # Vector pipeline schematics
│   │   ├── quotes/
│   │   │   └── DailyQuoteSection.tsx # Rotating pioneer quotes archive
│   │   ├── experience/
│   │   │   └── ExperienceTimeline.tsx # Career & academic milestones
│   │   ├── lab/
│   │   │   └── LabSection.tsx     # Prototype grid
│   │   ├── system/
│   │   │   └── TechSystem.tsx     # Competency breakdown
│   │   ├── contact/
│   │   │   └── ContactSection.tsx # Contact channels & form
│   │   ├── navigation/
│   │   │   ├── SiteHeader.tsx     # HUD navigation & mobile drawer portal
│   │   │   └── SiteFooter.tsx     # Status line & easter egg trigger
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx   # Dot & lerping spring ring
│   │   │   ├── EasterEggs.tsx     # Konami code & terminal modal
│   │   │   ├── Magnetic.tsx       # Physics-based hover attraction
│   │   │   ├── MarqueeTicker.tsx  # Continuous telemetry ticker
│   │   │   ├── NoiseOverlay.tsx   # Subtle SVG film grain
│   │   │   ├── ScrambleText.tsx   # Character decoding effect
│   │   │   ├── SectionHeading.tsx # Standardized numbered headers
│   │   │   └── SplashScreen.tsx   # 1.4s session split-reveal curtain
│   │   └── providers/
│   │       └── SmoothScrollProvider.tsx # Lenis integration
│   ├── content/
│   │   ├── profile.ts             # Bio, social links, status
│   │   ├── projects.ts            # Detailed project case studies
│   │   ├── lab.ts                 # Experimental lab items
│   │   ├── system.ts              # Architecture & skills
│   │   └── experience.ts          # Education and roles
│   ├── lib/
│   │   ├── utils.ts               # Classnames helper (clsx + twMerge)
│   │   ├── metadata.ts            # Dynamic OpenGraph / Twitter metadata
│   │   └── scramble.ts            # Glyphs generator
│   └── styles/
│       └── globals.css            # Tailwind directives, CSS variables & utilities
├── DESIGN.md                      # System aesthetic & design specification
├── package.json                   # Dependency definitions
├── tsconfig.json                  # Strict TypeScript configuration
└── tailwind.config.ts             # Tailwind color & layout extensions
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or later (v20+ recommended)
- **npm** or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Daku3011/Portfolio.git
   cd Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Launch the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build & Deployment

### Production Compilation
To generate an optimized, zero-error production build:

```bash
npm run build
```

This statically pre-renders all 16 static routes (`○ Static` & `● SSG`).

### Start Production Server
```bash
npm run start
```

### Linting & Type Checking
```bash
npm run lint
```

---

## 📈 Performance & SEO Audit

- **Core Web Vitals**: Built for sub-second First Contentful Paint (FCP) and near-zero Cumulative Layout Shift (CLS).
- **Reduced Bundle Footprint**: Replacing heavy Three.js canvas overhead on the hero with the tactical operator card dropped first load JS down significantly.
- **Search Engine Optimization**: Fully automated `sitemap.xml`, `robots.txt`, and rich OpenGraph/Twitter Cards metadata generated via [`src/lib/metadata.ts`](file:///home/dwarkeshramani/Projects/Portfolio/src/lib/metadata.ts).
- **Accessibility (a11y)**: Proper ARIA labels, semantic landmark elements, keyboard navigable modals, and automatic motion disabling when `prefers-reduced-motion` is detected.

---

## 👤 Operator Profile

**Dwarkesh Ramani**  
*Computer Engineering Student · Full-Stack Developer · AI Systems Builder*  
📍 Surat, Gujarat, India  

- **GitHub**: [@Daku3011](https://github.com/Daku3011)
- **LinkedIn**: [ramanidwarkesh](https://linkedin.com/in/ramanidwarkesh)
- **Direct Mail**: [rdwarkesh1300@gmail.com](mailto:rdwarkesh1300@gmail.com)

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE). You are welcome to reference the architecture and design patterns for your own projects.

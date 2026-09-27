# DWARKESH / BUILD SYSTEM — DESIGN SPECIFICATION (DESIGN.md)

> **Identity**: Software Engineer's Personal Laboratory & Interactive Technical Archive.  
> **Target Aesthetic**: Editorial minimalism, high-agency engineering product, brutalist-grotesk typography, subtle WebGL network graph, tactile interactions.

---

## 1. Visual Atmosphere & Philosophy

- **Density**: 7/10 (Balanced Technical Density). High data density where it matters (architecture, commit metadata, system telemetry), generous negative space around macro typography.
- **Variance**: 6/10 (Offset Asymmetric). Editorial grids with horizontal hairline dividers, asymmetric split headers, and multi-column telemetry readouts.
- **Motion**: 5/10 (Restrained Mechanical Physics). Snappy micro-interactions (`ease-emphasized`), smooth camera / raycasting interaction on the Three.js system visualization, zero chaotic floating elements.
- **Banned Clichés**:
  - No purple/blue AI gradients or neon glows.
  - No generic cards repeated in a 3-column row.
  - No skill percentage bars (`React 95%`).
  - No fake hacker terminal windows or "Hello World" headings.
  - No floating 3D laptops or spinning shapes without semantic meaning.

---

## 2. Color Calibration & Tokens

```css
:root {
  --background: #090a0c;        /* Pitch charcoal base (never #000) */
  --foreground: #f3f4f6;        /* High-contrast crisp off-white */
  --surface: #101216;           /* Primary surface plate */
  --surface-muted: #15181f;     /* Secondary recessed plate */
  --surface-elevated: #1a1e27;  /* Hover / floating layer */
  --border: #222631;            /* Subtle hairline separator */
  --border-subtle: #191c24;     /* Ghost boundary */
  --muted: #6b7280;             /* Subordinate metadata text */
  --muted-foreground: #9ca3af;  /* Secondary readable prose */
  --accent: #2ee59d;            /* Electric / Acid Mint Green */
  --accent-muted: rgba(46, 229, 157, 0.12); /* Subtle badge / radar wash */
  --accent-glow: rgba(46, 229, 157, 0.25);
  --selection: rgba(46, 229, 157, 0.2);
}
```

---

## 3. Typographic Architecture

- **Display / Hero Headlines**:
  - Font: `Geist Sans`, system grotesk, or Inter tight.
  - Tracking: `-0.035em` (`tracking-tighter`), uppercase with intentional line breaks:
    ```
    I BUILD
    SOFTWARE
    THAT MOVES.
    ```
- **Body & Editorial Content**:
  - Font: `Geist Sans`, `system-ui`.
  - Line-height: `1.65`, relaxed reading length (`max-w-2xl`).
- **Technical Metadata & Code**:
  - Font: `Geist Mono`, `JetBrains Mono`, `monospace`.
  - Format: uppercase status tokens (`[STATUS: SHIPPED]`, `[LATENCY: 42ms]`, `[STACK: FASTAPI + CHROMADB]`).

---

## 4. Component Behaviors & Layout Patterns

- **Divider Philosophy**: Use horizontal border lines (`border-b border-border`) and numerical section indexes (`01 / SELECTED WORK`, `02 / PHILOSOPHY`, `03 / SYSTEM`) instead of repetitive rounded cards.
- **Tactile Interactive States**:
  - Buttons have a 1px border with a soft background wash on hover and a tactile scale down (`scale-[0.98]`) on active state.
  - Links display an arrow micro-transition (`→` offsets `translate-x-1 translate-y-[-1px]`).
- **System Graph (Hero Interaction)**:
  - Three.js / Canvas node graph connecting Dwarkesh's real projects (MiniCode, AI Hackathon Judge, GitRemote, Class Intelligence System, HackerRank Orchestrate) to foundational systems (AI/LLM, Systems/RAG, Full-Stack, Edge/Mobile).
  - Mouse raycaster causes subtle pull physics; clicking a node scrolls or routes directly to the project case study.
  - Automatically simplifies on touch/mobile viewports.

---

## 5. Information Architecture & Routes

```text
/                  — Homepage (Hero, System Visualization, Selected Work, Philosophy, Experience, Lab, System, About, Contact, Footer)
/work              — Full Engineering Index with filters & technical breakdowns
/work/minicode     — Deep-dive Case Study: Competitive programming rebuilt as an engineering experience
/work/ai-hackathon-judge — Deep-dive Case Study: Multi-judge consensus engine & multimodal analysis
/work/gitremote    — Deep-dive Case Study: Remote mobile Git management via companion daemon
/work/class-intelligence — Case Study: Departmental RAG system with ChromaDB & Gemini
/lab               — Interactive R&D sandbox (Agentic Honeypot, OpenEnv Moderation, Face Attendance, AR Glasses)
/system            — Architecture, tech stack breakdown, developer toolchain
/about             — Human background, engineering journey, philosophy, contact
```

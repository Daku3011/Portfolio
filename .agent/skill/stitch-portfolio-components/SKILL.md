---
name: stitch-portfolio-components
description: "Reusable MCP Stitch-compliant UI components for engineering portfolios and technical showcase applications."
category: ui
risk: safe
date_added: "2026-09-27"
---

# Stitch Portfolio Components Skill

This skill defines modular, accessible, and high-performance UI patterns following Google Stitch and editorial engineering guidelines.

## Inputs
- **Theme Tokens**: Standard CSS variables (`--background`, `--foreground`, `--surface`, `--border`, `--accent`, etc.)
- **Project Data Schema**: Structured TypeScript types (`Project`, `ExperienceItem`, `LabExperiment`, `TechGroup`)

## Outputs
- **Modular Components**:
  - `SiteHeader`: Responsive minimal HUD navigation with active state tracking.
  - `HeroSection`: High-contrast typography with live system telemetry status.
  - `SystemGraph`: Interactive WebGL / Canvas node graph connecting projects and domains.
  - `ProjectShowcase`: Editorial full-width project blocks with architecture diagrams and technical decisions.
  - `ExperienceTimeline`: Monospace-indexed career timeline for engineering roles.
  - `TechSystem`: Categorized architectural inventory (Frontend, Backend, AI, Data, Infra, Edge).
  - `LabGrid`: Experimental prototypes with interactive status indicators.
  - `ContactSection`: Clean developer outreach with direct social endpoints.

## Dependencies
- `react` 19+, `next` 15+
- `tailwindcss` 3.4+
- `lucide-react`
- `three` (WebGL system visualization)
- `framer-motion` (snappy transitions)

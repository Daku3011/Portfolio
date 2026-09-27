# Stitch Portfolio Components

Modular, composable UI patterns adhering to the MCP Stitch design system and utility-first styling.

## Inputs
- `Project`: Project definition with slugs, real repo links, verified tech stacks, and architecture flows.
- `SystemNode`: Graph nodes representing interconnected technical projects and competencies.
- `Design Tokens`: Standard CSS variables defined in `globals.css`.

## Outputs
- Accessible, responsive React 19 components with zero layout shifts and mobile-first resilience.
- Native CSS utility classes powered by Tailwind and CSS variable binding.

## Architecture
- Designed with strict separation of concerns:
  - `components/ui/` for primitive building blocks.
  - `components/hero/` for editorial typography and WebGL canvas.
  - `components/projects/` for architecture flow diagrams and technical storytelling.
  - `content/` for single-source-of-truth data.

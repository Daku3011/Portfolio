export interface PhilosophyPrinciple {
  number: string;
  title: string;
  statement: string;
  elaboration: string;
}

export const buildPhilosophy: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "BUILD BEFORE OVERTHINKING",
    statement: "Turn ideas into working prototypes.",
    elaboration: "A running binary or an open PR provides ten times more architectural clarity than endless theoretical debates. Start with the core loop, verify the edge cases, and eliminate uncertainty through working code."
  },
  {
    number: "02",
    title: "SYSTEMS OVER FEATURES",
    statement: "Understand how pieces interact.",
    elaboration: "A software application is not a collection of isolated endpoints or buttons; it is an interconnected ecosystem of data contracts, failure modes, latencies, and user expectations. Architecture matters because compounding complexity will eventually break shallow designs."
  },
  {
    number: "03",
    title: "SHIP AND ITERATE",
    statement: "Real feedback beats theoretical perfection.",
    elaboration: "Software locked on localhost teaches you nothing. Deploying to real users—even with rough edges—reveals unexpected bottlenecks, actual usage patterns, and the exact constraints that need attention next."
  },
  {
    number: "04",
    title: "USE AI AS A TOOL",
    statement: "AI should accelerate thinking, not replace it.",
    elaboration: "Large language models and multimodal agents are powerful leverage multipliers when guided by rigorous domain schemas, deterministic validation, and human systems thinking. AI without architecture is just unpredictable code."
  },
  {
    number: "05",
    title: "MAKE IT USEFUL",
    statement: "The best project is one people actually use.",
    elaboration: "Engineering vanity metrics are meaningless if a product doesn't solve a tangible human or developer friction. Build tools that save people hours, simplify workflows, and stand up reliably when called upon."
  }
];

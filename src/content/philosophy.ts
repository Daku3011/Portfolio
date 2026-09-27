export interface PhilosophyPrinciple {
  number: string;
  title: string;
  statement: string;
}

export const buildPhilosophy: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "BUILD BEFORE OVERTHINKING",
    statement: "Turn ideas into working prototypes."
  },
  {
    number: "02",
    title: "SYSTEMS OVER FEATURES",
    statement: "Understand how pieces interact."
  },
  {
    number: "03",
    title: "SHIP AND ITERATE",
    statement: "Real feedback beats theoretical perfection."
  },
  {
    number: "04",
    title: "USE AI AS A TOOL",
    statement: "AI accelerates thinking; it does not replace it."
  },
  {
    number: "05",
    title: "MAKE IT USEFUL",
    statement: "The best project is one people actually use."
  }
];

export interface Profile {
  name: string;
  handle: string;
  location: string;
  role: string;
  headline: string;
  subheadline: string;
  statusText: string;
  bioParagraphs: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    x?: string;
  };
  interests: string[];
}

export const profile: Profile = {
  name: "Dwarkesh Ramani",
  handle: "Daku3011",
  location: "Surat, India",
  role: "Computer Engineering Student · Full-Stack · AI Builder",
  headline: "I BUILD SOFTWARE THAT MOVES.",
  subheadline: "Full-stack developer. AI systems builder.",
  statusText: "CURRENTLY BUILDING · AI SYSTEMS · DEVELOPER TOOLS · FULL-STACK PRODUCTS",
  bioParagraphs: [
    "I build things that work."
  ],
  socials: {
    github: "https://github.com/Daku3011",
    linkedin: "https://linkedin.com/in/ramanidwarkesh",
    email: "rdwarkesh1300@gmail.com"
  },
  interests: [
    "Distributed Systems",
    "Autonomous AI Agents",
    "Developer Tooling",
    "Computer Vision & Edge ML",
    "Classical Music",
    "Interactive WebGL"
  ]
};

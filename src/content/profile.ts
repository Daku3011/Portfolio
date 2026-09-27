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
  location: "Surat, Gujarat, India",
  role: "Computer Engineering Student · Full-Stack Developer · AI Builder",
  headline: "I BUILD SOFTWARE THAT MOVES.",
  subheadline: "Computer Engineer. Full-stack developer. AI builder. Turning ambiguous technical challenges into resilient software, autonomous systems, and interactive experiences.",
  statusText: "CURRENTLY BUILDING: AI SYSTEMS · DEVELOPER TOOLS · FULL-STACK PRODUCTS",
  bioParagraphs: [
    "I'm Dwarkesh, a computer engineer who likes turning ambitious ideas into working software.",
    "I spend most of my time somewhere between product engineering, multimodal AI architectures, backend systems, and experiments that began with 'what if we automated this end-to-end?'",
    "I care deeply about software that people actually use—architecting clean APIs, building intuitive interfaces, and testing systems against real edge cases rather than theoretical perfection."
  ],
  socials: {
    github: "https://github.com/Daku3011",
    linkedin: "https://linkedin.com/in/dwarkesh-ramani",
    email: "dwarkeshramani1130@gmail.com"
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

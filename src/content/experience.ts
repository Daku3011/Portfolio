export interface ExperienceItem {
  year: string;
  role: string;
  organization: string;
  summary: string;
  focus: string[];
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    year: "2026",
    role: "Backend Engineer Intern",
    organization: "Ornitech Solution",
    summary: "Engineering autonomous AI agents, backend automation workflows, and high-reliability full-stack systems.",
    focus: ["AI Agents", "Automation Workflows", "Full-Stack Systems", "API Engineering"],
    current: true
  },
  {
    year: "2025 — Present",
    role: "Student Lead",
    organization: "SCET Coding Club",
    summary: "Technical leadership, mentoring junior developers, organizing algorithmic sprints, and coordinating hackathons across the university.",
    focus: ["Technical Leadership", "Developer Community", "Hackathons", "Mentorship"],
    current: true
  },
  {
    year: "2025 — Present",
    role: "Tech Lead",
    organization: "AWS Student Builder Group",
    summary: "Guiding cloud architecture, serverless systems, and AI developer ecosystem workshops for engineering students.",
    focus: ["Cloud Architecture", "AWS Solutions", "AI Developer Tools", "Workshops"],
    current: true
  },
  {
    year: "2025",
    role: "Campus Ambassador",
    organization: "E-Cell IIT Bombay",
    summary: "Driving entrepreneurship initiatives, hackathon participation, and technical startup outreach on campus.",
    focus: ["Startup Ecosystem", "Technical Outreach", "Innovation Initiatives"]
  }
];

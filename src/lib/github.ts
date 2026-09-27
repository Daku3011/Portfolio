export interface GitHubRepoSummary {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
}

export interface GitHubUserSummary {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

const FALLBACK_USER: GitHubUserSummary = {
  login: "Daku3011",
  name: "Dwarkesh Ramani",
  bio: "I turn ambitious ideas into working software, systems and experiences.",
  public_repos: 36,
  followers: 4,
  html_url: "https://github.com/Daku3011"
};

const FALLBACK_REPOS: GitHubRepoSummary[] = [
  {
    name: "Minicode",
    description: "Full-stack coding ecosystem integrating GitHub workflows, AI-powered evaluation, gamification, and academic analytics.",
    language: "TypeScript",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2026-08-25T05:31:26Z",
    html_url: "https://github.com/Daku3011/Minicode",
    homepage: "https://minicode-web.vercel.app"
  },
  {
    name: "AI-Hackathon-Judge",
    description: "An AI system that evaluates hackathon projects like a real judge with multi-persona consensus and multimodal vision.",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-09-24T04:30:55Z",
    html_url: "https://github.com/Daku3011/AI-Hackathon-Judge",
    homepage: "https://ai-hackathon-judge.onrender.com"
  },
  {
    name: "GitRemote",
    description: "Android app and companion PC daemon for remotely managing Git repositories, staging hunks, and pushing code over LAN.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-06-21T08:31:33Z",
    html_url: "https://github.com/Daku3011/GitRemote",
    homepage: null
  },
  {
    name: "Class-Intelligence-System",
    description: "AI-powered RAG system serving as Department ChatGPT for querying course notes, PDFs, and exam papers with grounded citations.",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-03-21T11:16:21Z",
    html_url: "https://github.com/Daku3011/Class-Intelligence-System",
    homepage: null
  },
  {
    name: "Auto-Attendance-System-ASP.NET",
    description: "Real-time face recognition attendance system with ArcFace + YuNet, built on ASP.NET Core, PostgreSQL, and SignalR.",
    language: "C#",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-04-19T16:39:16Z",
    html_url: "https://github.com/Daku3011/Auto-Attendance-System-ASP.NET",
    homepage: null
  },
  {
    name: "Real-Time-Sign-Language-to-Speech-AR-Glasses",
    description: "Edge-AI wearable using TCN & MediaPipe landmarks for gesture-to-audio mapping with HUD interface.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-04-23T11:50:01Z",
    html_url: "https://github.com/Daku3011/Real-Time-Sign-Language-to-Speech-AR-Glasses",
    homepage: "https://real-time-sign-language-to-speech-a.vercel.app/"
  }
];

export async function getGitHubProfile(): Promise<GitHubUserSummary> {
  try {
    const res = await fetch("https://api.github.com/users/Daku3011", {
      headers: {
        "User-Agent": "Dwarkesh-Portfolio",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
      },
      next: { revalidate: 3600 } // Cache for 1 hour in Next.js
    });

    if (!res.ok) return FALLBACK_USER;
    const data = await res.json();
    return {
      login: data.login,
      name: data.name || "Dwarkesh",
      bio: data.bio || FALLBACK_USER.bio,
      public_repos: data.public_repos ?? FALLBACK_USER.public_repos,
      followers: data.followers ?? FALLBACK_USER.followers,
      html_url: data.html_url || FALLBACK_USER.html_url
    };
  } catch {
    return FALLBACK_USER;
  }
}

export async function getGitHubRepositories(): Promise<GitHubRepoSummary[]> {
  try {
    const res = await fetch("https://api.github.com/users/Daku3011/repos?per_page=30&sort=pushed", {
      headers: {
        "User-Agent": "Dwarkesh-Portfolio",
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
      },
      next: { revalidate: 3600 }
    });

    if (!res.ok) return FALLBACK_REPOS;
    const data = await res.json();
    if (!Array.isArray(data)) return FALLBACK_REPOS;

    return data
      .filter((r: { fork?: boolean }) => !r.fork)
      .slice(0, 8)
      .map((r: { name: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; updated_at: string; html_url: string; homepage: string | null }) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        updated_at: r.updated_at,
        html_url: r.html_url,
        homepage: r.homepage
      }));
  } catch {
    return FALLBACK_REPOS;
  }
}

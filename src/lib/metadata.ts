import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dwarkeshramani.runs-on.dev";

export function constructMetadata({
  title = "Dwarkesh Ramani — Systems, AI & Full-Stack Engineer",
  description = "Computer Engineer & Builder based in Surat, India. Turning ambitious ideas into working software, autonomous AI systems, developer tools, and high-performance applications.",
  image = "/og-image.png",
  noIndex = false,
  keywords = [
    "Dwarkesh Ramani",
    "Dwarkesh Ramani Portfolio",
    "Full-Stack Developer",
    "AI Systems Builder",
    "Computer Engineer Surat",
    "MiniCode",
    "AI Hackathon Judge",
    "GitRemote",
    "Next.js 15 Developer",
    "FastAPI Python Engineer",
    "Autonomous AI Agents",
    "Developer Tooling",
    "Daku3011",
    "Gujarat India Software Engineer"
  ],
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: "%s | Dwarkesh Ramani",
    },
    description,
    keywords,
    category: "technology",
    authors: [{ name: "Dwarkesh Ramani", url: "https://github.com/Daku3011" }],
    creator: "Dwarkesh Ramani",
    publisher: "Dwarkesh Ramani",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: SITE_URL,
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: "Dwarkesh Ramani — Build System",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Dwarkesh Ramani — Engineering Portfolio & Build System",
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Daku3011",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Dwarkesh Ramani",
        alternateName: ["Daku3011", "Dwarkesh"],
        url: SITE_URL,
        image: `${SITE_URL}/dwarkesh.jpg`,
        jobTitle: "Computer Engineering Student · Full-Stack & AI Systems Engineer",
        description: "Full-stack developer and AI systems builder. Builds competitive programming arenas, autonomous agent swarms, mobile developer tools, and departmental RAG systems.",
        email: "mailto:rdwarkesh1300@gmail.com",
        nationality: {
          "@type": "Country",
          name: "India"
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "India",
        },
        sameAs: [
          "https://github.com/Daku3011",
          "https://linkedin.com/in/ramanidwarkesh",
        ],
        knowsAbout: [
          "Computer Engineering",
          "Full-Stack Web Development",
          "Artificial Intelligence",
          "Generative AI & LLMs",
          "Retrieval-Augmented Generation (RAG)",
          "Distributed Systems",
          "Next.js",
          "FastAPI",
          "Python",
          "TypeScript",
          "Docker",
          "PostgreSQL",
          "Redis",
          "React Native"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Dwarkesh Ramani — Build System",
        description: "Interactive Engineering Portfolio and Digital Technical Archive of Dwarkesh Ramani.",
        publisher: {
          "@id": `${SITE_URL}/#person`
        },
        inLanguage: "en-US"
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        name: "Featured Engineering Systems by Dwarkesh Ramani",
        itemListElement: [
          {
            "@type": "SoftwareApplication",
            position: 1,
            name: "MiniCode",
            description: "Competitive programming rebuilt for real engineers with GitHub webhook ingestion, FastAPI evaluation engine, and Gemini code mentorship.",
            url: `${SITE_URL}/work/minicode`,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web Browser, Linux, macOS, Windows",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          },
          {
            "@type": "SoftwareApplication",
            position: 2,
            name: "AI Hackathon Judge",
            description: "Autonomous multi-persona AI consensus evaluation system for hackathon submissions with static AST and secret vulnerability scans.",
            url: `${SITE_URL}/work/ai-hackathon-judge`,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Linux, macOS, Windows, Docker",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          },
          {
            "@type": "SoftwareApplication",
            position: 3,
            name: "GitRemote",
            description: "Android mobile application paired with a local companion Node.js daemon for LAN git diff inspection and staging.",
            url: `${SITE_URL}/work/gitremote`,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Android, Linux, macOS, Windows",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          },
          {
            "@type": "SoftwareApplication",
            position: 4,
            name: "Class Intelligence System",
            description: "Departmental RAG system pairing ChromaDB vector embeddings and Google Gemini 1.5 Flash for cited academic question-answering.",
            url: `${SITE_URL}/work/class-intelligence`,
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web Browser, Linux, Docker",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          },
          {
            "@type": "SoftwareApplication",
            position: 5,
            name: "HackerRank Orchestrate",
            description: "Autonomous damage claim verification pipeline built with Pydantic validation schemas under 24-hour hackathon constraints.",
            url: `${SITE_URL}/work/hackerrank-orchestrate`,
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Linux, Docker, Cloud",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Dwarkesh Ramani?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dwarkesh Ramani is a Computer Engineering student, Full-Stack Developer, and AI Systems Builder based in Surat, Gujarat, India. He builds production-grade developer tools, autonomous multi-agent systems, and scalable web applications."
            }
          },
          {
            "@type": "Question",
            name: "What technologies and stack does Dwarkesh Ramani use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dwarkesh Ramani specializes in Next.js 15, React 19, TypeScript, Python, FastAPI, Docker, PostgreSQL, Redis, ChromaDB, Google Gemini APIs, and React Native (Expo)."
            }
          },
          {
            "@type": "Question",
            name: "How can I contact Dwarkesh Ramani for opportunities or collaboration?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can reach Dwarkesh Ramani via email at rdwarkesh1300@gmail.com, on LinkedIn at linkedin.com/in/ramanidwarkesh, or explore his code on GitHub at github.com/Daku3011."
            }
          }
        ]
      }
    ]
  };
}

import type { Metadata } from "next";

export const SITE_URL = "https://dwarkeshramani.dev"; // Production URL

export function constructMetadata({
  title = "Dwarkesh Ramani — Systems, AI & Full-Stack Engineer",
  description = "Computer Engineer & Builder. Turning ambitious ideas into working software, autonomous AI systems, developer tools, and interactive technical experiences.",
  image = "/og-image.png",
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: "%s | Dwarkesh Ramani"
    },
    description,
    authors: [{ name: "Dwarkesh Ramani", url: "https://github.com/Daku3011" }],
    creator: "Dwarkesh Ramani",
    metadataBase: new URL(SITE_URL),
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
          alt: "Dwarkesh Ramani — Engineering Portfolio & Build System"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Daku3011"
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex
      }
    }
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dwarkesh Ramani",
    alternateName: "Daku3011",
    url: SITE_URL,
    jobTitle: "Computer Engineering Student & Full-Stack / AI Engineer",
    sameAs: [
      "https://github.com/Daku3011",
      "https://linkedin.com/in/ramanidwarkesh"
    ],
    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "Retrieval-Augmented Generation",
      "FastAPI",
      "Next.js",
      "Docker",
      "React Native",
      "PostgreSQL"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "India"
    }
  };
}

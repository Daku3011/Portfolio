import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-surface/60 backdrop-blur-sm text-muted-foreground py-12 px-6 sm:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-mono text-sm text-foreground font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>{profile.name.toUpperCase()}</span>
          </div>
          {/* <p className="text-xs font-mono text-muted max-w-sm">
            BUILT WITH NEXT.JS 15 · TYPESCRIPT · THREE.JS · TAILWIND CSS
          </p> */}
          <p className="text-xs font-mono text-muted">
            {profile.location.toUpperCase()} · © {new Date().getFullYear()}
          </p>
        </div>

        {/* Social and Action Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
          </a>
          <a
            href={`mailto:${profile.socials.email}`}
            className="flex items-center gap-2 hover:text-accent transition-colors"
            aria-label="Email Dwarkesh"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL</span>
          </a>
          <a
            href="#main-content"
            className="flex items-center gap-1.5 px-3 py-1.5 border border-border hover:border-accent text-foreground transition-all ml-auto md:ml-4"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>TOP</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8">
      <SectionHeading
        number="07"
        title="CONTACT"
        subtitle="Let's build something interesting."
        badge="OPEN FOR COLLABORATION"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <h3 className="text-4xl sm:text-6xl font-black tracking-tightest uppercase text-foreground">
            HAVE AN IDEA?
          </h3>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground font-sans max-w-xl">
            Whether you want to discuss distributed AI systems, hackathons, open-source architectures, or building a new digital product together—my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.socials.email}`}
              className="px-6 py-4 bg-accent text-background font-mono text-xs uppercase font-bold tracking-wider hover:bg-accent/90 transition-all flex items-center gap-2 active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>SEND AN EMAIL</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>

            <button
              onClick={copyEmail}
              className="px-5 py-4 border border-border bg-surface text-foreground font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-all flex items-center gap-2 active:scale-[0.98]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-accent">EMAIL COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted" />
                  <span>COPY: {profile.socials.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Verified Channels */}
        <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
          <span className="text-muted uppercase text-[10px] tracking-widest mb-1">
            VERIFIED ENDPOINTS
          </span>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-border bg-surface/60 hover:border-accent hover:text-accent transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-border bg-surface/60 hover:border-accent hover:text-accent transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Copy, Check, ArrowUpRight, Github, Linkedin } from "lucide-react";

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
        badge="REACH OUT"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
        <div className="lg:col-span-8">
          <h3 className="text-4xl sm:text-6xl font-black tracking-tightest uppercase text-foreground">
            HAVE SOMETHING INTERESTING?
          </h3>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.socials.email}`}
              className="group inline-flex items-center gap-3 text-xl sm:text-3xl font-mono text-accent font-bold hover:underline underline-offset-8"
              data-magnetic="true"
            >
              <span>→ {profile.socials.email}</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <button
              onClick={copyEmail}
              className="ml-auto sm:ml-4 px-4 py-2 border border-border bg-surface text-foreground font-mono text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-all flex items-center gap-2 active:scale-[0.98]"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-muted" />
                  <span>COPY</span>
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
              <span>GITHUB / DAKU3011</span>
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
              <span>LINKEDIN / RAMANIDWARKESH</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

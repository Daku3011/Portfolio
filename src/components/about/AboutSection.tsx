import React from "react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Music, Cpu, Compass } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80">
      <SectionHeading
        number="06"
        title="ABOUT"
        subtitle="The human behind the system."
        badge="ENGINEER"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-sans">
          <p className="text-xl sm:text-2xl font-medium text-foreground">
            I&apos;m <span className="text-accent font-semibold">{profile.name}</span>. A computer engineer who likes turning ambiguous ideas into working software.
          </p>

          {profile.bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Technical & Personal Context Plate */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="border border-border/80 bg-surface/50 p-6 font-mono text-xs space-y-6">
            <div>
              <div className="flex items-center gap-2 text-accent uppercase tracking-widest text-[10px] mb-2 font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>BASE OF OPERATIONS</span>
              </div>
              <p className="text-foreground text-sm font-semibold">
                {profile.location}
              </p>
              <p className="text-muted text-[11px] mt-0.5">
                Timezone: Indian Standard Time (UTC+05:30)
              </p>
            </div>

            <div className="border-t border-border/40 pt-5">
              <div className="flex items-center gap-2 text-accent uppercase tracking-widest text-[10px] mb-3 font-bold">
                <Compass className="w-3.5 h-3.5" />
                <span>INTERESTS & OBSESSIONS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 border border-border bg-surface text-slate-300 text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border/40 pt-5">
              <div className="flex items-center gap-2 text-accent uppercase tracking-widest text-[10px] mb-2 font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span>CORE DIRECTIVE</span>
              </div>
              <p className="text-slate-300 italic text-[11px] leading-relaxed">
                &ldquo;Code is the highest-leverage medium to materialize an idea, stress-test it against reality, and give people tools that genuinely elevate their productivity.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

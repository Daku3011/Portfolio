"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RefreshCw, Copy, Check, Quote, Terminal } from "lucide-react";

interface QuoteItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  domain: string;
  year?: string;
}

const QUOTES: QuoteItem[] = [
  {
    id: 1,
    quote: "Computer science is no more about computers than astronomy is about telescopes.",
    author: "Edsger W. Dijkstra",
    role: "Turing Award Laureate · Structured Programming Pioneer",
    domain: "THEORY & ALGORITHMS",
    year: "1970",
  },
  {
    id: 2,
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    role: "Creator of Linux & Git",
    domain: "OPERATING SYSTEMS",
    year: "2000",
  },
  {
    id: 3,
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    role: "Pioneer of OOP & GUI, Xerox PARC",
    domain: "SYSTEM DESIGN",
    year: "1971",
  },
  {
    id: 4,
    quote: "The most dangerous phrase in the language is: We've always done it this way.",
    author: "Grace Hopper",
    role: "Rear Admiral & Compiler Inventor",
    domain: "COMPILERS & ARCHITECTURE",
    year: "1976",
  },
  {
    id: 5,
    quote: "Premature optimization is the root of all evil (or at least most of it) in programming.",
    author: "Donald E. Knuth",
    role: "Author of The Art of Computer Programming",
    domain: "COMPLEXITY THEORY",
    year: "1974",
  },
  {
    id: 6,
    quote: "Information is the resolution of uncertainty.",
    author: "Claude E. Shannon",
    role: "Father of Information Theory, Bell Labs",
    domain: "INFORMATION THEORY",
    year: "1948",
  },
  {
    id: 7,
    quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian W. Kernighan",
    role: "Co-creator of C, Unix & AWK",
    domain: "SOFTWARE ENGINEERING",
    year: "1978",
  },
  {
    id: 8,
    quote: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    author: "Alan Turing",
    role: "Founding Father of Theoretical Computer Science & AI",
    domain: "COMPUTATION & MACHINE INTELLIGENCE",
    year: "1950",
  },
  {
    id: 9,
    quote: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
    role: "Shortest Path Algorithm Inventor",
    domain: "SYSTEMS RELIABILITY",
    year: "1972",
  },
  {
    id: 10,
    quote: "Good judgment comes from experience, and experience comes from bad judgment.",
    author: "Fred Brooks",
    role: "Author of The Mythical Man-Month",
    domain: "ENGINEERING MANAGEMENT",
    year: "1975",
  },
];

export function DailyQuoteSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  // Compute daily quote based on the day of the year
  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const dailyIdx = dayOfYear % QUOTES.length;
    setCurrentIndex(dailyIdx);
  }, []);

  const handleNextQuote = () => {
    setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
  };

  const handleCopy = () => {
    const q = QUOTES[currentIndex];
    const text = `"${q.quote}" — ${q.author} (${q.domain})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeQuote = QUOTES[currentIndex];

  return (
    <section
      id="quotes"
      className="w-full py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 border-b border-border/80"
    >
      <SectionHeading
        number="02"
        title="DAILY QUOTES"
        subtitle="Timeless mental models and wisdom from the pioneers of computing systems."
        badge="DAILY SYSTEM RECORD"
      />

      <div className="relative border border-border/80 bg-surface/40 p-8 sm:p-12 transition-all duration-300 hover:border-accent/40">
        {/* Engineering Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-6 mb-8 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-accent uppercase font-bold tracking-widest text-[11px]">
              {"// "}{activeQuote.domain}
            </span>
          </div>
          <div className="flex items-center gap-4 text-muted text-[11px]">
            <span>RECORD #{String(activeQuote.id).padStart(2, "0")} / {QUOTES.length}</span>
            {activeQuote.year && <span>CIRCA {activeQuote.year}</span>}
          </div>
        </div>

        {/* Large Quote Statement */}
        <blockquote className="my-6">
          <p className="text-xl sm:text-3xl md:text-4xl font-sans font-medium text-foreground tracking-tight leading-snug">
            &ldquo;{activeQuote.quote}&rdquo;
          </p>
        </blockquote>

        {/* Author Metadata & Controls */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-base font-bold text-foreground">
              {activeQuote.author}
            </div>
            <div className="font-mono text-xs text-muted-foreground mt-0.5">
              {activeQuote.role}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 border border-border bg-surface hover:border-accent hover:text-accent text-slate-300 transition-all flex items-center gap-2 active:scale-95"
              aria-label="Copy quote to clipboard"
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

            <button
              onClick={handleNextQuote}
              className="px-5 py-2.5 border border-accent bg-accent/10 hover:bg-accent text-accent hover:text-background font-bold tracking-wider transition-all flex items-center gap-2 active:scale-95"
              aria-label="Load next computing quote"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>CYCLE QUOTE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/content/profile";
import { ScrambleText } from "@/components/ui/ScrambleText";

const NAV_LINKS = [
  { label: "WORK", href: "/work", id: "work" },
  { label: "LAB", href: "/lab", id: "lab" },
  { label: "SYSTEM", href: "/system", id: "system" },
  { label: "ABOUT", href: "/about", id: "about" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Active section detection via IntersectionObserver
    if (isHome) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px" }
      );

      NAV_LINKS.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Keyboard accessibility: Escape to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-lg shadow-black/20"
          : "bg-background/40 backdrop-blur-sm border-b border-border/30 py-5"
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-mono text-sm tracking-wider text-foreground hover:text-accent transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-bold tracking-tight text-base sm:text-lg">
            <ScrambleText text="DWARKESH RAMANI" />
          </span>
          <span className="text-muted text-xs hidden sm:inline font-mono">/ BUILD.SYS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          {NAV_LINKS.map((item) => {
            const targetHref = isHome ? `#${item.id}` : item.href;
            const isActive = isHome ? activeSection === item.id : pathname === item.href;
            return (
              <Link
                key={item.label}
                href={targetHref}
                className={cn(
                  "nav-link py-1 transition-colors text-muted-foreground hover:text-foreground",
                  isActive && "text-accent font-semibold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={isHome ? "#contact" : "/about#contact"}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider border border-border bg-surface hover:border-accent hover:text-accent transition-all duration-200 active:scale-[0.98]"
            data-magnetic="true"
          >
            <span>CONTACT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-screen Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] z-50 bg-background/98 backdrop-blur-2xl px-8 py-10 flex flex-col justify-between md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col gap-6 font-mono text-lg tracking-wider">
            {NAV_LINKS.map((item, index) => (
              <Link
                key={item.label}
                href={isHome ? `#${item.id}` : item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 border-b border-border/50 text-foreground hover:text-accent transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-muted text-xs">0{index + 1}</span>
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-border flex flex-col gap-4 font-mono text-xs">
            <span className="text-muted uppercase tracking-widest text-[10px]">
              DIRECT CHANNELS
            </span>
            <a
              href={`mailto:${profile.socials.email}`}
              className="text-accent flex items-center justify-between py-2 border-b border-border/30 hover:underline"
            >
              <span>→ {profile.socials.email}</span>
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 flex items-center justify-between py-2 border-b border-border/30 hover:text-accent"
            >
              <span>→ GITHUB / DAKU3011</span>
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 flex items-center justify-between py-2 hover:text-accent"
            >
              <span>→ LINKEDIN / RAMANIDWARKESH</span>
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

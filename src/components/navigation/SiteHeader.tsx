"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  { label: "QUOTES", href: "#quotes", id: "quotes" },
  { label: "ABOUT", href: "/about", id: "about" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
    <>
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
              <ScrambleText text="DWARKESH" />
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
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2.5 text-foreground hover:text-accent focus:outline-none focus:ring-1 focus:ring-accent border border-border/60 bg-surface/50 rounded-sm active:scale-95 transition-all"
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay rendered via React Portal to avoid ancestor backdrop-filter bugs */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-background/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between pb-6 border-b border-border/80">
              <div className="flex items-center gap-3 font-mono text-sm tracking-wider text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-bold tracking-tight text-lg">DWARKESH</span>
                <span className="text-muted text-xs font-mono">/ MENU</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 border border-border text-foreground hover:text-accent hover:border-accent transition-colors rounded-sm active:scale-95"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-2 py-8 my-auto font-mono text-xl tracking-wider">
              {NAV_LINKS.map((item, index) => {
                const targetHref = isHome ? `#${item.id}` : item.href;
                return (
                  <Link
                    key={item.label}
                    href={targetHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 px-2 border-b border-border/40 text-foreground hover:text-accent hover:bg-surface/40 transition-all flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-muted text-xs font-mono">0{index + 1}</span>
                  </Link>
                );
              })}
              <Link
                href={isHome ? "#contact" : "/about#contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 py-3.5 px-4 bg-accent text-background font-bold text-sm tracking-widest text-center uppercase flex items-center justify-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>

            {/* Direct Contact Footer */}
            <div className="pt-6 border-t border-border flex flex-col gap-3 font-mono text-xs">
              <span className="text-muted uppercase tracking-widest text-[10px]">
                VERIFIED ENDPOINTS
              </span>
              <a
                href={`mailto:${profile.socials.email}`}
                className="text-accent flex items-center justify-between py-1.5 hover:underline"
              >
                <span>{profile.socials.email}</span>
                <Mail className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-6 pt-2 text-muted">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

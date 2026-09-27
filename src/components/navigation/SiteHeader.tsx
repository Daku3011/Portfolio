"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "WORK", href: "/work", hash: "#work" },
  { label: "LAB", href: "/lab", hash: "#lab" },
  { label: "SYSTEM", href: "/system", hash: "#system" },
  { label: "ABOUT", href: "/about", hash: "#about" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border/80 py-3"
          : "bg-background/50 backdrop-blur-sm border-border/40 py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-mono text-sm tracking-wider text-foreground hover:text-accent transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-bold tracking-tight text-base sm:text-lg">DWARKESH</span>
          <span className="text-muted text-xs hidden sm:inline font-mono">/ BUILD.SYS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider" aria-label="Main Navigation">
          {NAV_LINKS.map((item) => {
            const targetHref = isHome ? item.hash : item.href;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={targetHref}
                className={cn(
                  "relative py-1 text-muted-foreground hover:text-foreground transition-colors",
                  isActive && "text-foreground font-semibold"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={isHome ? "#contact" : "/about#contact"}
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider border border-border bg-surface hover:border-accent hover:text-accent transition-all duration-200 active:scale-[0.98]"
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
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface/95 backdrop-blur-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4 font-mono text-sm tracking-wider">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={isHome ? item.hash : item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 text-foreground hover:text-accent transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-muted text-xs">0{NAV_LINKS.indexOf(item) + 1}</span>
              </Link>
            ))}
            <Link
              href={isHome ? "#contact" : "/about#contact"}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 border border-accent bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest font-semibold"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

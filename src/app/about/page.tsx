import React from "react";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About — Dwarkesh Ramani",
  description: "Computer engineering student, full-stack developer, and AI builder based in Surat, India. Systems thinking, product discipline, and engineering philosophy."
});

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutSection />
      <ContactSection />
    </div>
  );
}

import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { PhilosophySection } from "@/components/philosophy/PhilosophySection";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { LabSection } from "@/components/lab/LabSection";
import { TechSystem } from "@/components/system/TechSystem";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <SelectedWork />
      <PhilosophySection />
      <ExperienceTimeline />
      <LabSection />
      <TechSystem />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

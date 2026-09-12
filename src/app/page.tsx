import { HeroNowSection } from "@/components/sections/HeroNowSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { CuratedShelfSection } from "@/components/sections/CuratedShelfSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-4">
      {/* 1. Hero & /now Snapshot */}
      <HeroNowSection />

      {/* 2. Featured Projects (High Priority Showcase) */}
      <ProjectsSection />

      {/* 3. Quantified Track Record & Real-World Impact */}
      {/* <ImpactSection /> */}

      {/* 4. Curated Shelf & Core Influences */}
      <CuratedShelfSection />

      {/* 5. Contact & Collaboration Gateway */}
      <ContactSection />
    </div>
  );
}

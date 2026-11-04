import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HomeHero, StrategicPremise, ResponseSection, CapabilityJourney, SectorFocus, WorkingProcess, Automai8Section, ProofSection, EngagementSection } from "@/components/home/HomeSections";
import { useHomeMotion } from "@/hooks/use-home-motion";
import { structuredData } from "@/data/site-content";

export default function Index() {
  const root = useRef<HTMLDivElement>(null);
  useHomeMotion(root);
  return <div className="editorial-site" ref={root}>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <HomeHero /><StrategicPremise /><ResponseSection /><CapabilityJourney /><SectorFocus /><WorkingProcess /><Automai8Section /><ProofSection /><EngagementSection />
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </div>;
}
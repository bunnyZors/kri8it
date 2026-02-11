import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ServicesSection from "@/components/ServicesSection";
import ProductShowcaseSection from "@/components/ProductShowcaseSection";
import EcosystemSection from "@/components/EcosystemSection";
import ExperienceSection from "@/components/ExperienceSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProjectShowcasesSection from "@/components/ProjectShowcasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <HowWeWorkSection />
      <ServicesSection />
      <ProductShowcaseSection />
      <EcosystemSection />
      <ExperienceSection />
      <IndustriesSection />
      <ProjectShowcasesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;

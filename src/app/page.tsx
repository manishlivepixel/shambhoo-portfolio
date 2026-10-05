import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import JourneySection from "@/components/JourneySection";
import StrengthsSection from "@/components/StrengthsSection";
import IndustryExperience from "@/components/IndustryExperience";
import ProjectsSection from "@/components/ProjectsSection";
import BusinessDevSection from "@/components/BusinessDevSection";
import AISection from "@/components/AISection";
import PerspectiveSection from "@/components/PerspectiveSection";
import BrandStatement from "@/components/BrandStatement";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent selection:text-primary relative bg-primary">
      <div className="vignette-overlay"></div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <JourneySection />
      <StrengthsSection />
      <IndustryExperience />
      <ProjectsSection />
      <BusinessDevSection />
      <AISection />
      <PerspectiveSection />
      <BrandStatement />
      <ContactSection />
      <Footer />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import LiveProof from "@/components/LiveProof";
import ServicePackages from "@/components/ServicePackages";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoShowcase />
      <LiveProof />
      <ServicePackages />
      <FinalCTA />
    </div>
  );
};

export default Index;

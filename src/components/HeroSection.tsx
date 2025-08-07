import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
        <div className="absolute inset-0 opacity-30">
          {/* Simulated dashboard elements floating */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <div className="text-success text-sm font-medium">New order: $55.00</div>
              <div className="text-muted-foreground text-xs">2 minutes ago</div>
            </div>
          </div>
          <div className="absolute top-40 right-16 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-secondary/20">
              <div className="text-secondary text-sm font-medium">Conversion Rate</div>
              <div className="text-2xl font-bold text-gradient">4.2%</div>
            </div>
          </div>
          <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-primary/20">
              <div className="text-primary text-sm font-medium">Store Launched</div>
              <div className="text-muted-foreground text-xs">Imparium • Day 7</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Your Brand.{" "}
          <span className="text-gradient">Our Magic.</span>{" "}
          <span className="text-secondary">7 Days.</span>{" "}
          <span className="text-gradient">Done.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Watch how we turned Neduolla into a $10K/month brand
        </p>

        {/* Video Play Button */}
        <div className="mb-12">
          <button className="group relative mx-auto mb-8 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary shadow-neon-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-muted-foreground">Click to watch our 60-second brand story</p>
        </div>

        {/* CTA Button */}
        <Button className="btn-hero pulse-glow text-primary-foreground">
          Launch My Store Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">200+</div>
            <div className="text-muted-foreground">Brands Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">7 Days</div>
            <div className="text-muted-foreground">Launch Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4.2%</div>
            <div className="text-muted-foreground">Avg. Conversion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
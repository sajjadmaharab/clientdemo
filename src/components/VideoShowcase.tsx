import { Play, TrendingUp, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  const stats = [
    { icon: TrendingUp, label: "4.2% avg. conversion rate", value: 85, color: "primary" },
    { icon: Clock, label: "7-day launch guarantee", value: 100, color: "secondary" },
    { icon: MessageSquare, label: "200+ brands launched", value: 92, color: "success" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            The <span className="text-gradient">7-Day Blueprint</span> to Your Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how we transform ideas into profit-ready stores that convert
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-dark border border-primary/20 shadow-glow">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
              
              {/* Play Button Overlay */}
              <div className="video-overlay">
                <button className="group flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary shadow-neon-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>

              {/* Simulated Video Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">Day 1 → 7</div>
                  <p className="text-muted-foreground">Watch the timelapse transformation</p>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 rounded-full h-1">
                  <div className="bg-gradient-primary h-1 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Video Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                Timelapse Build
              </span>
              <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                Client Testimonials
              </span>
              <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm">
                Before & After
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg bg-${stat.color}/20 text-${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">{stat.label}</span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="stat-bar h-3">
                  <div 
                    className={`stat-fill bg-gradient-${stat.color === 'primary' ? 'primary' : 'secondary'}`}
                    style={{ '--target-width': `${stat.value}%` } as React.CSSProperties}
                  ></div>
                </div>
                
                <div className="text-right text-sm text-muted-foreground">
                  {stat.value}% proven results
                </div>
              </div>
            ))}

            <div className="pt-8">
              <Button className="btn-hero w-full">
                See Your Potential → Free Audit
              </Button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why <span className="text-gradient">Choose Us?</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Design Process", duration: "30 sec", desc: "See our design magic in action" },
              { title: "Client Results", duration: "Case study", desc: "Real results from real clients" },
              { title: "Meet the Team", duration: "15 sec", desc: "The talent behind your success" },
            ].map((video, index) => (
              <div key={index} className="group relative aspect-video rounded-xl overflow-hidden bg-gradient-dark border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                
                <div className="video-overlay">
                  <button className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-neon-primary transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h4 className="font-semibold mb-1">{video.title}</h4>
                  <p className="text-sm text-muted-foreground">{video.desc}</p>
                  <span className="text-xs text-primary">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
import { Play, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-6">
            Still Thinking? <span className="text-gradient">Watch This!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See a real client celebrate their first $1,000 sale after working with us
          </p>
        </div>

        {/* Featured Success Video */}
        <div className="relative max-w-3xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-dark border border-primary/20 shadow-neon-primary">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-primary/20"></div>
            
            {/* Success Celebration Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎉</div>
                <div className="text-3xl font-bold text-gradient">$1,000 FIRST SALE!</div>
                <p className="text-muted-foreground">Sarah's breakthrough moment</p>
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="video-overlay">
              <button className="group relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-primary shadow-neon-primary hover:shadow-glow transition-all duration-300 hover:scale-110">
                <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                <div className="absolute inset-0 rounded-full animate-pulse-glow"></div>
              </button>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold mb-2">Your turn. Let's talk →</h3>
                <p className="text-sm text-muted-foreground">
                  Watch how Sarah went from idea to $1K in sales
                </p>
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute top-4 right-4">
              <span className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                10 sec
              </span>
            </div>
          </div>
        </div>

        {/* Booking Widget Simulation */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 shadow-glow">
            <div className="text-center mb-6">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Brand?</h3>
              <p className="text-muted-foreground">
                Book your free strategy call and see if we're the right fit
              </p>
            </div>

            <div className="space-y-4">
              <Button className="btn-hero w-full text-lg py-6">
                <Calendar className="mr-3 w-6 h-6" />
                Book Free Strategy Call
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>30-minute call</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>No sales pressure</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span>Free brand audit</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span>Strategy session</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Trust Signals */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-semibold mb-2">Lightning Fast</h4>
            <p className="text-sm text-muted-foreground">7-day launch guarantee</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Conversion Focused</h4>
            <p className="text-sm text-muted-foreground">4.2% average conversion rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-semibold mb-2">Growth Driven</h4>
            <p className="text-sm text-muted-foreground">200+ successful launches</p>
          </div>
        </div>

        {/* Urgency Element */}
        <div className="mt-12 p-4 bg-primary/10 border border-primary/20 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-center">
            <span className="font-semibold text-primary">Limited spots:</span>{" "}
            <span className="text-muted-foreground">Only 3 new projects this month</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
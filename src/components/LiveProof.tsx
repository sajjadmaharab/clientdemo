import { ShoppingBag, TrendingUp, Rocket } from "lucide-react";

const LiveProof = () => {
  const notifications = [
    { icon: ShoppingBag, text: "Shopify order $20.00 just processed for ClientX", type: "order" },
    { icon: TrendingUp, text: "Pedro upgraded to Pro+ plan", type: "upgrade" },
    { icon: Rocket, text: "New store 'Imparium' launched successfully", type: "launch" },
    { icon: ShoppingBag, text: "Sarah's store hit $1K in first week", type: "milestone" },
    { icon: TrendingUp, text: "Conversion rate improved by 340% for BrandY", type: "success" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-dark">
      <div className="max-w-7xl mx-auto">
        {/* Hot Off the Press Ticker */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="px-4 py-2 bg-gradient-primary rounded-full text-primary-foreground font-semibold text-sm">
              🔥 HOT OFF THE PRESS
            </div>
            <div className="h-px bg-gradient-primary flex-1"></div>
          </div>
          
          <div className="relative overflow-hidden bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20 p-4">
            <div className="flex ticker gap-8 whitespace-nowrap">
              {[...notifications, ...notifications].map((notification, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className={`p-2 rounded-full ${
                    notification.type === 'order' ? 'bg-success/20 text-success' :
                    notification.type === 'upgrade' ? 'bg-primary/20 text-primary' :
                    notification.type === 'launch' ? 'bg-secondary/20 text-secondary' :
                    notification.type === 'milestone' ? 'bg-success/20 text-success' :
                    'bg-primary/20 text-primary'
                  }`}>
                    <notification.icon className="w-4 h-4" />
                  </div>
                  <span className="text-foreground">{notification.text}</span>
                  <span className="text-muted-foreground">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              client: "Neduolla",
              result: "$10K/month",
              timeframe: "Within 2 months",
              improvement: "+340% conversion rate",
              avatar: "N",
              color: "primary"
            },
            {
              client: "Imparium",
              result: "$5K/week",
              timeframe: "First month",
              improvement: "+280% organic traffic",
              avatar: "I",
              color: "secondary"
            },
            {
              client: "BrandFlow",
              result: "$15K/month",
              timeframe: "3 months",
              improvement: "+450% revenue growth",
              avatar: "B",
              color: "success"
            }
          ].map((story, index) => (
            <div key={index} className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-${story.color} flex items-center justify-center font-bold text-lg`}>
                  {story.avatar}
                </div>
                <div>
                  <h3 className="font-semibold">{story.client}</h3>
                  <p className="text-sm text-muted-foreground">{story.timeframe}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Revenue:</span>
                  <span className="font-bold text-gradient text-xl">{story.result}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Growth:</span>
                  <span className={`font-semibold text-${story.color}`}>{story.improvement}</span>
                </div>
                
                <div className="pt-3 border-t border-border">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className={`h-2 rounded-full bg-gradient-${story.color} w-full animate-pulse`}></div>
                  </div>
                  <p className="text-xs text-center mt-2 text-muted-foreground">Target exceeded</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProof;
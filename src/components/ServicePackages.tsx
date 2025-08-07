import { Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicePackages = () => {
  const packages = [
    {
      name: "Starter",
      price: "$2,997",
      originalPrice: "$4,500",
      icon: Zap,
      description: "Perfect for new entrepreneurs ready to launch",
      features: [
        "Custom Shopify Store Design",
        "Mobile-Responsive Theme",
        "5 Product Pages Setup",
        "Basic SEO Optimization",
        "7-Day Launch Guarantee",
        "2 Weeks Support"
      ],
      popular: false,
      gradient: "from-muted to-accent",
      buttonVariant: "outline"
    },
    {
      name: "Pro+",
      price: "$4,997",
      originalPrice: "$7,500",
      icon: Star,
      description: "Most popular choice for serious brands",
      features: [
        "Everything in Starter",
        "Advanced Liquid Customization",
        "15 Product Pages Setup",
        "Conversion Rate Optimization",
        "Email Marketing Integration",
        "Analytics & Tracking Setup",
        "1 Month Premium Support",
        "Performance Guarantee"
      ],
      popular: true,
      gradient: "from-primary to-secondary",
      buttonVariant: "hero"
    },
    {
      name: "Flow+",
      price: "$7,997",
      originalPrice: "$12,000",
      icon: Crown,
      description: "Enterprise solution for maximum impact",
      features: [
        "Everything in Pro+",
        "Custom App Development",
        "Unlimited Product Pages",
        "Advanced Automation Setup",
        "Multi-Currency Support",
        "Priority 24/7 Support",
        "3 Months Maintenance",
        "Revenue Growth Guarantee",
        "Personal Account Manager"
      ],
      popular: false,
      gradient: "from-secondary to-success",
      buttonVariant: "secondary"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Choose Your <span className="text-gradient">Success Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each package includes our 7-day launch guarantee and proven conversion optimization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
                pkg.popular 
                  ? 'border-primary shadow-neon-primary bg-gradient-to-br from-card/90 to-primary/5' 
                  : 'border-border hover:border-primary/40 bg-card/50 backdrop-blur-sm'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-6 py-2 rounded-full text-sm font-semibold text-primary-foreground shadow-neon-primary">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Video Hover Effect Simulation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`h-full w-full rounded-2xl bg-gradient-to-br ${pkg.gradient} opacity-10`}></div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${pkg.gradient} mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment • No hidden fees</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${pkg.buttonVariant === 'hero' ? 'btn-hero' : pkg.buttonVariant === 'secondary' ? 'bg-gradient-secondary' : ''}`}
                  variant={pkg.buttonVariant === 'outline' ? 'outline' : 'default'}
                >
                  {pkg.popular ? 'Start My Success Story' : 'Choose ' + pkg.name}
                </Button>

                {/* Guarantee Badge */}
                <div className="text-center mt-4">
                  <span className="text-xs text-muted-foreground">
                    ✅ 7-Day Launch Guarantee
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Proven conversion system</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span className="text-sm text-muted-foreground">24/7 expert support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
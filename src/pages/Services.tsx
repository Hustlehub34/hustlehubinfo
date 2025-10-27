import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Brain, GraduationCap, CheckCircle2 } from "lucide-react";
import servicesData from "@/data/services.json";

const Services = () => {
  const serviceIcons = {
    web: Code,
    mobile: Smartphone,
    ai: Brain,
    "student-projects": GraduationCap,
  };

  const pricingTiers = ["Free Consultation", "Starter Project", "Pro Solution"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Comprehensive solutions for web, mobile, AI/ML, and student project development.
            </p>
          </div>

          <div className="space-y-20">
            {servicesData.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
              return (
                <Card 
                  key={service.id}
                  className="p-8 md:p-12 bg-card/50 backdrop-blur border-border"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-6">
                        <Icon size={32} className="text-foreground" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {service.title}
                      </h2>
                      <p className="text-xl text-muted-foreground font-body mb-8">
                        {service.subtitle}
                      </p>
                      
                      <div className="space-y-3">
                        <h3 className="text-lg font-heading font-semibold mb-4">Key Features:</h3>
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle2 size={20} className="mr-3 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground font-body">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-xl font-heading font-semibold">Pricing Options</h3>
                      <div className="space-y-4">
                        {pricingTiers.map((tier, idx) => (
                          <Card 
                            key={idx}
                            className="p-4 bg-secondary/50 border-border hover:border-accent/50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-body font-medium">{tier}</span>
                              <Badge variant="secondary">Contact us</Badge>
                            </div>
                          </Card>
                        ))}
                      </div>
                      <Button asChild className="w-full bg-gradient-primary">
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Card className="p-12 bg-gradient-subtle border-accent/50">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Not sure which service fits your needs?
              </h2>
              <p className="text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
                Schedule a free consultation and we'll help you choose the right solution for your project.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

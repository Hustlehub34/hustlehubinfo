import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Smartphone, Brain, GraduationCap, ArrowRight, Lightbulb, Rocket, LifeBuoy, CheckCircle2 } from "lucide-react";
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import clientsData from "@/data/clients.json";
import heroImage from "@/assets/hero-illustration.jpg";

const Index = () => {
  const serviceIcons = {
    web: Code,
    mobile: Smartphone,
    ai: Brain,
    "student-projects": GraduationCap,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              We build apps, websites &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                student projects
              </span>{" "}
              that get noticed.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-body max-w-3xl mx-auto">
              HustleHub Technology — web, mobile, AI/ML, and real-world project mentorship for college students and startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:scale-105 transition-transform text-lg h-14 px-8">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg h-14 px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              From stunning websites to AI-powered solutions, we deliver excellence across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
              return (
                <Card 
                  key={service.id}
                  className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-4">{service.subtitle}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground font-body">
                        <CheckCircle2 size={16} className="mr-2 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Real-world solutions we've built for students and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 6).map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg" className="bg-gradient-primary">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-2">Trusted by innovative companies</h3>
            <p className="text-muted-foreground font-body">Join our growing list of satisfied clients</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {clientsData.map((client) => (
              <div key={client.name} className="text-center">
                <div className="w-32 h-16 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-muted-foreground/60 hover:text-accent transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HustleHub / Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Our proven process ensures your project succeeds from idea to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Discover", desc: "We understand your vision and requirements in depth." },
              { icon: Code, title: "Build", desc: "Our team crafts beautiful, functional solutions." },
              { icon: Rocket, title: "Launch", desc: "We deploy and ensure everything runs smoothly." },
              { icon: LifeBuoy, title: "Support", desc: "Ongoing maintenance and feature enhancements." },
            ].map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon size={32} className="text-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <Card className="p-12 bg-card/50 backdrop-blur border-accent/50 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Join HustleHub</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-8">
              Build products, mentor students, and ship impact. We're looking for passionate developers and designers.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary">
              <Link to="/careers">
                See Open Roles <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to start your project?
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Let's discuss how we can bring your ideas to life.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary text-lg h-14 px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

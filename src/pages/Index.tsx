import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Smartphone, Brain, GraduationCap, ArrowRight, Lightbulb, Rocket, LifeBuoy, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import servicesData from "@/data/services.json";
import projectsData from "@/data/projects.json";
import clientsData from "@/data/clients.json";

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

      {/* Hero Section - Compact & Interactive */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden min-h-[100vh] flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-slow" />

        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
              {/* Floating badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 backdrop-blur-xl border border-primary/30 animate-float cursor-pointer hover:border-primary/60 transition-all">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Building Digital Innovation
                </span>
                <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] tracking-tight">
                We build{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent blur-lg opacity-50 animate-gradient-shift" />
                  <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                    stunning
                  </span>
                </span>
                <br />
                apps & websites
              </h1>

              <p className="text-base md:text-lg text-foreground/80 font-body leading-relaxed max-w-xl">
                Transform your ideas into reality with cutting-edge <span className="text-primary font-semibold">web</span>, <span className="text-accent font-semibold">mobile</span>, and <span className="text-primary font-semibold">AI solutions</span>. From student projects to enterprise apps.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 lg:justify-start justify-center pt-2">
                <Button asChild size="lg" className="relative group bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 h-14 px-8 overflow-hidden border-0">
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Free
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="relative border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 h-14 px-8 backdrop-blur-xl bg-card/40">
                  <Link to="/services" className="flex items-center gap-2">
                    Explore Services
                    <Sparkles className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* Stats bar - Compact */}
              <div className="grid grid-cols-3 gap-3 pt-6">
                {[
                  { value: "100+", label: "Projects" },
                  { value: "50+", label: "Clients" },
                  { value: "24/7", label: "Support" }
                ].map((stat, idx) => (
                  <div key={idx} className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-xl p-3 hover:border-primary/50 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Robot Animation */}
            <div className="relative lg:block hidden animate-fade-in-up delay-100">
              <div className="relative">
                {/* Glow effect behind robot */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-[100px] scale-110 animate-pulse" />

                {/* Robot animation container */}
                <div className="relative w-full max-w-2xl mx-auto hover:scale-605 transition-transform duration-400">
                  <DotLottieReact
                    src="https://lottie.host/ad08e6b1-4e29-4262-be22-47a831e58fb8/xIzHLXEDsR.lottie"
                    loop
                    autoplay
                    className="w-full h-full drop-shadow-2xl"
                  />
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/20 rounded-full blur-2xl animate-float" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Compact & Interactive */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 cursor-pointer hover:border-primary/40 transition-all">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Services That </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Drive Results</span>
            </h2>
            <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
              From stunning websites to AI-powered solutions, we deliver excellence across all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.map((service, idx) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
              return (
                <div key={service.id} className="group relative cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                  <Card className="relative h-full p-5 bg-card/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="relative w-12 h-12 mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-20 blur-md transition-all duration-500" />
                        <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          <Icon size={22} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                        {service.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-muted-foreground font-body group-hover:text-foreground/80 transition-colors">
                            <CheckCircle2 size={14} className="mr-1.5 mt-0.5 text-accent flex-shrink-0 group-hover:text-primary transition-colors" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="group border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300 h-12 px-8">
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


          {/* Real-World Client Projects Showcase */}
          <div className="mb-20">
            <div className="text-center mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 cursor-pointer hover:border-primary/60 transition-all hover:scale-105">
                <Rocket className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Enterprise Solutions
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-heading font-black">
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Real-World </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Client Projects</span>
              </h3>
              <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
                Production-ready applications trusted by businesses and serving thousands of users daily.
              </p>
            </div>

            {/* Client Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.filter(p => p.category !== "Student Project").map((project, idx) => (
                <div key={project.id} className="group relative animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 animate-gradient-shift" />

                  {/* Project Card */}
                  <div className="relative h-full bg-card/80 backdrop-blur-xl border-2 border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23A855F7" width="400" height="300"/%3E%3Ctext fill="%23fff" font-size="20" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + encodeURIComponent(project.title) + '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* "LIVE" Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent border-0 text-white shadow-xl">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          <span className="text-xs font-bold">LIVE</span>
                        </div>
                      </div>

                      {/* Success Checkmark */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Category Tag Bottom */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <Badge className="bg-card/90 backdrop-blur-xl text-primary border border-primary/30 shadow-lg">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Decorative gradient line */}
                      <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                      <div>
                        <h4 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Preview Button */}
                      <div className="pt-2">
                        <Button
                          asChild
                          size="sm"
                          className="w-full group/btn bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 border-0 h-10 relative overflow-hidden"
                        >
                          <Link to="/projects" className="flex items-center justify-center gap-2">
                            <span className="relative z-10 font-semibold">View Details</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

                    {/* Client Testimonials Section */}
          <div className="mb-12">
            <div className="text-center mb-12 space-y-3">
              <h3 className="text-4xl md:text-5xl font-heading font-black">
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">What Our </span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Clients Say</span>
              </h3>
              <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
                Don't just take our word for it - hear from those who've experienced the HustleHub difference.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Shubham Bante",
                  role: "Founder of  Spoortx",
                  text: "HustleHub transformed our vision into reality! The team's expertise in App development exceeded all expectations. Highly recommended!",
                  rating: 5
                },
                {
                  name: "Niraj",
                  role: "Owner of Studio Nexus",
                  text: "Outstanding work! They delivered our website  ahead of schedule with amazing features. The support team is incredible!",
                  rating: 5
                  //Outstanding work! They delivered our e-commerce platform ahead of schedule with amazing features. The support team is incredible!
                },
                {
                  name: "Drashika Ganesha",
                  role: "Owner of D-nest Architects",
                  text: "Best decision we made! Professional, creative, and results-driven. Thanks to their brilliant execution.",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="group relative cursor-pointer animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                  {/* Testimonial card */}
                  <div className="relative h-full bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-2 transition-all duration-500">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-6 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                      "
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Sparkles key={i} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-sm text-foreground/90 font-body leading-relaxed mb-6 relative z-10">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                        <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Student College Projects Showcase - SUPER ATTRACTIVE */}
          <div className="mb-20">
            <div className="text-center mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-xl border border-accent/30 cursor-pointer hover:border-accent/60 transition-all hover:scale-105 animate-float">
                <GraduationCap className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Student Specials - Affordable Pricing
                </span>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black">
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">College Projects </span>
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent blur-2xl opacity-50 animate-gradient-shift" />
                  <span className="relative bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient-shift">
                    Made Easy
                  </span>
                </span>
              </h3>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Get instant quotations via WhatsApp! Premium quality projects at student-friendly prices with live demos.
              </p>
            </div>

            {/* Student Project Cards Grid - COMPACT & ATTRACTIVE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.filter(p => p.category === "Student Project").map((project, idx) => (
                <div key={project.id} className="group relative animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 animate-gradient-shift" />

                  {/* Project Card - Compact Design */}
                  <div className="relative h-full bg-card/80 backdrop-blur-xl border-2 border-accent/30 rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                    {/* Project Image Section - Smaller */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23EC4899;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23A855F7;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23grad)" width="400" height="300"/%3E%3Ctext fill="%23fff" font-size="18" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + encodeURIComponent(project.title) + '%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                      {/* Compact Badges */}
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-accent to-primary text-white shadow-lg text-xs">
                          <GraduationCap className="w-3 h-3" />
                          <span className="font-bold">STUDENT</span>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg text-xs animate-pulse">
                          <Sparkles className="w-3 h-3" />
                          <span className="font-bold">HOT</span>
                        </div>
                      </div>

                      {/* Live Badge - Bottom */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm border border-primary/50 text-primary shadow-lg text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="font-bold">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content - Compact */}
                    <div className="relative p-5 space-y-3">
                      {/* Title & Description */}
                      <div>
                        <h4 className="text-lg font-heading font-bold mb-1.5 group-hover:text-accent transition-colors leading-tight line-clamp-1">
                          {project.title}
                        </h4>
                        <p className="text-xs text-muted-foreground font-body leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Stack Tags - Compact */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-all"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Pricing Banner - Compact */}
                      {/* <div className="relative">
                        <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/30 rounded-lg p-3 text-center">
                          <p className="text-xs text-muted-foreground font-semibold">Starting From</p>
                          <p className="text-2xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                            ₹2,999/-
                          </p>
                          <p className="text-xs text-accent font-bold">💎 Student Discount</p>
                        </div>
                      </div> */}

                      {/* Action Buttons - Compact 2 Column */}
                      <div className="space-y-2">
                        {/* WhatsApp Button - Full Width */}
                        <a
                          href={`https://wa.me/919765749263?text=Hi%20HustleHub!%20I'm%20interested%20in%20*${encodeURIComponent(project.title)}*%20project.%20Please%20share%20quotation.%20Thanks!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button
                            size="sm"
                            className="w-full group/whatsapp bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-lg hover:shadow-green-500/20 border-0 h-9 relative overflow-hidden"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-1.5 font-bold text-white text-xs">
                              <svg className="w-4 h-4 group-hover/whatsapp:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                              </svg>
                              Get Quotation on WhatsApp
                            </span>
                          </Button>
                        </a>

                        {/* Two Column Buttons */}
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            asChild
                            size="sm"
                            className="group/btn bg-gradient-to-r from-accent to-primary hover:shadow-lg hover:shadow-accent/20 border-0 h-9 relative overflow-hidden"
                          >
                            <Link to="/projects" className="flex items-center justify-center gap-1">
                              <span className="relative z-10 font-bold text-xs">Live Demo</span>
                              <ArrowRight className="w-3 h-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </Button>

                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-2 border-accent/50 hover:bg-accent/10 hover:border-accent transition-all h-9"
                          >
                            <Link to="/projects" className="flex items-center justify-center gap-1">
                              <Code className="w-3 h-3" />
                              <span className="font-bold text-xs">Details</span>
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Trust Badges - Compact */}
                      <div className="flex items-center justify-center gap-3 pt-2 border-t border-accent/20">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          <span className="font-semibold text-xs">Source Code</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-primary" />
                          <span className="font-semibold text-xs">24/7 Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA for Students - Enhanced */}
            <div className="text-center mt-16">
              <div className="inline-block relative group cursor-pointer">
                <div className="absolute -inset-2 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-40 blur-2xl group-hover:opacity-60 transition-all duration-500 animate-gradient-shift" />

                <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-2xl border-2 border-accent/30 rounded-3xl p-10 group-hover:border-accent/50 transition-all duration-500 max-w-3xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-accent to-primary text-white shadow-2xl">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <span className="text-sm font-bold">Special Student Offer</span>
                      <Sparkles className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-6 mt-4">
                    <div>
                      <h4 className="text-3xl md:text-4xl font-heading font-black mb-3 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                        Need a Custom College Project?
                      </h4>
                      <p className="text-base text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
                        Get instant quotation via WhatsApp! Premium quality, affordable pricing, complete documentation, and lifetime support guaranteed.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a
                        href="https://wa.me/919765749263?text=Hi%20HustleHub!%20I%20need%20help%20with%20my%20college%20project.%20Can%20you%20provide%20a%20quotation%3F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button
                          size="lg"
                          className="w-full sm:w-auto group/whatsapp bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-500 h-14 px-10 border-0"
                        >
                          <span className="flex items-center gap-3 font-bold text-white">
                            <svg className="w-6 h-6 group-hover/whatsapp:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Chat on WhatsApp Now
                          </span>
                        </Button>
                      </a>

                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-accent/50 hover:bg-accent/10 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-500 h-14 px-10"
                      >
                        <Link to="/contact" className="flex items-center gap-2">
                          <span className="font-bold">View All Projects</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="font-semibold">100+ Projects Delivered</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-semibold">Affordable Pricing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="font-semibold">Quick Delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* Projects - Compact & Interactive */}
      {/* <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 backdrop-blur-xl border border-accent/20 cursor-pointer hover:border-accent/40 transition-all">
              <Rocket className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-semibold text-accent">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Featured </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
              Real-world solutions we've built. Each project tells a story of innovation and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectsData.slice(0, 6).map((project, idx) => (
              <div key={project.id} className="group relative cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                <Card className="relative h-full overflow-hidden bg-card/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm mb-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-500 h-12 px-8 border-0">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Success Metrics & Happy Clients - CRAZY ATTRACTIVE */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] animate-pulse delay-1000" />

        <div className="container mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-xl border border-primary/30 cursor-pointer hover:border-primary/60 transition-all hover:scale-105">
              <CheckCircle2 className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Proven Track Record
              </span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            </div>

            <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Delivered </span>
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent blur-2xl opacity-50 animate-gradient-shift" />
                <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                  Excellence
                </span>
              </span>
            </h2>

            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              Real results that speak louder than words. Join our community of satisfied clients who trusted us with their vision.
            </p>
          </div>

          {/* Stats Grid - IMPRESSIVE */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { value: "150+", label: "Projects Delivered", icon: Rocket, color: "from-primary to-accent" },
              { value: "98%", label: "Client Satisfaction", icon: CheckCircle2, color: "from-accent to-primary" },
              { value: "50+", label: "Happy Clients", icon: Sparkles, color: "from-primary via-accent to-primary" },
              { value: "24/7", label: "Support Available", icon: LifeBuoy, color: "from-accent to-primary" },
            ].map((stat, idx) => (
              <div key={idx} className="group relative cursor-pointer animate-scale-in" style={{ animationDelay: `${idx * 150}ms` }}>
                {/* Glowing background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 group-hover:opacity-60 blur-xl transition-all duration-700 animate-gradient-shift" />

                {/* Card */}
                <div className="relative h-full bg-card/80 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 hover:border-primary/60 hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon with rotation effect */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                      <stat.icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="relative text-center">
                    <div className={`text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative corners */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent/50 rounded-bl-lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Trusted Brands Banner */}
          <div className="text-center">
            <div className="inline-block relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-all duration-500 animate-gradient-shift" />

              <div className="relative bg-card/60 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 group-hover:border-primary/50 transition-all duration-500">
                <h4 className="text-2xl md:text-3xl font-heading font-black mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Trusted by Industry Leaders
                </h4>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                  {clientsData.map((client, idx) => (
                    <div key={client.name} className="group/brand cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
                      <span className="text-2xl md:text-3xl font-heading font-black text-muted-foreground/40 group-hover/brand:text-foreground group-hover/brand:bg-gradient-to-r group-hover/brand:from-primary group-hover/brand:to-accent group-hover/brand:bg-clip-text group-hover/brand:text-transparent transition-all duration-300 group-hover/brand:scale-110 inline-block">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Compact */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 cursor-pointer hover:border-primary/40 transition-all">
              <LifeBuoy className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-black">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">How We </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Bring Ideas to Life</span>
            </h2>
            <p className="text-base text-muted-foreground font-body max-w-2xl mx-auto">
              Our proven four-step process ensures your project succeeds from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Lightbulb, title: "Discover", desc: "Deep dive into your vision and requirements." },
              { icon: Code, title: "Build", desc: "Craft beautiful, scalable solutions with cutting-edge tech." },
              { icon: Rocket, title: "Launch", desc: "Seamless deployment with thorough testing." },
              { icon: LifeBuoy, title: "Support", desc: "Continuous maintenance and feature updates." },
            ].map((step, idx) => (
              <div key={idx} className="group relative cursor-pointer" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />

                <div className="relative h-full p-6 rounded-xl bg-card/80 backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl opacity-20 blur-md transition-all duration-500" />
                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <step.icon size={30} className="text-white" />
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                    {idx + 1}
                  </div>

                  <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Compact */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 backdrop-blur-xl border border-accent/20 cursor-pointer hover:border-accent/40 transition-all">
              <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent">Let's Build Something Amazing</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Ready to </span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Start Your Project?</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground font-body max-w-xl mx-auto">
              Let's turn your vision into reality. Get in touch today and discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-500 h-14 px-10 border-0">
                <Link to="/contact" className="flex items-center gap-2">
                  <span className="relative z-10">Get in Touch</span>
                  <Sparkles className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 h-14 px-10 backdrop-blur-xl bg-card/40">
                <Link to="/projects" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

            {/* Careers - Compact */}
<section className="relative py-16 px-4 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
  <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />

  <div className="container mx-auto relative z-10">
    <div className="relative group cursor-pointer">
      {/* Removed the purple hover glow */}
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 blur-xl group-hover:opacity-75 transition-all duration-500" /> */}

      <Card className="relative p-10 bg-card/80 backdrop-blur-xl border-2 border-primary/30 hover:border-primary/50 hover:scale-[1.01] transition-all duration-500 text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 cursor-pointer hover:border-primary/40 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary">We're Hiring</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-black">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Join the HustleHub Family
            </span>
          </h2>

          <p className="text-base text-muted-foreground font-body max-w-xl mx-auto">
            Build groundbreaking products and create lasting impact. We're looking for passionate developers and designers.
          </p>

          <Button
            asChild
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-500 h-12 px-8 border-0 mt-6"
          >
            <Link to="/careers" className="flex items-center gap-2 relative">
              <span className="relative z-10">Explore Careers</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Index;

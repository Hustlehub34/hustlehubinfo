import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

const Careers = () => {
  const openRoles = [
    {
      title: "Full Stack Developer",
      location: "Amravati / Remote",
      type: "Full-time",
      description: "Build scalable web applications using React, Node.js, and modern frameworks.",
    },
    {
      title: "Mobile App Developer",
      location: "Amravati / Remote",
      type: "Full-time",
      description: "Create beautiful cross-platform mobile apps with React Native and Flutter.",
    },
    {
      title: "AI/ML Engineer",
      location: "Amravati / Remote",
      type: "Full-time",
      description: "Develop and deploy machine learning models for real-world applications.",
    },
    {
      title: "Student College Project Mentor",
      location: "Remote",
      type: "Part-time",
      description: "Guide college students through their academic projects and technical challenges.",
    },
    {
      title: "UI/UX Designer",
      location: "Mumbai / Remote",
      type: "Full-time",
      description: "Design intuitive and beautiful user experiences for web and mobile applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Join <span className="bg-gradient bg-clip-text ">HustleHub</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Build products, mentor students, and ship impact. We're building the future of tech education and development.
            </p>
          </div>

          <div className="mb-16">
            <Card className="p-12 bg-gradient-subtle border-accent/50 text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Why Work With Us?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-heading font-semibold mb-2">Build Real Products</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Work on impactful projects for students and businesses
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🎓</div>
                  <h3 className="font-heading font-semibold mb-2">Mentor & Grow</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Share your knowledge and help students succeed
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">💪</div>
                  <h3 className="font-heading font-semibold mb-2">Flexible Work</h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Remote-friendly with flexible hours
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {openRoles.map((role, idx) => (
                <Card 
                  key={idx}
                  className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-3">{role.title}</h3>
                      <p className="text-muted-foreground font-body mb-4">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin size={14} />
                          {role.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {role.type}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      asChild 
                      className="bg-gradient-primary self-start md:self-center"
                    >
                      <a href={`mailto:hello@hustlehub.tech?subject=Application for ${role.title}`}>
                        Apply Now
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-12 bg-card/50 backdrop-blur border-border text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Don't see a perfect fit?
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and let's talk about opportunities.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <a href="mailto:hello@hustlehub.tech?subject=General Application">
                Get in Touch
              </a>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

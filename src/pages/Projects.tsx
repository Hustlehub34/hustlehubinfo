import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import projectsData from "@/data/projects.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web Development", "Mobile Development", "AI/ML", "Student Project"];
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="bg-gradient bg-clip-text ">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body">
              Explore our portfolio of successful web, mobile, and AI/ML solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-primary" : "border-accent/50 hover:bg-accent/10"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-accent/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Badge variant="secondary" className="mb-4">
                  {selectedProject.category}
                </Badge>
                <p className="text-muted-foreground font-body mb-6">
                  {selectedProject.description}
                </p>
                <div>
                  <h4 className="font-heading font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-accent/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Projects;

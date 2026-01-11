import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin as LinkedinIcon, Twitter as TwitterIcon, Github as GithubIcon, Send, Heart ,MessageCircleIcon as WhatsappIcon ,InstagramIcon} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-card via-background to-card border-t border-border/50">
      {/* Gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl opacity-20 group-hover:opacity-40 blur-md transition-all duration-300" />
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <img
                  src="/assets/logoo.png"
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
                </div>

              </div>
              <div className="flex flex-col">
                <span className="text-lg font-heading font-black text-foreground group-hover:text-primary transition-colors">
                  HustleHub
                </span>
                <span className="text-[10px] font-medium text-muted-foreground -mt-1">
                  Technology
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Transforming ideas into powerful digital experiences. From student projects to enterprise solutions.
            </p>
            <div className="flex space-x-3">
  {[
    { 
      icon: LinkedinIcon, 
      href: "https://linkedin.com/company/hustlehub42", 
      label: "LinkedIn" 
    },
    { 
      icon: InstagramIcon, 
      href: "https://www.instagram.com/_hub_hustle_/?igsh=ZWM5eG9mNmhqbTM1&utm_source=qr#", 
      label: "Instagram" 
    },
    { 
      icon: WhatsappIcon, 
      href: "https://wa.me/919765749263?text=Hi%20HustleHub!%20I%20need%20help%20with%20my%20college%20project.%20Can%20you%20provide%20a%20quotation%3F", 
      label: "Whatsapp" 
    }
  ].map(({ icon: Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative w-10 h-10 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
      <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  ))}
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-5 flex items-center gap-2">
              Quick Links
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[40px]" />
            </h3>
            <ul className="space-y-3 font-body text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-5 flex items-center gap-2">
              Get in Touch
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[40px]" />
            </h3>
            <ul className="space-y-4 font-body text-sm">
              {[
                { icon: Mail, text: "hello@hustlehub.tech", href: "mailto:hello@hustlehub.tech" },
                { icon: Phone, text: "+91 98765 43210", href: "tel:+919765749263" },
                { icon: MapPin, text: "Sai Nagar, Amravati, India", href: "#" }
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="group flex items-start space-x-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <span className="leading-relaxed pt-1">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-foreground mb-5 flex items-center gap-2">
              Stay Updated
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[40px]" />
            </h3>
            <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
              Get the latest tech insights and project updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-card/50 border-border/50 focus:border-primary/50 backdrop-blur-xl transition-all h-11"
              />
              <Button className="group bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all border-0 h-11">
                <span>Subscribe</span>
                <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
            <p className="flex items-center gap-2">
              © {new Date().getFullYear()} HustleHub Technology
            </p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

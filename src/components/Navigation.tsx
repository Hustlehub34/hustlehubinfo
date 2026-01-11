import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5"
        : "bg-background/70 backdrop-blur-lg border-b border-border/30"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl opacity-20 group-hover:opacity-40 blur-md transition-all duration-300" />
              {/* <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-heading font-black text-white">H</span>
              </div> */}
                <img
    src="public/assets/logoo.png"
    alt="Logo"
    className="w-17 h-11 object-contain"
  />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-black text-foreground group-hover:text-primary transition-colors">
                HustleHub
              </span>
              <span className="text-[10px] font-medium text-muted-foreground -mt-1">
                Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-body font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                )}
                <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            <Button asChild className="ml-4 relative group bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border-0 overflow-hidden">
              <Link to="/contact" className="flex items-center gap-2">
                <span className="relative z-10">Get Quote</span>
                <Sparkles className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden relative text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative px-4 py-3 font-body font-medium rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all border-0">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                  Get Quote
                  <Sparkles className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

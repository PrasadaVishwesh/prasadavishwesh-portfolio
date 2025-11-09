import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/PrasadaVishwesh",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/prasada-vishwesh-7aa59a259",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:jprasadvishweshnani@gmail.com",
      icon: Mail,
    },
    {
      name: "Portfolio",
      href: "https://prasada-vishwesh-portfolio.lovable.app/",
      icon: ExternalLink,
    },
  ];

  return (
    <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border/50 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Jatangi Y D M V Prasada Vishwesh
            </h3>
            <p className="text-sm text-muted-foreground">AI Engineer & Generative AI Specialist</p>
            <p className="text-xs text-muted-foreground mt-1">Greater Noida, India</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="group"
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:scale-110 hover:bg-accent/10 transition-all duration-300 group-hover:shadow-glow"
                >
                  <link.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
                </Button>
              </a>
            ))}
          </div>

          <div className="w-full max-w-md h-px bg-gradient-primary opacity-20" />

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jatangi Y D M V Prasada Vishwesh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, Tailwind CSS, Framer Motion & shadcn/ui
            </p>
            <p className="text-xs text-muted-foreground">
              📧 jprasadvishweshnani@gmail.com • 📞 +91 6305413841
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

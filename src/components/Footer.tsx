import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/PrasadaVishwesh",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/prasada-vishwesh-7aa59a259",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:jprasadvishweshnani@gmail.com",
      icon: Mail,
    },
    {
      name: "Portfolio",
      url: "https://prasada-vishwesh-portfolio.lovable.app",
      icon: ExternalLink,
    },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:scale-110 transition-transform hover:bg-accent/10"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </a>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Jatangi Y D M V Prasada Vishwesh. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

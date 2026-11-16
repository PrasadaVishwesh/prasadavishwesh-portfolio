import { useLocation } from "react-router-dom";
import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = ["About", "Skills", "Projects", "Achievements", "Experience", "Blog", "Contact"];

const Header = () => {
  const location = useLocation();
  const sectionHref = (name: string) => location.pathname === "/" ? `#${name.toLowerCase()}` : `/#${name.toLowerCase()}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex min-h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href={sectionHref("hero")} className="shrink-0 text-sm font-semibold text-foreground" aria-label="Vishwesh portfolio home">
          PV<span className="ml-1 text-primary">/</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 overflow-x-auto whitespace-nowrap md:flex">
          {navigation.map((item) => (
            <a key={item} href={sectionHref(item)} className="rounded px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1">
          <a href="https://github.com/PrasadaVishwesh" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hidden sm:inline-flex">
            <Button variant="ghost" size="icon"><Github className="h-4 w-4" /></Button>
          </a>
          <a href="https://www.linkedin.com/in/prasada-vishwesh-7aa59a259" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hidden sm:inline-flex">
            <Button variant="ghost" size="icon"><Linkedin className="h-4 w-4" /></Button>
          </a>
          <a href="mailto:jprasadvishweshnani@gmail.com" aria-label="Email Prasada">
            <Button variant="ghost" size="icon"><Mail className="h-4 w-4" /></Button>
          </a>
          <ThemeToggle />
          <a href="/resume/PrasadaVishwesh_SDE.pdf" download="PrasadaVishwesh_SDE.pdf" className="hidden sm:inline-flex">
            <Button size="sm" variant="outline"><FileDown className="mr-2 h-4 w-4" />Resume</Button>
          </a>
        </div>
      </div>
      <nav aria-label="Mobile navigation" className="flex gap-1 overflow-x-auto border-t border-border px-3 py-1.5 md:hidden">
        {navigation.map((item) => (
          <a key={item} href={sectionHref(item)} className="shrink-0 rounded px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground focus-visible:text-foreground">{item}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
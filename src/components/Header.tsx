import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Experience", id: "experience" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

const RESUME_HREF = "/resume/PrasadaVishwesh_SDE.pdf";
const RESUME_NAME = "PrasadaVishwesh_SDE.pdf";

/** Tracks which home-page section is crossing the upper third of the viewport. */
const useActiveSection = (enabled: boolean) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === "undefined") {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );

    ["hero", ...navigation.map((item) => item.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [enabled]);

  return active;
};

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const active = useActiveSection(isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60]"
      >
        Skip to content
      </a>

      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Link
          to={{ pathname: "/", hash: "#hero" }}
          className="shrink-0 rounded-sm text-sm font-semibold text-foreground"
          aria-label="Prasada Vishwesh, back to top of home page"
        >
          PV<span className="ml-0.5 text-primary">/</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={{ pathname: "/", hash: `#${item.id}` }}
              aria-current={active === item.id ? "location" : undefined}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground aria-[current=location]:bg-accent aria-[current=location]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
            <a href={RESUME_HREF} download={RESUME_NAME}>
              <FileDown />
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!menuOpen} className="border-t border-border lg:hidden">
        <nav aria-label="Mobile" className="page-container flex flex-col py-2">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={{ pathname: "/", hash: `#${item.id}` }}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "rounded-md px-2 py-3 text-base text-muted-foreground transition-colors duration-150 hover:text-foreground",
                "aria-[current=location]:font-medium aria-[current=location]:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="my-2 sm:hidden">
            <a href={RESUME_HREF} download={RESUME_NAME}>
              <FileDown />
              Download resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

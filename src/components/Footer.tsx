import { Link } from "react-router-dom";

const EMAIL = "jprasadvishweshnani@gmail.com";

const externalLinks = [
  { name: "GitHub", href: "https://github.com/PrasadaVishwesh" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/prasada-vishwesh-7aa59a259" },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="page-container flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="font-semibold">Jatangi Y D M V Prasada Vishwesh</p>
        <p className="mt-1 text-sm text-muted-foreground">AI Engineer &amp; Generative AI Specialist</p>
        <p className="mt-1 text-sm text-muted-foreground">Greater Noida, India</p>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <Link to={{ pathname: "/", hash: "#projects" }} className="text-muted-foreground transition-colors hover:text-foreground">
          Projects
        </Link>
        <Link to={{ pathname: "/", hash: "#contact" }} className="text-muted-foreground transition-colors hover:text-foreground">
          Contact
        </Link>
        <a
          href="/resume/PrasadaVishwesh_SDE.pdf"
          download="PrasadaVishwesh_SDE.pdf"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Resume
        </a>
        {externalLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.name}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
        <a href={`mailto:${EMAIL}`} className="text-muted-foreground transition-colors hover:text-foreground">
          Email
        </a>
      </nav>
    </div>

    <div className="border-t border-border">
      <div className="page-container flex flex-col gap-1 py-4 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Jatangi Y D M V Prasada Vishwesh. All rights reserved.</p>
        <p>Built with React, TypeScript and Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default Footer;

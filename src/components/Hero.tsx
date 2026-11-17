import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait480 from "@/assets/profile/prasada-480.webp";
import portrait768 from "@/assets/profile/prasada-768.webp";
import portraitFallback from "@/assets/profile/prasada-768.jpg";

const Hero = () => (
  <section id="hero" aria-labelledby="hero-title" className="border-b border-border">
    <div className="page-container grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
      <div>
        <p className="eyebrow flex items-center gap-3 motion-safe:animate-fade-up">
          <span aria-hidden="true" className="h-px w-8 bg-primary" />
          AI Engineer
          <span className="font-normal normal-case tracking-normal text-muted-foreground">/ Greater Noida, India</span>
        </p>

        <h1 id="hero-title" style={{ animationDelay: "80ms" }} className="mt-6 text-4xl font-semibold leading-[1.1] motion-safe:animate-fade-up sm:text-5xl">
          Jatangi Y D M V
          <br />
          Prasada Vishwesh
        </h1>

        <p style={{ animationDelay: "160ms" }} className="mt-5 max-w-xl text-base leading-7 text-muted-foreground motion-safe:animate-fade-up sm:text-lg sm:leading-8">
          Building useful AI products with generative models, computer vision, and thoughtful engineering.
        </p>

        <div style={{ animationDelay: "240ms" }} className="mt-8 flex flex-wrap gap-3 motion-safe:animate-fade-up">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to={{ pathname: "/", hash: "#projects" }}>
              Explore projects
              <ArrowDown className="transition-transform duration-150 group-hover:translate-y-0.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="/resume/PrasadaVishwesh_SDE.pdf" download="PrasadaVishwesh_SDE.pdf">
              Download resume
              <FileDown />
            </a>
          </Button>
        </div>

        <ul style={{ animationDelay: "320ms" }} className="mt-10 flex flex-wrap items-center motion-safe:animate-fade-up gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
          <li className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />
            Open to opportunities
          </li>
          <li>B.Tech · AI &amp; ML</li>
          <li>
            <a
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              href="https://github.com/PrasadaVishwesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              href="https://www.linkedin.com/in/prasada-vishwesh-7aa59a259"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>

      <picture style={{ animationDelay: "120ms" }} className="mx-auto block w-full max-w-xs motion-safe:animate-fade-in sm:max-w-sm lg:ml-auto">
        <source
          type="image/webp"
          srcSet={`${portrait480} 480w, ${portrait768} 768w`}
          sizes="(min-width: 640px) 384px, 320px"
        />
        <img
          src={portraitFallback}
          alt="Portrait of Prasada Vishwesh wearing glasses and a light blue shirt"
          width={768}
          height={960}
          fetchPriority="high"
          decoding="async"
          className="aspect-[4/5] w-full rounded-lg border border-border object-cover"
        />
      </picture>
    </div>
  </section>
);

export default Hero;

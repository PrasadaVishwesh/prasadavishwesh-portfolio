import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import profileImage from "@/assets/prasada-profile.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const introMotion = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="hero" className="border-b border-border">
      <div className="container mx-auto grid min-h-[calc(100svh-6rem)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <motion.div {...introMotion} transition={{ duration: 0.55, ease: "easeOut" }}>
          <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-px w-7 bg-primary" /> AI Engineer <span className="text-muted-foreground">/ Greater Noida, India</span>
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
            Jatangi Y D M V<br />Prasada Vishwesh
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            I build practical AI products with generative models, computer vision, and thoughtful engineering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#projects">View projects <ArrowDown className="h-4 w-4" /></a></Button>
            <Button asChild variant="outline" size="lg"><a href="/resume/PrasadaVishwesh_SDE.pdf" download="PrasadaVishwesh_SDE.pdf">Download resume <FileDown className="ml-2 h-4 w-4" /></a></Button>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Open to opportunities</span>
            <span>B.Tech · AI &amp; ML</span>
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="https://github.com/PrasadaVishwesh" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
        </motion.div>
        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:ml-auto"
        >
          <img src={profileImage} alt="Prasada Vishwesh in a dark suit and blue tie" className="aspect-[4/5] w-full rounded-sm object-cover object-[center_30%]" fetchPriority="high" />
          <figcaption className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            <span>Prasada Vishwesh</span><span>AI / ML · 2026</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
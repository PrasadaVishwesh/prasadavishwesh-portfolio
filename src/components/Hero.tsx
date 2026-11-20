import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import profileImage from "@/assets/prasada-profile.jpg";
import { Button } from "@/components/ui/button";

const headlineWords = ["Jatangi", "Y", "D", "M", "V", "Prasada", "Vishwesh"];
const revealEase = [0.22, 1, 0.36, 1] as const;
const wordDuration = 0.72;
const wordStagger = 0.08;
const secondLineDelay = 0.45;

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const headlineVariants = {
    hidden: {},
    visible: { transition: { delayChildren: 0.05, staggerChildren: wordStagger } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: wordDuration, ease: revealEase } },
  };
  const headlineFinish = secondLineDelay + wordStagger + wordDuration;
  const subtitleVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: headlineFinish + 0.15, ease: revealEase },
    },
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: headlineFinish + 0.65 + index * 0.1, ease: revealEase },
    }),
  };
  const visualVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.1, ease: revealEase } },
  };

  return (
    <section id="hero" className="border-b border-border">
      <div className="container mx-auto grid min-h-[calc(100svh-6rem)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-px w-7 bg-primary" /> AI Engineer <span className="text-muted-foreground">/ Greater Noida, India</span>
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] text-foreground sm:text-5xl lg:text-6xl">
            <span className="sr-only">Jatangi Y D M V Prasada Vishwesh</span>
            <motion.span
              aria-hidden="true"
              className="block"
              variants={headlineVariants}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
            >
              {headlineWords.slice(0, 5).map((word, index) => (
                <motion.span key={`${word}-${index}`} className={`inline-block overflow-hidden align-top pb-[0.12em] ${index < 4 ? "mr-[0.22em]" : ""}`} variants={wordVariants}>
                  <span className="inline-block">{word}</span>
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              aria-hidden="true"
              className="block"
              variants={headlineVariants}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              transition={{ delayChildren: secondLineDelay, staggerChildren: wordStagger }}
            >
              {headlineWords.slice(5).map((word) => (
                <motion.span key={word} className={`inline-block overflow-hidden align-top pb-[0.12em] ${word === "Prasada" ? "mr-[0.22em]" : ""}`} variants={wordVariants}>
                  <span className="inline-block">{word}</span>
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <motion.p
            className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            variants={subtitleVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
          >
            I build practical AI products with generative models, computer vision, and thoughtful engineering.
          </motion.p>
          <div className="mt-7 flex flex-wrap gap-3">
            <motion.div
              custom={0}
              variants={ctaVariants}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { y: 1 }}
            >
              <Button asChild size="lg"><a href="#projects">View projects <ArrowDown className="h-4 w-4" /></a></Button>
            </motion.div>
            <motion.div
              custom={1}
              variants={ctaVariants}
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={reduceMotion ? undefined : { y: 1 }}
            >
              <Button asChild variant="outline" size="lg"><a href="/resume/PrasadaVishwesh_SDE.pdf" download="PrasadaVishwesh_SDE.pdf">Download resume <FileDown className="ml-2 h-4 w-4" /></a></Button>
            </motion.div>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Open to opportunities</span>
            <span>B.Tech · AI &amp; ML</span>
            <a className="inline-flex items-center gap-1 hover:text-foreground" href="https://github.com/PrasadaVishwesh" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </div>
        </div>
        <motion.figure
          variants={visualVariants}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="relative mx-auto w-full max-w-sm lg:ml-auto"
        >
          <img src={profileImage} alt="Prasada Vishwesh in a dark suit and blue tie" className="aspect-[4/5] w-full rounded-sm object-cover object-[center_30%]" />
          <figcaption className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            <span>Prasada Vishwesh</span><span>AI / ML · 2026</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
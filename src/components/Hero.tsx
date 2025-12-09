import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI Engineer & Generative AI Specialist</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-foreground">Jatangi Y D M V Prasada</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              Vishwesh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            Dedicated AI enthusiast building intelligent systems with Generative AI, Deep Learning, and data-centric engineering. 
            Transforming complex data into impactful AI solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto"
            >
              View Projects
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume/PrasadaVishwesh_SDE.pdf";
                link.download = "PrasadaVishwesh_SDE.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full sm:w-auto"
            >
              <FileDown className="h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Available for opportunities</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <span>Bennett University</span>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <span>B.Tech CSE (AI/ML)</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

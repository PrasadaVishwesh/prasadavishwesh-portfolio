import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Vision-GPT2: Hybrid Image Captioning",
      description:
        "Advanced image captioning system combining Vision Transformer (ViT) and GPT-2 to generate contextually accurate natural language descriptions of images. Built preprocessing and feature extraction pipelines with cross-attention mechanisms.",
      tech: ["PyTorch", "Transformers", "ViT", "GPT-2", "Python", "TensorFlow"],
      outcomes: [
        "Trained and tested with Vision Transformers (ViTs) and GPT-2 integration",
        "Built complete preprocessing pipeline and fine-tuned ViTs for feature extraction",
        "Optimized models and managed end-to-end training pipelines",
        "Evaluated with BLEU, ROUGE, and other metrics; debugged and improved caption quality",
      ],
      github: "https://github.com/PrasadaVishwesh",
      demo: "https://image-captioning-vishwesh.lovable.app/",
      metrics: [
        { label: "BLEU-4", value: "0.32" },
        { label: "ROUGE-L", value: "0.54" },
      ],
    },
    {
      title: "Smart Chief: AI Recipe & Nutrition App",
      description:
        "AI-powered recipe and nutrition web application that helps users find recipes and understand nutritional values. Built with React.js, Axios for API integration, Edamam APIs for recipe and nutrition data, and Chart.js for visualization.",
      tech: ["React.js", "Axios", "Edamam API", "Chart.js", "JavaScript"],
      outcomes: [
        "User enters food item → app fetches recipes + nutritional breakdown (calories, proteins, fats, carbs)",
        "Integrated real-time nutritional analysis with simple, intuitive interface",
        "Learned API integration, React data management, and UI building",
        "Showcased ability to independently design, develop, and execute full-stack project",
      ],
      github: "https://github.com/PrasadaVishwesh",
      demo: "https://smart-chief-plan.lovable.app/",
      portfolio: "https://prasada-vishwesh-portfolio.lovable.app/",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold text-accent uppercase tracking-wider"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              Projects
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.2 }}
              >
                <Card className="p-8 h-full flex flex-col hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 group">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/20 hover:scale-105 transition-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mb-6 space-y-2">
                    {project.outcomes.map((outcome, outcomeIdx) => (
                      <motion.div
                        key={outcomeIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + idx * 0.2 + outcomeIdx * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0 animate-pulse" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{outcome}</p>
                      </motion.div>
                    ))}
                  </div>

                  {project.metrics && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + idx * 0.2 }}
                      className="flex gap-4 mb-6"
                    >
                      {project.metrics.map((metric, metricIdx) => (
                        <div key={metricIdx} className="flex-1 p-3 rounded-lg bg-accent/5 border border-accent/20">
                          <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                          <div className="text-xl font-bold text-accent">{metric.value}</div>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Button
                      variant="glass"
                      size="sm"
                      className="flex-1 min-w-[120px]"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[120px]"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    {project.portfolio && (
                      <Button
                        variant="hero"
                        size="sm"
                        className="flex-1 min-w-[120px]"
                        onClick={() => window.open(project.portfolio, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Portfolio
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

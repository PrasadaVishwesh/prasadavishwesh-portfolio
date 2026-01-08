import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Sparkles, Brain, Code, Cpu } from "lucide-react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      title: "Building Vision-GPT2: Custom Attention Mechanisms for Image Captioning",
      excerpt: "A deep dive into implementing custom cross-attention layers that enable transformers to generate meaningful captions from visual features.",
      date: "2025-01-05",
      readTime: "8 min read",
      tags: ["Deep Learning", "Transformers", "Computer Vision"],
      icon: Brain,
      featured: true,
    },
    {
      title: "Optimizing Neural Networks: From Theory to Production",
      excerpt: "Practical techniques for model optimization including quantization, pruning, and knowledge distillation that I've applied in real projects.",
      date: "2024-12-20",
      readTime: "6 min read",
      tags: ["Optimization", "MLOps", "Performance"],
      icon: Cpu,
    },
    {
      title: "The Future of Multimodal AI: Bridging Vision and Language",
      excerpt: "Exploring how models like CLIP, BLIP, and custom architectures are revolutionizing human-computer interaction through unified understanding.",
      date: "2024-12-10",
      readTime: "10 min read",
      tags: ["Multimodal AI", "Research", "LLMs"],
      icon: Sparkles,
    },
    {
      title: "End-to-End ML Pipelines: Lessons from Smart Chief",
      excerpt: "How I built a production-ready AI nutrition app using modern ML practices, from data collection to deployment.",
      date: "2024-11-28",
      readTime: "7 min read",
      tags: ["Full Stack", "ML Engineering", "Python"],
      icon: Code,
    },
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="blog" ref={ref} className="py-20 sm:py-32 bg-muted/30">
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
              Insights & Learning
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              Blog & Articles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Sharing my journey in AI/ML through technical deep-dives, project learnings, and industry insights.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {articles.map((article, idx) => {
              const IconComponent = article.icon;
              return (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  <Card
                    className={`group p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                      article.featured ? "lg:col-span-2 ring-1 ring-accent/20" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-xl bg-gradient-primary shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {formatDate(article.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {article.readTime}
                          </span>
                          {article.featured && (
                            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs bg-secondary/50 border-border/50"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            className="shrink-0 text-primary hover:text-primary group-hover:translate-x-1 transition-transform"
                          >
                            Read
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground text-sm">
              More articles coming soon • Follow my journey on{" "}
              <a
                href="https://www.linkedin.com/in/prasada-vishwesh-7aa59a259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

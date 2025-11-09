import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "SQL", "JavaScript"],
      color: "primary",
    },
    {
      title: "ML & AI Frameworks",
      skills: ["TensorFlow", "PyTorch", "Keras", "Transformers", "scikit-learn"],
      color: "accent",
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "HTML/CSS", "Chart.js"],
      color: "primary",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "accent",
    },
    {
      title: "Cloud & Tools",
      skills: ["AWS", "Google Cloud Platform", "Git", "Docker"],
      color: "primary",
    },
    {
      title: "AI Domains",
      skills: ["Natural Language Processing", "Computer Vision", "Deep Learning", "Data Pipelines"],
      color: "accent",
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-32">
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
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              Skills & Technologies
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIdx * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                  <h3 className="text-lg font-bold mb-4 text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + categoryIdx * 0.1 + skillIdx * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className={`px-3 py-1 text-sm font-medium hover:scale-105 transition-transform cursor-default ${
                            category.color === "accent"
                              ? "bg-accent/10 text-accent border-accent/20"
                              : "bg-primary/10 text-primary border-primary/20"
                          } border`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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

export default Skills;

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
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "SQL", level: 82 },
      ],
      color: "primary",
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 92 },
        { name: "PyTorch", level: 90 },
        { name: "Keras", level: 90 },
        { name: "Transformers (HF)", level: 88 },
        { name: "Scikit-learn", level: 85 },
      ],
      color: "accent",
    },
    {
      title: "Data & Visualization",
      skills: [
        { name: "NumPy", level: 92 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Chart.js", level: 80 },
      ],
      color: "primary",
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
      color: "accent",
    },
    {
      title: "Databases & Backend",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Spring Boot", level: 75 },
      ],
      color: "primary",
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Google Colab", level: 90 },
        { name: "AWS", level: 78 },
      ],
      color: "accent",
    },
    {
      title: "AI Specializations",
      skills: [
        { name: "Generative AI", level: 92 },
        { name: "NLP", level: 90 },
        { name: "Computer Vision", level: 88 },
        { name: "Deep Learning", level: 92 },
        { name: "Data Pipelines", level: 85 },
      ],
      color: "primary",
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "DSA", level: 88 },
        { name: "OOP", level: 90 },
        { name: "DBMS", level: 85 },
      ],
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

          {/* AI/ML Frameworks Visual Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Card className="p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                <span className="h-1 w-12 rounded-full bg-gradient-primary"></span>
                AI/ML Frameworks Proficiency
                <span className="h-1 w-12 rounded-full bg-gradient-primary"></span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-end">
                {skillCategories
                  .find((cat) => cat.title === "AI/ML Frameworks")
                  ?.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex flex-col items-center group"
                    >
                      <motion.div
                        className="relative w-full flex items-end justify-center mb-4"
                        style={{ height: "200px" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={isInView ? { height: `${(skill.level / 100) * 200}px` } : {}}
                          transition={{
                            delay: 0.8 + idx * 0.1,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="w-16 bg-gradient-primary rounded-t-lg relative overflow-hidden group-hover:shadow-glow transition-all duration-300"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent"
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 + idx * 0.1 }}
                        className="text-center"
                      >
                        <Badge
                          variant="secondary"
                          className="mb-2 bg-primary/10 text-primary border-primary/20 border text-xs font-bold group-hover:bg-primary/20 transition-colors"
                        >
                          {skill.level}%
                        </Badge>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + categoryIdx * 0.08, type: "spring", stiffness: 100 }}
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                  <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <span className={`h-1 w-8 rounded-full ${category.color === "accent" ? "bg-accent" : "bg-primary"}`}></span>
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + categoryIdx * 0.08 + skillIdx * 0.05 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.7 + categoryIdx * 0.08 + skillIdx * 0.05 }}
                            className="text-xs font-bold text-muted-foreground"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              delay: 0.7 + categoryIdx * 0.08 + skillIdx * 0.05,
                              duration: 0.8,
                              ease: "easeOut"
                            }}
                            className={`h-full rounded-full ${
                              category.color === "accent" 
                                ? "bg-gradient-to-r from-accent to-accent/70" 
                                : "bg-gradient-primary"
                            } group-hover:shadow-glow transition-shadow`}
                          />
                        </div>
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

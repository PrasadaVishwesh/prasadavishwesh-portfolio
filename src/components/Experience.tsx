import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-32 bg-gradient-subtle">
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
              Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              Education & Experience
            </motion.h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-8 hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Bachelor of Technology
                    </h3>
                    <p className="text-lg text-muted-foreground mb-3 font-medium">
                      Computer Science & Engineering (AI/ML)
                    </p>
                    <p className="text-base text-foreground mb-4 font-semibold">
                      Bennett University
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Calendar className="h-4 w-4" />
                      <span>October 2022 - Present</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Specializing in Artificial Intelligence and Machine Learning with focus on Deep Learning,
                          Natural Language Processing, and Computer Vision
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Completed advanced coursework in Neural Networks, Reinforcement Learning, and AI Ethics
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          Active participant in AI research projects and hackathons
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <h3 className="text-xl font-bold mb-4">Achievements & Recognition</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Participated in multiple AI/ML hackathons and coding competitions
                  </p>
                </Card>
                <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/50">
                  <p className="text-sm text-muted-foreground">
                    Published research work on advanced machine learning techniques
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

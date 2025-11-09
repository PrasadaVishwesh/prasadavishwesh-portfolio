import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      title: "B.Tech - Computer Science (AI/ML)",
      organization: "Bennett University",
      location: "Greater Noida, India",
      period: "Oct 2022 - Present",
      description:
        "Specializing in Artificial Intelligence and Machine Learning with strong academic performance. Deep focus on Generative AI, Deep Learning, NLP, and Computer Vision. Working on cutting-edge AI projects including Vision-GPT2 and Smart Chief.",
      highlights: [
        "Core: DSA, OOP, DBMS, AI/ML Fundamentals",
        "Advanced: Generative AI, Transformers, Computer Vision",
        "Research: Vision Transformers, GPT-2 Integration, Custom Attention Mechanisms",
      ],
      icon: GraduationCap,
    },
    {
      title: "Intermediate Education",
      organization: "FIITJEE International Institute",
      location: "India",
      period: "Jul 2020 - Jul 2022",
      description:
        "Completed intermediate education with strong academic performance, building foundational skills in mathematics, physics, and computer science that paved the way for AI/ML specialization.",
      highlights: [
        "Strong foundation in Mathematics and Physics",
        "Introduction to Programming and Computational Thinking",
        "Academic excellence with consistent performance",
      ],
      icon: BookOpen,
    },
  ];

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
              My Journey
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

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.2, type: "spring", stiffness: 80 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-gradient-primary opacity-30" />
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={isInView ? { scale: 1, rotate: 360 } : {}}
                  transition={{ 
                    delay: 0.5 + idx * 0.2, 
                    type: "spring", 
                    stiffness: 200,
                    duration: 0.6 
                  }}
                  className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                    className="absolute inset-0 rounded-full bg-primary opacity-30"
                  />
                </motion.div>

                <Card className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 group">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-accent mb-1">
                        {item.organization}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.location} • {item.period}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="space-y-2">
                        {item.highlights.map((highlight, highlightIdx) => (
                          <motion.div
                            key={highlightIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.7 + idx * 0.2 + highlightIdx * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0 animate-pulse" />
                            <p className="text-xs text-muted-foreground leading-relaxed">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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

export default Experience;

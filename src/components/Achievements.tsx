import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Sparkles, Code2 } from "lucide-react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Award,
      category: "Professional Membership",
      title: "IEEE Student Member",
      description: "Active member of IEEE (Institute of Electrical and Electronics Engineers), the world's largest technical professional organization advancing technology for humanity",
      date: "2023 - Present",
      highlights: [
        "Access to cutting-edge research publications",
        "Networking with global tech professionals",
        "Participation in IEEE conferences and workshops",
      ],
      color: "accent",
    },
    {
      icon: Trophy,
      category: "Academic Excellence",
      title: "AI/ML Specialization Scholar",
      description: "Pursuing B.Tech in Computer Science with AI/ML specialization at Bennett University, demonstrating strong academic performance in advanced AI coursework",
      date: "2022 - Present",
      highlights: ["Core: DSA, OOP, DBMS", "Advanced: Generative AI, Transformers", "Research: Vision Transformers, GPT-2 Integration"],
      color: "primary",
    },
    {
      icon: Award,
      category: "Professional Certifications",
      title: "7 Industry-Recognized Certifications",
      description: "Completed comprehensive certification programs from AWS, Google Cloud, IBM, and Edge Impulse covering Generative AI, Machine Learning, and Computer Vision",
      date: "2023 - 2024",
      highlights: [
        "AWS - Generative AI with LLMs",
        "Google Cloud - Intro to Generative AI",
        "IBM - Machine Learning & EDA",
        "Edge Impulse - CV with Embedded ML",
      ],
      color: "accent",
    },
    {
      icon: Code2,
      category: "Research & Development",
      title: "Vision-GPT2 Hybrid Model",
      description: "Developed advanced image captioning system combining Vision Transformer and GPT-2, achieving BLEU-4 score of 0.32 and ROUGE-L of 0.54",
      date: "2024",
      highlights: [
        "Custom cross-attention mechanisms",
        "End-to-end training pipelines",
        "State-of-the-art performance metrics",
      ],
      color: "primary",
    },
    {
      icon: Target,
      category: "Full-Stack Development",
      title: "Smart Chief AI Application",
      description: "Independently designed and developed AI-powered recipe and nutrition application with real-time API integration and interactive data visualizations",
      date: "2024",
      highlights: [
        "React.js + Edamam APIs integration",
        "Real-time nutritional analysis",
        "Chart.js data visualization",
      ],
      color: "accent",
    },
    {
      icon: Sparkles,
      category: "Technical Expertise",
      title: "Multi-Domain AI Proficiency",
      description: "Demonstrated expertise across Generative AI, Deep Learning, NLP, and Computer Vision with hands-on projects and research",
      date: "2022 - Present",
      highlights: [
        "PyTorch, TensorFlow, Keras mastery",
        "Transformers & Hugging Face",
        "Full-stack development capabilities",
      ],
      color: "primary",
    },
    {
      icon: Star,
      category: "Community & Growth",
      title: "Continuous Learning Advocate",
      description: "Active in AI research reading, public speaking, and tackling programming challenges to stay at the forefront of AI innovation",
      date: "Ongoing",
      highlights: [
        "AI research and technical publications",
        "Public speaking engagements",
        "Open-source contributions",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="achievements" ref={ref} className="py-20 sm:py-32">
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
              Milestones & Recognition
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              Achievements & Awards
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Recognitions and accomplishments that showcase my dedication to AI innovation and excellence
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.5 + idx * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <Card className="p-8 h-full hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 group overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  />
                  <div className="flex items-start gap-4 mb-4 relative z-10">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-${achievement.color} group-hover:shadow-glow transition-all duration-300`}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <div className="flex-1">
                      <Badge
                        variant="secondary"
                        className={`mb-3 ${
                          achievement.color === "accent"
                            ? "bg-accent/10 text-accent border-accent/20"
                            : "bg-primary/10 text-primary border-primary/20"
                        } border`}
                      >
                        {achievement.category}
                      </Badge>
                      <motion.h3 
                        className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {achievement.title}
                      </motion.h3>
                    </div>
                  </div>

                  <motion.p 
                    className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10 group-hover:text-foreground transition-colors duration-300"
                  >
                    {achievement.description}
                  </motion.p>

                  <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground relative z-10">
                    <motion.div 
                      className="h-1 w-1 rounded-full bg-accent"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {achievement.date}
                  </div>

                  <div className="space-y-2 relative z-10">
                    {achievement.highlights.map((highlight, highlightIdx) => (
                      <motion.div
                        key={highlightIdx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + idx * 0.1 + highlightIdx * 0.05 }}
                        className="flex items-start gap-2 group/item"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="h-1 w-1 rounded-full bg-accent mt-2 flex-shrink-0"
                          whileHover={{ scale: 2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                        <p className="text-xs text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">{highlight}</p>
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

export default Achievements;

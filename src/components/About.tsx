import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Award, Code2, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      label: "Projects Completed",
      value: "15+",
      color: "text-primary",
    },
    {
      icon: Award,
      label: "Certifications",
      value: "6",
      color: "text-accent",
    },
    {
      icon: Zap,
      label: "Technologies Mastered",
      value: "20+",
      color: "text-primary",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold text-accent uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6"
            >
              Transforming Ideas into{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              I'm an AI Engineering student passionate about building cutting-edge machine learning 
              solutions. My expertise spans from deep learning architectures to production-ready AI systems, 
              with a focus on NLP, Computer Vision, and scalable data pipelines.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50">
                    <Icon className={`h-8 w-8 mx-auto mb-4 ${item.color}`} />
                    <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            <Card className="p-8 sm:p-10 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">
                Currently pursuing B.Tech in Computer Science Engineering with specialization in 
                Artificial Intelligence and Machine Learning at Bennett University. I combine strong 
                theoretical foundations with hands-on experience in developing AI solutions that solve 
                real-world problems.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                From building image captioning models using Vision Transformers to creating intelligent 
                nutrition apps, I thrive on challenges that push the boundaries of what's possible with AI. 
                I'm always exploring new frameworks, optimizing model performance, and staying current with 
                the latest advancements in machine learning research.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

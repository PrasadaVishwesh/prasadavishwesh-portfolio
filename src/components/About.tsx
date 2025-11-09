import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import vishweshPhoto from "@/assets/vishwesh.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { number: "2+", label: "Years of AI/ML" },
    { number: "10+", label: "Projects Built" },
    { number: "7", label: "Certifications" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32">
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
              Get to know me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              About Me
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="lg:col-span-1 flex justify-center items-start"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img
                    src={vishweshPhoto}
                    alt="Jatangi Y D M V Prasada Vishwesh"
                    className="relative rounded-2xl w-full max-w-[280px] h-auto object-cover shadow-elegant"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="lg:col-span-2"
              >
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border/50">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    Dedicated AI Enthusiast
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Pushing boundaries in Generative AI, Deep Learning, and data-centric engineering. 
                    I specialize in building NLP models, Vision-GPT2 systems with custom attention mechanisms, 
                    and AI-powered applications like Smart Chief—an intelligent recipe and nutrition app.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Strong proficiency in Python, TensorFlow, Keras, PyTorch, and end-to-end data pipelines. 
                    Experienced in Natural Language Processing, Computer Vision, and optimization techniques 
                    that drive impactful AI products.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Passionate about learning, problem-solving, and innovating to create solutions that transform 
                    data into actionable insights and meaningful real-world impact.
                  </p>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 0.7 + idx * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <Card className="p-6 text-center hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 group">
                    <motion.div 
                      className="text-4xl sm:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        delay: 0.9 + idx * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {highlight.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground font-medium">{highlight.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

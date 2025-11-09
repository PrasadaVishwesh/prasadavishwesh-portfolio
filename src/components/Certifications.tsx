import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "AWS",
      date: "2024",
      category: "AI/ML",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "2024",
      category: "AI/ML",
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "2023",
      category: "AI/ML",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "2023",
      category: "Data Science",
    },
    {
      title: "Google Advanced Data Analytics Capstone",
      issuer: "Google",
      date: "2023",
      category: "Data Science",
    },
    {
      title: "Computer Vision with Embedded Machine Learning",
      issuer: "Edge Impulse",
      date: "2023",
      category: "Computer Vision",
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 sm:py-32">
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
              Credentials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              Certifications
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-accent/10 text-accent border border-accent/20"
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1 font-medium">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

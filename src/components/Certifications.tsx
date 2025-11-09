import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "AWS",
      date: "2024",
      category: "AI/ML",
      link: "https://coursera.org/share/51ab3a9b6898fb09f9946d929c39e537",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "2024",
      category: "AI/ML",
      link: "https://coursera.org/share/9060161629994e420e9c5552a6965448",
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM",
      date: "2024",
      category: "AI/ML",
      link: "https://coursera.org/share/e63f18ac43c11a79fbc1ce4ca6674cea",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "2024",
      category: "Data Science",
      link: "https://coursera.org/share/d185ea58da39d367d90a4f458c829dda",
    },
    {
      title: "Google Advanced Data Analytics Capstone",
      issuer: "Google",
      date: "2023",
      category: "Data Science",
      link: "https://coursera.org/share/7463617d75229177530e1c58a78c6a5d",
    },
    {
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "2023",
      category: "Management",
      link: "https://coursera.org/share/ec44a375b4c4344efc640b468cd4bb25",
    },
    {
      title: "Computer Vision with Embedded Machine Learning",
      issuer: "Edge Impulse",
      date: "2023",
      category: "Computer Vision",
      link: "https://coursera.org/share/3f05e5be25f80bda26d8e8c1cc474db5",
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
                <Card className="p-6 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 group cursor-pointer"
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border border-accent/20"
                    >
                      {cert.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1 font-semibold">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full gap-2 group-hover:bg-accent/10 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, "_blank");
                    }}
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Credential
                  </Button>
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

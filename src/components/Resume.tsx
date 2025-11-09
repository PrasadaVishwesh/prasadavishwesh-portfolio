import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink, Loader2 } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Prasada_Vishwesh_Resume.pdf";
    link.download = "Prasada_Vishwesh_AI_Engineer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNew = () => {
    window.open("/resume/Prasada_Vishwesh_Resume.pdf", "_blank");
  };

  return (
    <section id="resume" ref={ref} className="py-20 sm:py-32">
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
              Full Resume
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4"
            >
              My Resume
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              View my complete resume below or download it for future reference
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  onClick={handleDownload}
                  variant="hero"
                  size="lg"
                  className="flex-1"
                >
                  <FileDown className="h-5 w-5" />
                  Download Resume
                </Button>
                <Button
                  onClick={handleOpenNew}
                  variant="glass"
                  size="lg"
                  className="flex-1"
                >
                  <ExternalLink className="h-5 w-5" />
                  Open in New Tab
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="relative rounded-xl overflow-hidden bg-muted/30 shadow-elegant"
                style={{ minHeight: "600px" }}
              >
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <p className="text-sm text-muted-foreground">Loading resume...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="/resume/Prasada_Vishwesh_Resume.pdf"
                  className="w-full h-[600px] sm:h-[800px] lg:h-[1000px] border-0"
                  title="Prasada Vishwesh Resume"
                  onLoad={() => setLoading(false)}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
                className="mt-6 text-center"
              >
                <p className="text-xs text-muted-foreground">
                  Having trouble viewing? Try{" "}
                  <button
                    onClick={handleOpenNew}
                    className="text-accent hover:underline font-medium"
                  >
                    opening in a new tab
                  </button>
                  {" "}or{" "}
                  <button
                    onClick={handleDownload}
                    className="text-accent hover:underline font-medium"
                  >
                    downloading the PDF
                  </button>
                </p>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

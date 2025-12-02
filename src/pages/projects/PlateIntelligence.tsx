import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Car, Scan, Database, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PlateIntelligence = () => {
  const navigate = useNavigate();

  const techStack = [
    "Python",
    "TensorFlow",
    "OpenCV",
    "OCR",
    "YOLO",
    "Deep Learning",
    "Computer Vision",
  ];

  const features = [
    {
      icon: Scan,
      title: "License Plate Detection",
      description: "Advanced YOLO-based detection for accurate license plate localization in images and video",
    },
    {
      icon: Car,
      title: "Vehicle Recognition",
      description: "Comprehensive vehicle analysis including plate reading and character recognition",
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Efficient storage and retrieval of detected plates with timestamp logging",
    },
    {
      icon: Shield,
      title: "Security Applications",
      description: "Built for parking management, traffic monitoring, and security surveillance systems",
    },
  ];

  const metrics = [
    { label: "Accuracy", value: "97%+", description: "Plate detection" },
    { label: "OCR Rate", value: "94%+", description: "Character recognition" },
    { label: "Speed", value: "<100ms", description: "Processing time" },
    { label: "Formats", value: "Multiple", description: "Plate types supported" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="mb-8 hover:translate-x-1 transition-transform"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Plate Intelligence Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                Intelligent license plate recognition system using deep learning and computer vision
                for automated vehicle identification, parking management, and traffic monitoring.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="hero" size="lg" onClick={() => window.open("https://github.com/PrasadaVishwesh/plate-intelligence-hub", "_blank")}>
                  <Github className="h-5 w-5" />
                  View Source
                </Button>
                <Button variant="glass" size="lg" onClick={() => window.open("https://palte-intelligence-vishwesh.netlify.app/", "_blank")}>
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-glow transition-all bg-card/50 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
                    <div className="text-sm font-semibold mb-1">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.description}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-glow transition-all bg-card/50 backdrop-blur-sm group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary group-hover:shadow-glow transition-all">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Outcomes</h2>
            <Card className="max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm">
              <ul className="space-y-4">
                {[
                  "Implemented YOLO-based license plate detection with 97%+ accuracy",
                  "Integrated OCR for accurate character recognition from detected plates",
                  "Built real-time processing pipeline for video stream analysis",
                  "Created web interface for easy plate detection and management",
                  "Optimized for multiple license plate formats and lighting conditions",
                  "Suitable for parking management, traffic monitoring, and security applications",
                ].map((outcome, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0 animate-pulse" />
                    <p className="text-muted-foreground leading-relaxed">{outcome}</p>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PlateIntelligence;

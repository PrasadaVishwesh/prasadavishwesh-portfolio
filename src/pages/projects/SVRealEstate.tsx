import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Home, Search, MapPin, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import svRealEstatePreview from "@/assets/sv-real-estate-preview.png";

const SVRealEstate = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Search,
      title: "Property Search & Filtering",
      description: "Advanced search functionality allowing users to filter properties by price, location, type, and other criteria.",
    },
    {
      icon: Home,
      title: "Intuitive UI/UX Design",
      description: "Clean and user-friendly interface designed for optimal user engagement and seamless navigation.",
    },
    {
      icon: MapPin,
      title: "Location-Based Listings",
      description: "Properties organized by location with detailed address information and neighborhood insights.",
    },
    {
      icon: Building,
      title: "Rich Property Details",
      description: "Comprehensive property information including images, pricing, specifications, and contact details.",
    },
  ];

  const techStack = [
    { name: "React.js", category: "Frontend Framework" },
    { name: "JavaScript", category: "Programming Language" },
    { name: "HTML5", category: "Markup" },
    { name: "CSS3", category: "Styling" },
    { name: "Responsive Design", category: "UI/UX" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-8 hover:bg-accent/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>

            <div className="max-w-4xl">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Full-Stack Web Development
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                S.V. Real Estate
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A dynamic and responsive real estate web application that helps users browse and explore 
                property listings with ease. The platform displays property details including price, location, 
                and relevant images, enabling prospective buyers, sellers, and renters to quickly find real 
                estate options that match their preferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" onClick={() => window.open("https://sv-real-estate-tau.vercel.app/", "_blank")}>
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preview Screenshot Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <img
                src={svRealEstatePreview}
                alt="S.V. Real Estate Homepage Preview"
                className="relative rounded-2xl shadow-elegant w-full border border-border/50"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Homepage featuring property search, buy/rent options, and trusted customer testimonials
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-sm text-muted-foreground mb-2">Timeline</div>
                <div className="text-xl font-bold">Nov 2025 - Present</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-sm text-muted-foreground mb-2">Associated With</div>
                <div className="text-xl font-bold">Bennett University</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-sm text-muted-foreground mb-2">Category</div>
                <div className="text-xl font-bold">Real Estate Platform</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core real estate functionality designed for optimal user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern web technologies for performance and scalability
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                  <div className="text-lg font-bold">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Explore the Project</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the full functionality of this real estate platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => window.open("https://sv-real-estate-tau.vercel.app/", "_blank")}>
                <ExternalLink className="h-5 w-5" />
                Live Demo
              </Button>
              <Button variant="glass" size="lg" onClick={() => navigate("/")}>
                <ArrowLeft className="h-5 w-5" />
                Back to Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SVRealEstate;

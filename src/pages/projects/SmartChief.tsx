import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Utensils, BarChart2, Search, Database } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SmartChief = () => {
  const navigate = useNavigate();

  const techStack = [
    "React.js",
    "Axios",
    "Edamam API",
    "Chart.js",
    "JavaScript",
    "HTML/CSS",
    "REST APIs",
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Recipe Search",
      description: "Enter any food item and instantly fetch relevant recipes with detailed instructions",
    },
    {
      icon: Database,
      title: "Nutritional Analysis",
      description: "Real-time nutritional breakdown showing calories, proteins, fats, and carbohydrates",
    },
    {
      icon: BarChart2,
      title: "Data Visualization",
      description: "Interactive Chart.js visualizations for easy understanding of nutritional values",
    },
    {
      icon: Utensils,
      title: "Recipe Management",
      description: "Clean, intuitive interface for browsing and managing your favorite recipes",
    },
  ];

  const codeSnippets = [
    {
      title: "Recipe API Integration",
      language: "javascript",
      code: `// Fetching recipes from Edamam API
const fetchRecipes = async (query) => {
  const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
  const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY;
  
  const url = \`https://api.edamam.com/search?q=\${query}&app_id=\${APP_ID}&app_key=\${APP_KEY}\`;
  
  try {
    const response = await axios.get(url);
    return response.data.hits.map(hit => ({
      id: hit.recipe.uri,
      title: hit.recipe.label,
      image: hit.recipe.image,
      calories: Math.round(hit.recipe.calories),
      ingredients: hit.recipe.ingredients,
      nutrients: hit.recipe.totalNutrients,
    }));
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};`,
    },
    {
      title: "Nutrition Analysis Component",
      language: "javascript",
      code: `// React component for nutrition visualization
const NutritionChart = ({ nutrients }) => {
  const chartData = {
    labels: ['Protein', 'Fat', 'Carbs', 'Fiber'],
    datasets: [{
      label: 'Grams',
      data: [
        nutrients.PROCNT?.quantity || 0,
        nutrients.FAT?.quantity || 0,
        nutrients.CHOCDF?.quantity || 0,
        nutrients.FIBTG?.quantity || 0,
      ],
      backgroundColor: [
        'rgba(59, 130, 246, 0.6)',
        'rgba(239, 68, 68, 0.6)',
        'rgba(34, 197, 94, 0.6)',
        'rgba(168, 85, 247, 0.6)',
      ],
      borderWidth: 2,
    }]
  };

  return (
    <div className="nutrition-chart">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};`,
    },
    {
      title: "State Management & Data Flow",
      language: "javascript",
      code: `// Custom hook for recipe management
const useRecipeManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalNutrients = (recipe) => {
    return {
      calories: recipe.calories,
      protein: recipe.nutrients.PROCNT?.quantity || 0,
      fat: recipe.nutrients.FAT?.quantity || 0,
      carbs: recipe.nutrients.CHOCDF?.quantity || 0,
    };
  };

  return { recipes, loading, error, searchRecipes, calculateTotalNutrients };
};`,
    },
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
                Smart Chief: AI Recipe & Nutrition App
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mb-8">
                AI-powered recipe and nutrition web application that helps users find recipes and understand 
                nutritional values. Built with React.js and integrated with Edamam APIs for comprehensive 
                food data and beautiful Chart.js visualizations.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="hero" size="lg" onClick={() => window.open("https://github.com/PrasadaVishwesh/smart-chief-plan", "_blank")}>
                  <Github className="h-5 w-5" />
                  View Source
                </Button>
                <Button variant="glass" size="lg" onClick={() => window.open("https://smart-chief-plan.lovable.app/", "_blank")}>
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open("https://prasada-vishwesh-portfolio.lovable.app/", "_blank")}>
                  <ExternalLink className="h-5 w-5" />
                  Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
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

        {/* Technical Implementation */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Implementation</h2>
            <div className="max-w-5xl mx-auto space-y-8">
              {codeSnippets.map((snippet, idx) => (
                <motion.div
                  key={snippet.title}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
                    <div className="bg-accent/10 px-6 py-4 border-b border-border/50">
                      <h3 className="text-lg font-bold">{snippet.title}</h3>
                      <Badge variant="secondary" className="mt-2">{snippet.language}</Badge>
                    </div>
                    <pre className="p-6 overflow-x-auto">
                      <code className="text-sm text-muted-foreground font-mono leading-relaxed">
                        {snippet.code}
                      </code>
                    </pre>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Flow & Outcomes */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Outcomes & User Flow</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-accent">User Flow</h3>
                <ul className="space-y-3">
                  {[
                    "User enters a food item in the search bar",
                    "App fetches recipes from Edamam API in real-time",
                    "Display comprehensive nutritional breakdown (calories, proteins, fats, carbs)",
                    "Interactive charts visualize nutritional data for easy understanding",
                    "Users can view detailed ingredient lists and cooking instructions",
                  ].map((step, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-muted-foreground leading-relaxed mt-1">{step}</p>
                    </motion.li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-primary">Key Achievements</h3>
                <ul className="space-y-3">
                  {[
                    "Integrated real-time nutritional analysis with simple, intuitive interface",
                    "Learned API integration, React data management, and UI building",
                    "Showcased ability to independently design, develop, and execute full-stack project",
                    "Implemented responsive design ensuring seamless experience across devices",
                  ].map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0 animate-pulse" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SmartChief;

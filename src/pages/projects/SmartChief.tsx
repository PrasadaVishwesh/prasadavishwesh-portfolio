import { Utensils, BarChart2, Search, Database } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const SmartChief = () => {
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
    <ProjectLayout
      slug="smart-chief"
      title="Smart Chief: AI Recipe & Nutrition App"
      summary="AI-powered recipe and nutrition web application that helps users find recipes and understand nutritional values. Built with React.js and integrated with Edamam APIs for comprehensive food data and beautiful Chart.js visualizations."
      techStack={techStack}
      github="https://github.com/PrasadaVishwesh/smart-chief-plan"
      demo="https://smart-chef-prasadavishwesh.vercel.app/"
      features={features}
      codeSnippets={codeSnippets}
      outcomesTitle="Project outcomes & user flow"
      outcomeGroups={[
        {
          title: "User flow",
          ordered: true,
          items: [
            "User enters a food item in the search bar",
            "App fetches recipes from Edamam API in real-time",
            "Display comprehensive nutritional breakdown (calories, proteins, fats, carbs)",
            "Interactive charts visualize nutritional data for easy understanding",
            "Users can view detailed ingredient lists and cooking instructions",
          ],
        },
        {
          title: "Key achievements",
          items: [
            "Integrated real-time nutritional analysis with simple, intuitive interface",
            "Learned API integration, React data management, and UI building",
            "Showcased ability to independently design, develop, and execute full-stack project",
            "Implemented responsive design ensuring seamless experience across devices",
          ],
        },
      ]}
    />
  );
};

export default SmartChief;

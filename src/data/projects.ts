export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  outcomes: string[];
  github?: string;
  demo: string;
  /** Route of the project's detail page */
  path: string;
  metrics?: ProjectMetric[];
}

/** Single source of truth for the home-page project list and the "more projects" links on detail pages. */
export const projects: Project[] = [
  {
    slug: "vision-gpt2",
    title: "Vision-GPT2: Hybrid Image Captioning",
    description:
      "Advanced image captioning system combining Vision Transformer (ViT) and GPT-2 to generate contextually accurate natural language descriptions of images. Built preprocessing and feature extraction pipelines with cross-attention mechanisms.",
    tech: ["PyTorch", "Transformers", "ViT", "GPT-2", "Python", "TensorFlow"],
    outcomes: [
      "Trained and tested with Vision Transformers (ViTs) and GPT-2 integration",
      "Built complete preprocessing pipeline and fine-tuned ViTs for feature extraction",
      "Optimized models and managed end-to-end training pipelines",
      "Evaluated with BLEU, ROUGE, and other metrics; debugged and improved caption quality",
    ],
    github: "https://github.com/PrasadaVishwesh/image-captioning-vishwesh",
    demo: "https://image-captioning-vishwesh.vercel.app/",
    path: "/projects/vision-gpt2",
    metrics: [
      { label: "BLEU-4", value: "0.32" },
      { label: "ROUGE-L", value: "0.54" },
    ],
  },
  {
    slug: "smart-chief",
    title: "Smart Chief: AI Recipe & Nutrition App",
    description:
      "AI-powered recipe and nutrition web application that helps users find recipes and understand nutritional values. Built with React.js, Axios for API integration, Edamam APIs for recipe and nutrition data, and Chart.js for visualization.",
    tech: ["React.js", "Axios", "Edamam API", "Chart.js", "JavaScript"],
    outcomes: [
      "User enters food item → app fetches recipes + nutritional breakdown (calories, proteins, fats, carbs)",
      "Integrated real-time nutritional analysis with simple, intuitive interface",
      "Learned API integration, React data management, and UI building",
      "Showcased ability to independently design, develop, and execute full-stack project",
    ],
    github: "https://github.com/PrasadaVishwesh/smart-chief-plan",
    demo: "https://smart-chef-prasadavishwesh.vercel.app/",
    path: "/projects/smart-chief",
  },
  {
    slug: "hand-sign-detection",
    title: "Hand Sign Detection AI",
    description:
      "Real-time hand gesture recognition system using deep learning and computer vision to detect and classify hand signs for accessibility and communication applications.",
    tech: ["TensorFlow", "OpenCV", "MediaPipe", "Python", "CNN", "Deep Learning"],
    outcomes: [
      "Developed real-time hand gesture recognition using TensorFlow and OpenCV",
      "Implemented MediaPipe for efficient hand landmark detection",
      "Created custom CNN model for accurate hand sign classification",
      "Built interactive web interface for live gesture detection",
    ],
    github: "https://github.com/PrasadaVishwesh/hang-sign-detection-vishwesh-ai",
    demo: "https://hang-sign-detection-vishwesh-ai.vercel.app/",
    path: "/projects/hand-sign-detection",
    metrics: [
      { label: "Accuracy", value: "95%+" },
      { label: "FPS", value: "30+" },
    ],
  },
  {
    slug: "plate-intelligence",
    title: "Plate Intelligence Hub",
    description:
      "Intelligent license plate recognition system using deep learning and computer vision for automated vehicle identification, parking management, and traffic monitoring.",
    tech: ["Python", "TensorFlow", "OpenCV", "YOLO", "OCR", "Deep Learning"],
    outcomes: [
      "Implemented YOLO-based license plate detection with 97%+ accuracy",
      "Integrated OCR for accurate character recognition from detected plates",
      "Built real-time processing pipeline for video stream analysis",
      "Created web interface for easy plate detection and management",
    ],
    github: "https://github.com/PrasadaVishwesh/plate-intelligence-hub",
    demo: "https://palte-intelligence-vishwesh.netlify.app/",
    path: "/projects/plate-intelligence",
    metrics: [
      { label: "Accuracy", value: "97%+" },
      { label: "OCR Rate", value: "94%+" },
    ],
  },
  {
    slug: "sv-real-estate",
    title: "S.V. Real Estate – Web Application",
    description:
      "Dynamic and responsive real estate web application that helps users browse and explore property listings with ease. Features property search and filtering, intuitive UI/UX, and visually rich listings for prospective buyers, sellers, and renters.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "Responsive Design"],
    outcomes: [
      "Built property search and filtering functionality for seamless user navigation",
      "Designed intuitive UI/UX for better user engagement and experience",
      "Displayed property details including price, location, and relevant images",
      "Demonstrated full-stack web development skills with real-world application",
    ],
    demo: "https://sv-real-estate-tau.vercel.app/",
    path: "/projects/sv-real-estate",
  },
];

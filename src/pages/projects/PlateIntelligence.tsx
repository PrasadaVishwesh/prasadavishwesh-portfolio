import { Car, Scan, Database, Shield } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const PlateIntelligence = () => {
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
    <ProjectLayout
      slug="plate-intelligence"
      title="Plate Intelligence Hub"
      summary="Intelligent license plate recognition system using deep learning and computer vision for automated vehicle identification, parking management, and traffic monitoring."
      techStack={techStack}
      github="https://github.com/PrasadaVishwesh/plate-intelligence-hub"
      demo="https://palte-intelligence-vishwesh.netlify.app/"
      metrics={metrics}
      featuresTitle="Key features & architecture"
      features={features}
      outcomeGroups={[
        {
          items: [
            "Implemented YOLO-based license plate detection with 97%+ accuracy",
            "Integrated OCR for accurate character recognition from detected plates",
            "Built real-time processing pipeline for video stream analysis",
            "Created web interface for easy plate detection and management",
            "Optimized for multiple license plate formats and lighting conditions",
            "Suitable for parking management, traffic monitoring, and security applications",
          ],
        },
      ]}
    />
  );
};

export default PlateIntelligence;

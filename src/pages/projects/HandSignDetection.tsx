import { Hand, Brain, Zap, Monitor } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const HandSignDetection = () => {
  const techStack = [
    "TensorFlow",
    "OpenCV",
    "MediaPipe",
    "Python",
    "Deep Learning",
    "CNN",
    "Real-time Processing",
  ];

  const features = [
    {
      icon: Hand,
      title: "Hand Gesture Recognition",
      description: "Real-time detection and classification of hand signs using advanced computer vision techniques",
    },
    {
      icon: Brain,
      title: "Deep Learning Model",
      description: "Custom CNN architecture trained on extensive hand gesture datasets for accurate predictions",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Optimized pipeline for instant gesture recognition with minimal latency",
    },
    {
      icon: Monitor,
      title: "Interactive Interface",
      description: "User-friendly web interface for live hand sign detection and feedback",
    },
  ];

  const metrics = [
    { label: "Accuracy", value: "95%+", description: "Recognition accuracy" },
    { label: "Gestures", value: "26+", description: "Supported hand signs" },
    { label: "FPS", value: "30+", description: "Real-time processing" },
    { label: "Latency", value: "<50ms", description: "Response time" },
  ];

  return (
    <ProjectLayout
      slug="hand-sign-detection"
      title="Hand Sign Detection AI"
      summary="Real-time hand gesture recognition system using deep learning and computer vision to detect and classify hand signs for accessibility and communication applications."
      techStack={techStack}
      github="https://github.com/PrasadaVishwesh/hang-sign-detection-vishwesh-ai"
      demo="https://hang-sign-detection-vishwesh-ai.vercel.app/"
      metrics={metrics}
      featuresTitle="Key features & architecture"
      features={features}
      outcomeGroups={[
        {
          items: [
            "Developed real-time hand gesture recognition using TensorFlow and OpenCV",
            "Implemented MediaPipe for efficient hand landmark detection",
            "Created custom CNN model for accurate hand sign classification",
            "Built interactive web interface for live gesture detection",
            "Optimized for real-time performance with 30+ FPS processing",
            "Supports 26+ hand signs for comprehensive gesture recognition",
          ],
        },
      ]}
    />
  );
};

export default HandSignDetection;

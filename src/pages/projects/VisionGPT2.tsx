import { Image, Cpu, Zap, BarChart3 } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";

const VisionGPT2 = () => {
  const techStack = [
    "PyTorch",
    "Transformers",
    "Vision Transformer (ViT)",
    "GPT-2",
    "Python",
    "TensorFlow",
    "NumPy",
    "Pandas",
  ];

  const features = [
    {
      icon: Image,
      title: "Vision Transformer Integration",
      description: "Fine-tuned ViT for robust image feature extraction with custom preprocessing pipelines",
    },
    {
      icon: Cpu,
      title: "GPT-2 Language Model",
      description: "Leveraged GPT-2's powerful language generation capabilities for contextual captions",
    },
    {
      icon: Zap,
      title: "Cross-Attention Mechanism",
      description: "Implemented custom cross-attention layers to bridge visual and textual representations",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Evaluation",
      description: "Evaluated with BLEU, ROUGE, and other metrics; debugged and improved caption quality",
    },
  ];

  const codeSnippets = [
    {
      title: "Vision Transformer Feature Extraction",
      language: "python",
      code: `# ViT Feature Extraction Pipeline
from transformers import ViTFeatureExtractor, ViTModel
import torch

class ViTFeatureExtractor:
    def __init__(self, model_name='google/vit-base-patch16-224'):
        self.feature_extractor = ViTFeatureExtractor.from_pretrained(model_name)
        self.model = ViTModel.from_pretrained(model_name)
        
    def extract_features(self, image):
        inputs = self.feature_extractor(images=image, return_tensors="pt")
        with torch.no_grad():
            outputs = self.model(**inputs)
        return outputs.last_hidden_state`,
    },
    {
      title: "Cross-Attention Implementation",
      language: "python",
      code: `# Custom Cross-Attention Layer
class CrossAttention(nn.Module):
    def __init__(self, dim, num_heads=8):
        super().__init__()
        self.num_heads = num_heads
        self.scale = (dim // num_heads) ** -0.5
        
        self.q = nn.Linear(dim, dim)
        self.k = nn.Linear(dim, dim)
        self.v = nn.Linear(dim, dim)
        self.proj = nn.Linear(dim, dim)
        
    def forward(self, visual_features, text_embeddings):
        Q = self.q(text_embeddings)
        K = self.k(visual_features)
        V = self.v(visual_features)
        
        attention = (Q @ K.transpose(-2, -1)) * self.scale
        attention = attention.softmax(dim=-1)
        
        out = attention @ V
        return self.proj(out)`,
    },
    {
      title: "Training Pipeline",
      language: "python",
      code: `# End-to-End Training Pipeline
def train_epoch(model, dataloader, optimizer, criterion):
    model.train()
    total_loss = 0
    
    for batch in dataloader:
        images, captions = batch['image'], batch['caption']
        
        # Extract visual features
        visual_features = vision_model(images)
        
        # Generate captions
        outputs = model(visual_features, captions)
        loss = criterion(outputs, captions)
        
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        total_loss += loss.item()
    
    return total_loss / len(dataloader)`,
    },
  ];

  const metrics = [
    { label: "BLEU-1", value: "0.67", description: "Unigram precision" },
    { label: "BLEU-4", value: "0.32", description: "4-gram precision" },
    { label: "ROUGE-L", value: "0.54", description: "Longest common subsequence" },
    { label: "CIDEr", value: "0.89", description: "Consensus-based metric" },
  ];

  return (
    <ProjectLayout
      slug="vision-gpt2"
      title="Vision-GPT2: Hybrid Image Captioning"
      summary="Advanced image captioning system combining Vision Transformer (ViT) and GPT-2 to generate contextually accurate natural language descriptions of images."
      techStack={techStack}
      github="https://github.com/PrasadaVishwesh/image-captioning-vishwesh"
      demo="https://image-captioning-vishwesh.vercel.app/"
      metrics={metrics}
      featuresTitle="Key features & architecture"
      features={features}
      codeSnippets={codeSnippets}
      outcomeGroups={[
        {
          items: [
            "Trained and tested with Vision Transformers (ViTs) and GPT-2 integration",
            "Built complete preprocessing pipeline and fine-tuned ViTs for feature extraction",
            "Optimized models and managed end-to-end training pipelines",
            "Evaluated with BLEU, ROUGE, and other metrics; debugged and improved caption quality",
            "Achieved state-of-the-art performance on standard image captioning benchmarks",
          ],
        },
      ]}
    />
  );
};

export default VisionGPT2;

import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Building Vision-GPT2: Custom Attention Mechanisms for Image Captioning",
    excerpt:
      "A deep dive into implementing custom cross-attention layers that enable transformers to generate meaningful captions from visual features.",
    date: "2025-01-05",
    readTime: "8 min read",
    tags: ["Deep Learning", "Transformers", "Computer Vision"],
  },
  {
    title: "Optimizing Neural Networks: From Theory to Production",
    excerpt:
      "Practical techniques for model optimization including quantization, pruning, and knowledge distillation that I've applied in real projects.",
    date: "2024-12-20",
    readTime: "6 min read",
    tags: ["Optimization", "MLOps", "Performance"],
  },
  {
    title: "The Future of Multimodal AI: Bridging Vision and Language",
    excerpt:
      "Exploring how models like CLIP, BLIP, and custom architectures are revolutionizing human-computer interaction through unified understanding.",
    date: "2024-12-10",
    readTime: "10 min read",
    tags: ["Multimodal AI", "Research", "LLMs"],
  },
  {
    title: "End-to-End ML Pipelines: Lessons from Smart Chief",
    excerpt:
      "How I built a production-ready AI nutrition app using modern ML practices, from data collection to deployment.",
    date: "2024-11-28",
    readTime: "7 min read",
    tags: ["Full Stack", "ML Engineering", "Python"],
  },
];

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const Blog = () => (
  <Section
    id="blog"
    index="07"
    eyebrow="Writing"
    title="Blog & articles"
    description="Technical deep-dives, project learnings and industry notes."
  >
    <ol className="divide-y divide-border border-y border-border">
      {articles.map((article, index) => (
        <Reveal as="li" key={article.title} delay={Math.min(index, 3) * 50} className="py-6">
          <article aria-labelledby={`article-${index}`}>
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <time dateTime={article.date} className="tabular-nums">
                {formatDate(article.date)}
              </time>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <Badge variant="outline" className="ml-1">
                Coming soon
              </Badge>
            </p>
            <h3 id={`article-${index}`} className="mt-2 text-lg font-semibold leading-snug">
              {article.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
            <ul aria-label="Topics" className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </ol>

    <p className="mt-6 text-sm text-muted-foreground">
      Follow along on{" "}
      <a
        href="https://www.linkedin.com/in/prasada-vishwesh-7aa59a259"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        LinkedIn
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
      .
    </p>
  </Section>
);

export default Blog;

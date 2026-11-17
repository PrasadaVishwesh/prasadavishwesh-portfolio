import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

const achievements = [
  {
    category: "Professional Membership",
    title: "IEEE Student Member",
    description:
      "Active member of IEEE (Institute of Electrical and Electronics Engineers), the world's largest technical professional organization advancing technology for humanity",
    date: "2023 - Present",
    highlights: [
      "Access to cutting-edge research publications",
      "Networking with global tech professionals",
      "Participation in IEEE conferences and workshops",
    ],
  },
  {
    category: "Academic Excellence",
    title: "AI/ML Specialization Scholar",
    description:
      "Pursuing B.Tech in Computer Science with AI/ML specialization at Bennett University, demonstrating strong academic performance in advanced AI coursework",
    date: "2022 - Present",
    highlights: ["Core: DSA, OOP, DBMS", "Advanced: Generative AI, Transformers", "Research: Vision Transformers, GPT-2 Integration"],
  },
  {
    category: "Professional Certifications",
    title: "7 Industry-Recognized Certifications",
    description:
      "Completed comprehensive certification programs from AWS, Google Cloud, IBM, and Edge Impulse covering Generative AI, Machine Learning, and Computer Vision",
    date: "2023 - 2024",
    highlights: [
      "AWS - Generative AI with LLMs",
      "Google Cloud - Intro to Generative AI",
      "IBM - Machine Learning & EDA",
      "Edge Impulse - CV with Embedded ML",
    ],
  },
  {
    category: "Research & Development",
    title: "Vision-GPT2 Hybrid Model",
    description:
      "Developed advanced image captioning system combining Vision Transformer and GPT-2, achieving BLEU-4 score of 0.32 and ROUGE-L of 0.54",
    date: "2024",
    highlights: ["Custom cross-attention mechanisms", "End-to-end training pipelines", "State-of-the-art performance metrics"],
  },
  {
    category: "Full-Stack Development",
    title: "Smart Chief AI Application",
    description:
      "Independently designed and developed AI-powered recipe and nutrition application with real-time API integration and interactive data visualizations",
    date: "2024",
    highlights: ["React.js + Edamam APIs integration", "Real-time nutritional analysis", "Chart.js data visualization"],
  },
  {
    category: "Technical Expertise",
    title: "Multi-Domain AI Proficiency",
    description:
      "Demonstrated expertise across Generative AI, Deep Learning, NLP, and Computer Vision with hands-on projects and research",
    date: "2022 - Present",
    highlights: ["PyTorch, TensorFlow, Keras mastery", "Transformers & Hugging Face", "Full-stack development capabilities"],
  },
  {
    category: "Community & Growth",
    title: "Continuous Learning Advocate",
    description:
      "Active in AI research reading, public speaking, and tackling programming challenges to stay at the forefront of AI innovation",
    date: "Ongoing",
    highlights: ["AI research and technical publications", "Public speaking engagements", "Open-source contributions"],
  },
];

const Achievements = () => (
  <Section
    id="achievements"
    index="05"
    eyebrow="Milestones"
    title="Achievements & awards"
    description="Recognition and accomplishments across study, research and building."
  >
    <ol className="divide-y divide-border border-y border-border">
      {achievements.map((achievement, index) => (
        <Reveal as="li" key={achievement.title} delay={Math.min(index, 3) * 50} className="py-6">
          <article aria-labelledby={`achievement-${index}`}>
            <p className="flex flex-wrap items-center gap-x-3 text-xs text-muted-foreground">
              <span className="font-medium uppercase tracking-[0.08em]">{achievement.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{achievement.date}</span>
            </p>
            <h3 id={`achievement-${index}`} className="mt-2 text-lg font-semibold leading-snug">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{achievement.description}</p>
            <ul className="mt-3 grid list-disc gap-x-8 gap-y-1 pl-5 text-sm leading-6 text-muted-foreground marker:text-muted-foreground/60 sm:grid-cols-2">
              {achievement.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Achievements;

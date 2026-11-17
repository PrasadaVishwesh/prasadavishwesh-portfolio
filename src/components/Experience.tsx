import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

const timeline = [
  {
    title: "B.Tech - Computer Science (AI/ML)",
    organization: "Bennett University",
    location: "Greater Noida, India",
    period: "Oct 2022 - Present",
    description:
      "Specializing in Artificial Intelligence and Machine Learning with strong academic performance. Deep focus on Generative AI, Deep Learning, NLP, and Computer Vision. Working on cutting-edge AI projects including Vision-GPT2 and Smart Chief.",
    highlights: [
      "Core: DSA, OOP, DBMS, AI/ML Fundamentals",
      "Advanced: Generative AI, Transformers, Computer Vision",
      "Research: Vision Transformers, GPT-2 Integration, Custom Attention Mechanisms",
    ],
  },
  {
    title: "Intermediate Education",
    organization: "FIITJEE International Institute",
    location: "India",
    period: "Jul 2020 - Jul 2022",
    description:
      "Completed intermediate education with strong academic performance, building foundational skills in mathematics, physics, and computer science that paved the way for AI/ML specialization.",
    highlights: [
      "Strong foundation in Mathematics and Physics",
      "Introduction to Programming and Computational Thinking",
      "Academic excellence with consistent performance",
    ],
  },
];

const Experience = () => (
  <Section id="experience" index="06" eyebrow="Journey" title="Education & experience" tone="muted">
    <ol className="space-y-10 border-l border-border pl-6">
      {timeline.map((item, index) => (
        <Reveal as="li" key={item.title} delay={index * 120} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[28.5px] top-2 h-2 w-2 rounded-full bg-primary ring-4 ring-background"
          />
          <p className="text-sm tabular-nums text-muted-foreground">{item.period}</p>
          <h3 className="mt-1 text-lg font-semibold leading-snug">{item.title}</h3>
          <p className="mt-1 text-sm font-medium text-primary">
            {item.organization}
            <span className="font-normal text-muted-foreground"> · {item.location}</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground marker:text-muted-foreground/60">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </Reveal>
      ))}
    </ol>
  </Section>
);

export default Experience;

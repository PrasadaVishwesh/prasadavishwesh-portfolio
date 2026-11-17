import Section from "@/components/Section";
import { useInView } from "@/hooks/use-in-view";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow", level: 92 },
      { name: "PyTorch", level: 90 },
      { name: "Keras", level: 90 },
      { name: "Transformers (HF)", level: 88 },
      { name: "Scikit-learn", level: 85 },
    ],
  },
  {
    title: "Data & Visualization",
    skills: [
      { name: "NumPy", level: 92 },
      { name: "Pandas", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Chart.js", level: 80 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Databases & Backend",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Spring Boot", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Jupyter Notebook", level: 95 },
      { name: "VS Code", level: 95 },
      { name: "Google Colab", level: 90 },
      { name: "AWS", level: 78 },
    ],
  },
  {
    title: "AI Specializations",
    skills: [
      { name: "Generative AI", level: 92 },
      { name: "NLP", level: 90 },
      { name: "Computer Vision", level: 88 },
      { name: "Deep Learning", level: 92 },
      { name: "Data Pipelines", level: 85 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", level: 88 },
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 85 },
    ],
  },
];

const SkillBar = ({ level, delay }: { level: number; delay: number }) => {
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: "0px 0px -24px 0px" });
  return (
    <div ref={ref} aria-hidden="true" className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
      <div
        className="h-full origin-left rounded-full bg-primary transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ width: `${level}%`, transform: `scaleX(${inView ? 1 : 0})`, transitionDelay: inView ? `${delay}ms` : undefined }}
      />
    </div>
  );
};

const Skills = () => (
  <Section id="skills" index="02" eyebrow="Skills" title="Skills & technologies">
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      {skillCategories.map((category, index) => (
        <section key={category.title} aria-labelledby={`skills-group-${index}`}>
          <h3 id={`skills-group-${index}`} className="border-b border-border pb-2 text-sm font-semibold">
            {category.title}
          </h3>
          <ul className="mt-4 space-y-3.5">
            {category.skills.map((skill, skillIndex) => (
              <li key={skill.name}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span>{skill.name}</span>
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {skill.level}
                    <span className="sr-only"> percent</span>
                    <span aria-hidden="true">%</span>
                  </span>
                </div>
                <SkillBar level={skill.level} delay={skillIndex * 70} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Section>
);

export default Skills;

import { ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "AWS",
    date: "2024",
    category: "AI/ML",
    link: "https://coursera.org/share/51ab3a9b6898fb09f9946d929c39e537",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    category: "AI/ML",
    link: "https://coursera.org/share/9060161629994e420e9c5552a6965448",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2024",
    category: "AI/ML",
    link: "https://coursera.org/share/e63f18ac43c11a79fbc1ce4ca6674cea",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "IBM",
    date: "2024",
    category: "Data Science",
    link: "https://coursera.org/share/d185ea58da39d367d90a4f458c829dda",
  },
  {
    title: "Google Advanced Data Analytics Capstone",
    issuer: "Google",
    date: "2023",
    category: "Data Science",
    link: "https://coursera.org/share/7463617d75229177530e1c58a78c6a5d",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    date: "2023",
    category: "Management",
    link: "https://coursera.org/share/ec44a375b4c4344efc640b468cd4bb25",
  },
  {
    title: "Computer Vision with Embedded Machine Learning",
    issuer: "Edge Impulse",
    date: "2023",
    category: "Computer Vision",
    link: "https://coursera.org/share/3f05e5be25f80bda26d8e8c1cc474db5",
  },
];

const Certifications = () => (
  <Section id="certifications" index="04" eyebrow="Credentials" title="Certifications">
    <ul className="divide-y divide-border border-y border-border">
      {certifications.map((cert, index) => (
        <Reveal
          as="li"
          key={cert.title}
          delay={Math.min(index, 4) * 50}
          className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div className="min-w-0">
            <h3 className="font-medium leading-snug">{cert.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {cert.issuer} · {cert.date}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <Badge variant="outline">{cert.category}</Badge>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View credential: ${cert.title} (opens in a new tab)`}
              className="group/link inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View credential
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:-translate-y-px group-hover/link:translate-x-px" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      ))}
    </ul>
  </Section>
);

export default Certifications;

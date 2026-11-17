import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const Projects = () => (
  <Section
    id="projects"
    index="03"
    eyebrow="Featured work"
    title="Projects"
    description="Selected AI and full-stack builds."
    tone="muted"
  >
    <ol className="divide-y divide-border">
      {projects.map((project, index) => (
        <li key={project.slug} className="py-10 first:pt-0 last:pb-0">
          <article aria-labelledby={`project-${project.slug}`}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 id={`project-${project.slug}`} className="text-xl font-semibold leading-snug">
                {project.title}
              </h3>
              <span aria-hidden="true" className="shrink-0 text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>

            {project.metrics && (
              <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col-reverse">
                    <dt className="text-xs text-muted-foreground">{metric.label}</dt>
                    <dd className="text-xl font-semibold tabular-nums text-primary">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-muted-foreground/60">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>

            <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link to={project.path} aria-label={`View details: ${project.title}`}>
                  View details
                  <ArrowRight />
                </Link>
              </Button>
              {project.github && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              )}
              <Button asChild variant="outline" size="sm">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  Live demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Button>
            </div>
          </article>
        </li>
      ))}
    </ol>
  </Section>
);

export default Projects;

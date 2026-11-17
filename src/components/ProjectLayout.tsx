import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { projects } from "@/data/projects";

export interface ProjectContent {
  /** Matches the slug in src/data/projects.ts and the /projects/:slug route */
  slug: string;
  title: string;
  summary: string;
  category?: string;
  techStack: string[];
  github?: string;
  demo: string;
  metrics?: { label: string; value: string; description?: string }[];
  /** Short label/value facts such as timeline or category */
  facts?: { label: string; value: string }[];
  preview?: { src: string; alt: string; caption: string; width: number; height: number };
  featuresTitle?: string;
  features: { icon: LucideIcon; title: string; description: string }[];
  stackDetails?: { name: string; category: string }[];
  codeSnippets?: { title: string; language: string; code: string }[];
  outcomesTitle?: string;
  outcomeGroups?: { title?: string; items: string[]; ordered?: boolean }[];
}

const truncate = (text: string, max = 158) =>
  text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;

interface StatListProps {
  items: { label: string; value: string; description?: string }[];
  size: "stat" | "fact";
}

const StatList = ({ items, size }: StatListProps) => (
  <dl className="flex flex-wrap gap-x-12 gap-y-6 border-y border-border py-6">
    {items.map((item) => (
      <div key={item.label} className="flex min-w-[8rem] flex-col-reverse justify-end gap-1">
        <dt className="text-sm text-muted-foreground">
          {item.label}
          {item.description && <span className="text-xs"> · {item.description}</span>}
        </dt>
        <dd className={size === "stat" ? "text-2xl font-semibold tabular-nums text-primary" : "font-medium"}>
          {item.value}
        </dd>
      </div>
    ))}
  </dl>
);

const ProjectLayout = ({
  slug,
  title,
  summary,
  category,
  techStack,
  github,
  demo,
  metrics,
  facts,
  preview,
  featuresTitle = "Key features",
  features,
  stackDetails,
  codeSnippets,
  outcomesTitle = "Project outcomes",
  outcomeGroups,
}: ProjectContent) => {
  useDocumentMeta({
    title: `${title} | Prasada Vishwesh`,
    description: truncate(summary),
    path: `/projects/${slug}`,
  });

  const otherProjects = projects.filter((project) => project.slug !== slug);

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <section aria-labelledby="project-title" className="border-b border-border py-10 sm:py-14">
          <div className="page-container">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link to={{ pathname: "/", hash: "#projects" }} className="transition-colors hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {title}
                </li>
              </ol>
            </nav>

            <div className="mt-8 max-w-3xl">
              {category && <p className="eyebrow">{category}</p>}
              <h1 id="project-title" className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{summary}</p>

              <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-1.5">
                {techStack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {github && (
                  <Button asChild size="lg">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <Github />
                      View source
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </Button>
                )}
                <Button asChild size="lg" variant={github ? "outline" : "default"}>
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    Live demo
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              </div>
            </div>

            {facts && (
              <div className="mt-10">
                <StatList items={facts} size="fact" />
              </div>
            )}
          </div>
        </section>

        {preview && (
          <figure className="page-container border-b border-border py-10 sm:py-14">
            <img
              src={preview.src}
              alt={preview.alt}
              width={preview.width}
              height={preview.height}
              decoding="async"
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">{preview.caption}</figcaption>
          </figure>
        )}

        {metrics && (
          <Section id="metrics" eyebrow="Results" title="Performance metrics">
            <StatList items={metrics} size="stat" />
          </Section>
        )}

        <Section id="features" eyebrow="Overview" title={featuresTitle} tone={metrics ? "muted" : "default"}>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature.title}>
                <div className="flex items-center gap-2.5">
                  <feature.icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold leading-snug">{feature.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        {stackDetails && (
          <Section id="stack" eyebrow="Stack" title="Technology stack">
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {stackDetails.map((tech) => (
                <li key={tech.name} className="border-b border-border pb-3">
                  <p className="font-medium">{tech.name}</p>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {codeSnippets && (
          <Section id="implementation" eyebrow="Code" title="Technical implementation">
            <div className="space-y-6">
              {codeSnippets.map((snippet) => (
                <figure key={snippet.title} className="overflow-hidden rounded-lg border border-border">
                  <figcaption className="flex items-center justify-between gap-3 border-b border-border bg-muted px-4 py-2.5">
                    <span className="text-sm font-medium">{snippet.title}</span>
                    <span className="font-mono text-xs text-muted-foreground">{snippet.language}</span>
                  </figcaption>
                  <pre
                    tabIndex={0}
                    role="region"
                    aria-label={`${snippet.title} (${snippet.language} code)`}
                    className="overflow-x-auto bg-card p-4 text-[13px] leading-6"
                  >
                    <code className="font-mono">{snippet.code}</code>
                  </pre>
                </figure>
              ))}
            </div>
          </Section>
        )}

        {outcomeGroups && (
          <Section
            id="outcomes"
            eyebrow="Results"
            title={outcomesTitle}
            tone={codeSnippets || stackDetails ? "muted" : "default"}
          >
            <div className="space-y-8">
              {outcomeGroups.map((group, groupIndex) => {
                const List = group.ordered ? "ol" : "ul";
                return (
                  <div key={group.title ?? groupIndex}>
                    {group.title && <h3 className="mb-3 font-semibold">{group.title}</h3>}
                    <List
                      className={`space-y-2 pl-5 leading-7 text-muted-foreground marker:text-muted-foreground/60 ${
                        group.ordered ? "list-decimal marker:tabular-nums" : "list-disc"
                      }`}
                    >
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </List>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        <Section id="more-projects" eyebrow="Keep exploring" title="More projects">
          <ul className="divide-y divide-border border-y border-border">
            {otherProjects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={project.path}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
                >
                  <span>
                    <span className="block font-medium">{project.title}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{project.tech.slice(0, 4).join(" · ")}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectLayout;

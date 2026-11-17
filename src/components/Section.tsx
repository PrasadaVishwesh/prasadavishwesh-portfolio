import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";

interface SectionProps {
  id: string;
  /** Section number shown in the eyebrow, e.g. "03" */
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "default" | "muted";
  children: ReactNode;
}

/**
 * Shared two-column section layout used by every block on the home page:
 * a sticky label column on the left, content on the right, one hairline divider per section.
 */
const Section = ({ id, index, eyebrow, title, description, tone = "default", children }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={cn("border-b border-border py-16 sm:py-20 lg:py-24", tone === "muted" && "bg-muted/40")}
  >
    <div className="page-container">
      <Reveal className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
        <header className="lg:sticky lg:top-24 lg:self-start">
          {eyebrow && (
            <p className="eyebrow">
              {index ? `${index} / ` : ""}
              {eyebrow}
            </p>
          )}
          <h2 id={`${id}-title`} className={cn("text-2xl font-semibold sm:text-3xl", eyebrow && "mt-3")}>
            {title}
          </h2>
          {description && <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{description}</p>}
        </header>
        <div className="min-w-0">{children}</div>
      </Reveal>
    </div>
  </section>
);

export default Section;

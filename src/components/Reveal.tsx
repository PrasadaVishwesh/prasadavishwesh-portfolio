import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, applied when the element enters view */
  delay?: number;
  as?: ElementType;
}

/**
 * Fades an element in with a short rise the first time it scrolls into view.
 * CSS-driven (no animation library), and visible immediately for reduced-motion users.
 */
const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      style={inView && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
        inView ? "opacity-100" : "translate-y-3 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

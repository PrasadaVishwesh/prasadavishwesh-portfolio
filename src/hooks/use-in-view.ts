import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface InViewOptions {
  rootMargin?: string;
  threshold?: number;
}

/**
 * Returns a ref and a flag that flips to true (once) when the element scrolls into view.
 * Reports true immediately when IntersectionObserver is missing or the user prefers reduced motion,
 * so content is never left hidden.
 */
export const useInView = <T extends Element>({ rootMargin = "0px 0px -48px 0px", threshold = 0.05 }: InViewOptions = {}) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView] as const;
};

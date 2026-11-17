import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/** A quick opacity fade on route change. No vertical movement, so it never fights with scroll restoration. */
const PageTransition = ({ children }: PageTransitionProps) => (
  <div className="motion-safe:animate-fade-in">{children}</div>
);

export default PageTransition;

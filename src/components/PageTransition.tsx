import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/** A quick opacity fade on route change. No vertical movement, so it never fights with scroll restoration. */
const PageTransition = ({ children }: PageTransitionProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, ease: "easeOut" }}>
    {children}
  </motion.div>
);

export default PageTransition;

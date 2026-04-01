import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for smoother feel
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

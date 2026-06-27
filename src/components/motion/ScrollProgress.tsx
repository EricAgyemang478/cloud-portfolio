import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * Thin reading-progress bar pinned to the top of the page, driven by overall
 * scroll position and smoothed with a spring. Hidden when the user prefers
 * reduced motion.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, backgroundColor: "var(--color-accent)" }}
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left"
    />
  );
}

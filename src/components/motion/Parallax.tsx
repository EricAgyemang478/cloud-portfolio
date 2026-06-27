import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  /** Total vertical travel in px across the element's time on screen. */
  distance?: number;
  class?: string;
}

/**
 * Subtle scroll-linked vertical drift for decorative layers. Movement is
 * disabled (no transform) when the user prefers reduced motion.
 */
export default function Parallax({ children, distance = 40, class: className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}

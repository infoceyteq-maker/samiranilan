"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Loads only the animation features this site uses (animations, variants, exit,
 * hover/tap/focus and whileInView) instead of the full Framer Motion bundle.
 *
 * With `strict`, any leftover `motion.*` component throws in development — so the
 * bundle stays small. Use `m.*` from "framer-motion" inside client components.
 */
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Mountain } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary/20 z-[100] origin-left"
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[101] origin-left shadow-[0_0_10px_var(--primary)]"
        style={{ scaleX }}
      />
      
      {/* Climbing Indicator */}
      <motion.div
        style={{ left: x }}
        className="fixed top-0 z-[102] -translate-y-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
      >
        <div className="relative">
          <Mountain className="w-4 h-4 text-primary fill-primary" />
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-1 bg-primary/40" />
        </div>
      </motion.div>
    </>
  );
}

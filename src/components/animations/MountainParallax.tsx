"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MountainParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Sky / Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-forest/20 to-background" />

      {/* Layer 4: Distant Mountains */}
      <motion.div
        style={{ y: y4 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end"
      >
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto opacity-30 text-navy"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400L240 280L480 340L720 220L960 300L1200 180L1440 320V400H0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Layer 3: Middle Mountains */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end translate-y-12"
      >
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto opacity-50 text-forest"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400L360 200L720 320L1080 180L1440 360V400H0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Layer 2: Near Mountains */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end translate-y-24"
      >
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto opacity-80 text-secondary"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400L240 180L480 280L720 140L960 260L1200 120L1440 300V400H0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Layer 1: Foreground Mountains */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end translate-y-32"
      >
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-background"
          preserveAspectRatio="none"
        >
          <path
            d="M0 400L480 120L960 240L1440 80V400H0Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Fog / Atmosphere */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Animated Fog Elements */}
      <motion.div
        animate={{
          x: ["-10%", "10%"],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-0 w-[200%] h-40 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl z-20"
      />
    </div>
  );
}

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
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Cinematic Sky */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,var(--color-navy)_0%,transparent_70%)] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-background" />

      {/* Cinematic Light Source (Behind Mountains) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full" />

      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="mtn-4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.4 0.1 160)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <linearGradient id="mtn-3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.5 0.12 155)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <linearGradient id="mtn-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.6 0.15 150)" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>
      </svg>

      {/* Layer 4: Distant Peaks */}
      <motion.div
        style={{ y: y4 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end"
      >
        <svg viewBox="0 0 1440 600" className="w-full h-auto opacity-70" preserveAspectRatio="none">
          <path d="M0 600L240 380L480 440L720 320L960 400L1200 280L1440 420V600H0Z" fill="url(#mtn-4)" />
        </svg>
      </motion.div>

      {/* Layer 3: Middle Range */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end translate-y-12"
      >
        <svg viewBox="0 0 1440 600" className="w-full h-auto opacity-90" preserveAspectRatio="none">
          <path d="M0 600L360 300L720 420L1080 280L1440 460V600H0Z" fill="url(#mtn-3)" />
        </svg>
      </motion.div>

      {/* Layer 2: Main Ridge */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end translate-y-24"
      >
        <svg viewBox="0 0 1440 600" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 600L240 280L480 380L720 240L960 360L1200 220L1440 400V600H0Z" fill="url(#mtn-2)" />
          {/* Vivid Peak Highlights */}
          <path d="M240 280L280 310L200 310L240 280Z" fill="white" fillOpacity="0.3" />
          <path d="M720 240L760 270L680 270L720 240Z" fill="white" fillOpacity="0.3" />
        </svg>
      </motion.div>

      {/* Layer 1: Foreground Base */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 w-full h-full flex items-end translate-y-36"
      >
        <svg viewBox="0 0 1440 600" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 600L480 220L960 340L1440 180V600H0Z" fill="var(--color-background)" />
        </svg>
      </motion.div>

      {/* Atmospheric Fog - Reduced height for more visibility */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />

      {/* High-End Light Glare - More subtle */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-primary/10 blur-[50px] z-20" />
    </div>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative pt-48 pb-32 px-6 overflow-hidden bg-black flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        {/* Abstract Mountain Silhouette */}
        <div className="absolute bottom-0 w-full opacity-20">
          <svg viewBox="0 0 1440 320" className="w-full h-auto text-primary">
            <path d="M0 320L120 280L240 300L360 220L480 260L600 140L720 200L840 80L960 180L1080 120L1200 240L1320 140L1440 280V320H0Z" fill="currentColor" />
          </svg>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-md"
        >
          <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">CARC Official</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-heading font-black tracking-tighter mb-8 leading-[0.85] text-white"
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "text-gradient" : ""}>{word} </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/50 max-w-3xl mx-auto font-medium"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

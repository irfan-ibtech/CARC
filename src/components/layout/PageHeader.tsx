"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { MountainParallax } from "@/components/animations/MountainParallax";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative min-h-screen pt-40 pb-16 px-6 overflow-hidden bg-black flex items-start justify-center text-center">
      {/* Background Parallax */}
      <MountainParallax />

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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-60 font-black text-white">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]" />
        </motion.div>
      </motion.div>

      {/* Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}

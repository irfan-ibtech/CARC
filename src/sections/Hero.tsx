"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";
import { MountainParallax } from "@/components/animations/MountainParallax";
import { Magnetic } from "@/components/animations/Magnetic";

export function Hero() {
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityContent = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <MountainParallax />

      {/* Content */}
      <motion.div 
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-20 text-center max-w-5xl px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm shadow-2xl"
        >
          <Compass className="w-4 h-4 text-primary animate-spin-slow" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary/90">
            Adventure Awaits You
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-9xl font-heading font-black tracking-tighter mb-8 leading-[0.85] text-white"
        >
          ADVENTURE <br />
          <span className="text-gradient drop-shadow-[0_0_30px_rgba(53,101,77,0.3)]">BEYOND LIMITS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 font-medium"
        >
          {siteData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Magnetic>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-16 text-lg font-bold group shadow-[0_0_20px_rgba(53,101,77,0.4)] transition-all hover:scale-105">
              Join the Adventure
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="outline" className="border-white/20 rounded-full px-10 h-16 text-lg font-bold backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105">
              Explore Expeditions
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
    </section>
  );
}

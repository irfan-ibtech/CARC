"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Map, Mountain } from "lucide-react";

export function Join() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Dramatic Background Silhouette */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-primary">
          <path d="M0 400L240 180L480 320L720 120L960 280L1200 100L1440 300V400H0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[4rem] bg-linear-to-br from-secondary/80 via-navy/90 to-background p-12 md:p-32 text-center overflow-hidden border border-white/5"
        >
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-32 h-32 bg-primary/10 blur-[80px] rounded-full" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 blur-[100px] rounded-full" 
          />

          <div className="relative z-10 space-y-10">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-primary/20 backdrop-blur-2xl rounded-3xl flex items-center justify-center mx-auto border border-white/10 shadow-[0_0_30px_rgba(53,101,77,0.3)]"
            >
              <Mountain className="w-10 h-10 text-primary" />
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter text-white leading-none">
                THE WILD IS <br />
                <span className="text-gradient drop-shadow-[0_0_30px_rgba(53,101,77,0.5)]">CALLING YOU.</span>
              </h2>
              
              <p className="text-white/60 text-lg md:text-2xl max-w-2xl mx-auto font-medium">
                Step beyond your comfort zone and join the ranks of COMSATS' most daring explorers. 
                Your legacy begins at the summit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 h-20 text-2xl font-black group shadow-[0_0_40px_rgba(53,101,77,0.4)] transition-all hover:scale-105 active:scale-95">
                Join the Club
                <ArrowRight className="ml-2 w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-4 text-white/40 font-black uppercase tracking-[0.2em] text-[10px]">
                <Map className="w-4 h-4" />
                <span>500+ Members Strong</span>
              </div>
            </div>

            {/* Subtle Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                  x: [0, (i - 2) * 20],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
                className="absolute bottom-0 left-1/2 w-1 h-1 bg-white/20 rounded-full blur-[1px]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Compass, Mountain } from "lucide-react";

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Textures */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald rounded-full blur-[120px]" />
          </div>

          {/* Logo Animation */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-primary/20 border-t-primary rounded-full"
                />
                <Compass className="w-12 h-12 text-primary animate-pulse" />
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-4xl font-heading font-black tracking-[0.2em] text-white"
                >
                  CARC
                </motion.h1>
              </div>

              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="w-full h-full bg-linear-to-r from-primary to-emerald"
                />
              </div>
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40"
              >
                Preparing Expedition
              </motion.span>
            </motion.div>
          </div>

          {/* Mountain Silhouettes at bottom */}
          <div className="absolute bottom-0 w-full opacity-10">
            <svg viewBox="0 0 1440 320" className="w-full h-auto text-primary">
              <path d="M0 320L120 260L240 280L360 140L480 200L600 80L720 180L840 40L960 160L1080 60L1200 220L1320 100L1440 240V320H0Z" fill="currentColor" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

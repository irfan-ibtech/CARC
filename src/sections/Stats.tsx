"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mountain, Compass, Users, Trophy, Tent, Map } from "lucide-react";

const stats = [
  { label: "Peaks Conquered", value: "24", icon: Mountain, color: "text-primary" },
  { label: "Hiking Trips", value: "85", icon: Map, color: "text-emerald" },
  { label: "Active Members", value: "500+", icon: Users, color: "text-orange" },
  { label: "Awards Won", value: "12", icon: Trophy, color: "text-accent" },
  { label: "Rover Missions", value: "18", icon: Compass, color: "text-blue-500" },
  { label: "Camps Conducted", value: "32", icon: Tent, color: "text-primary" },
];

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-32 px-4 bg-navy relative overflow-hidden">
      {/* Background Parallax Element */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center"
      >
        <span className="text-[30vw] font-black leading-none select-none">EXPEDITION</span>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="mb-6 relative inline-block">
                <div className="absolute inset-0 bg-white/5 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <stat.icon className={`w-10 h-10 ${stat.color} relative z-10 mx-auto group-hover:scale-110 transition-transform duration-500`} />
              </div>
              
              <div className="space-y-2">
                <motion.h4 
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: i * 0.1 + 0.5 }}
                  className="text-4xl md:text-5xl font-heading font-black text-white"
                >
                  {stat.value}
                </motion.h4>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

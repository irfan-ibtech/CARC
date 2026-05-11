"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { siteData } from "@/data/site-data";
import { Trophy, Medal, Award, Star, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MouseEvent } from "react";

export function Achievements() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Legacy of Excellence</span>
        </motion.div>
        
        <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter mb-6 leading-[0.9]">
          HALL OF <br />
          <span className="text-gradient">LEGENDS.</span>
        </h2>
        <p className="text-foreground/50 max-w-2xl mx-auto text-lg md:text-xl">
          Where every milestone tells a story of grit, determination, and the unyielding spirit of adventure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {siteData.achievements.map((achievement, i) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={i} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-[2.5rem] p-px bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(53, 101, 77, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative bg-secondary/40 backdrop-blur-xl p-10 rounded-[2.4rem] h-full flex flex-col justify-between space-y-8">
        <div className="flex items-start justify-between">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
            {achievement.icon === "Trophy" && <Trophy className="w-8 h-8 text-primary" />}
            {achievement.icon === "Medal" && <Medal className="w-8 h-8 text-emerald" />}
            {achievement.icon === "Award" && <Award className="w-8 h-8 text-orange" />}
          </div>
          <div className="text-right">
            <span className="block text-4xl font-heading font-black opacity-5 group-hover:opacity-10 transition-opacity">0{index + 1}</span>
            <Badge variant="outline" className="mt-2 border-primary/20 text-primary font-black">
              {achievement.date}
            </Badge>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-heading font-black tracking-tight leading-none group-hover:text-primary transition-colors">
            {achievement.title}
          </h3>
          <p className="text-foreground/40 text-base leading-relaxed group-hover:text-foreground/60 transition-colors">
            {achievement.description}
          </p>
        </div>

        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span>Elite Selection</span>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

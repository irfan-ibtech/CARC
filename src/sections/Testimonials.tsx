"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site-data";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-20 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-sm"
        >
          <Quote className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Survivor Stories</span>
        </motion.div>
        
        <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter mb-6 leading-[0.9]">
          VOICES OF <br />
          <span className="text-gradient">ADVENTURE.</span>
        </h2>
      </div>

      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-10 whitespace-nowrap py-12"
        >
          {[...siteData.testimonials, ...siteData.testimonials, ...siteData.testimonials, ...siteData.testimonials].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="w-[450px] flex-shrink-0 bg-secondary/40 border border-white/5 p-12 rounded-[3rem] backdrop-blur-xl group-hover:[animation-play-state:paused] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Quote className="w-32 h-32 rotate-180" />
              </div>
              
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed whitespace-normal text-white/80 italic mb-10 relative z-10">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-primary font-black uppercase tracking-tighter text-sm">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-heading font-black text-white text-lg tracking-tight">{t.author}</h4>
                  <p className="text-primary/60 text-[10px] font-black uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Compass, Target, Users, Zap, Mountain, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCompass } from "@/components/three/FloatingCompass";

const items = [
  {
    title: "Our Mission",
    desc: "To foster a spirit of adventure and leadership among students through outdoor activities.",
    icon: Compass,
    color: "text-emerald",
    bg: "bg-emerald/10",
  },
  {
    title: "Our Vision",
    desc: "Building a resilient community of explorers who lead with integrity and passion.",
    icon: Target,
    color: "text-orange",
    bg: "bg-orange/10",
  },
  {
    title: "Community Impact",
    desc: "Making a difference through environmental awareness and volunteer service.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Youth Energy",
    desc: "Empowering students to step out of their comfort zones and conquer challenges.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

export function About() {
  return (
    <section className="py-32 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Decorative Parallax Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 p-20">
          <Wind className="w-96 h-96 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-[2px] bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">The CARC Spirit</span>
              </motion.div>
              <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-[0.9]">
                EXPLORE. <br />
                <span className="text-gradient">LEAD. CONQUER.</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-foreground/50 leading-relaxed max-w-xl">
              CARC is the premier community for explorers at COMSATS. We go beyond simple hikes—we build characters, 
              forge leaders, and create memories that last a lifetime in the heart of nature.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2">
                <h4 className="text-5xl font-heading font-black text-primary">500+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Active Members</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-5xl font-heading font-black text-emerald">120+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40">Expeditions</p>
              </div>
            </div>

            {/* 3D Accent in mobile view or desktop side */}
            <div className="hidden lg:block absolute -right-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] z-[-1]">
              <FloatingCompass />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
            {/* 3D Accent Overlay for Mobile */}
            <div className="lg:hidden absolute inset-0 z-[-1] opacity-20">
              <FloatingCompass />
            </div>

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Card className="bg-secondary/40 backdrop-blur-xl border-white/5 hover:border-primary/30 transition-all duration-500 group overflow-hidden h-full rounded-[2.5rem]">
                  <CardContent className="p-10 space-y-6">
                    <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm text-foreground/40 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

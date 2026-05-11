"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site-data";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Twitter, Linkedin, Instagram } from "@/components/ui/BrandIcons";
import Image from "next/image";
import Link from "next/link";

export function Team() {
  return (
    <section className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-sm"
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Expedition Command</span>
        </motion.div>
        
        <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter mb-6 leading-[0.9]">
          MEET OUR <br />
          <span className="text-gradient">LEADERS.</span>
        </h2>
        <p className="text-foreground/50 max-w-2xl mx-auto text-lg md:text-xl">
          The elite team guiding CARC towards new horizons and beyond.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {siteData.team.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group relative"
          >
            {/* Card Background Glow */}
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 bg-secondary/40 backdrop-blur-xl">
              {/* Leader Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">Elite Member</span>
                </div>
                <h3 className="text-3xl font-heading font-black text-white mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary/80 font-black uppercase tracking-widest text-[10px] mb-6">
                  {member.role}
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  {member.socials.twitter && (
                    <Link href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all">
                      <Twitter className="w-4 h-4 text-white" />
                    </Link>
                  )}
                  {member.socials.linkedin && (
                    <Link href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all">
                      <Linkedin className="w-4 h-4 text-white" />
                    </Link>
                  )}
                  {member.socials.instagram && (
                    <Link href={member.socials.instagram} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all">
                      <Instagram className="w-4 h-4 text-white" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Designation Badge */}
              <div className="absolute top-8 right-8">
                <div className="px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white">
                  Leader
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-24 text-center">
        <Link 
          href="/team" 
          className="group inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground/60 group-hover:text-primary transition-colors">
            View All Leaders
          </span>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
            <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
          </div>
        </Link>
      </div>
    </section>
  );
}

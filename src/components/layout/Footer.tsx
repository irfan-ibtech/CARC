"use client";

import Link from "next/link";
import { siteData } from "@/data/site-data";
import { Mail, MapPin, Phone, Compass, Star } from "lucide-react";
import { Instagram, Twitter, Linkedin, Facebook } from "@/components/ui/BrandIcons";
import { motion } from "framer-motion";
import { StarryBackground } from "../animations/StarryBackground";

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-32 pb-16 px-6 overflow-hidden border-t border-white/5">
      <StarryBackground count={20} />

      {/* Terrain Outline Parallax Effect */}
      <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-primary">
          <path d="M0 320L120 280L240 300L360 220L480 260L600 140L720 200L840 80L960 180L1080 120L1200 240L1320 140L1440 280V320H0Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-10">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-12 transition-transform">
                <Compass className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black tracking-tighter leading-none">
                  {siteData.clubName}
                </span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Explorer Society</span>
              </div>
            </div>
            
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              Join the elite community of explorers at COMSATS. Redefining limits, conquering peaks, and building leaders through adventure.
            </p>
            
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                  <Icon size={20} className="text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Quick Links</h4>
            <ul className="space-y-6">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-bold text-white/50 hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-white/10 group-hover:bg-primary transition-colors rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Recent Journals</h4>
            <ul className="space-y-6">
              {siteData.events.map((event) => (
                <li key={event.id}>
                  <Link href="/events" className="text-sm font-bold text-white/50 hover:text-primary transition-colors flex flex-col gap-1">
                    <span>{event.title}</span>
                    <span className="text-[10px] text-white/20 font-black uppercase tracking-widest">{event.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Base Camp</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-sm font-bold text-white/50">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>COMSATS University, <br /> Islamabad Campus</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-bold text-white/50">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-4 text-sm font-bold text-white/50">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>carc@comsats.edu.pk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
          <p>© {new Date().getFullYear()} CARC Society. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span>at COMSATS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

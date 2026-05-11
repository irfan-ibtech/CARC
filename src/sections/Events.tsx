"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/site-data";
import { Calendar, MapPin, ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function Events() {
  return (
    <section className="py-32 px-4 bg-secondary/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -right-20 top-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Live Expeditions</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter mb-6 leading-[0.9]">
            EXPEDITION <br />
            <span className="text-gradient">JOURNALS.</span>
          </h2>
          <p className="text-foreground/50 text-lg md:text-xl max-w-2xl">
            From the highest peaks to the deepest woods, witness the journeys that define our legacy. 
            Your next story starts here.
          </p>
        </div>
        <Button variant="outline" className="rounded-full border-white/10 h-16 px-10 text-lg font-bold group hover:bg-white/5">
          Explore Archive
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {siteData.events.map((event, i) => (
          <EventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative h-[550px] rounded-[3rem] overflow-hidden cursor-pointer bg-secondary/50 border border-white/5"
    >
      <Image
        src={event.image}
        alt={event.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4))]" />

      <div className="absolute top-8 left-8 flex flex-col gap-3">
        <Badge className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
          event.status === "Upcoming" ? "bg-primary shadow-[0_0_15px_rgba(53,101,77,0.5)]" : "bg-white/10 backdrop-blur-md"
        }`}>
          {event.status}
        </Badge>
        <Badge variant="outline" className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-black/20 backdrop-blur-md border-white/10 text-white">
          {event.category}
        </Badge>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-10 space-y-6">
        <div className="flex items-center gap-6 text-white/60">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Base Camp</span>
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tight leading-none text-white group-hover:text-primary transition-colors duration-500">
          {event.title}
        </h3>

        <p className="text-white/50 text-sm line-clamp-2 group-hover:text-white/70 transition-colors">
          {event.description}
        </p>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <Compass className="w-5 h-5 text-primary group-hover:animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Difficulty</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Advanced</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary"
          >
            Read Journal
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

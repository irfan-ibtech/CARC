"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Camera, Maximize2, Share2, X, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const images = [
  { 
    id: 1,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop", 
    title: "Peak Silence", 
    location: "Naran Valley",
    category: "Mountains",
    span: "md:col-span-2 md:row-span-2"
  },
  { 
    id: 2,
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1476&auto=format&fit=crop", 
    title: "Conquering Heights", 
    location: "Gilgit-Baltistan",
    category: "Adventure",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    id: 3,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1470&auto=format&fit=crop", 
    title: "Starlit Camp", 
    location: "Fairy Meadows",
    category: "Camping",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    id: 4,
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop", 
    title: "Mist Haven", 
    location: "Swat",
    category: "Nature",
    span: "md:col-span-1 md:row-span-2"
  },
  { 
    id: 5,
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1471&auto=format&fit=crop", 
    title: "Ancient Pathways", 
    location: "Margalla Hills",
    category: "Trekking",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    id: 6,
    src: "https://images.unsplash.com/photo-1551632432-c735e8299521?q=80&w=1470&auto=format&fit=crop", 
    title: "The Long Road", 
    location: "Karakoram",
    category: "Expedition",
    span: "md:col-span-2 md:row-span-1"
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section className="py-32 px-4 bg-secondary/5 relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary mb-8 backdrop-blur-sm"
        >
          <Camera className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Expedition Archives</span>
        </motion.div>
        
        <h2 className="text-5xl md:text-8xl font-heading font-black tracking-tighter mb-6 leading-[0.9]">
          CAPTURED <br />
          <span className="text-gradient">MOMENTS.</span>
        </h2>
        <p className="text-foreground/50 max-w-2xl mx-auto text-lg md:text-xl">
          A visual chronicle of our journeys into the wild, curated for the bold.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((item, i) => (
          <Dialog key={item.id}>
            <DialogTrigger
              nativeButton={false}
              render={
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  onClick={() => setSelectedImage(item)}
                  className={cn(
                    "relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 hover:border-primary/50 transition-all duration-500",
                    item.span
                  )}
                />
              }
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Immersive Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content on Hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                      <Maximize2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <Share2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/60">{item.category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-black text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-primary/80">
                    <MapPin className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Grain Texture Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </DialogTrigger>

            <DialogContent className="max-w-5xl bg-black/90 backdrop-blur-2xl border-white/10 p-0 overflow-hidden rounded-[3rem]">
              {selectedImage && (
                <div className="relative aspect-video w-full h-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 80vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-12 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="px-4 py-1 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-widest">
                        {selectedImage.category}
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold uppercase tracking-widest">{selectedImage.location}</span>
                      </div>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter">
                      {selectedImage.title}
                    </h2>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteData } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/Magnetic";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled ? "py-4" : "py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-500 rounded-full px-8",
            scrolled ? "bg-black/40 backdrop-blur-2xl border border-white/10 py-3 shadow-[0_0_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-0"
          )}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform">
              <Compass className="w-6 h-6 text-white group-hover:animate-spin-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl font-black tracking-tighter leading-none text-white">
                {siteData.clubName}
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Explorer Society</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {siteData.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-primary relative group",
                  pathname === link.href ? "text-primary" : "text-white/70"
                )}
              >
                {link.name}
                <motion.span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full",
                    pathname === link.href && "w-full"
                  )}
                />
              </Link>
            ))}
            <Magnetic>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-10 font-black uppercase tracking-widest text-[10px] shadow-[0_0_20px_rgba(53,101,77,0.4)] transition-all hover:scale-105 active:scale-95">
                Join
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 px-6 pt-4 md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-6 shadow-2xl">
              {siteData.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-heading font-black tracking-tighter py-2 flex items-center justify-between",
                    pathname === link.href ? "text-primary" : "text-white/70"
                  )}
                >
                  {link.name}
                  <ChevronRight className={cn("w-6 h-6", pathname === link.href ? "text-primary" : "text-white/20")} />
                </Link>
              ))}
              <Button className="w-full h-16 mt-4 bg-primary text-white rounded-2xl font-black text-lg">
                Join the Adventure
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

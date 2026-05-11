"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="BASE CAMP" 
        subtitle="The journey starts with a single message. Reach out to the CARC Command Center." 
      />
      
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary mb-2 backdrop-blur-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Communication Channel</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none">
                CONTACT THE <br />
                <span className="text-gradient">ADVENTURERS.</span>
              </h2>
              <p className="text-xl text-white/40 leading-relaxed max-w-md font-medium">
                Whether it's a query about membership or an idea for the next big peak, we're ready to listen.
              </p>
            </div>

            <div className="space-y-10">
              {[
                { icon: Mail, label: "Email Link", value: "carc@comsats.edu.pk", color: "text-primary" },
                { icon: Phone, label: "Direct Line", value: "+92 300 1234567", color: "text-emerald" },
                { icon: MapPin, label: "Base Camp", value: "Student Service Center, COMSATS Islamabad", color: "text-orange" },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-inner">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 mb-2">{item.label}</p>
                    <h4 className="text-xl font-heading font-black tracking-tight text-white group-hover:text-primary transition-colors">{item.value}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-emerald rounded-[3.5rem] blur opacity-10" />
            <div className="relative bg-secondary/40 backdrop-blur-3xl p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Full Name</label>
                    <Input placeholder="John Doe" className="bg-black/20 border-white/10 h-16 rounded-2xl px-6 text-white placeholder:text-white/20 focus:border-primary/50 transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Email Address</label>
                    <Input placeholder="john@example.com" className="bg-black/20 border-white/10 h-16 rounded-2xl px-6 text-white placeholder:text-white/20 focus:border-primary/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Subject</label>
                  <Input placeholder="How can we help?" className="bg-black/20 border-white/10 h-16 rounded-2xl px-6 text-white placeholder:text-white/20 focus:border-primary/50 transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-4">Message</label>
                  <Textarea placeholder="Tell us about your mission..." className="bg-black/20 border-white/10 min-h-[180px] rounded-[2rem] p-6 text-white placeholder:text-white/20 focus:border-primary/50 transition-all resize-none" />
                </div>
                <Button className="w-full h-20 rounded-2xl bg-primary hover:bg-primary/90 text-white text-xl font-black uppercase tracking-[0.1em] group shadow-[0_0_30px_rgba(53,101,77,0.3)] transition-all hover:scale-105 active:scale-95">
                  Send Dispatch
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center pointer-events-none"
            >
              <Sparkles className="w-10 h-10 text-primary opacity-20" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

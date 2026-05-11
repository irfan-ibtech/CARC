import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Achievements as AchievementsSection } from "@/sections/Achievements";

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="VICTORIES" 
        subtitle="A celebration of our collective successes and individual brilliance." 
      />
      <AchievementsSection />
      
      <section className="py-24 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Total Expeditions", value: "150+" },
            { label: "Awards Won", value: "45" },
            { label: "Community Hours", value: "2000+" },
            { label: "Active Rovers", value: "500+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-10 bg-background rounded-3xl border border-white/5">
              <h4 className="text-5xl font-black text-primary mb-2">{stat.value}</h4>
              <p className="text-sm font-bold opacity-40 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

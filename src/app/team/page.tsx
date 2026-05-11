import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Team as TeamSection } from "@/sections/Team";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="THE CREW" 
        subtitle="The dedicated individuals working behind the scenes to make every adventure possible." 
      />
      <TeamSection />
      
      <section className="py-24 px-4 bg-secondary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Executive Body 2024-25</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Director Events", "Director Media", "Director Logistics", "Director Finance"].map((role) => (
              <div key={role} className="p-6 bg-background rounded-2xl border border-white/5">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{role}</p>
                <h4 className="font-heading font-bold text-lg">Member Name</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

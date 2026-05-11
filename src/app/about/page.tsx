import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { About as AboutSection } from "@/sections/About";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="OUR STORY" 
        subtitle="Exploring the mountains and building leaders since the inception of CARC at COMSATS." 
      />
      <AboutSection />
      
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold tracking-tighter">History & Heritage</h2>
            <p className="text-foreground/70 leading-relaxed">
              Founded by a group of passionate hikers, the COMSATS Adventurer & Rovering Club has grown 
              from a small hiking group into one of the most prestigious societies in the university. 
              Our roots are in the Margalla Hills, but our reach extends to the highest peaks of Pakistan.
            </p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-heading font-bold tracking-tighter">Rovering Philosophy</h2>
            <p className="text-foreground/70 leading-relaxed">
              Rovering is about more than just outdoors; it's about service, brotherhood, and 
              leadership. We follow the core principles of scouting, adapted for the modern student. 
              Our members learn to be resilient, resourceful, and responsible citizens.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

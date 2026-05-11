import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Gallery as GallerySection } from "@/sections/Gallery";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="VISUALS" 
        subtitle="A journey through the lens. Explore our memories from the wild." 
      />
      <GallerySection />
      
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/40 italic">More albums loading...</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

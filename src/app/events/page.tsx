import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Events as EventsSection } from "@/sections/Events";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <PageHeader 
        title="CALENDAR" 
        subtitle="Stay updated with our latest expeditions, workshops, and gatherings." 
      />
      
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="upcoming" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-secondary/50 rounded-full p-1 h-14 px-2">
                <TabsTrigger value="upcoming" className="rounded-full px-8 h-12 font-bold data-[state=active]:bg-primary">Upcoming</TabsTrigger>
                <TabsTrigger value="past" className="rounded-full px-8 h-12 font-bold data-[state=active]:bg-primary">Past Events</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="upcoming">
              <EventsSection />
            </TabsContent>
            
            <TabsContent value="past">
              <div className="text-center py-20 opacity-40 italic">
                Past events archive coming soon...
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}

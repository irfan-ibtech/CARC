import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { Events } from "@/sections/Events";
import { Team } from "@/sections/Team";
import { Gallery } from "@/sections/Gallery";
import { Testimonials } from "@/sections/Testimonials";
import { Stats } from "@/sections/Stats";
import { Join } from "@/sections/Join";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Achievements />
      <Events />
      <Team />
      <Gallery />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

import { ScrollArea } from "@/components/ui/scroll-area";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Hero } from "@/components/Home/Hero";
import { AboutMe } from "@/components/Home/AboutMe";
import { Services } from "@/components/Home/Services";
import { Projects } from "@/components/Home/Projects";
import { ContactCTA } from "@/components/Home/ContactCTA";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ScrollArea className="flex-grow">
        <Header />
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <TestimonialCarousel />
        <ContactCTA />
        <Footer />
      </ScrollArea>
    </div>
  );
}

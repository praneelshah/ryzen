import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyRyzenTech } from "@/components/WhyRyzenTech";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>
      
      {/* About Section */}
      <div id="about">
        <About />
      </div>
      
      {/* Portfolio Section */}
      <div id="portfolio">
        <HeroParallaxDemo />
      </div>
      
      {/* Services Section */}
      <div id="services">
        <Services />
      </div>
      
      {/* Why Ryzen Tech */}
      <div id="why-us">
        <WhyRyzenTech />
      </div>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Index;

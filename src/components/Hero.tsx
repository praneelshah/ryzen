import { SplineScene } from "@/components/ui/splite";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-gradient-hero pt-24 sm:pt-28 md:pt-0">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h1 className="text-[6rem] sm:text-[8rem] md:text-[14rem] lg:text-[20rem] xl:text-[22rem] font-black text-foreground/5 select-none tracking-widest">
          RYZEN
        </h1>
      </div>

      {/* 3D Model Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              We Build Smart Tech That Actually{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Scales Businesses.
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Custom CRM systems, AI automation, modern apps, and RFID-powered solutions — built for speed, reliability, and real-world use.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Get a Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link to="/portfolio">
                  <Play className="mr-2 h-4 w-4" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Model */}
          <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] animate-scale-in overflow-visible">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Gradient Overlay at bottom - reduced height */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

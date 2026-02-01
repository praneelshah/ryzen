import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section className="w-full py-20 lg:py-40 bg-black">
      <div className="container mx-auto">
        <div className="grid border border-border rounded-lg p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">About Us</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  About{" "}
                  <span className="bg-gradient-text bg-clip-text text-transparent">
                    RYZEN TECH
                  </span>
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Ryzen Tech is a technology-first company focused on building systems that solve real operational problems.
                </p>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left mt-4">
                  We work with startups and growing businesses to design CRMs, AI tools, apps, and automation systems that are practical, scalable, and production-ready.
                </p>
                <p className="text-xl font-semibold text-foreground mt-4">
                  If it runs a business — we can build it.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center space-y-1">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
            
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Business Logic First</p>
                  <p className="text-muted-foreground text-sm">
                    We start with understanding your operations, not just features.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Built for Real Users</p>
                  <p className="text-muted-foreground text-sm">
                    Systems designed for production floors, sales teams, and real workflows.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Beyond Delivery</p>
                  <p className="text-muted-foreground text-sm">
                    We stay involved and support you as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square flex items-center justify-center overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop" 
              alt="Modern office workspace with team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-5xl mx-auto">
        <Card className="p-8 md:p-12 text-center bg-card/50 backdrop-blur-sm border-border/50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your business goals. Get in touch with us today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 border-t border-border/50">
            <a 
              href="mailto:contact@ryzentech.in" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>contact@ryzentech.in</span>
            </a>
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}

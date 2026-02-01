import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function CTABlock() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Let's build something that{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              actually works.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Have a problem worth solving? Let's build the right solution together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-lg px-8" asChild>
              <Link to="/contact">
                <MessageSquare className="mr-2 w-5 h-5" />
                Talk to Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

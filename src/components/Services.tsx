import { motion } from "framer-motion";
import { Database, Bot, Smartphone, Radio, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Database,
    title: "Custom CRM Development",
    description: "We design CRMs that fit your business — not the other way around. Automate leads, policies, claims, sales, and operations in one clean system.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Bot,
    title: "AI Automation & Assistants",
    description: "From smart chatbots to internal AI agents — we automate repetitive work so your team moves faster.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Smartphone,
    title: "Web & App Development",
    description: "High-performance websites and apps built with modern stacks. Fast, scalable, and conversion-focused.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Radio,
    title: "RFID & Hardware Solutions",
    description: "Real-world tech for factories, logistics, and mass production — RFID writing, locking, tracking, and automation done right.",
    color: "from-orange-500/20 to-amber-500/20"
  }
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-mono tracking-widest text-primary uppercase mb-4 block">
              🚀 Our Core Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              What We{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Actually Do
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just list services like a resume. We sell outcomes that transform your business.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

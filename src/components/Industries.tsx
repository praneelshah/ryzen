import { motion } from "framer-motion";
import { Shield, Factory, Truck, Rocket, Building2 } from "lucide-react";

const industries = [
  {
    icon: Shield,
    name: "Insurance & Financial Services",
    description: "Policy management, claims processing, and agent tracking systems."
  },
  {
    icon: Factory,
    name: "Manufacturing & RFID Production",
    description: "Production line automation, inventory tracking, and quality control."
  },
  {
    icon: Truck,
    name: "Logistics & Operations",
    description: "Fleet management, route optimization, and real-time tracking."
  },
  {
    icon: Rocket,
    name: "Startups & SaaS Products",
    description: "MVP development, scalable architecture, and rapid iteration."
  },
  {
    icon: Building2,
    name: "Internal Enterprise Systems",
    description: "Custom tools for HR, finance, operations, and workflow automation."
  }
];

export function Industries() {
  return (
    <section className="py-20 lg:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-mono tracking-widest text-primary uppercase mb-4 block">
              Industries
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Industries We{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Work With
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From startups to established enterprises, we've built solutions across diverse sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

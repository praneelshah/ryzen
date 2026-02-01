import { motion } from "framer-motion";
import { Check, Wrench, Factory, Code2, Users, Brain } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Custom-Built, Always",
    description: "We don't sell templates — everything is custom-built to fit your exact workflow."
  },
  {
    icon: Factory,
    title: "Production-Ready Systems",
    description: "Deep experience with real production systems, not demos or prototypes."
  },
  {
    icon: Code2,
    title: "Clean UI + Strong Backend",
    description: "Beautiful interfaces backed by robust architecture — no duct-tape code."
  },
  {
    icon: Users,
    title: "Founder-Level Involvement",
    description: "Direct access to decision-makers, not layers of agency bureaucracy."
  },
  {
    icon: Brain,
    title: "Operator Mindset",
    description: "We think like business owners, not just developers. We understand operations."
  }
];

export function WhyRyzenTech() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-mono tracking-widest text-primary uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Why Businesses Choose{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Ryzen Tech
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another agency. We build technology that works in the real world.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
              
              {/* Checkmark indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Check className="w-5 h-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
            "Ryzen Tech builds custom software, AI automation, and RFID-powered systems for businesses that want to scale without chaos."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

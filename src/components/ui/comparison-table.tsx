import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "./button";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: { name: string; included: boolean }[];
  highlighted?: boolean;
}

interface ComparisonTableProps {
  plans: Plan[];
}

export const ComparisonTable = ({ plans }: ComparisonTableProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative p-8 rounded-2xl border ${
            plan.highlighted
              ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
              : "border-border bg-card"
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
              Most Popular
            </div>
          )}
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
            <p className="text-muted-foreground text-sm">{plan.description}</p>
          </div>

          <div className="space-y-4 mb-8">
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {feature.included ? (
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                )}
                <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                  {feature.name}
                </span>
              </div>
            ))}
          </div>

          <Button 
            className="w-full" 
            variant={plan.highlighted ? "default" : "outline"}
          >
            Get Started
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

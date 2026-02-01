import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BentoItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

export const BentoGrid = ({ items }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <BentoCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

const BentoCard = ({ item, index }: { item: BentoItem; index: number }) => {
  const Icon = item.icon;
  
  // Make first and fourth items span 2 columns on large screens
  const isLarge = index === 0 || index === 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-8 rounded-2xl border border-border bg-card overflow-hidden",
        "hover:border-primary/50 transition-all duration-500",
        "hover:shadow-xl hover:shadow-primary/5",
        isLarge && "lg:col-span-2",
        item.className
      )}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 blur-sm" />
      </div>

      <div className="relative z-10">
        {/* Icon with glow */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {item.description}
        </p>

        {/* Features list */}
        <div className="space-y-2">
          {item.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

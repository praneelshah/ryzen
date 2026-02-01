import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

export const AnimatedTimeline = ({ items }: AnimatedTimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="inline-block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
        >
          <span className="text-primary font-bold text-lg">{item.year}</span>
          <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-muted-foreground mt-2">{item.description}</p>
        </motion.div>
      </div>
      
      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
      />
      
      <div className="flex-1" />
    </motion.div>
  );
};

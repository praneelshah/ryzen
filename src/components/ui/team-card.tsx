import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export const TeamCard = ({ member, index }: TeamCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/10">
        {/* Image container */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Social icons - appear on hover */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            {[Linkedin, Twitter, Mail].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-primary/80 font-medium mt-1">{member.role}</p>
          <p className="text-muted-foreground text-sm mt-3 line-clamp-2">
            {member.bio}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        </div>
      </div>
    </motion.div>
  );
};

import { motion } from "framer-motion";
import { Badge } from "./badge";
import { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  variant?: "gradient" | "spotlight" | "particles" | "waves" | "image";
  bannerImage?: string;
}

export const PageHero = ({ badge, title, subtitle, children, variant = "gradient", bannerImage }: PageHeroProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      {variant === "gradient" && <GradientBackground />}
      {variant === "spotlight" && <SpotlightBackground />}
      {variant === "particles" && <ParticlesBackground />}
      {variant === "waves" && <WavesBackground />}
      {variant === "image" && bannerImage && <ImageBackground image={bannerImage} />}
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-primary/50 bg-primary/5 backdrop-blur-sm">
              {badge}
            </Badge>
          </motion.div>
        )}
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className={`bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient ${
            variant === "image" 
              ? "bg-gradient-to-r from-white via-white to-white/80" 
              : "bg-gradient-to-r from-primary via-foreground to-primary"
          }`}>
            {title}
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 ${
            variant === "image" ? "text-white/90" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </motion.p>
        
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Banner Image Preview (for non-image variants) */}
      {variant !== "image" && bannerImage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4"
        >
          <div className="relative rounded-t-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
            <img 
              src={bannerImage} 
              alt="Banner" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const ImageBackground = ({ image }: { image: string }) => (
  <>
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt="Banner background" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    <div className="absolute inset-0 bg-primary/10" />
  </>
);

const GradientBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px] animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[128px] animate-pulse delay-1000" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
  </>
);

const SpotlightBackground = () => (
  <>
    <div className="absolute inset-0 bg-background" />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent blur-3xl opacity-50" />
    </motion.div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
  </>
);

const ParticlesBackground = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-primary/30 rounded-full"
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
          y: Math.random() * 600,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          y: [null, Math.random() * -200],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
  </>
);

const WavesBackground = () => (
  <>
    <div className="absolute inset-0 bg-background" />
    <svg
      className="absolute bottom-0 left-0 w-full h-64 opacity-30"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ d: "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
        animate={{
          d: [
            "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,144C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,192L48,176C96,160,192,128,288,138.7C384,149,480,203,576,213.3C672,224,768,192,864,176C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        fill="hsl(var(--primary))"
        fillOpacity="0.3"
      />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
  </>
);

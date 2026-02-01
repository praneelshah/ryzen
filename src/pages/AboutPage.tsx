import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/page-hero";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Wrench, Factory, Code2, Brain, Check, Zap, Globe, Shield, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const howWeWork = [
    {
      step: "01",
      title: "Understand",
      description: "We start with business logic, not features. Deep dive into your operations."
    },
    {
      step: "02", 
      title: "Design",
      description: "Systems that are easy to use and easy to scale. No over-engineering."
    },
    {
      step: "03",
      title: "Build",
      description: "For real users, not demos. Production-ready from day one."
    },
    {
      step: "04",
      title: "Support",
      description: "We stay involved beyond delivery. Your growth is our success."
    }
  ];

  const whatSetsUsApart = [
    {
      icon: Wrench,
      title: "Custom-Built, Always",
      description: "No templates. No cookie-cutter solutions. Everything is tailored to your workflow.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Factory,
      title: "Deep Technical Capability",
      description: "From AI agents to RFID production systems — we handle complex, real-world implementations.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Clean UI, Strong Backend",
      description: "We balance user experience with robust architecture.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Brain,
      title: "Operator Mindset",
      description: "We think like business owners, not just developers.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const industries = [
    { name: "Insurance & Financial Services", icon: Shield },
    { name: "Manufacturing & RFID Production", icon: Factory },
    { name: "Logistics & Operations", icon: Globe },
    { name: "Startups & SaaS Products", icon: Zap },
    { name: "Internal Enterprise Systems", icon: Sparkles }
  ];

  const stats = [
    { end: 10, suffix: "+", label: "Years Experience" },
    { end: 500, suffix: "+", label: "Projects Delivered" },
    { end: 200, suffix: "+", label: "Happy Clients" },
    { end: 50, suffix: "+", label: "Team Members" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Image */}
      <PageHero
        badge="About Us"
        title="Engineering Solutions for Modern Businesses"
        subtitle="From custom software, Websites, Apps, CRM to AI automation, we build systems that scale with you."
        variant="image"
        bannerImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      {/* Who We Are - Bento Style */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Main Card */}
            <div className="lg:col-span-3 p-8 md:p-12 rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Technology should simplify operations,{" "}
                  <span className="text-primary">not complicate them.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Ryzen Tech was founded with a simple belief — we work with startups and growing businesses to design and develop custom CRMs, AI-driven tools, modern web & mobile applications, and RFID-powered automation systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our focus is not just on building software, but on creating systems that work in real environments — production floors, sales teams, logistics operations, and customer-facing workflows.
                </p>
              </div>
            </div>

            {/* Side Cards */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 p-8 rounded-3xl border border-border bg-card relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-2">Mission</h3>
                  <p className="text-muted-foreground">Build technology that helps businesses move faster and operate smarter.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 p-8 rounded-3xl border border-border bg-card relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-primary/20 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-2">Vision</h3>
                  <p className="text-muted-foreground">Scale businesses without chaos through intelligent automation.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work - Timeline Style */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Process</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">How We Work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 hover:bg-card/80 transition-all duration-300 h-full relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 text-8xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <span className="text-xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Feature Cards */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">What Sets Us Apart</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {whatSetsUsApart.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-8 md:p-10 rounded-3xl border border-border bg-card hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10 flex gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-lg">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries - Modern Pills */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4">Industries We Serve</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center gap-3 px-6 py-4 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{industry.name}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats - Large Typography */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full Width */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] p-12 md:p-20 text-center overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-primary/10 border border-primary/20 rounded-[3rem]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/30 blur-[120px] rounded-full" />
            
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Have a problem worth solving?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
              >
                Let's build the right solution together. No fluff, just results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="group text-lg px-10 py-7" asChild>
                  <Link to="/contact">
                    Talk to Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 py-7" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
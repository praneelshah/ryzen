import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, Smartphone, Database, Cpu, Blocks, Bot, ArrowRight, 
  Lightbulb, Zap, Users, FileText, Workflow, CheckCircle2, 
  BarChart3, Clock, Shield, Sparkles, ChevronRight,
  Mail, Calendar, ListTodo, Bell, Settings, Check
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Real-Time Intelligence",
      description: "Access accurate, real-time data to drive smarter decisions"
    },
    {
      icon: BarChart3,
      title: "Measurable Impact",
      description: "Track performance, uncover insights, and achieve data-backed growth"
    },
    {
      icon: Blocks,
      title: "Seamless Integration",
      description: "Connect tools, teams, and workflows with intelligent automation"
    }
  ];

  const coreServices = [
    {
      icon: Database,
      title: "Custom CRM Development",
      description: "We design CRMs that fit your business — not the other way around. Automate leads, policies, claims, sales, and operations in one clean system.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      features: ["Sales Pipeline Management", "Lead Scoring & Nurturing", "Customer Support Ticketing", "Advanced Analytics Dashboard", "Email Integration"]
    },
    {
      icon: Bot,
      title: "AI Automation & Assistants",
      description: "From smart chatbots to internal AI agents — we automate repetitive work so your team moves faster.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      features: ["Custom AI Agents", "Predictive Analytics", "Natural Language Processing", "Voice Assistants", "Workflow Automation"]
    },
    {
      icon: Code,
      title: "Web & App Development",
      description: "High-performance websites and apps built with modern stacks. Fast, scalable, and conversion-focused.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      features: ["React & Next.js Development", "Custom API Development", "E-commerce Platforms", "Progressive Web Apps", "SEO Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Launch your mobile presence with native and cross-platform apps that users love. Seamless experiences on iOS and Android with powerful backend integration.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      features: ["iOS & Android Native Apps", "React Native & Flutter", "Offline-First Architecture", "Push Notifications", "App Store Optimization"]
    },
    {
      icon: Cpu,
      title: "RFID & Hardware Solutions",
      description: "Real-world tech for factories, logistics, and mass production — RFID writing, locking, tracking, and automation done right.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      features: ["Asset Tracking Solutions", "Inventory Management", "Production Line Automation", "Supply Chain Visibility", "Custom Hardware Integration"]
    },
    {
      icon: Blocks,
      title: "Enterprise Integration",
      description: "Connect your existing tools and systems into a unified ecosystem. Eliminate data silos, automate workflows, and enable seamless communication across platforms.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      features: ["API Development & Integration", "Data Migration Services", "Legacy System Modernization", "Cloud Integration", "Real-time Data Sync"]
    }
  ];

  const aiServices = [
    {
      icon: Lightbulb,
      title: "AI Strategy & Consulting",
      description: "Get a clear roadmap on how AI can drive growth and efficiency for your business.",
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Design and deploy AI agents built specifically to solve your unique business challenges.",
    },
    {
      icon: Database,
      title: "CRM AI Automation",
      description: "Automate customer interactions and follow-ups to keep relationships strong.",
    },
    {
      icon: Workflow,
      title: "AI Process Automation",
      description: "Transform repetitive workflows into smooth, automated systems that save time.",
    },
    {
      icon: FileText,
      title: "AI Content Creation",
      description: "Generate high-quality content at scale with AI-powered writing tools.",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description: "Build tailored AI systems that align with your business goals and challenges.",
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover & Analyze",
      description: "We audit your existing workflows, tools, and data to uncover inefficiencies and automation opportunities."
    },
    {
      step: "02",
      title: "Design & Plan",
      description: "We create a customized automation strategy aligned with your business goals and technical requirements."
    },
    {
      step: "03",
      title: "Build & Implement",
      description: "Our team develops and deploys your automation solutions with thorough testing and optimization."
    },
    {
      step: "04",
      title: "Support & Scale",
      description: "We provide ongoing support and help you scale your automation as your business grows."
    }
  ];

  const tasks = [
    { icon: Mail, label: "Payment reminder", status: "sent to clients", color: "text-green-400" },
    { icon: ListTodo, label: "Employee Tracking", status: "2 days ago", color: "text-blue-400" },
    { icon: Calendar, label: "Social media post", status: "Scheduled", color: "text-purple-400" },
    { icon: Bell, label: "Lead list", status: "70% prepared", color: "text-yellow-400" },
    { icon: Settings, label: "Payroll management", status: "Due on 2nd", color: "text-orange-400" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Dark gradient with glow */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            We Build Smart Tech That{" "}
            <span className="text-muted-foreground">Actually</span>{" "}
            <br />
            <span className="italic text-primary">Scales Businesses.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Custom CRM systems, AI automation, modern apps, and RFID-powered solutions — built for speed, reliability, and real-world use.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button size="lg" className="group px-8" asChild>
              <Link to="/contact">
                Get a Free Strategy Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Everything you need to automate, optimize, and scale
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-md">
              Comprehensive technology solutions to power your business
            </p>
          </div>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`group grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-3xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="p-3 bg-background/90 backdrop-blur-sm rounded-xl">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10">
                    {service.title}
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="group/btn" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-secondary/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Simple & Smart Process
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section with Interactive UI */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">AI Services</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Smarter Services,<br />Built with AI
            </h2>
            <p className="text-muted-foreground max-w-md">
              Everything you need to automate operations and boost productivity
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Left - Task Automation Demo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-lg">Automate repetitive tasks</h3>
                  <p className="text-sm text-muted-foreground">Real-time task management</p>
                </div>
                <Badge variant="secondary">All Tasks</Badge>
              </div>
              
              <div className="space-y-3">
                {tasks.map((task, index) => (
                  <motion.div
                    key={task.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 bg-secondary/50 rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer group"
                  >
                    <div className={`p-2 rounded-lg bg-background ${task.color}`}>
                      <task.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{task.label}</p>
                      <p className="text-xs text-muted-foreground">{task.status}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 flex gap-2">
                <Badge variant="outline" className="bg-primary/10 border-primary/30">Internal Task Bots</Badge>
                <Badge variant="outline" className="bg-secondary">100+ Automations</Badge>
              </div>
            </motion.div>

            {/* Right - Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aiServices.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-secondary/30 border border-border/50 rounded-2xl p-6 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-2 bg-background rounded-lg w-fit mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional AI Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aiServices.slice(4).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-4 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary/5 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-3xl p-12 md:p-16 border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business. Contact us today for a free consultation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="group px-8" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star, Gem, Shield, BarChart3, Package, Receipt, TrendingUp, Users, FileText, Calculator, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const products = [
    {
      name: "Diamond Tech CRM",
      tagline: "Complete Diamond Business Management",
      description: "An all-in-one CRM solution designed specifically for the diamond and jewelry industry. Manage your entire inventory, generate professional bills, track profit/loss, and streamline your diamond business operations.",
      featured: true,
      features: [
        "Diamond inventory management",
        "Barcode & QR code tracking",
        "Professional invoice generation",
        "Profit & loss analytics",
        "Customer relationship management",
        "Stock alerts & reorder points",
        "Multi-branch support",
        "Certification tracking (GIA, IGI)"
      ],
      stats: [
        { label: "Diamond Dealers", value: "500+" },
        { label: "Inventory Accuracy", value: "99.9%" },
        { label: "Time Saved", value: "60%" }
      ],
      icon: Gem,
      highlights: [
        { icon: Package, text: "Inventory Management" },
        { icon: Receipt, text: "Billing System" },
        { icon: TrendingUp, text: "Profit/Loss Tracking" },
        { icon: BarChart3, text: "Business Analytics" }
      ]
    },
    {
      name: "InsureTech CRM",
      tagline: "Insurance Agency Management System",
      description: "Comprehensive CRM built for insurance agencies. Manage agents, track policies, handle claims, monitor commissions, and analyze profit/loss across your entire insurance business.",
      featured: false,
      features: [
        "Agent performance tracking",
        "Policy management system",
        "Claims processing workflow",
        "Commission calculation",
        "Renewal reminders",
        "Profit & loss reporting",
        "Multi-policy support",
        "Compliance management"
      ],
      stats: [
        { label: "Insurance Agencies", value: "300+" },
        { label: "Claims Processed", value: "1M+" },
        { label: "Agent Efficiency", value: "+80%" }
      ],
      icon: Shield,
      highlights: [
        { icon: Users, text: "Agent Management" },
        { icon: FileText, text: "Claims Handling" },
        { icon: Calculator, text: "Commission Tracking" },
        { icon: TrendingUp, text: "Profit/Loss Analysis" }
      ]
    }
  ];

  const addOns = [
    {
      icon: Calendar,
      name: "Scheduling Module",
      description: "Advanced appointment and meeting scheduling with calendar sync."
    },
    {
      icon: FileText,
      name: "Document Management",
      description: "Store, organize, and share documents with version control."
    },
    {
      icon: Shield,
      name: "Advanced Security",
      description: "SSO, 2FA, audit logs, and enterprise-grade security features."
    },
    {
      icon: Users,
      name: "Team Collaboration",
      description: "Advanced team features with roles, permissions, and shared views."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PageHero
        badge="Our Products"
        title="CRM Solutions"
        subtitle="Industry-specific CRM systems designed to streamline your business operations, manage inventory, track profits, and grow your customer relationships."
        variant="image"
        bannerImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      />

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Products Section */}
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-foreground" />
              <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Our Products</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Industry-specific<br />CRM platforms
              </h2>
              <p className="text-muted-foreground max-w-md">
                Choose the solution that fits your industry. All products include free onboarding, training, and ongoing support.
              </p>
            </div>

            <div className="space-y-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-3xl border overflow-hidden ${
                    product.featured 
                      ? "bg-gradient-to-br from-primary/10 via-card to-secondary/10 border-primary/30" 
                      : "bg-card border-border"
                  }`}
                >
                  {product.featured && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  
                  <div className="p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Column - Product Info */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl ${product.featured ? "bg-primary/20" : "bg-secondary"}`}>
                            <product.icon className={`w-6 h-6 ${product.featured ? "text-primary" : "text-foreground"}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold">{product.name}</h3>
                            <p className="text-muted-foreground">{product.tagline}</p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 text-lg">{product.description}</p>
                        
                        {/* Key Highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {product.highlights.map((highlight) => (
                            <div key={highlight.text} className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
                              <highlight.icon className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">{highlight.text}</span>
                            </div>
                          ))}
                        </div>
                        

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {product.stats.map((stat) => (
                            <div key={stat.label} className="text-center p-4 bg-secondary/50 rounded-xl">
                              <div className="text-xl font-bold">{stat.value}</div>
                              <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-4">
                          <Button size="lg" className={product.featured ? "" : "variant-outline"} asChild>
                            <Link to="/contact">
                              Get Started
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                          <Button size="lg" variant="ghost">
                            View Demo
                          </Button>
                        </div>
                      </div>

                      {/* Right Column - Features */}
                      <div className="bg-secondary/30 rounded-2xl p-6 md:p-8">
                        <h4 className="font-semibold mb-4 flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          What's included
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Add-ons Section */}
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-foreground" />
              <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Add-ons</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Extend your CRM
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-12">
              Add powerful modules to customize your CRM experience and meet your specific business needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 bg-secondary rounded-xl w-fit mb-4">
                    <addon.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{addon.name}</h3>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-secondary/50 rounded-3xl p-12 md:p-16 border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which product is right for you?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team will help you find the perfect solution for your business. Get a free consultation and personalized demo.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="group" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;

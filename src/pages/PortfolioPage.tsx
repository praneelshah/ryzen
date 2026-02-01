import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Card3D } from "@/components/ui/3d-card";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { ExternalLink, ArrowRight, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

// Portfolio images
import portfolioAI from "@/assets/portfolio-ai.png";
import portfolioCRM from "@/assets/portfolio-crm-new.png";
import portfolioModeling from "@/assets/portfolio-modeling.png";
import portfolioTravel from "@/assets/portfolio-travel.png";
import portfolioWedding from "@/assets/portfolio-wedding.png";
import portfolioWorldwideTechno from "@/assets/portfolio-worldwidetechno.png";
import portfolioSocialMedia from "@/assets/portfolio-social-media.png";
import portfolioDiamond from "@/assets/portfolio-diamond.png";

const PortfolioPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projects = [
    {
      title: "Insurance CRM Platform",
      category: "CRM Solution",
      description: "Built a full policy, claims, endorsements, and agent management system used in real operations. Designed for scale, security, and role-based access.",
      image: portfolioCRM,
      tags: ["React", "Node.js", "PostgreSQL", "Role-Based Access"],
      results: ["40% faster claims", "Real-time tracking"],
      link: "#"
    },
    {
      title: "AI Receptionist / Voice Assistant",
      category: "AI & Automation",
      description: "Built an AI-powered voice agent for order handling and customer support. Natural language processing with multi-language support.",
      image: portfolioAI,
      tags: ["AI", "Voice", "NLP", "Automation"],
      results: ["24/7 support", "70% query resolution"],
      link: "#"
    },
    {
      title: "Worldwide Techno",
      category: "Technology Company",
      description: "Corporate website for a leading technology solutions provider showcasing services, products, and company achievements.",
      image: portfolioWorldwideTechno,
      tags: ["React", "Corporate", "SEO", "Responsive"],
      results: ["Professional presence", "Lead generation"],
      link: "https://worldwidetechno.org/"
    },
    {
      title: "Core Modeling India",
      category: "Modeling Agency",
      description: "A stunning portfolio website for India's premier modeling agency featuring model galleries, booking system, and event showcases.",
      image: portfolioModeling,
      tags: ["React", "Next.js", "Framer Motion", "CMS"],
      results: ["200% traffic increase", "50+ model signups"],
      link: "https://coremodelingindia.com"
    },
    {
      title: "Quality Travels",
      category: "Travel Agency",
      description: "Comprehensive travel booking platform with destination guides, package customization, and real-time availability for memorable journeys.",
      image: portfolioTravel,
      tags: ["React", "API Integration", "Payment Gateway", "Maps"],
      results: ["500+ bookings/month", "45% conversion rate"],
      link: "https://qualitytravels.in/"
    },
    {
      title: "The KG Wedding",
      category: "Wedding Services",
      description: "Elegant wedding planning and services website featuring portfolio galleries, vendor management, and event coordination.",
      image: portfolioWedding,
      tags: ["React", "Gallery", "Booking", "CMS"],
      results: ["Premium experience", "100+ weddings"],
      link: "https://thekgwedding.com"
    },
    {
      title: "Precision Smile Orthodontics",
      category: "Dental Clinic",
      description: "Modern orthodontics clinic website with online appointment booking, treatment information, and patient portal integration.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      tags: ["React", "Node.js", "Booking System", "Patient Portal"],
      results: ["300% more bookings", "4.9 star rating"],
      link: "https://precisionsmileorthodontics.com/"
    },
    {
      title: "Interception",
      category: "Clothing Brand",
      description: "E-commerce website for a trendy clothing brand with modern design, product catalog, and seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      tags: ["E-commerce", "React", "Fashion", "Payment Gateway"],
      results: ["Modern storefront", "Increased sales"],
      link: "#"
    },
    {
      title: "Taahi Budget Bazaar",
      category: "E-commerce",
      description: "Budget-friendly online marketplace with extensive product categories, deals section, and user-friendly shopping interface.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      tags: ["React", "E-commerce", "Payment", "Inventory"],
      results: ["1000+ products", "High conversion"],
      link: "#"
    },
    {
      title: "Social Media Agency",
      category: "Digital Agency",
      description: "Creative digital marketing agency website showcasing social media management, content creation, and branding services.",
      image: portfolioSocialMedia,
      tags: ["React", "Marketing", "Creative", "Portfolio"],
      results: ["Lead generation", "Brand visibility"],
      link: "#"
    },
    {
      title: "Diamond Industry",
      category: "Luxury & Jewelry",
      description: "Elegant website for a diamond and jewelry business featuring product showcases, certification details, and inquiry system.",
      image: portfolioDiamond,
      tags: ["React", "Luxury", "Catalog", "Inquiry System"],
      results: ["Premium presence", "Client inquiries"],
      link: "#"
    }
  ];

  const lightboxImages = projects.map(p => ({
    src: p.image,
    alt: p.title,
    title: p.title
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PageHero
        badge="Portfolio"
        title="Our Work"
        subtitle="Explore our successful projects and see how we've helped businesses transform through technology."
        variant="image"
        bannerImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      <div className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Projects Grid with 3D Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D className="group h-full">
                  <div className="h-full rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Hover overlay */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => openLightbox(index)}
                          className="rounded-full"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="flex gap-4 mb-4 pt-4 border-t border-border">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-xs">
                            <span className="text-primary font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group/btn">
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl border border-border bg-card"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Industries Served" },
              { value: "15+", label: "Countries" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-3xl p-12 border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch to discuss your project requirements.
            </p>
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
};

export default PortfolioPage;

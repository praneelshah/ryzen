import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", email: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <PageHero
        badge="Contact Us"
        title="Get In Touch"
        subtitle="Ready to transform your business with innovative technology solutions? Let's start a conversation."
        variant="image"
        bannerImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />
      
      {/* Main Contact Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between"
            >
              {/* Badge */}
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-[2px] bg-primary" />
                  <span className="text-sm font-mono tracking-widest text-primary uppercase">
                    Work With Us
                  </span>
                </div>
                
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                  The Future Is Automated: So, Let's Build Yours
                </h1>
                
                {/* Subtext */}
                <p className="text-lg text-muted-foreground max-w-lg">
                  We'd love to hear from you! Whether you're curious about AI automation, want to discuss a project, or just have a question, our team is here to help.
                </p>
              </div>
              
              {/* Book a Call Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 p-6 bg-card border border-border rounded-2xl flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">Prefer a call?</h3>
                  <p className="text-muted-foreground">Book 30-mins intro call with us</p>
                </div>
                <Button variant="outline" className="group gap-2 rounded-full px-6">
                  <Phone className="w-4 h-4" />
                  Book a call
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-3xl p-8 md:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50"
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50"
                  />
                </div>
                
                {/* Budget */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    Budget
                  </label>
                  <Select 
                    value={formData.budget} 
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-lg focus:ring-0 focus:border-primary h-auto [&>span]:text-muted-foreground/50 [&>span]:data-[placeholder]:text-muted-foreground/50">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k-5k">$1k - $5k</SelectItem>
                      <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                      <SelectItem value="10k-20k">$10k - $20k</SelectItem>
                      <SelectItem value="20k+">$20k+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Message */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    Message
                  </label>
                  <Textarea
                    placeholder="Describe your project"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-primary resize-none placeholder:text-muted-foreground/50"
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group h-14 text-base font-medium rounded-xl mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 md:gap-16"
          >
            {/* Office */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono tracking-widest text-muted-foreground">/</span>
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                  Office
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg font-medium">
                  Mumbai, Maharashtra<br />
                  India 400001
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono tracking-widest text-muted-foreground">/</span>
                <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                  Operating Hours
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg font-medium">
                  Monday - Friday,<br />
                  9am - 6pm
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
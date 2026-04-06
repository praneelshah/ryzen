import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactType: "email",
    contactValue: "",
    businessChallenge: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree endpoint - Replace with your actual Formspree form endpoint
      const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mlgooywz';

      // Prepare form data
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('contact_type', formData.contactType);
      formDataToSend.append('contact_value', formData.contactValue);
      formDataToSend.append('business_challenge', formData.businessChallenge);
      formDataToSend.append('_replyto', formData.contactType === 'email' ? formData.contactValue : '');
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.name}`);

      // Send form data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll get back to you as soon as possible.",
        });

        // Reset form
        setFormData({ name: "", contactType: "email", contactValue: "", businessChallenge: "" });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly at praneelshah.india@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    Name
                  </label>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50"
                  />
                </div>
                
                {/* Contact Type Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactType"
                        value="email"
                        checked={formData.contactType === "email"}
                        onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactType"
                        value="whatsapp"
                        checked={formData.contactType === "whatsapp"}
                        onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </label>
                  </div>
                </div>

                {/* Email or WhatsApp Input */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    {formData.contactType === "email" ? "Email Address" : "WhatsApp Number"}
                  </label>
                  <Input
                    placeholder={formData.contactType === "email" ? "Enter your email address" : "Enter your WhatsApp number"}
                    type={formData.contactType === "email" ? "email" : "tel"}
                    value={formData.contactValue}
                    onChange={(e) => setFormData({ ...formData, contactValue: e.target.value })}
                    required
                    className="bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50"
                  />
                </div>
                
                {/* Business Challenge */}
                <div className="space-y-3">
                  <label className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                    What's the one thing in your business you'd most want to fix or automate?
                  </label>
                  <Textarea
                    placeholder="Tell us about your challenge"
                    rows={4}
                    value={formData.businessChallenge}
                    onChange={(e) => setFormData({ ...formData, businessChallenge: e.target.value })}
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
                  {isSubmitting ? "Sending..." : "Start the conversation"}
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
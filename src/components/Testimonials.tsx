import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Quality Travels",
    role: "Travel Industry",
    website: "qualitytravels.in",
    image: "https://github.com/shadcn.png",
    rating: 5,
    text: "Ryzen Technologies has been a game-changer for our business. Their seamless development of our travel platform has significantly improved our customer experience and operational efficiency."
  },
  {
    name: "Tech Innovator",
    role: "Enterprise Client",
    website: "innovator.com",
    image: "https://github.com/shadcn.png",
    rating: 5,
    text: "You are one step away from building your online presence! The team at Ryzen Tech delivered beyond our expectations with their innovative solutions."
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Empowering businesses with innovative technology solutions that drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-scale bg-card/50 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <a 
                      href={`https://${testimonial.website}`} 
                      className="text-sm text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {testimonial.website}
                    </a>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

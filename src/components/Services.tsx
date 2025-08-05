import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Home, 
  Droplets, 
  Zap, 
  Trash2, 
  Sun, 
  Building2, 
  Wrench,
  Shield,
  Leaf
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Window Cleaning",
      description: "Professional window cleaning for crystal-clear views. Residential and commercial buildings.",
      features: ["Streak-free cleaning", "Interior & exterior", "Screen cleaning", "Frame wiping"],
      startingPrice: "$19"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Roof Cleaning & Treatment",
      description: "Extend your roof's life with thorough cleaning and protective treatments.",
      features: ["Moss removal", "Algae treatment", "Protective coatings", "Gutter integration"],
      startingPrice: "$99"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Gutter Cleaning",
      description: "Keep your gutters flowing freely to prevent water damage and maintain drainage.",
      features: ["Debris removal", "Downspout cleaning", "Flow testing", "Minor repairs"],
      startingPrice: "$49"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Pressure Washing",
      description: "Revitalize exterior surfaces with powerful and effective pressure washing.",
      features: ["Driveways", "Walkways", "Siding", "Decks & patios"],
      startingPrice: "$99"
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Bin Cleaning & Garbage Removal",
      description: "Keep your environment fresh with thorough bin cleaning and garbage removal.",
      features: ["Sanitization", "Odor elimination", "Regular service", "Eco-friendly products"],
      startingPrice: "$20"
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Panel Cleaning",
      description: "Maintain your renewable energy efficiency with professional solar panel cleaning.",
      features: ["Efficiency restoration", "Safe cleaning methods", "Regular maintenance", "Performance monitoring"],
      startingPrice: "$99"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Services",
      description: "Comprehensive exterior cleaning solutions for businesses and commercial properties.",
      features: ["Scheduled maintenance", "Storefront cleaning", "Parking lot washing", "Building maintenance"],
      startingPrice: "Quote"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Property Maintenance",
      description: "General exterior maintenance services to keep your property in top condition.",
      features: ["Seasonal cleanups", "Minor repairs", "Preventive maintenance", "Emergency services"],
      startingPrice: "Quote"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Complete Exterior Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            From windows to roofs, gutters to solar panels - we provide comprehensive exterior cleaning solutions for residential and commercial properties.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-secondary" />
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card p-6 h-full flex flex-col animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-primary">{service.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {service.startingPrice === "Quote" ? "Custom" : `From ${service.startingPrice}`}
                  </span>
                  {service.startingPrice !== "Quote" && (
                    <span className="text-sm text-muted-foreground">Starting price</span>
                  )}
                </div>
                <Button variant="outline" className="w-full" onClick={scrollToContact}>
                  Get Quote
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-accent rounded-2xl p-8 text-center shadow-service">
          <h3 className="text-2xl font-bold text-accent-foreground mb-4">
            Super Heroes Discount
          </h3>
          <p className="text-lg text-accent-foreground/90 mb-6">
            Special pricing for our Men and Women in Uniform and First Responders
          </p>
          <Button variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" onClick={scrollToContact}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
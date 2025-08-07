import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Phone } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      name: "Window Cleaning",
      price: "$19",
      description: "Professional window cleaning service",
      features: [
        "Interior & exterior cleaning",
        "Screen cleaning included",
        "Frame and sill wiping",
        "Streak-free guarantee"
      ],
      popular: false
    },
    {
      name: "Gutter Cleaning",
      price: "$49",
      description: "Complete gutter cleaning and maintenance",
      features: [
        "Full debris removal",
        "Downspout cleaning",
        "Flow testing",
        "Minor repair assessment"
      ],
      popular: true
    },
    {
      name: "Pressure Washing",
      price: "$99",
      description: "Professional pressure washing service",
      features: [
        "Driveways & walkways",
        "Siding cleaning",
        "Deck & patio cleaning",
        "Eco-friendly detergents"
      ],
      popular: false
    },
    {
      name: "Roof Cleaning",
      price: "$99",
      description: "Comprehensive roof cleaning and treatment",
      features: [
        "Moss & algae removal",
        "Protective treatment",
        "Safety equipment included",
        "Debris removal"
      ],
      popular: false
    },
    {
      name: "Bin Cleaning",
      price: "$20",
      description: "Sanitization and cleaning service",
      features: [
        "High-pressure cleaning",
        "Sanitization treatment",
        "Odor elimination",
        "Eco-friendly products"
      ],
      popular: false
    },
    {
      name: "Solar Panel Cleaning",
      price: "$99",
      description: "Maintain your solar panel efficiency",
      features: [
        "Gentle cleaning process",
        "Efficiency optimization",
        "Safety certified",
        "Performance monitoring"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 section-bg-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Transparent, Fair Pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Quality service at competitive rates. No hidden fees, no surprises - just professional results you can count on.
          </p>
          <div className="bg-gradient-accent rounded-lg p-4 inline-block">
            <p className="text-accent-foreground font-semibold">
              🎖️ Special discount available for Military & First Responders
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`service-card p-6 relative animate-slide-up ${
                service.popular ? 'ring-2 ring-secondary shadow-service' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{service.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">
                  {service.price}
                  <span className="text-lg text-muted-foreground font-normal">+</span>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={service.popular ? "hero" : "outline"} 
                className="w-full"
                onClick={scrollToContact}
              >
                Get Quote
              </Button>
            </Card>
          ))}
        </div>

        {/* Custom Services & Contact */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Custom Services */}
          <Card className="service-card p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Custom Services Available</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-secondary" />
                <span>Commercial property maintenance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-secondary" />
                <span>Property management services</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-secondary" />
                <span>Seasonal maintenance packages</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-secondary" />
                <span>Emergency cleaning services</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Need something specific? We offer customized cleaning solutions tailored to your unique requirements.
            </p>
            <Button variant="outline" className="w-full" onClick={scrollToContact}>
              Request Custom Quote
            </Button>
          </Card>

          {/* Quick Contact */}
          <Card className="bg-gradient-hero text-white p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6">
              Contact us today for a free, no-obligation quote. Our friendly team is ready to help you maintain your property's exterior.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="font-semibold">Call Now</p>
                  <p className="text-white/90">437-928-8945</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </Card>
        </div>

        {/* Pricing Notes */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p className="mb-2">* Prices shown are starting rates and may vary based on property size, condition, and specific requirements.</p>
          <p>All services include free estimates and satisfaction guarantee.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
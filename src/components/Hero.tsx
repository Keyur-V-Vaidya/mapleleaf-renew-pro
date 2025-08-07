import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, MapPin } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Professional cleaning services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-secondary/90"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Maple Leaf
                <span className="block text-accent font-light italic">Exterior</span>
                <span className="block">Cleaning</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl font-light leading-relaxed">
                Delivering top-quality residential and commercial exterior cleaning with professionalism and care. We make your property shine, inside and out.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-secondary" />
                <span className="text-lg">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-secondary" />
                <span className="text-lg">Eco-Friendly Cleaning Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-secondary" />
                <span className="text-lg">100% Satisfaction Guarantee</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-6 font-semibold shadow-elegant"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm font-medium bg-white/5"
                onClick={() => scrollToSection('services')}
              >
                View Services
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-white/70">Call Us Now</p>
                  <p className="text-lg font-semibold">437-928-8945</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-sm text-white/70">Service Area</p>
                  <p className="text-lg font-semibold">Calgary, AB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-in">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/90 text-sm lg:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">5+</div>
              <div className="text-white/90 text-sm lg:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">24h</div>
              <div className="text-white/90 text-sm lg:text-base">Response Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
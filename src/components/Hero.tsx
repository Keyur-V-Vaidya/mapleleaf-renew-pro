import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/maple-leaf-logo.webp';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Professional
                <span className="block text-secondary">Exterior</span>
                <span className="block">Cleaning</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
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
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
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

          {/* Logo Display */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full animate-pulse"></div>
              <div className="relative bg-white rounded-full p-8 shadow-hero animate-float">
                <img 
                  src={logo} 
                  alt="Maple Leaf Exterior Services" 
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
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
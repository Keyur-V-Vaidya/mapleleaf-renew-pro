import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';
import logo from '@/assets/maple-leaf-logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Window Cleaning',
    'Roof Cleaning & Treatment',
    'Gutter Cleaning',
    'Pressure Washing',
    'Bin Cleaning',
    'Solar Panel Cleaning'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Maple Leaf Exterior Services" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">Maple Leaf</h3>
                <p className="text-primary-foreground/70">Exterior Services</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80">
              Professional exterior cleaning services for residential and commercial properties in Calgary. Licensed, insured, and committed to excellence.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 text-secondary" />
                <div>
                  <p className="text-primary-foreground/60 text-sm">Call Us</p>
                  <a href="tel:437-928-8945" className="text-primary-foreground hover:text-secondary transition-colors">
                    437-928-8945
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 text-secondary" />
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email</p>
                  <a 
                    href="mailto:mapleleafexteriorservices@gmail.com" 
                    className="text-primary-foreground hover:text-secondary transition-colors text-sm break-all"
                  >
                    mapleleafexteriorservices@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <div>
                  <p className="text-primary-foreground/60 text-sm">Location</p>
                  <p className="text-primary-foreground text-sm">
                    740 Legacy Village RD, SE<br />
                    Calgary, AB T2X 6A6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Maple Leaf Exterior Services. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-foreground/60">Licensed & Insured</span>
              <span className="text-primary-foreground/60">•</span>
              <span className="text-secondary">Military & First Responder Discounts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
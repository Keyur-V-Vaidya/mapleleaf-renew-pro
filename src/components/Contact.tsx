import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Window Cleaning',
    'Roof Cleaning & Treatment',
    'Gutter Cleaning',
    'Pressure Washing',
    'Bin Cleaning',
    'Solar Panel Cleaning',
    'Commercial Services',
    'Custom Service Request'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Message Failed to Send",
        description: "Please try again or call us directly at 437-928-8945",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 section-bg-pattern">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to transform your property's exterior? Contact us for a personalized quote and discover the Maple Leaf difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="service-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Request Your Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell us about your project, property size, specific needs, or any questions you have..."
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-accent-light rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-primary">Quick Response Guarantee</p>
                  <p className="text-muted-foreground">We respond to all quote requests within 24 hours, usually much sooner!</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {/* Contact Details */}
            <Card className="service-card p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Phone</h4>
                    <p className="text-muted-foreground">Call us for immediate assistance</p>
                    <a href="tel:437-928-8945" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                      437-928-8945
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Email</h4>
                    <p className="text-muted-foreground">Send us your questions</p>
                    <a href="mailto:mapleleafexteriorservices@gmail.com" className="text-primary font-semibold hover:text-primary/80 transition-colors break-all">
                      mapleleafexteriorservices@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Service Area</h4>
                    <p className="text-muted-foreground">Calgary and surrounding areas</p>
                    <p className="text-primary font-semibold">
                      740 Legacy Village RD, SE<br />
                      Calgary, AB T2X 6A6
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-card-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Emergency services only
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-gradient-hero text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Maple Leaf?</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Licensed & Insured Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Eco-Friendly Cleaning Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Competitive & Transparent Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span>Emergency Services Available</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/90 text-sm">
                  Join hundreds of satisfied customers who trust us with their exterior cleaning needs.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
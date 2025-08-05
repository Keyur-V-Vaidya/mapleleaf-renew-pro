import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Star, 
  CheckCircle,
  Leaf,
  Heart
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Customers" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Star className="w-8 h-8" />, number: "4.9", label: "Average Rating" },
    { icon: <Award className="w-8 h-8" />, number: "100%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliability",
      description: "Dependable service you can count on, delivered on time, every time."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Environmentally responsible cleaning solutions that protect your property and the planet."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Professional results backed by our 100% satisfaction guarantee."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Choose Maple Leaf Exterior Services?
          </h2>
          <p className="text-xl text-muted-foreground">
            We're more than just a cleaning service - we're your trusted partner in maintaining and enhancing your property's exterior.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="service-card text-center p-6 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary">
              Professional Exterior Cleaning Experts in Calgary
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At Maple Leaf Exterior Services, we understand that your property is one of your most valuable investments. That's why we're dedicated to providing exceptional exterior cleaning services that not only enhance your property's appearance but also protect and preserve its value.
              </p>
              <p>
                Our team of licensed and insured professionals brings years of experience and the latest equipment to every job. We serve both residential and commercial properties throughout Calgary, delivering consistent, reliable results that exceed expectations.
              </p>
              <p>
                From window cleaning and pressure washing to roof treatment and solar panel maintenance, we offer comprehensive solutions tailored to your specific needs. Our commitment to using eco-friendly products ensures that we care for your property while protecting the environment.
              </p>
            </div>
            
            <div className="pt-4">
              <Button variant="hero" size="lg" onClick={scrollToContact}>
                Get Your Free Quote Today
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="service-card p-6 animate-slide-up" style={{animationDelay: `${(index + 4) * 0.1}s`}}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-primary">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-card-foreground">{value.title}</h4>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <Card className="bg-gradient-card border-0 shadow-service p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-primary">Our Commitment to Excellence</h3>
            <p className="text-lg text-muted-foreground">
              We stand behind every service with our satisfaction guarantee. If you're not completely happy with our work, we'll make it right - no questions asked.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <Shield className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Licensed & Insured</h4>
                <p className="text-sm text-muted-foreground">Full coverage for your peace of mind</p>
              </div>
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">On-Time Service</h4>
                <p className="text-sm text-muted-foreground">Reliable scheduling you can count on</p>
              </div>
              <div className="space-y-2">
                <Star className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Quality Results</h4>
                <p className="text-sm text-muted-foreground">Professional outcomes, every time</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
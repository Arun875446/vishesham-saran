import { Heart, Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Camera className="w-8 h-8 text-primary mr-2" />
              <h3 className="text-2xl font-playfair font-bold text-foreground">Vishesham</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              At Vishesham, we believe in capturing life's most precious moments with artistic vision and technical excellence that speaks to your soul.
            </p>
            <div className="flex items-center justify-center md:justify-start text-muted-foreground">
              <Heart className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm">Made with love for photography</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center text-muted-foreground">
                <Mail className="w-4 h-4 text-primary mr-3" />
                <span>hello@vishesham.photography</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground">
                <Phone className="w-4 h-4 text-primary mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mr-3" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div><a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">Home</a></div>
              <div><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-smooth">Portfolio</a></div>
              <div><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About</a></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Vishesham. All rights reserved. | Crafted with passion for visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
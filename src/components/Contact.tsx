import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Camera, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    date: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      date: ''
    });
    setIsSubmitting(false);
    
    // You would typically send the data to your backend here
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch with the Vishesham team and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-3 text-primary-glow" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-glow/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-white/80">hello@vishesham.photography</p>
                    <p className="text-white/80">bookings@vishesham.photography</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-glow/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                    <p className="text-white/80">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-glow/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Visit Our Studio</h4>
                    <p className="text-white/80">123 Photography Lane</p>
                    <p className="text-white/80">Creative District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-glow/20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Business Hours</h4>
                    <p className="text-white/80">Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-white/80">Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <Heart className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <Camera className="w-8 h-8 text-primary-glow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/80 text-sm">Photos Captured</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
                Book a Session
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-smooth"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-smooth"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-smooth"
                      placeholder="Enter your phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-white font-medium mb-2">
                      Service Type *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-smooth"
                    >
                      <option value="" className="text-gray-800">Select a service</option>
                      <option value="wedding" className="text-gray-800">Wedding Photography</option>
                      <option value="portrait" className="text-gray-800">Portrait Session</option>
                      <option value="event" className="text-gray-800">Event Photography</option>
                      <option value="commercial" className="text-gray-800">Commercial Work</option>
                      <option value="other" className="text-gray-800">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-white font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Tell us about your vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow focus:border-transparent transition-smooth resize-none"
                    placeholder="Tell us about your vision! At Vishesham, we love hearing about your ideas, style preferences, and any special requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-animated bg-white hover:bg-white/90 text-primary font-medium py-3 px-6 rounded-lg shadow-glow transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
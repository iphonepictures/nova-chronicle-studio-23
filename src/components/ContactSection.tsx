import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Transmitted",
      description: "Your message has been sent through the quantum network. We'll respond within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      title: 'Quantum Communications',
      description: 'Secure, instantaneous messaging through quantum entanglement protocols.',
      contact: 'quantum@nova.future',
      status: 'Active',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Neural Link',
      description: 'Direct brain-to-brain communication for urgent technical matters.',
      contact: 'neural@nova.future',
      status: 'Beta',
      gradient: 'from-secondary to-accent'
    },
    {
      title: 'Holographic Office',
      description: 'Schedule a meeting in our virtual holographic workspace.',
      contact: 'holo@nova.future',
      status: 'Available',
      gradient: 'from-accent to-primary'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-primary text-primary-foreground';
      case 'Beta': return 'bg-accent text-accent-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-card/10 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-foreground">CONTACT</span>{' '}
            <span className="hologram-text">THE FUTURE</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary animate-glow-pulse"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to step into tomorrow? Connect with us through our advanced communication channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="cyber-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="text-primary">TRANSMISSION</span> PORTAL
              </CardTitle>
              <div className="h-0.5 w-full bg-gradient-to-r from-primary to-secondary animate-glow-pulse rounded-full"></div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary uppercase tracking-wide">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="cyber-border bg-input/50 focus:bg-input/80 transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary uppercase tracking-wide">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="cyber-border bg-input/50 focus:bg-input/80 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary uppercase tracking-wide">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="cyber-border bg-input/50 focus:bg-input/80 transition-all duration-300"
                    placeholder="Your organization"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary uppercase tracking-wide">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="cyber-border bg-input/50 focus:bg-input/80 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary uppercase tracking-wide">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="cyber-border bg-input/50 focus:bg-input/80 transition-all duration-300 min-h-32"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full cyber-button py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  TRANSMIT MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-secondary">COMMUNICATION</span> CHANNELS
              </h3>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="cyber-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <Badge className={getStatusColor(method.status)}>
                          {method.status}
                        </Badge>
                      </div>

                      <div className={`h-0.5 w-full bg-gradient-to-r ${method.gradient} animate-glow-pulse rounded-full`}></div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {method.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <code className="text-sm text-primary font-mono">{method.contact}</code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="cyber-border bg-card/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-lg font-bold text-accent">RESPONSE PROTOCOL</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>🚀 Standard inquiries: 24 hours</p>
                  <p>⚡ Priority support: 2 hours</p>
                  <p>🔮 Emergency neural link: Instant</p>
                </div>
                <div className="pt-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    Available 24/7/365
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
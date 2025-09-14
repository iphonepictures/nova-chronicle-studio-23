import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductsSection = () => {
  const products = [
    {
      title: 'QuantumOS',
      description: 'Next-generation operating system powered by quantum computing algorithms for unprecedented performance.',
      features: ['Quantum Processing', 'Neural Interface', 'Holographic Display'],
      price: 'Enterprise',
      status: 'Available',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'CyberShield Pro',
      description: 'Advanced AI-driven cybersecurity solution that adapts and evolves to counter emerging threats.',
      features: ['AI Threat Detection', 'Real-time Adaptation', 'Zero-day Protection'],
      price: '$299/mo',
      status: 'Popular',
      gradient: 'from-secondary to-accent'
    },
    {
      title: 'Neural Network Suite',
      description: 'Complete toolkit for building, training, and deploying advanced machine learning models.',
      features: ['AutoML', 'GPU Acceleration', 'Cloud Integration'],
      price: '$199/mo',
      status: 'New',
      gradient: 'from-accent to-primary'
    },
    {
      title: 'HoloConnect',
      description: 'Revolutionary communication platform using holographic projection and spatial audio.',
      features: ['3D Holography', 'Spatial Audio', 'Global Reach'],
      price: '$99/mo',
      status: 'Beta',
      gradient: 'from-primary via-secondary to-accent'
    },
    {
      title: 'DataMind Analytics',
      description: 'Quantum-enhanced data analytics platform for processing massive datasets in real-time.',
      features: ['Quantum Analysis', 'Real-time Processing', 'Predictive Models'],
      price: '$399/mo',
      status: 'Available',
      gradient: 'from-secondary to-primary'
    },
    {
      title: 'BioSync Interface',
      description: 'Brain-computer interface technology for seamless human-machine interaction.',
      features: ['Neural Integration', 'Thought Control', 'Biometric Security'],
      price: 'Contact',
      status: 'R&D',
      gradient: 'from-accent via-primary to-secondary'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-secondary text-secondary-foreground';
      case 'New': return 'bg-primary text-primary-foreground';
      case 'Beta': return 'bg-accent text-accent-foreground';
      case 'R&D': return 'bg-muted text-muted-foreground';
      default: return 'bg-card text-card-foreground border border-primary';
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-foreground">FUTURE</span>{' '}
            <span className="hologram-text">PRODUCTS</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary animate-glow-pulse"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge solutions that redefine what's possible in technology and innovation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.title} 
              className="cyber-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <Badge className={getStatusColor(product.status)}>
                    {product.status}
                  </Badge>
                </div>
                
                {/* Gradient line */}
                <div className={`h-1 w-full bg-gradient-to-r ${product.gradient} animate-glow-pulse rounded-full`}></div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-secondary uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">
                      Pricing
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {product.price}
                    </div>
                  </div>
                  
                  <Button 
                    className="cyber-button hover:scale-105 transition-all duration-300"
                    disabled={product.status === 'R&D'}
                  >
                    {product.status === 'R&D' ? 'Coming Soon' : 'Learn More'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <div className="cyber-border bg-card/30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-secondary">CUSTOM</span> SOLUTIONS
            </h3>
            <p className="text-muted-foreground mb-6">
              Need something unique? Our team can create bespoke solutions tailored to your specific requirements.
            </p>
            <Button 
              size="lg"
              className="cyber-button px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
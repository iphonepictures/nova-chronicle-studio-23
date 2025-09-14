import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    { name: 'AI & Machine Learning', level: 95 },
    { name: 'Quantum Computing', level: 88 },
    { name: 'Blockchain Technology', level: 92 },
    { name: 'Cybersecurity', level: 90 },
    { name: 'Neural Networks', level: 87 },
    { name: 'Data Science', level: 93 }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-bold">
            <span className="text-foreground">ABOUT</span>{' '}
            <span className="hologram-text">THE FUTURE</span>
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-primary to-secondary animate-glow-pulse"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pioneering tomorrow's technology today with cutting-edge innovations and boundless possibilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <div className="space-y-8">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <div className="text-4xl font-bold hologram-text">NX</div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Nova X Industries</h3>
                    <p className="text-secondary">Chief Technology Officer</p>
                    <p className="text-muted-foreground">Future Tech Specialist</p>
                  </div>

                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      Leading the charge in next-generation technology development with over a decade 
                      of experience in artificial intelligence, quantum computing, and advanced cybernetics.
                    </p>
                    <p>
                      <span className="text-primary">Mission:</span> To bridge the gap between today's 
                      limitations and tomorrow's infinite possibilities through revolutionary innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                <span className="text-secondary">CORE</span> COMPETENCIES
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="cyber-border bg-muted/20 h-3 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary animate-glow-pulse transition-all duration-1000 ease-out rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <Card className="cyber-border bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold text-accent mb-4">ACHIEVEMENTS</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-xs text-muted-foreground uppercase">Projects</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-secondary">10+</div>
                    <div className="text-xs text-muted-foreground uppercase">Years</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-accent">25+</div>
                    <div className="text-xs text-muted-foreground uppercase">Patents</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground uppercase">Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
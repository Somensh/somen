import { useState } from 'react';
import { ArrowLeft, ExternalLink, Github, Code, Palette, Monitor, Mail, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const profileImage = '/lovable-uploads/0cedb3d3-5ebb-4097-b682-c4116f1c2e32.png';

const PortfolioProject = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const technologies = [
    { name: 'HTML5', icon: Code },
    { name: 'CSS3', icon: Palette },
    { name: 'JavaScript', icon: Code }
  ];

  const features = [
    'Responsive Design across all devices',
    'Smooth scrolling navigation',
    'Contact form with EmailJS integration',
    'Interactive project showcase modals',
    'Dark theme with neon accents',
    'Optimized performance and SEO'
  ];

  const challenges = [
    {
      title: 'Cross-browser Compatibility',
      description: 'Ensuring consistent behavior across different browsers while maintaining modern design elements.'
    },
    {
      title: 'Performance Optimization',
      description: 'Balancing visual appeal with fast loading times and smooth animations.'
    },
    {
      title: 'Mobile-first Approach',
      description: 'Creating a seamless experience from mobile to desktop without compromising functionality.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold">
                    <span className="gradient-text">Personal Portfolio</span>
                    <br />
                    <span className="text-foreground">Website</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground">
                    Built using HTML5, CSS3, and JavaScript
                  </p>
                  
                  <p className="text-lg text-muted-foreground/80 max-w-lg">
                    Showcasing my skills through a fully responsive, animated, dark-themed portfolio site designed to impress recruiters and collaborators.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <Github size={20} />
                    Source Code
                  </a>
                  <Link 
                    to="/" 
                    className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft size={20} />
                    Back to Portfolio
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={profileImage} 
                      alt="Somen Sharma" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Project */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 gradient-text">About the Project</h2>
            
            <div className="floating-card space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This personal portfolio website serves as a comprehensive showcase of my skills, experience, and projects. 
                Designed with recruiters and potential collaborators in mind, it demonstrates my proficiency in front-end 
                development using core web technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Built entirely from scratch using semantic HTML5, custom CSS3, and vanilla JavaScript—no external libraries 
                or frameworks were used. This approach showcases my understanding of fundamental web technologies and ability 
                to create sophisticated interfaces without dependencies.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 rounded-lg bg-primary/10">
                  <Monitor className="mx-auto mb-4 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">Optimized for all devices</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-secondary/10">
                  <Code className="mx-auto mb-4 text-secondary" size={32} />
                  <h3 className="font-semibold mb-2">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">Semantic and maintainable</p>
                </div>
                
                <div className="text-center p-6 rounded-lg bg-accent/10">
                  <Star className="mx-auto mb-4 text-accent" size={32} />
                  <h3 className="font-semibold mb-2">User Experience</h3>
                  <p className="text-sm text-muted-foreground">Intuitive and engaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Technologies Used</h2>
            
            <div className="floating-card">
              <div className="flex flex-wrap gap-4 justify-center">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 px-6 py-3 bg-background rounded-full border border-border hover:border-primary/50 transition-colors">
                    <tech.icon size={20} className="text-primary" />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Pure vanilla technologies - no frameworks or libraries used, demonstrating 
                  fundamental web development skills and clean code practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Key Features</h2>
            
            <div className="floating-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Visual Showcase</h2>
            
            <div className="floating-card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item, index) => (
                  <div key={index} className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                    <div className="text-center">
                      <Monitor className="mx-auto mb-2 text-muted-foreground" size={32} />
                      <p className="text-sm text-muted-foreground">Screenshot {item}</p>
                      <p className="text-xs text-muted-foreground/60">Coming Soon</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Insights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Challenges & Learnings</h2>
            
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="floating-card">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
            
            <div className="floating-card mt-8">
              <h3 className="text-xl font-semibold mb-4">What I Learned</h3>
              <p className="text-muted-foreground leading-relaxed">
                This project reinforced my understanding of core web technologies and the importance of writing 
                clean, semantic code. I gained valuable experience in creating smooth animations, implementing 
                responsive design patterns, and optimizing for performance across different devices and browsers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help bring your next project to life.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/#contact" 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                Get in Touch
              </Link>
              <Link 
                to="/" 
                className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioProject;
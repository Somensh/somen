import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Github, CheckCircle, Lightbulb, Users, ShoppingCart, Smartphone, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import mockup images
import homepageImage from '@/assets/ecommerce-homepage.jpg';
import productsImage from '@/assets/ecommerce-products.jpg';
import detailImage from '@/assets/ecommerce-detail.jpg';
import cartImage from '@/assets/ecommerce-cart.jpg';
import checkoutImage from '@/assets/ecommerce-checkout.jpg';
import mobileImage from '@/assets/ecommerce-mobile.jpg';

const ECommerceProject = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const technologies = [
    { name: 'Figma', icon: <Palette size={20} /> },
    { name: 'UI/UX Design', icon: <Users size={20} /> },
    { name: 'Prototyping', icon: <Smartphone size={20} /> },
    { name: 'User Research', icon: <Lightbulb size={20} /> }
  ];

  const features = [
    'User-Centered Design Approach',
    'Comprehensive User Research',
    'Interactive Prototypes',
    'Mobile-First Design',
    'Conversion Optimization',
    'Accessibility Compliance',
    'Modern UI Components',
    'Seamless Shopping Experience'
  ];

  const challenges = [
    {
      challenge: 'Complex User Journey Mapping',
      solution: 'Created detailed user personas and journey maps to understand customer pain points and optimize the shopping experience.'
    },
    {
      challenge: 'Mobile Commerce Optimization',
      solution: 'Designed mobile-first approach with touch-friendly interfaces and streamlined checkout process for better mobile conversion rates.'
    },
    {
      challenge: 'Information Architecture',
      solution: 'Restructured product categorization and search functionality to improve product discoverability and reduce cart abandonment.'
    }
  ];

  const mockupImages = [
    homepageImage,
    productsImage,
    detailImage,
    cartImage,
    checkoutImage,
    mobileImage
  ];

  const mockupTitles = [
    'Homepage Design',
    'Product Listing',
    'Product Details',
    'Shopping Cart',
    'Checkout Process',
    'Mobile Views'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                  E-Commerce UI/UX Redesign
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Complete UI/UX redesign of an e-commerce platform focusing on user experience 
                  and conversion optimization through modern design principles and user research.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a href="#mockups" className="flex items-center gap-2">
                      <Globe size={16} />
                      View Mockups
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Github size={16} />
                      Figma File
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <ShoppingCart size={120} className="text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                    This comprehensive e-commerce redesign project focused on creating a user-centered 
                    shopping experience that drives conversions and enhances customer satisfaction. 
                    Through extensive user research and modern design principles, I created a complete 
                    design system and interactive prototypes.
                  </p>
                  <p className="mb-4">
                    The project involved analyzing user behavior, identifying pain points in the existing 
                    shopping journey, and designing solutions that streamline the purchase process while 
                    maintaining visual appeal and brand consistency.
                  </p>
                  <p>
                    The result is a modern, accessible, and conversion-optimized e-commerce platform 
                    that provides an exceptional shopping experience across all devices.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Tools & Methods</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="text-primary">
                        {tech.icon}
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-muted-foreground">6 weeks</p>
                  </div>
                  <div>
                    <p className="font-medium">Role</p>
                    <p className="text-muted-foreground">UI/UX Designer</p>
                  </div>
                  <div>
                    <p className="font-medium">Status</p>
                    <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary rounded text-sm">
                      Design Complete
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">Platform</p>
                    <p className="text-muted-foreground">Web & Mobile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Mockups */}
      <section id="mockups" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Design Mockups</h2>
            
            {/* Main Mockup Display */}
            <div className="mb-8">
              <div className="aspect-video bg-background rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={mockupImages[selectedImage]} 
                  alt={mockupTitles[selectedImage]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Mockup Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {mockupImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-primary scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={mockupTitles[index]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium text-center px-2">
                      {mockupTitles[index]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Challenges & Solutions</h2>
            <div className="space-y-8">
              {challenges.map((item, index) => (
                <div key={index} className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Challenge: {item.challenge}
                  </h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium">Solution:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in My Design Process?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how I can help optimize your product's user experience and drive conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECommerceProject;
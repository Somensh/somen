import { useState, useEffect } from "react";
import {
  Code,
  Palette,
  Music,
  TrendingUp,
  Download,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
  ChevronDown,
  Menu,
  X,
  Github,
  Globe,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import CursorTrail from "../components/CursorTrail";
import { Chatbot } from "../components/Chatbot";
import { ThemeToggle } from "../components/ThemeToggle";
const profileImage =
  "/lovable-uploads/0cedb3d3-5ebb-4097-b682-c4116f1c2e32.png";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "services",
        "projects",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Somen_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "experience",
      label: "Experience",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "services",
      label: "Services",
    },
    {
      id: "projects",
      label: "Projects",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  const skills = [
    "C",
    "C++",
    "Python",
    "Java",
    "ASP.Net (C#)",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "MySQL/SQL",
    "Microsoft Office",
    "Tally Prime",
    "Adobe Acrobat",
    "WordPress",
    "VS Code",
    "Figma",
    "FL Studio",
    "Audacity",
  ];

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom sites using modern stacks & CMS",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Wireframes, mockups & user flows using Figma",
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Hip-hop beats for creators & platforms",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Brand visibility, content strategy & SEO",
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Built with HTML, CSS, JavaScript",
      tech: ["HTML5", "CSS3", "JavaScript"],
      status: "Live",
      fullDescription:
        "A comprehensive personal portfolio website showcasing my skills, projects, and experience. Built using modern web technologies with responsive design and smooth animations.",
      features: [
        "Responsive Design",
        "Smooth Scrolling",
        "Contact Form",
        "Project Gallery",
        "Skills Showcase",
      ],
      liveUrl: "/projects/portfolio",
      githubUrl: "#",
    },
    {
      title: "E-Commerce UI/UX Redesign",
      description: "Figma mockups with user-first approach",
      tech: ["Figma", "UI/UX", "Prototyping"],
      status: "Design",
      fullDescription:
        "Complete UI/UX redesign of an e-commerce platform focusing on user experience and conversion optimization.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing",
      ],
      liveUrl: "/projects/ecommerce",
      githubUrl: "#",
    },
    {
      title: "WordPress Website (Antokill LLP)",
      description: "Service listings with mobile-first design",
      tech: ["WordPress", "PHP", "MySQL"],
      status: "Live",
      fullDescription:
        "Professional business website for Antokill LLP with custom theme development and service showcase.",
      features: [
        "Custom Theme",
        "Mobile Responsive",
        "SEO Optimized",
        "Contact Forms",
        "Service Pages",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Hip-Hop Beats Production",
      description: "SoundCloud tracks with custom artwork",
      tech: ["FL Studio", "Audio Engineering"],
      status: "Published",
      fullDescription:
        "Original hip-hop instrumental tracks produced and published on SoundCloud with custom artwork design.",
      features: [
        "Beat Production",
        "Audio Mixing",
        "Mastering",
        "Artwork Design",
        "SoundCloud Publishing",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const experience = [
    {
      title: "Business Development Executive",
      company: "Ziqitza Health Care Ltd.",
      description: "Call handling, customer support, sales targets",
    },
    {
      title: "Website & Technology Development Intern",
      company: "NSL Technology",
      description: "Networking, databases, ASP.Net development, web hosting",
    },
    {
      title: "Computer Operator & Assistant",
      company: "Mallikarjuna Roadways",
      description: "Data entry, outbound calls, office support",
    },
    {
      title: "Service & Office Coordinator",
      company: "Antokill Pest Control LLP",
      description: "Scheduling, service logs, admin & inventory",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <CursorTrail />
      <Chatbot />
      <ThemeToggle />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Somen
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-4 hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <img
              src={profileImage}
              alt="Somen Sharma"
              className="profile-image mb-8 animate-float"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Somen Sharma</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl px-4 sm:px-0">
              Developer. Designer. Beatmaker. Marketer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="glow-button text-primary-foreground"
              >
                Explore My Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="mt-12 p-2 rounded-full hover:bg-muted transition-colors animate-bounce"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
              About Me
            </h2>

            <div className="floating-card animate-slide-up">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={profileImage}
                    alt="Somen Sharma"
                    className="w-full max-w-sm mx-auto rounded-2xl"
                  />
                </div>

                <div className="order-1 lg:order-2">
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm Somen Sharma, a Computer Applications graduate with a
                    strong foundation in full-stack web development, UI/UX
                    design, and IT support. With hands-on experience across
                    corporate and tech-driven roles, I specialize in bridging
                    business needs with creative digital solutions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-primary">
                      Educational Background
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-primary" size={20} />
                        <div>
                          <p className="font-medium">
                            Bachelor of Computer Applications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Yogoda Satsanga Mahavidyalaya, Ranchi
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-primary" size={20} />
                        <div>
                          <p className="font-medium">Intermediate</p>
                          <p className="text-sm text-muted-foreground">
                            Vivekananda Vidya Mandir School, Ranchi
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-primary" size={20} />
                        <div>
                          <p className="font-medium">Matriculation</p>
                          <p className="text-sm text-muted-foreground">
                            Vivekananda Vidya Mandir School, Ranchi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleResumeDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full hover:scale-105 transition-transform"
                  >
                    <Download size={18} />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Work Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="floating-card animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-primary" size={20} />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <p className="text-lg text-primary mb-2">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Skills & Technologies
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="floating-card">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    Programming
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "C",
                      "C++",
                      "Python",
                      "Java",
                      "ASP.Net (C#)",
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "Bootstrap",
                      "MySQL/SQL",
                    ].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-secondary">
                    Software
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Microsoft Office",
                      "Tally Prime",
                      "Adobe Acrobat",
                      "WordPress",
                      "VS Code",
                      "Figma",
                    ].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-accent">
                    Core Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full Stack Development",
                      "UI/UX Design",
                      "OOP",
                      "System Optimization",
                      "Code Debugging",
                    ].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            My Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Projects & Portfolio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="floating-card animate-slide-up relative group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Live"
                          ? "bg-primary/10 text-primary"
                          : project.status === "Design"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors self-start"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors self-start"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </button>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[1rem] flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 mb-4">{project.description}</p>
                    <div className="flex items-center justify-center gap-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <div className="flex items-center gap-2 text-white/90">
                          <Globe size={16} />
                          <span>View Demo</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-white/90">
                        <ExternalLink size={16} />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 gradient-text">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="floating-card">
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

                <div className="space-y-6">
                  <a
                    href="mailto:Somen.office546@gmail.com?subject=Portfolio Inquiry"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer group hover:scale-105"
                    aria-label="Send email to Somen Sharma"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        Email
                      </p>
                      <p className="text-muted-foreground">
                        Somen.office546@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919523840350"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer group hover:scale-105"
                    aria-label="Call Somen Sharma"
                  >
                    <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-secondary transition-colors">
                        Phone
                      </p>
                      <p className="text-muted-foreground">+91 9523840350</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/somen-sharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer group hover:scale-105"
                    aria-label="Visit Somen Sharma's LinkedIn profile"
                  >
                    <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Linkedin className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-accent transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-muted-foreground">
                        linkedin.com/in/somen-sharma
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Somen Sharma. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="mailto:Somen.office546@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+919523840350"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://linkedin.com/in/somen-sharma"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedProject.status === "Live"
                        ? "bg-primary/10 text-primary"
                        : selectedProject.status === "Design"
                        ? "bg-secondary/10 text-secondary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    {selectedProject.status}
                  </span>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Globe size={16} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground">
                  {selectedProject.fullDescription}
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <span key={index} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map(
                      (feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star size={16} className="text-primary" />
                          <span>{feature}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;


export const getChatResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Skills and Technologies
  if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('language')) {
    return "I'm proficient in multiple programming languages and technologies including:\n\n• Programming: C, C++, Python, Java, ASP.Net (C#), JavaScript\n• Web: HTML5, CSS3, Bootstrap, WordPress\n• Database: MySQL/SQL\n• Tools: VS Code, Figma, Microsoft Office, Tally Prime\n• Creative: FL Studio, Audacity for music production\n\nI specialize in full-stack development, UI/UX design, and system optimization!";
  }
  
  // Experience
  if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
    return "I have diverse experience across multiple roles:\n\n• Business Development Executive at Ziqitza Health Care Ltd.\n• Website & Technology Development Intern at NSL Technology\n• Computer Operator & Assistant at Mallikarjuna Roadways\n• Service & Office Coordinator at Antokill Pest Control LLP\n\nI've worked in both corporate and tech environments, gaining experience in customer support, web development, and office administration.";
  }
  
  // Projects
  if (message.includes('project') || message.includes('portfolio') || message.includes('work samples')) {
    return "Here are some of my key projects:\n\n• Personal Portfolio Website - Built with HTML, CSS, JavaScript\n• E-Commerce UI/UX Redesign - Figma mockups with user-first approach\n• WordPress Website for Antokill LLP - Service listings with mobile-first design\n• Hip-Hop Beats Production - Published on SoundCloud with custom artwork\n\nWould you like to know more about any specific project?";
  }
  
  // Education
  if (message.includes('education') || message.includes('degree') || message.includes('study') || message.includes('college')) {
    return "My educational background:\n\n• Bachelor of Computer Applications - Yogoda Satsanga Mahavidyalaya, Ranchi\n• Intermediate - Vivekananda Vidya Mandir School, Ranchi\n• Matriculation - Vivekananda Vidya Mandir School, Ranchi\n\nI have a strong foundation in computer science and applications!";
  }
  
  // Services
  if (message.includes('service') || message.includes('offer') || message.includes('help') || message.includes('do')) {
    return "I offer these services:\n\n• Website Development - Custom sites using modern stacks & CMS\n• UI/UX Design - Wireframes, mockups & user flows using Figma\n• Music Production - Hip-hop beats for creators & platforms\n• Digital Marketing - Brand visibility, content strategy & SEO\n\nI can help bring your digital ideas to life!";
  }
  
  // Contact
  if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('phone')) {
    return "You can reach me through:\n\n• Email: Somen.office546@gmail.com\n• Phone: +91 9523840350\n• LinkedIn: linkedin.com/in/somen-sharma\n\nI'm always open to discussing new opportunities and collaborations!";
  }
  
  // Resume
  if (message.includes('resume') || message.includes('cv') || message.includes('download')) {
    return "You can download my resume using the 'View Resume' button above, or I can help you navigate to different sections of my portfolio. My resume contains detailed information about my experience, skills, and achievements.";
  }
  
  // Greeting
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hello! Great to meet you! I'm here to help you learn about Somen's background, skills, and projects. What would you like to know about his experience?";
  }
  
  // Music/Creative
  if (message.includes('music') || message.includes('beat') || message.includes('creative') || message.includes('art')) {
    return "I'm passionate about music production! I create hip-hop beats using FL Studio and have published tracks on SoundCloud. I also design custom artwork for my music. This creative side complements my technical skills in web development and design.";
  }
  
  // Default response
  return "I'd be happy to help you learn more about Somen! You can ask me about:\n\n• His skills and technologies\n• Work experience and projects\n• Educational background\n• Services he offers\n• Contact information\n\nWhat interests you most?";
};

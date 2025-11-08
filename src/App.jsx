import React, { useState } from 'react';
import { Github, Linkedin, Instagram, ExternalLink, Menu, X,ArrowUpRight  } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const projects = [
//   {
//     title: "Weather App",
//     image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=800&q=80",
//     link: "https://github.com/yashaswini/weather-app", // update with your actual GitHub or deployment link
//     description:
//       "A React-based weather application that displays current weather details, temperature, and forecasts using OpenWeather API. Built with a modern UI using Tailwind CSS.",
//     tech: ["React", "Tailwind CSS", "OpenWeather API", "JavaScript"],
//   },
//   {
//     title: "Portfolio Website",
//     image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
//     link: "#",
//     description:
//       "My personal portfolio website showcasing my work, skills, and design journey as a front-end developer. Designed and developed from scratch with smooth animations and responsive layout.",
//     tech: ["React", "Tailwind CSS"],
//   },
//   {
//     title: "Coming Soon Project 🚧",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
//     link: "#",
//     description:
//       "A new exciting project is under development — stay tuned! I’m working on improving interactivity and scalability using modern frontend technologies.",
//     tech: ["Next.js", "TypeScript", "API Integration"],
//   },
// ];

  const skills = {
  'Frontend Development': [
    'HTML5', 
    'CSS3', 
    'JavaScript (ES6+)', 
    'React.js', 
    'Bootstrap', 
    'Tailwind CSS', 
    'Responsive Web Design'
  ],
  'Backend & Tools': [
    'Node.js (Basics)', 
    'SQL', 
    'MySQL', 
    'Git & GitHub', 
    'VS Code', 
    'AWS (Basics)'
  ],
  'CMS & Platforms': [
    'WordPress Development', 
    'Shopify', 
    'HubSpot CMS', 
    'SEO Optimization', 
    'Page Speed Optimization'
  ],
  'Additional Skills': [
    'Python (Basics)', 
    'Data Visualization (Power BI)', 
    'Problem Solving', 
    'Team Collaboration', 
    'Client Communication'
  ]
};

  const experience = [
  {
    company: 'Red Baton',
    role: 'Software Development Engineer I',
    period: 'Feb 2024 – Present | Bangalore',
    achievements: [
      'Developed and maintained responsive, SEO-optimized websites using WordPress, React.js, and JavaScript.',
      'Translated UI/UX designs from Figma into interactive and accessible web interfaces.',
      'Improved page speed and layout performance, resulting in better user engagement and search visibility.',
      'Collaborated closely with design and backend teams to ensure timely and high-quality project delivery.',
      'Handled multiple client website projects simultaneously using WordPress, Shopify, and HubSpot CMS.'
    ]
  },
  {
    company: 'WalnutFolks',
    role: 'Web Developer Intern',
    period: 'July 2023 – Dec 2023 | Bangalore',
    achievements: [
      'Developed responsive, user-friendly web pages aligned with client goals and brand identity.',
      'Enhanced UI/UX and improved navigation flow to increase engagement and conversion rates.',
      'Implemented SEO and performance optimization techniques for faster load times.',
      'Automated data extraction and processing from legacy systems using SQL and Perl scripts.'
    ]
  },
  {
    company: 'Adwitiyah',
    role: 'WordPress & AWS Intern',
    period: 'Aug 2022 – Nov 2022 | Bangalore',
    achievements: [
      'Designed and customized responsive WordPress websites tailored to client requirements.',
      'Explored core AWS services such as EC2, S3, and Route 53 for hosting and infrastructure management.',
      'Applied performance optimization, security best practices, and cloud deployment workflows.'
    ]
  }
];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              Yashaswini<span className="text-[#6E06F2]">D.</span>
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <button onClick={() => scrollToSection('home')} className="text-[#6E06F2] font-medium hover:text-[#5c04d0] transition">Home</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-[#6E06F2] transition">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-[#6E06F2] transition">Skills</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#6E06F2] transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#6E06F2] transition">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-900 text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-[#6E06F2] font-medium py-2">Home</button>
<button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-700 py-2">Experience</button>
        <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 py-2">Skills</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 py-2">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-[18px] mb-4 flex items-center gap-2">
             Hey, I'm Yashaswini 👋
            </p>
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
             <span className="text-[#6E06F2]">Frontend</span>
              <br />
              <span className="text-gray-900">Developer</span>
            </h2>
           <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed mb-6">
  I'm a passionate frontend developer with 1.5+ years of experience building responsive, SEO-friendly websites using React, JavaScript, and WordPress. I love creating clean, user-friendly interfaces and continuously learning modern web technologies and UI/UX design.
</p>

            <div className="flex gap-4">
              <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#6e06f2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#5c04d0] transition"
            >
              Get In Touch
            </button>
              {/* <button 
                onClick={() => scrollToSection('projects')}
                className="border-2 border-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition"
              >
                Browse Projects
              </button> */}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-[#6E06F2]/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            Projects<span className="text-[#6E06F2]">.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6E06F2] to-blue-600 opacity-20"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <a href={project.link} className="bg-white p-2 rounded-full shadow-lg hover:bg-[#6E06F2] hover:text-white transition">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    {project.title}
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#6E06F2] text-[#6E06F2] transition-all duration-300 group-hover:bg-[#6E06F2] group-hover:text-white">
    <ArrowUpRight size={16} strokeWidth={2.5} />
  </span>
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#6E06F2]/10 text-[#6E06F2] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            Experience<span className="text-[#6E06F2]">.</span>
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#6E06F2]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#6E06F2] mb-1">{exp.company}</h3>
                    <p className="text-xl text-gray-900 font-semibold">{exp.role}</p>
                  </div>
                  <span className="text-gray-600 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <span className="text-[#6E06F2] mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            Skills<span className="text-[#6E06F2]">.</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill, index) => (
                    <li key={index} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* About/Story Section */}
<section id="about" className="py-20 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-5xl font-bold mb-8">
      My Story<span className="text-[#6E06F2]">.</span>
    </h2>
    <div className="text-lg text-gray-700 space-y-6 max-w-8xl">
      <p>
        My journey as a <span className="text-[#6E06F2] font-semibold">frontend developer</span> began with a strong interest in crafting clean, user-friendly web experiences. 
        I started out by building responsive WordPress websites for clients across different domains.
      </p>

      <p>
        Working on diverse projects helped me strengthen my skills in <span className="text-[#6E06F2] font-semibold">HTML, CSS, and JavaScript</span>, 
        while understanding the importance of design consistency and SEO optimization.
      </p>

      <p>
        As I grew, I moved toward modern frameworks like <span className="text-[#6E06F2] font-semibold">React.js</span> and 
        <span className="text-[#6E06F2] font-semibold"> Tailwind CSS</span> to bring more interactivity and scalability to my work.
      </p>

      <p>
        At <span className="text-[#6E06F2] font-semibold">Red Baton</span>, I work on multiple website projects across WordPress, Shopify, and HubSpot, 
        collaborating with UI/UX designers to deliver seamless, high-performing digital solutions.
      </p>

      <p>
        Recognized with the <span className="text-[#6E06F2] font-semibold">Red Award</span> and <span className="text-[#6E06F2] font-semibold">Client Servicing Award</span>, 
        I continue to grow as a developer who blends creativity and technology to build impactful web experiences. 💜
      </p>
    </div>
  </div>
</section>

      {/* Contact Section with Footer */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                 Let’s Connect<span className="text-[#6E06F2]">.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-lg">
                 Have a project idea or just want to say hi? Feel free to reach out — I’m always open to discussing new opportunities, creative ideas, or collaborations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">yashudaya012339@gmail.com</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">+91-9008696651</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <footer>
        {/* Navbar Section */}
<nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-6">
  {/* Left - Navigation Links */}
  <div className="flex gap-8 items-center mb-6 md:mb-0">
      <button onClick={() => scrollToSection('home')} className="text-[#6E06F2] font-medium hover:text-[#5c04d0] transition">
        Home
      </button>
     <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-[#6E06F2] transition">Experience</button>
    <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-[#6E06F2] transition">Skills</button>
      <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#6E06F2] transition">
        About
      </button>
      <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#6E06F2] transition">
        Contact
      </button>
    </div>

                <div className="flex gap-8">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#6E06F2] transition">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/yashaswini-dayanand/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#6E06F2] transition">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Yashudaya2339" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#6E06F2] transition">
                  <Github size={24} />
                </a>
              </div>
  </nav>


  {/* Footer */}
          <div className="text-center p-8 border-t border-gray-200">
            <p className="text-gray-600">©2025 All Rights Reserved. Made with 💜 by Yashaswini</p>
          </div>
        </footer>  
      </div>
  );
}
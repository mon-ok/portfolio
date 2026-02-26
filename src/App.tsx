import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import ProjectCard from './components/projects/ProjectCard';
import { useTheme } from './hooks/useTheme';
import { projects } from './data/projects';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'; 
import TechStackIcon from './components/TechStackIcon';
import { techStack } from './data/techStack';
import profileImage from './assets/profile.jpg';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-navy-900 bg-[#faf8f5] dark:text-navy-50 text-gray-900">
      
      <div className="lg:hidden flex items-center justify-between p-6 sticky top-0 z-50 backdrop-blur-md bg-inherit border-b border-accent-gold/10">
        <span className="text-xl font-bold text-accent-gold font-serif">@MonRetuya</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <Sidebar 
        isOpen={isMobileMenuOpen} 
        theme={theme} 
        toggleTheme={toggleTheme}
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <main className="lg:ml-[280px] p-6 md:p-12 lg:p-16 font-mono">
        <div className="max-w-7xl mx-auto">
          <section id="hero" className="min-h-screen md:py-30 animate-in fade-in slide-in-from-bottom-4 duration-1000 flex flex-col-reverse md:flex-row items-start justify-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-serif">
                Want <span className="text-accent-gold">a Break</span> <br /> 
                From the <span className="text-yellow-600 italic">Ads?</span>
              </h1>
              <p className="text-lg md:text-xl dark:text-zinc-400 text-gray-500 max-w-2xl leading-relaxed mb-8 italic font-mono">
                No premium subscription here, but I do like to deliver premium content :3
              </p>
              <div className="border-l-2 dark:border-white border-navy-900 pl-6 py-2">
                <p className="text-xl md:text-2xl font-medium dark:text-zinc-100 text-gray-800 mb-2">
                  Hello! I'm
                <span className="text-accent-gold text-yellow-600"> Mon</span>.
                </p>
                <p className="text-lg dark:text-zinc-300 text-gray-600 max-w-xl leading-relaxed">
                  I'm a <span className="font-semibold text-yellow-600">Full-Stack developer</span> and aspiring <span className='text-yellow-600'>data guy!</span> 
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center md:items-end gap-4 mt-8 md:mt-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg" 
              />
              <div className="flex justify-center md:justify-end gap-4 mt-6">
                <a 
                  href="/path/to/your/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-yellow-600 dark:text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors shadow-md hover-bounce-slight"
                >
                  Resume
                </a>
                <a href="https://github.com/mon-ok" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors hover-bounce-slight">
                  <Github size={24} className="text-gray-700 dark:text-zinc-200" />
                </a>
                <a href="https://www.linkedin.com/in/mon-andrew-retuya-43477b2b5/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors hover-bounce-slight">
                  <Linkedin size={24} className="text-gray-700 dark:text-zinc-200" />
                </a>
                <a href="mailto:andyretuya13@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors hover-bounce-slight">
                  <Mail size={24} className="text-gray-700 dark:text-zinc-200" />
                </a>
              </div>
            </div>
          </section>

          <div className="h-px w-full dark:bg-white bg-navy-900" />

          <section id="experience" className="py-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold dark:text-navy-50 text-gray-900 tracking-tight">
                  Professional <span className="text-accent-gold">Journey</span>
                </h2>
                <p className="text-gray-500 dark:text-zinc-400 mt-2">The path from code to data insights.</p>
              </div>
              <div className="text-sm font-mono text-accent-gold border border-accent-gold/20 px-3 py-1 rounded-full bg-accent-gold/5">
                v1.0.00_stable
              </div>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent-gold/30 before:to-transparent">
              
              {/* Item 1: The Full-Stack Role */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-accent-gold bg-navy-900 text-accent-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-accent-gold/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-between mb-1">
                    <time className="font-mono text-sm text-accent-gold">2024 - Present</time>
                    <span className="text-xs font-bold px-2 py-1 rounded bg-accent-gold/10 text-accent-gold">Current</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">Freelance Software Developer</h3>
                  <p className="text-zinc-400 mb-4 font-medium">Self-employed</p>
                  <ul className="text-sm space-y-2 dark:text-zinc-300 text-gray-600 list-disc list-inside">
                    <li>Designed and developed high-converting landing pages that increased client traffic and engagement.</li>
                    <li>Built responsive, performance-optimized interfaces using TailwindCSS, HTML, JavaScript, React, and Vue.</li>
                    <li>Integrated Supabase for authentication, database management, and real-time features when needed.</li>
                    <li>Collaborated directly with clients to translate business goals into clean, scalable web solutions.</li>
                  </ul>
                </div>
              </div>

              {/* Item 2: The Data Guy Transition */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-500 bg-forest-900 text-zinc-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-zinc-400 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <time className="font-mono text-sm text-zinc-500">June 2025-December 2025</time>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">Data Analyst Intern</h3>
                  <p className="text-zinc-400 mb-4 font-medium">Xerox-Lexmark</p>
                  <ul className="text-sm space-y-2 dark:text-zinc-300 text-gray-600 list-disc list-inside">
                    <li>Automated internal workflows using Power Automate, reducing repetitive manual tasks and improving process efficiency.</li>
                    <li>Designed and deployed a Power App that replaced fragmented Excel-based processes with a streamlined, user-friendly interface.</li>
                    <li>Developed interactive Power BI dashboards utilizing DAX for advanced calculations, real-time reporting, and actionable insights.</li>
                    <li>Integrated Power Apps, Power Automate, Excel, and VBA into a cohesive end-to-end workflow system to enhance data accuracy and reporting speed.</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          <div className="h-px w-full dark:bg-white bg-navy-900" />

          {/* Tech Stack Section */}
          <section id="tech-stack" className="py-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Skills
                </span>
                <div className="h-px flex-grow bg-gradient-to-r from-accent-gold/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold dark:text-navy-50 text-gray-900 tracking-tight">
                My <span className="text-accent-gold">Stack</span>
              </h2>
              <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-xl">
                Technologies and tools I've worked with and continue to explore.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {techStack.map((tech) => (
                <TechStackIcon key={tech.name} name={tech.name} image={tech.image} />
              ))}
            </div>
          </section>

          <div className="h-px w-full dark:bg-white bg-navy-900" />

          {/* Header for Projects */}
          <div className="mb-12 mt-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Portfolio
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-accent-gold/30 to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold dark:text-navy-50 text-gray-900 tracking-tight">
              Featured <span className="text-accent-gold">Works</span>
            </h2>
            <p className="text-gray-500 dark:text-zinc-400 mt-2 max-w-xl">
              A collection of full-stack applications and data-driven insights I've built from the ground up.
            </p>
          </div>

          {/* Grid Container */}
          <section id="projects" className="grid grid-cols-12 gap-4 md:gap-6 pb-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </section>

          <section id="contact" className="py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-navy-50 text-gray-900">Get in Touch</h2>
            <p className="text-lg md:text-xl dark:text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-10">
              Have a <span className='text-yellow-600 font-bold italic'>project</span> in mind or <span className='text-yellow-600 font-bold italic'>just want to chat?</span> Feel free to reach out!
            </p>
            <div className="flex justify-center gap-8 mb-10">
              <a href="https://github.com/mon-ok" target="_blank" rel="noopener noreferrer">
                <Github size={32} className="text-gray-600 dark:text-zinc-400 hover:text-accent-gold transition-colors hover-bounce-slight" />
              </a>
              <a href="https://www.linkedin.com/in/mon-andrew-retuya-43477b2b5/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={32} className="text-gray-600 dark:text-zinc-400 hover:text-accent-gold transition-colors hover-bounce-slight " />
              </a>
              <a href="mailto:andyretuya13@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail size={32} className="text-gray-600 dark:text-zinc-400 hover:text-accent-gold transition-colors hover-bounce-slight" />
              </a>
            </div>
            <p className="text-md dark:text-zinc-400 text-gray-600">
              Email: <a href="mailto:your.email@example.com" className="text-accent-gold hover:underline">andyretuya13@gmail.com</a>
            </p>
          </section>
        </div>
      </main>

      <footer className="lg:ml-[280px] p-6 text-center text-gray-500 dark:text-zinc-400 text-sm border-t border-accent-gold/10">
        &copy; {new Date().getFullYear()} Designed and Developed by Mon Andrew Retuya
      </footer>
    </div>
  );
};

export default App;
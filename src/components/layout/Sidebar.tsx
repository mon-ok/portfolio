import React from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { projects } from '../../data/projects'; // Import projects data

interface SidebarProps {
  isOpen: boolean;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onClose: () => void; // Add onClose prop
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, theme, toggleTheme, onClose }) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose(); 
    }
  };

  return (
    <aside className={`
      fixed left-0 top-0 h-full w-70 p-8 border-r border-accent-gold/20 z-40
      transition-all duration-300 ease-in-out
      ${theme === 'dark' ? 'bg-navy-900' : 'bg-[#faf8f5]'}
      ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    `}>
      <div className="flex flex-col h-full">
        <div className="text-3xl font-bold text-accent-gold mb-12 font-mono">@MonRetuya</div>

        <nav className="grow space-y-8 font-mono overflow-y-auto pr-4">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-600">Explore</h3>
            <ul className="pl-4 space-y-3 text-sm dark:text-zinc-400 text-gray-800">
              <li className="hover:text-accent-gold cursor-pointer transition-colors" onClick={() => handleScrollTo('hero')}>Hero</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors" onClick={() => handleScrollTo('contact')}>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-600">Experience</h3>
            <ul className="pl-4 space-y-3 text-sm dark:text-zinc-400 text-gray-800">
              <li className="hover:text-accent-gold cursor-pointer transition-colors" onClick={() => handleScrollTo('experience')}>Professional Journey</li>
              <li className="hover:text-accent-gold cursor-pointer transition-colors" onClick={() => handleScrollTo('tech-stack')}>My Tech Stack</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-600">Projects</h3>
            <ul className="pl-4 space-y-3 text-sm dark:text-zinc-400 text-gray-800">
              {projects.map((project) => (
                <li key={project.id} className="hover:text-accent-gold cursor-pointer transition-colors" onClick={() => handleScrollTo(project.id)}>{project.title}</li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Moved theme toggle button outside nav */}
        <div className="mt-8"> {/* Added margin top for spacing */}
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-3 p-3 rounded-xl bg-navy-700/10 dark:bg-slate-800 hover:bg-navy-700/20 transition-colors w-full">
            {theme === 'dark' ? <Sun className="text-accent-amber" size={18}/> : <Moon size={18}/>}
            <span className="text-sm font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-auto pt-8 border-t border-accent-gold/10">
          <a 
            href="/path/to/your/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-yellow-600 dark:text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors shadow-md text-center hover-bounce-slight"
          >
            Resume
          </a>
          <div className="flex gap-4 justify-center"> {/* Centering social icons */}
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
      </div>
    </aside>
  );
};

export default Sidebar;
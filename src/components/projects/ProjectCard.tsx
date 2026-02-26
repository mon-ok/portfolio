import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../data/projects';

const ProjectCard: React.FC<Project> = ({ id, title, description, tech, gridSpan, imageUrl, link, github }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentCardRef = cardRef.current; 
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <div
      id={id}
      ref={cardRef}
      className={`
      ${gridSpan} group relative rounded-2xl p-6 overflow-hidden transition-all duration-500
      dark:bg-navy-900 bg-white border border-accent-gold/10 hover:border-accent-gold/40
      hover:shadow-[0_0_30px_-10px_rgba(212,165,116,0.15)] hover:scale-[1.02] hover:z-20
      transform-gpu
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
      transition-all duration-700 ease-out
    `}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50 z-0 transition-all duration-500 group-hover:blur-none group-hover:opacity-75 group-hover:scale-105" 
        />
      )}
      <div className="flex flex-col h-full relative z-10 transition-transform duration-500 group-hover:translate-y-[-0.5rem]">
        <h3 className="text-xl font-bold mb-2 group-hover:dark:text-navy-50 group-hover:text-gray-900 transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-4 line-clamp-3 group-hover:dark:text-navy-50 group-hover:text-gray-900">{description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map(t => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full dark:bg-navy-900/50 bg-gray-100 border border-accent-gold/5 italic dark:text-slate-200 text-gray-700">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github size={18} className="cursor-pointer group-hover:dark:text-navy-50 group-hover:text-gray-900" />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} className="cursor-pointer group-hover:dark:text-navy-50 group-hover:text-gray-900" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ProjectCard;
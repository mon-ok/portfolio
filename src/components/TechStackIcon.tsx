import React, { useRef, useEffect, useState } from 'react';

interface TechStackIconProps {
  name: string;
  image: string;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ name, image }) => {
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
        threshold: 0.8,
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
      ref={cardRef}
      className={`
      flex flex-col items-center p-4 bg-white/5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      transition-opacity transition-transform duration-1000 ease-in-out
    `}>
      <img
        src={`src/assets/tech/${image}`}
        alt={`${name} icon`}
        className="h-12 w-12 object-contain mb-2"
      />
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{name}</p>
    </div>
  );
};

export default TechStackIcon;
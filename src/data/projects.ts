export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  gridSpan: string; 
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Kirby-inspired Website',
    description: 'Crypto project web page with interactive 3D elements.',
    tech: ['React', 'Node.js', 'Next.js','TypeScript', 'Tailwind CSS', 'Three.js'],
    link: 'https://www.kirbymeme.com',
    github: 'https://github.com/mon-ok/3d-star-site',
    gridSpan: 'col-span-12 lg:col-span-8 lg:row-span-2', 
    imageUrl: 'src/assets/projects/kirby.png',
  },
  {
    id: '5',
    title: 'Yee Memecoin Website',
    description: 'Memecoin landing page with interactive elements.',
    tech: ['HTML', 'CSS', 'JavaScript'], 
    link: 'https://www.yeememe.site',
    github: 'https://github.com/mon-ok/yee',
    gridSpan: 'col-span-12 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-3',
    imageUrl: 'src/assets/projects/yeememe.png',
  },
  {
    id: '2',
    title: 'Crypto Creator Portfolio',
    description: 'Website portfolio for a Web3 content creator.',
    tech: ['PostgreSQL'],
    link: 'https://staticky.fun/',
    github: 'https://github.com/mon-ok/rodrigo_cc',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-1',
    imageUrl: 'src/assets/projects/staticky.png',
  },
  {
    id: '3',
    title: 'Pagsusi',
    description: 'Machine learning project that detects election anomalies in the Philippines.',
    tech: ['React', 'Tailwind CSS', 'Next.js', 'Python'],
    link: 'https://pagsusi-ten.vercel.app/',
    github: 'https://github.com/Dongkor/Pagsusi',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-1',
    imageUrl: 'src/assets/projects/pagsusi.png',
  },
  {
    id: '6',
    title: 'GibHub',
    description: 'Platform for interacting, viewing, and sending Gib-related content.',
    tech: ['React', 'Tailwind CSS', 'Supabase', 'Next.js'],
    link: 'https://gibhub.netlify.app/',
    github: 'https://github.com/mon-ok/GIB-Submission-WebApp',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-2',
    imageUrl: 'src/assets/projects/gibhub.png',
  },
  {
    id: '7',
    title: 'Productivity Analytics',
    description: 'Engagement tracking dashboard.',
    tech: ['Excel', 'Power BI', 'DAX'],
    link: '#',
    github: '#',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-1',
    imageUrl: 'src/assets/projects/powerbi.png',
  },
  {
    id: '8',
    title: 'KPI Analytics',
    description: 'KPI tracking dashboard for internal use.',
    tech: ['Excel', 'Power BI', 'DAX'],
    link: '#',
    github: '#',
    gridSpan: 'col-span-12 lg:col-span-4 lg:row-span-1',
    imageUrl: 'src/assets/projects/powerbi1.png',
  },
  {
    id: '4',
    title: 'Risk and Opportunity Tracker',
    description: 'Power App for tracking project risks and opportunities, replacing Excel-based processes with a streamlined interface.',
    tech: ['Excel', 'Power Apps', 'Power Automate'],
    link: '#',
    github: '#',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-1',
    imageUrl: 'src/assets/projects/powerapp.png',
  },
  {
    id: '9',
    title: 'Email Automation',
    description: 'Power Automate workflow that automates email notifications and follow-ups.',
    tech: ['Power Automate'],
    link: '#',
    github: '#',
    gridSpan: 'col-span-12 md:col-span-6 lg:col-span-4 lg:row-span-1',
    imageUrl: 'src/assets/projects/powerapp1.png',
  },
  {
    id: '10',
    title: 'TLE Tambayan',
    description: 'Learning management system for students.',
    tech: ['React', 'Tailwind CSS', 'Supabase', 'Next.js'],
    link: 'https://tle-tambayan-live.vercel.app/',
    github: 'https://github.com/Dongkor/tle-tambayan',
    gridSpan: 'col-span-12 lg:col-span-12 lg:row-span-1',
    imageUrl: 'src/assets/projects/tletambayan.png',
  },
];
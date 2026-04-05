export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  technologies: string[];
  imageUrl: string;
  screenshots: string[];
  githubUrl: string;
  liveUrl?: string;
  role: string;
  duration: string;
  highlights: string[];
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    slug: 'ailms',
    title: 'AILMS',
    subtitle: 'Inventory Management System',
    description:
      'A comprehensive web application designed to manage and track inventory inflow and outflow. The system simplifies stock-taking, updates levels in real-time, and generates reports.',
    longDescription: [
      'AILMS (AI-powered Logistics Management System) is a full-featured inventory management platform built to streamline warehouse operations for small-to-medium businesses.',
      'The application provides real-time tracking of stock levels, automated alerts for low inventory, and comprehensive reporting dashboards that help managers make data-driven decisions.',
      'Key features include barcode scanning integration, multi-warehouse support, role-based access control, and export functionality for accounting systems.',
    ],
    technologies: ['VueJs', 'Node.js', 'PostgreSQL', 'Bootstrap', 'Springboot', 'Docker', 'Github', 'Notion'],
    imageUrl: '/assets/imgs/ailms.png',
    screenshots: ['/assets/imgs/ailms.png'],
    githubUrl: 'https://github.com/Jomurice/DATN_AILMS_BE',
    role: 'Backend Developer',
    duration: '4 months',
    highlights: [
      'Built RESTful APIs handling 50+ endpoints',
      'Implemented real-time inventory tracking with WebSocket',
      'Designed normalized database schema with 20+ tables',
      'Containerized application with Docker for consistent deployment',
    ],
  },
  {
    id: 2,
    slug: 'portfolio',
    title: 'Portfolio Website',
    subtitle: 'Personal Portfolio',
    description:
      'A dynamic personal portfolio to showcase my skills, projects, and professional journey. Built with a focus on performance, modern design, and an engaging user experience.',
    longDescription: [
      'This portfolio website serves as a central hub for presenting my work, skills, and professional experience to potential employers and collaborators.',
      'The site features smooth theme transitions with a custom ripple animation, responsive design across all devices, and interactive elements that create an engaging browsing experience.',
      'Performance was a key focus — the site achieves near-perfect Lighthouse scores through code splitting, optimized assets, and efficient rendering strategies.',
    ],
    technologies: ['ReactJS', 'Tailwind', 'TypeScript', 'Vercel', 'Framer Motion'],
    imageUrl: '/assets/imgs/my-portfolio.png',
    screenshots: ['/assets/imgs/my-portfolio.png'],
    githubUrl: 'https://github.com/vippergod12/my-portfolio',
    liveUrl: 'https://tiendn.vercel.app/',
    role: 'Fullstack Developer',
    duration: '2 weeks',
    highlights: [
      'Custom theme switching with radial ripple animation',
      'Fully responsive design with mobile-first approach',
      'Smokey cursor effect for interactive UX',
      'Optimized for SEO and performance',
    ],
  },
  {
    id: 3,
    slug: 'mandilao',
    title: 'Mandilao',
    subtitle: 'Online Hot Pot Ordering',
    description:
      'Customize and order your perfect hot pot feast online. Choose your broth, pick your ingredients, and get the complete dining experience delivered to your door.',
    longDescription: [
      'Mandilao is an e-commerce platform that brings the Haidilao-style hot pot experience to customers at home through an intuitive online ordering system.',
      'Users can customize every aspect of their hot pot meal — from selecting broth bases and dipping sauces to choosing individual ingredients with real-time price calculation.',
      'The platform includes order management, delivery tracking, and a loyalty points system to encourage repeat customers.',
    ],
    technologies: ['Vue.js', 'Spring Boot', 'Java', 'MsSQL', 'Axios', 'Pinia', 'Github'],
    imageUrl: '/assets/imgs/mandilao.jpg',
    screenshots: ['/assets/imgs/mandilao.jpg'],
    githubUrl: '',
    role: 'Fullstack Developer',
    duration: '3 months',
    highlights: [
      'Dynamic menu builder with real-time price calculation',
      'Secure payment integration',
      'Admin dashboard for order and inventory management',
      'Responsive UI optimized for mobile ordering',
    ],
  },
];

export default PROJECTS_DATA;

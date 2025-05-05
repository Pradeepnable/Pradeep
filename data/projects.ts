export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and payment integration. Built with React, Node.js, and MongoDB.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/rahul/ecommerce-platform",
    featured: true
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A kanban-style task management application with drag and drop functionality, user authentication, and real-time updates.",
    image: "https://images.pexels.com/photos/6956894/pexels-photo-6956894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS", "React DnD"],
    demoUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/rahul/task-management",
    featured: true
  },
  {
    id: "real-time-chat",
    title: "Real-Time Chat Application",
    description: "A chat application with real-time messaging, user presence indicators, and message history. Built with Socket.io and React.",
    image: "https://images.pexels.com/photos/5053848/pexels-photo-5053848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Socket.io", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://chat-demo.example.com",
    githubUrl: "https://github.com/rahul/real-time-chat",
    featured: false
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A weather application showing current conditions and forecasts with interactive maps and location search functionality.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "TypeScript", "OpenWeather API", "Leaflet", "Tailwind CSS"],
    demoUrl: "https://weather-demo.example.com",
    githubUrl: "https://github.com/rahul/weather-dashboard",
    featured: false
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, commenting system, and user authentication. Built with Next.js and PostgreSQL.",
    image: "https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "NextAuth.js"],
    demoUrl: "https://blog-demo.example.com",
    githubUrl: "https://github.com/rahul/blog-platform",
    featured: true
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A fitness tracking application with workout logging, progress visualization, and goal setting. Includes user authentication and data visualization.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Tailwind CSS"],
    demoUrl: "https://fitness-demo.example.com",
    githubUrl: "https://github.com/rahul/fitness-tracker",
    featured: false
  }
];
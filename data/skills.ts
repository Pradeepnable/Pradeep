export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Redux", level: 75, category: "frontend" },
  { name: "Framer Motion", level: 70, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "REST API", level: 85, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  
  // Database
  { name: "MongoDB", level: 80, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Firebase", level: 70, category: "database" },
  
  // DevOps
  { name: "Git", level: 85, category: "devops" },
  { name: "Docker", level: 70, category: "devops" },
  { name: "AWS", level: 65, category: "devops" },
  { name: "CI/CD", level: 60, category: "devops" },
  
  // Other
  { name: "Testing", level: 75, category: "other" },
  { name: "UI/UX", level: 70, category: "other" },
  { name: "Agile", level: 80, category: "other" },
  { name: "Problem Solving", level: 90, category: "other" },
];

export const skillCategories = [
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "devops", name: "DevOps" },
  // { id: "other", name: "Other" },
];
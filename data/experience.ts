export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "company-a",
    company: "Tech Innovations",
    title: "Senior Frontend Developer",
    location: "San Francisco, CA",
    startDate: "January 2023",
    endDate: null, // Current position
    description: [
      "Lead frontend development for an e-commerce platform serving over 50,000 monthly users",
      "Implemented performance optimizations resulting in a 40% improvement in page load times",
      "Collaborated with design team to implement new features and improve UX",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Redux", "TailwindCSS"]
  },
  {
    id: "company-b",
    company: "WebSolutions Inc.",
    title: "Full-Stack Developer",
    location: "Remote",
    startDate: "June 2021",
    endDate: "December 2022",
    description: [
      "Developed and maintained full-stack applications for various clients",
      "Created RESTful APIs and integrated third-party services",
      "Implemented authentication systems and database schemas",
      "Collaborated in an agile team environment to deliver projects on time"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    id: "company-c",
    company: "StartupLaunch",
    title: "Junior Web Developer",
    location: "Boston, MA",
    startDate: "August 2020",
    endDate: "May 2021",
    description: [
      "Assisted in building responsive user interfaces for multiple web applications",
      "Contributed to backend development using Node.js and Express",
      "Participated in daily stand-ups and sprint planning",
      "Fixed bugs and implemented feature enhancements"
    ],
    technologies: ["JavaScript", "HTML/CSS", "Node.js", "MySQL"]
  }
];